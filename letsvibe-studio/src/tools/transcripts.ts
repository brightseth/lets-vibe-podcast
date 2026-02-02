import { supabase } from "../db.js";

export async function addTranscript(args: {
  episode_id: string;
  full_text: string;
  speaker_segments?: unknown[];
  source?: string;
}) {
  const wordCount = args.full_text.split(/\s+/).length;

  const { data, error } = await supabase
    .from("transcripts")
    .upsert({
      episode_id: args.episode_id,
      full_text: args.full_text,
      speaker_segments: args.speaker_segments || [],
      source: args.source || "manual",
      word_count: wordCount,
    }, { onConflict: "episode_id" })
    .select()
    .single();

  if (error) throw new Error(`Failed to add transcript: ${error.message}`);
  return { ...data, word_count: wordCount };
}

export async function searchTranscript(args: {
  episode_id: string;
  query: string;
  context_chars?: number;
}) {
  const { data: transcript, error } = await supabase
    .from("transcripts")
    .select("full_text, speaker_segments")
    .eq("episode_id", args.episode_id)
    .single();

  if (error) throw new Error(`Failed to get transcript: ${error.message}`);

  const text = transcript.full_text;
  const query = args.query.toLowerCase();
  const contextChars = args.context_chars || 200;
  const matches: { position: number; excerpt: string }[] = [];

  let pos = text.toLowerCase().indexOf(query);
  while (pos !== -1) {
    const start = Math.max(0, pos - contextChars);
    const end = Math.min(text.length, pos + query.length + contextChars);
    matches.push({
      position: pos,
      excerpt: text.slice(start, end),
    });
    pos = text.toLowerCase().indexOf(query, pos + 1);
  }

  return { query: args.query, match_count: matches.length, matches };
}

export const transcriptTools = [
  {
    name: "studio_add_transcript",
    description: "Add or replace a transcript for an episode. Upserts by episode_id. Automatically calculates word count.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
        full_text: { type: "string", description: "Full transcript text" },
        speaker_segments: {
          type: "array",
          items: { type: "object" },
          description: "Array of {speaker, start, end, text} segments",
        },
        source: { type: "string", enum: ["manual", "riverside", "descript"], description: "Transcript source" },
      },
      required: ["episode_id", "full_text"],
    },
  },
  {
    name: "studio_search_transcript",
    description: "Search within an episode's transcript. Returns matching excerpts with surrounding context.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
        query: { type: "string", description: "Search query" },
        context_chars: { type: "number", description: "Characters of context around each match (default 200)" },
      },
      required: ["episode_id", "query"],
    },
  },
];

export async function handleTranscriptTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_add_transcript":
      return await addTranscript(args as Parameters<typeof addTranscript>[0]);
    case "studio_search_transcript":
      return await searchTranscript(args as Parameters<typeof searchTranscript>[0]);
    default:
      throw new Error(`Unknown transcript tool: ${name}`);
  }
}
