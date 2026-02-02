import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "../db.js";

const anthropic = new Anthropic();

export async function generateShowNotes(args: { episode_id: string }) {
  // Fetch episode + transcript
  const { data: episode, error: epErr } = await supabase
    .from("episodes")
    .select("*")
    .eq("id", args.episode_id)
    .single();

  if (epErr) throw new Error(`Failed to get episode: ${epErr.message}`);

  const { data: transcript, error: txErr } = await supabase
    .from("transcripts")
    .select("full_text")
    .eq("episode_id", args.episode_id)
    .single();

  if (txErr) throw new Error(`No transcript found for this episode. Add a transcript first.`);

  const prompt = `You are a podcast producer for "Let's Vibe!" — a podcast about creativity in the age of AI, hosted by Seth Goldstein and Ian Rogers.

Given this transcript for Episode ${episode.number}: "${episode.title}", generate:

1. **Summary** (2-3 paragraphs, compelling description for the episode page)
2. **Chapters** (array of {time, title} — estimate timestamps based on topic flow, use format like "0:00", "5:30", etc.)
3. **Quotes** (4-6 most quotable lines from the transcript — exact quotes)
4. **Links** (any tools, projects, people, or resources mentioned — {label, url} where you can infer URLs)

Respond in JSON format:
{
  "summary": "...",
  "chapters": [{"time": "0:00", "title": "..."}],
  "quotes": ["..."],
  "links": [{"label": "...", "url": "..."}]
}

TRANSCRIPT:
${transcript.full_text.slice(0, 100000)}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const responseText = message.content[0].type === "text" ? message.content[0].text : "";

  // Parse JSON from response (handle markdown code blocks)
  const jsonMatch = responseText.match(/```json\s*([\s\S]*?)```/) || responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Failed to parse AI response as JSON");

  const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);

  // Write back to episode
  const { data: updated, error: updateErr } = await supabase
    .from("episodes")
    .update({
      description: parsed.summary,
      show_notes: parsed.summary,
      chapters: parsed.chapters,
      quotes: parsed.quotes,
      links: parsed.links,
    })
    .eq("id", args.episode_id)
    .select()
    .single();

  if (updateErr) throw new Error(`Failed to update episode: ${updateErr.message}`);

  return {
    episode_id: args.episode_id,
    summary: parsed.summary,
    chapters_count: parsed.chapters.length,
    quotes_count: parsed.quotes.length,
    links_count: parsed.links.length,
    message: "Show notes generated and saved to episode.",
    episode: updated,
  };
}

export const showNotesTools = [
  {
    name: "studio_generate_show_notes",
    description: "Read an episode's transcript from the DB, use Claude to generate summary, chapters, quotes, and links, then write them back to the episode record.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
      },
      required: ["episode_id"],
    },
  },
];

export async function handleShowNotesTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_generate_show_notes":
      return await generateShowNotes(args as Parameters<typeof generateShowNotes>[0]);
    default:
      throw new Error(`Unknown show-notes tool: ${name}`);
  }
}
