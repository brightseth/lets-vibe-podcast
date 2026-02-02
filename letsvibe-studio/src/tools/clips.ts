import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "../db.js";

const anthropic = new Anthropic();

export async function identifyClips(args: { episode_id: string; count?: number }) {
  const count = args.count || 5;

  const { data: episode, error: epErr } = await supabase
    .from("episodes")
    .select("number, title")
    .eq("id", args.episode_id)
    .single();

  if (epErr) throw new Error(`Failed to get episode: ${epErr.message}`);

  const { data: transcript, error: txErr } = await supabase
    .from("transcripts")
    .select("full_text")
    .eq("episode_id", args.episode_id)
    .single();

  if (txErr) throw new Error(`No transcript found. Add a transcript first.`);

  const prompt = `You are a social media producer for "Let's Vibe!" podcast — about creativity in the age of AI.

Analyze this transcript for Episode ${episode.number}: "${episode.title}" and identify the ${count} most viral-worthy clip moments.

For each clip, provide:
- **title**: Short punchy title for the clip
- **start_time**: Estimated start time in seconds
- **end_time**: Estimated end time in seconds (clips should be 30-90 seconds)
- **transcript_excerpt**: The exact quote or key passage
- **topic**: What the clip is about
- **virality_score**: 1-10 (10 = extremely shareable)
- **suggested_caption**: A caption for social media
- **platform**: Best platform for this clip (youtube-shorts, tiktok, twitter, instagram)

Respond as a JSON array:
[{"title": "...", "start_time": 0, "end_time": 60, "transcript_excerpt": "...", "topic": "...", "virality_score": 8.5, "suggested_caption": "...", "platform": "twitter"}]

TRANSCRIPT:
${transcript.full_text.slice(0, 100000)}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  const responseText = message.content[0].type === "text" ? message.content[0].text : "";
  const jsonMatch = responseText.match(/```json\s*([\s\S]*?)```/) || responseText.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("Failed to parse AI response");

  const clips = JSON.parse(jsonMatch[1] || jsonMatch[0]);

  // Insert clips
  const inserts = clips.map((clip: Record<string, unknown>) => ({
    episode_id: args.episode_id,
    title: clip.title,
    start_time: clip.start_time,
    end_time: clip.end_time,
    transcript_excerpt: clip.transcript_excerpt,
    topic: clip.topic,
    virality_score: clip.virality_score,
    suggested_caption: clip.suggested_caption,
    platform: clip.platform,
    status: "suggested",
  }));

  const { data, error } = await supabase.from("clips").insert(inserts).select();
  if (error) throw new Error(`Failed to insert clips: ${error.message}`);

  return { clips_created: data?.length || 0, clips: data };
}

export async function listClips(args: { episode_id?: string; status?: string }) {
  let query = supabase.from("clips").select("*").order("virality_score", { ascending: false });

  if (args.episode_id) query = query.eq("episode_id", args.episode_id);
  if (args.status) query = query.eq("status", args.status);

  const { data, error } = await query;
  if (error) throw new Error(`Failed to list clips: ${error.message}`);
  return data;
}

export async function updateClip(args: {
  clip_id: string;
  status?: string;
  title?: string;
  suggested_caption?: string;
  video_url?: string;
  twitter_url?: string;
  tiktok_url?: string;
}) {
  const { clip_id, ...updates } = args;
  const cleanUpdates = Object.fromEntries(
    Object.entries(updates).filter(([, v]) => v !== undefined)
  );

  const { data, error } = await supabase
    .from("clips")
    .update(cleanUpdates)
    .eq("id", clip_id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update clip: ${error.message}`);
  return data;
}

export const clipTools = [
  {
    name: "studio_identify_clips",
    description: "Analyze an episode's transcript with AI to identify viral clip moments. Inserts suggested clips into the DB.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
        count: { type: "number", description: "Number of clips to identify (default 5)" },
      },
      required: ["episode_id"],
    },
  },
  {
    name: "studio_list_clips",
    description: "List clips, optionally filtered by episode or status.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Filter by episode UUID" },
        status: { type: "string", enum: ["suggested", "approved", "exported", "published"] },
      },
    },
  },
  {
    name: "studio_update_clip",
    description: "Update a clip's status, caption, or URLs.",
    inputSchema: {
      type: "object" as const,
      properties: {
        clip_id: { type: "string", description: "Clip UUID" },
        status: { type: "string", enum: ["suggested", "approved", "exported", "published"] },
        title: { type: "string" },
        suggested_caption: { type: "string" },
        video_url: { type: "string" },
        twitter_url: { type: "string" },
        tiktok_url: { type: "string" },
      },
      required: ["clip_id"],
    },
  },
];

export async function handleClipTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_identify_clips":
      return await identifyClips(args as Parameters<typeof identifyClips>[0]);
    case "studio_list_clips":
      return await listClips(args as Parameters<typeof listClips>[0]);
    case "studio_update_clip":
      return await updateClip(args as Parameters<typeof updateClip>[0]);
    default:
      throw new Error(`Unknown clip tool: ${name}`);
  }
}
