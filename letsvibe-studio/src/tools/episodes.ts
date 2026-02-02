import { supabase } from "../db.js";

export async function createEpisode(args: {
  number: number;
  title: string;
  slug: string;
  description?: string;
  guest_name?: string;
  guest_bio?: string;
  guest_twitter?: string;
  date?: string;
  duration?: string;
  status?: string;
}) {
  const { data, error } = await supabase
    .from("episodes")
    .insert({
      number: args.number,
      title: args.title,
      slug: args.slug,
      description: args.description,
      guest_name: args.guest_name,
      guest_bio: args.guest_bio,
      guest_twitter: args.guest_twitter,
      date: args.date,
      duration: args.duration,
      status: args.status || "draft",
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create episode: ${error.message}`);
  return data;
}

export async function listEpisodes(args: { status?: string }) {
  let query = supabase
    .from("episodes")
    .select("id, number, title, slug, date, duration, status, guest_name, spotify_url, apple_url, youtube_url, published_at")
    .order("number", { ascending: false });

  if (args.status) {
    query = query.eq("status", args.status);
  }

  const { data, error } = await query;
  if (error) throw new Error(`Failed to list episodes: ${error.message}`);
  return data;
}

export async function getEpisode(args: { episode_id?: string; slug?: string }) {
  if (!args.episode_id && !args.slug) {
    throw new Error("Must provide either episode_id or slug");
  }

  let query = supabase.from("episodes").select("*");

  if (args.episode_id) {
    query = query.eq("id", args.episode_id);
  } else {
    query = query.eq("slug", args.slug!);
  }

  const { data: episode, error } = await query.single();
  if (error) throw new Error(`Failed to get episode: ${error.message}`);

  // Fetch related data
  const [transcriptRes, clipsRes, socialRes] = await Promise.all([
    supabase.from("transcripts").select("*").eq("episode_id", episode.id).maybeSingle(),
    supabase.from("clips").select("*").eq("episode_id", episode.id).order("start_time"),
    supabase.from("social_posts").select("*").eq("episode_id", episode.id).order("created_at", { ascending: false }),
  ]);

  return {
    ...episode,
    transcript: transcriptRes.data,
    clips: clipsRes.data || [],
    social_posts: socialRes.data || [],
  };
}

export async function updateEpisode(args: {
  episode_id: string;
  title?: string;
  slug?: string;
  description?: string;
  guest_name?: string;
  guest_bio?: string;
  guest_twitter?: string;
  date?: string;
  duration?: string;
  status?: string;
  spotify_url?: string;
  apple_url?: string;
  youtube_url?: string;
  show_notes?: string;
  show_notes_html?: string;
  chapters?: unknown[];
  quotes?: string[];
  links?: unknown[];
}) {
  const { episode_id, ...updates } = args;

  // Remove undefined values
  const cleanUpdates = Object.fromEntries(
    Object.entries(updates).filter(([, v]) => v !== undefined)
  );

  if (cleanUpdates.status === "published" && !cleanUpdates.published_at) {
    (cleanUpdates as Record<string, unknown>).published_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from("episodes")
    .update(cleanUpdates)
    .eq("id", episode_id)
    .select()
    .single();

  if (error) throw new Error(`Failed to update episode: ${error.message}`);
  return data;
}

// Tool definitions for MCP registration
export const episodeTools = [
  {
    name: "studio_create_episode",
    description: "Create a new podcast episode. Returns the created episode with its ID.",
    inputSchema: {
      type: "object" as const,
      properties: {
        number: { type: "number", description: "Episode number" },
        title: { type: "string", description: "Episode title" },
        slug: { type: "string", description: "URL slug (e.g. 'the-netscape-moment')" },
        description: { type: "string", description: "Episode description" },
        guest_name: { type: "string", description: "Guest name" },
        guest_bio: { type: "string", description: "Guest bio" },
        guest_twitter: { type: "string", description: "Guest Twitter handle" },
        date: { type: "string", description: "Display date (e.g. 'January 30, 2026')" },
        duration: { type: "string", description: "Display duration (e.g. '52 min')" },
        status: { type: "string", enum: ["draft", "recorded", "editing", "published"], description: "Episode status" },
      },
      required: ["number", "title", "slug"],
    },
  },
  {
    name: "studio_list_episodes",
    description: "List all episodes, optionally filtered by status.",
    inputSchema: {
      type: "object" as const,
      properties: {
        status: { type: "string", enum: ["draft", "recorded", "editing", "published"], description: "Filter by status" },
      },
    },
  },
  {
    name: "studio_get_episode",
    description: "Get full episode details including transcript, clips, and social posts. Provide either episode_id or slug.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID" },
        slug: { type: "string", description: "Episode URL slug" },
      },
    },
  },
  {
    name: "studio_update_episode",
    description: "Update episode fields. Use to change status, add URLs, update show notes, etc.",
    inputSchema: {
      type: "object" as const,
      properties: {
        episode_id: { type: "string", description: "Episode UUID (required)" },
        title: { type: "string" },
        slug: { type: "string" },
        description: { type: "string" },
        guest_name: { type: "string" },
        guest_bio: { type: "string" },
        guest_twitter: { type: "string" },
        date: { type: "string" },
        duration: { type: "string" },
        status: { type: "string", enum: ["draft", "recorded", "editing", "published"] },
        spotify_url: { type: "string" },
        apple_url: { type: "string" },
        youtube_url: { type: "string" },
        show_notes: { type: "string" },
        show_notes_html: { type: "string" },
        chapters: { type: "array", items: { type: "object" }, description: "Array of {time, title} objects" },
        quotes: { type: "array", items: { type: "string" } },
        links: { type: "array", items: { type: "object" }, description: "Array of {label, url} objects" },
      },
      required: ["episode_id"],
    },
  },
];

export async function handleEpisodeTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_create_episode":
      return await createEpisode(args as Parameters<typeof createEpisode>[0]);
    case "studio_list_episodes":
      return await listEpisodes(args as Parameters<typeof listEpisodes>[0]);
    case "studio_get_episode":
      return await getEpisode(args as Parameters<typeof getEpisode>[0]);
    case "studio_update_episode":
      return await updateEpisode(args as Parameters<typeof updateEpisode>[0]);
    default:
      throw new Error(`Unknown episode tool: ${name}`);
  }
}
