import { createAdminClient } from "@/lib/supabase/admin";
import { episodes as staticEpisodes } from "@/data/episodes";
import type { Episode, EpisodeWithTranscript, Transcript, DisplayEpisode } from "@/types/episodes";
import { formatEpisodeForDisplay } from "@/types/episodes";

// Check if Supabase is configured
function isSupabaseConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}

// Convert static episode to DisplayEpisode format
function convertStaticToDisplay(ep: typeof staticEpisodes[number]): DisplayEpisode {
  return {
    number: ep.number,
    slug: ep.slug,
    title: ep.title,
    guest: ep.guest,
    guestHandle: ep.guestHandle,
    guestBio: ep.guestBio,
    description: ep.description,
    duration: ep.duration,
    date: ep.date,
    status: ep.status,
    topics: ep.topics,
    spotifyUrl: ep.spotifyUrl,
    appleUrl: ep.appleUrl,
    youtubeUrl: ep.youtubeUrl,
    showNotes: ep.showNotes,
    chapters: ep.chapters || [],
    links: ep.links || [],
    transcript: ep.transcript,
  };
}

// Get static episode by number (fallback)
function getStaticEpisode(number: number): DisplayEpisode | null {
  const ep = staticEpisodes.find((ep) => ep.number === number);
  return ep ? convertStaticToDisplay(ep) : null;
}

// Get all static episodes (fallback)
function getStaticEpisodes(): DisplayEpisode[] {
  return staticEpisodes.map(convertStaticToDisplay);
}

// Get the latest published episode
// NOTE: Using static data only until database is seeded
export async function getLatestEpisode(): Promise<Episode | null> {
  const live = staticEpisodes.filter((ep) => ep.status === 'live');
  if (live.length === 0) return null;
  const latest = live[live.length - 1];
  return {
    id: '',
    number: latest.number,
    slug: latest.slug,
    title: latest.title,
    description: latest.description,
    status: 'published',
    guest_name: latest.guest,
    guest_handle: latest.guestHandle,
    guest_bio: latest.guestBio,
    date: latest.date,
    duration: latest.duration,
    recorded_at: null,
    published_at: null,
    spotify_url: latest.spotifyUrl || null,
    apple_url: latest.appleUrl || null,
    youtube_url: latest.youtubeUrl || null,
    show_notes: latest.showNotes || null,
    topics: latest.topics,
    chapters: latest.chapters || [],
    links: latest.links || [],
    created_at: '',
    updated_at: '',
  };
}

// Get all episodes (published + upcoming for public display)
// NOTE: Using static data only until database is seeded
export async function getAllEpisodes(): Promise<DisplayEpisode[]> {
  return getStaticEpisodes();
}

// Get episode by number
// NOTE: Using static data only until database is seeded
export async function getEpisodeByNumber(number: number): Promise<DisplayEpisode | null> {
  return getStaticEpisode(number);
}

// Get episode with full transcript object
// NOTE: Using static data only until database is seeded
export async function getEpisodeWithTranscript(number: number): Promise<{
  episode: DisplayEpisode;
  transcript: Transcript | null;
} | null> {
  const ep = getStaticEpisode(number);
  if (!ep) return null;
  return { episode: ep, transcript: null };
}

// Get all episode numbers (for static params generation)
// NOTE: Using static data only until database is seeded
export async function getAllEpisodeNumbers(): Promise<number[]> {
  return staticEpisodes.map((ep) => ep.number);
}

// Admin functions (for CMS)
export async function getAllEpisodesAdmin(): Promise<Episode[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .order("number", { ascending: false });

  if (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }

  return data as Episode[];
}

export async function getEpisodeByIdAdmin(id: string): Promise<Episode | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data as Episode;
}
