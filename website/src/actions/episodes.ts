"use server";

import { getCurrentEditor } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Episode, EpisodeInsert, EpisodeUpdate, Chapter, EpisodeLink } from "@/types/episodes";

// Ensure user is an editor
async function requireEditor() {
  const editor = await getCurrentEditor();
  if (!editor) {
    throw new Error("Not authorized");
  }
  return editor;
}

// Get all episodes for admin
export async function getEpisodesAdmin(): Promise<Episode[]> {
  await requireEditor();

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

// Get single episode by ID
export async function getEpisodeAdmin(id: string): Promise<Episode | null> {
  await requireEditor();

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

// Get next episode number
export async function getNextEpisodeNumber(): Promise<number> {
  await requireEditor();

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("episodes")
    .select("number")
    .order("number", { ascending: false })
    .limit(1)
    .single();

  return (data?.number ?? 0) + 1;
}

// Create new episode
export async function createEpisode(episodeData: {
  number: number;
  slug: string;
  title: string;
  description?: string;
  status?: string;
  guest_name?: string;
  guest_handle?: string;
  guest_bio?: string;
  date?: string;
  duration?: string;
  spotify_url?: string;
  apple_url?: string;
  youtube_url?: string;
  show_notes?: string;
  topics?: string[];
  chapters?: Chapter[];
  links?: EpisodeLink[];
}): Promise<Episode> {
  await requireEditor();

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("episodes")
    .insert({
      number: episodeData.number,
      slug: episodeData.slug,
      title: episodeData.title,
      description: episodeData.description || null,
      status: episodeData.status || "draft",
      guest_name: episodeData.guest_name || null,
      guest_handle: episodeData.guest_handle || null,
      guest_bio: episodeData.guest_bio || null,
      date: episodeData.date || null,
      duration: episodeData.duration || null,
      spotify_url: episodeData.spotify_url || null,
      apple_url: episodeData.apple_url || null,
      youtube_url: episodeData.youtube_url || null,
      show_notes: episodeData.show_notes || null,
      topics: episodeData.topics || [],
      chapters: episodeData.chapters || [],
      links: episodeData.links || [],
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating episode:", error);
    throw new Error("Failed to create episode");
  }

  return data as Episode;
}

// Update episode
export async function updateEpisode(
  id: string,
  updates: {
    slug?: string;
    title?: string;
    description?: string;
    status?: string;
    guest_name?: string;
    guest_handle?: string;
    guest_bio?: string;
    date?: string;
    duration?: string;
    spotify_url?: string;
    apple_url?: string;
    youtube_url?: string;
    show_notes?: string;
    topics?: string[];
    chapters?: Chapter[];
    links?: EpisodeLink[];
    recorded_at?: string;
    published_at?: string;
  }
): Promise<Episode> {
  await requireEditor();

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("episodes")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating episode:", error);
    throw new Error("Failed to update episode");
  }

  return data as Episode;
}

// Publish episode
export async function publishEpisode(id: string): Promise<Episode> {
  await requireEditor();

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("episodes")
    .update({
      status: "published",
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error publishing episode:", error);
    throw new Error("Failed to publish episode");
  }

  return data as Episode;
}

// Unpublish episode
export async function unpublishEpisode(id: string): Promise<Episode> {
  await requireEditor();

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("episodes")
    .update({
      status: "draft",
      published_at: null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error unpublishing episode:", error);
    throw new Error("Failed to unpublish episode");
  }

  return data as Episode;
}

// Delete episode
export async function deleteEpisode(id: string): Promise<{ success: boolean }> {
  await requireEditor();

  const supabase = createAdminClient();

  const { error } = await supabase
    .from("episodes")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting episode:", error);
    throw new Error("Failed to delete episode");
  }

  return { success: true };
}

