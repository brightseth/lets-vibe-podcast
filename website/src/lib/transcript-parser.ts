import type { SpeakerSegment } from "@/types/episodes";

// Riverside JSON word format
interface RiversideWord {
  word: string;
  start: number;
  end: number;
  speaker: string;
}

interface RiversideTranscript {
  words: RiversideWord[];
}

// Speaker mapping for standardizing names
const DEFAULT_SPEAKER_MAP: Record<string, string> = {
  "Speaker 1": "Seth",
  "Speaker 2": "Ian",
  "speaker 1": "Seth",
  "speaker 2": "Ian",
};

/**
 * Parse Riverside JSON transcript into speaker segments
 * Merges consecutive words from the same speaker into segments
 */
export function parseRiversideTranscript(
  json: RiversideTranscript,
  speakerMap: Record<string, string> = DEFAULT_SPEAKER_MAP
): SpeakerSegment[] {
  const { words } = json;

  if (!words || words.length === 0) {
    return [];
  }

  const segments: SpeakerSegment[] = [];
  let currentSegment: SpeakerSegment | null = null;
  let currentWords: string[] = [];

  for (const word of words) {
    const speaker = speakerMap[word.speaker] || word.speaker;

    if (!currentSegment || currentSegment.speaker !== speaker) {
      // Save previous segment
      if (currentSegment) {
        currentSegment.text = currentWords.join(" ").trim();
        segments.push(currentSegment);
      }

      // Start new segment
      currentSegment = {
        speaker,
        start: word.start,
        end: word.end,
        text: "",
      };
      currentWords = [word.word];
    } else {
      // Continue current segment
      currentSegment.end = word.end;
      currentWords.push(word.word);
    }
  }

  // Save final segment
  if (currentSegment) {
    currentSegment.text = currentWords.join(" ").trim();
    segments.push(currentSegment);
  }

  return segments;
}

/**
 * Convert speaker segments to full text transcript
 */
export function segmentsToFullText(segments: SpeakerSegment[]): string {
  return segments
    .map((seg) => `**${seg.speaker}**: ${seg.text}`)
    .join("\n\n");
}

/**
 * Format time in seconds to MM:SS or HH:MM:SS
 */
export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

/**
 * Validate Riverside JSON format
 */
export function validateRiversideJson(data: unknown): data is RiversideTranscript {
  if (!data || typeof data !== "object") return false;
  if (!("words" in data)) return false;

  const { words } = data as { words: unknown };
  if (!Array.isArray(words)) return false;

  // Check first word has required fields
  if (words.length > 0) {
    const first = words[0];
    if (
      typeof first.word !== "string" ||
      typeof first.start !== "number" ||
      typeof first.end !== "number"
    ) {
      return false;
    }
  }

  return true;
}

/**
 * Detect speakers from transcript
 */
export function detectSpeakers(json: RiversideTranscript): string[] {
  const speakers = new Set<string>();
  for (const word of json.words) {
    if (word.speaker) {
      speakers.add(word.speaker);
    }
  }
  return Array.from(speakers);
}
