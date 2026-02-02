import Anthropic from "@anthropic-ai/sdk";
import { supabase } from "../db.js";

const anthropic = new Anthropic();

export async function draftSocialPost(args: {
  episode_id: string;
  platform: string;
  post_type?: string;
  clip_id?: string;
  instructions?: string;
}) {
  const { data: episode, error: epErr } = await supabase
    .from("episodes")
    .select("*")
    .eq("id", args.episode_id)
    .single();

  if (epErr) throw new Error(`Failed to get episode: ${epErr.message}`);

  let clipContext = "";
  if (args.clip_id) {
    const { data: clip } = await supabase
      .from("clips")
      .select("*")
      .eq("id", args.clip_id)
      .single();
    if (clip) {
      clipContext = `\n\nCLIP CONTEXT:\nTitle: ${clip.title}\nExcerpt: ${clip.transcript_excerpt}\nCaption suggestion: ${clip.suggested_caption}`;
    }
  }

  const platformGuidance: Record<string, string> = {
    x: "Twitter/X: Max 280 chars per tweet. For threads, use numbered tweets. Casual, punchy, use line breaks. No hashtags unless truly relevant.",
    farcaster: "Farcaster: Similar to Twitter but for crypto/web3 audience. Can be slightly longer. Community-oriented.",
    youtube: "YouTube: Description for episode upload. Include timestamps, links, guest info. SEO-friendly.",
    instagram: "Instagram: Caption for post or reel. Use line breaks, be conversational, 3-5 relevant hashtags max.",
    tiktok: "TikTok: Short caption for video clip. Hook in first line. Trending hashtags ok.",
  };

  const postTypeGuidance: Record<string, string> = {
    post: "Single post",
    thread: "Thread of 3-5 connected tweets/posts",
    announcement: "Episode announcement — include listen links",
    clip: "Post promoting a specific clip",
    quote: "Quote card — pull a powerful quote",
  };

  const prompt = `You are the social media voice for "Let's Vibe!" podcast — about creativity in the age of AI, hosted by Seth Goldstein and Ian Rogers. Tone: warm, smart, not corporate. Two 50-somethings who are genuinely excited about building.

Write a ${postTypeGuidance[args.post_type || "post"] || "post"} for ${platformGuidance[args.platform] || args.platform}.

EPISODE: ${episode.number} — "${episode.title}"
Description: ${episode.description}
Guest: ${episode.guest_name}
${episode.spotify_url ? `Spotify: ${episode.spotify_url}` : ""}
${episode.apple_url ? `Apple: ${episode.apple_url}` : ""}
${episode.youtube_url ? `YouTube: ${episode.youtube_url}` : ""}
${episode.quotes ? `Quotes: ${JSON.stringify(episode.quotes)}` : ""}
${clipContext}
${args.instructions ? `\nADDITIONAL INSTRUCTIONS: ${args.instructions}` : ""}

${args.post_type === "thread" ? "Return as JSON array of strings, one per tweet." : "Return the post content as plain text."}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
  });

  const content = message.content[0].type === "text" ? message.content[0].text : "";

  const { data, error } = await supabase
    .from("social_posts")
    .insert({
      episode_id: args.episode_id,
      clip_id: args.clip_id || null,
      platform: args.platform,
      post_type: args.post_type || "post",
      content: content,
      status: "draft",
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to save social post: ${error.message}`);
  return data;
}

export async function listSocialPosts(args: {
  episode_id?: string;
  status?: string;
  platform?: string;
}) {
  let query = supabase.from("social_posts").select("*").order("created_at", { ascending: false });

  if (args.episode_id) query = query.eq("episode_id", args.episode_id);
  if (args.status) query = query.eq("status", args.status);
  if (args.platform) query = query.eq("platform", args.platform);

  const { data, error } = await query;
  if (error) throw new Error(`Failed to list social posts: ${error.message}`);
  return data;
}

export async function approveSocialPost(args: { post_id: string }) {
  const { data, error } = await supabase
    .from("social_posts")
    .update({ status: "approved" })
    .eq("id", args.post_id)
    .select()
    .single();

  if (error) throw new Error(`Failed to approve post: ${error.message}`);
  return data;
}

export const socialTools = [
  {
    name: "studio_draft_social_post",
    description: "Use AI to draft a social media post for an episode. Saves as draft in DB for review.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
        platform: { type: "string", enum: ["x", "farcaster", "youtube", "instagram", "tiktok"], description: "Target platform" },
        post_type: { type: "string", enum: ["post", "thread", "announcement", "clip", "quote"], description: "Type of post (default: post)" },
        clip_id: { type: "string", description: "Optional clip UUID to promote" },
        instructions: { type: "string", description: "Additional instructions for the AI" },
      },
      required: ["episode_id", "platform"],
    },
  },
  {
    name: "studio_list_social_posts",
    description: "List social posts, optionally filtered by episode, status, or platform.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string" },
        status: { type: "string", enum: ["draft", "approved", "scheduled", "posted", "failed"] },
        platform: { type: "string", enum: ["x", "farcaster", "youtube", "instagram", "tiktok"] },
      },
    },
  },
  {
    name: "studio_approve_social_post",
    description: "Approve a draft social post for publishing.",
    inputSchema: {
      type: "object" as const,
      properties: {
        post_id: { type: "string", description: "Social post UUID" },
      },
      required: ["post_id"],
    },
  },
];

export async function handleSocialTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_draft_social_post":
      return await draftSocialPost(args as Parameters<typeof draftSocialPost>[0]);
    case "studio_list_social_posts":
      return await listSocialPosts(args as Parameters<typeof listSocialPosts>[0]);
    case "studio_approve_social_post":
      return await approveSocialPost(args as Parameters<typeof approveSocialPost>[0]);
    default:
      throw new Error(`Unknown social tool: ${name}`);
  }
}
