"use server";

import { getCurrentEditor } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Transcript, SpeakerSegment } from "@/types/episodes";
import {
  parseRiversideTranscript,
  segmentsToFullText,
  validateRiversideJson,
  detectSpeakers,
} from "@/lib/transcript-parser";

// Ensure user is an editor
async function requireEditor() {
  const editor = await getCurrentEditor();
  if (!editor) {
    throw new Error("Not authorized");
  }
  return editor;
}

// Get transcript for episode
export async function getTranscript(episodeId: string): Promise<Transcript | null> {
  await requireEditor();

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("transcripts")
    .select("*")
    .eq("episode_id", episodeId)
    .single();

  if (error) {
    return null;
  }

  return data as Transcript;
}

// Parse and preview Riverside JSON (returns parsed data without saving)
export async function parseRiversideJson(
  jsonString: string,
  speakerMap?: Record<string, string>
): Promise<{
  success: boolean;
  segments?: SpeakerSegment[];
  fullText?: string;
  detectedSpeakers?: string[];
  error?: string;
}> {
  await requireEditor();

  try {
    const data = JSON.parse(jsonString);

    if (!validateRiversideJson(data)) {
      return {
        success: false,
        error: "Invalid Riverside JSON format. Expected { words: [...] }",
      };
    }

    const detectedSpeakers = detectSpeakers(data);
    const segments = parseRiversideTranscript(data, speakerMap);
    const fullText = segmentsToFullText(segments);

    return {
      success: true,
      segments,
      fullText,
      detectedSpeakers,
    };
  } catch (e) {
    return {
      success: false,
      error: e instanceof Error ? e.message : "Failed to parse JSON",
    };
  }
}

// Import transcript for episode
export async function importTranscript(
  episodeId: string,
  jsonString: string,
  speakerMap?: Record<string, string>
): Promise<Transcript> {
  await requireEditor();

  const supabase = createAdminClient();

  // Parse the JSON
  const data = JSON.parse(jsonString);

  if (!validateRiversideJson(data)) {
    throw new Error("Invalid Riverside JSON format");
  }

  const segments = parseRiversideTranscript(data, speakerMap);
  const fullText = segmentsToFullText(segments);

  // Upsert transcript (update if exists, insert if not)
  const { data: transcript, error } = await supabase
    .from("transcripts")
    .upsert(
      {
        episode_id: episodeId,
        full_text: fullText,
        speaker_segments: segments,
        source: "riverside",
        updated_at: new Date().toISOString(),
      },
      { onConflict: "episode_id" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error importing transcript:", error);
    throw new Error("Failed to import transcript");
  }

  return transcript as Transcript;
}

// Update transcript text directly
export async function updateTranscript(
  transcriptId: string,
  updates: {
    full_text?: string;
    speaker_segments?: SpeakerSegment[];
  }
): Promise<Transcript> {
  await requireEditor();

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("transcripts")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", transcriptId)
    .select()
    .single();

  if (error) {
    console.error("Error updating transcript:", error);
    throw new Error("Failed to update transcript");
  }

  return data as Transcript;
}

// Delete transcript
export async function deleteTranscript(transcriptId: string): Promise<{ success: boolean }> {
  await requireEditor();

  const supabase = createAdminClient();

  const { error } = await supabase
    .from("transcripts")
    .delete()
    .eq("id", transcriptId);

  if (error) {
    console.error("Error deleting transcript:", error);
    throw new Error("Failed to delete transcript");
  }

  return { success: true };
}
