/**
 * Transcript Parser — Handles 3 formats: Riverside JSON, timestamped text, raw text
 * Auto-detects format from file content.
 */

import { readFileSync } from 'fs';
import type {
  ParsedTranscript,
  TranscriptFormat,
  SpeakerSegment,
  RiversideTranscript,
  RiversideWord,
} from './types.js';

// Speaker mapping for Riverside
const DEFAULT_SPEAKER_MAP: Record<string, string> = {
  'Speaker 1': 'Seth',
  'Speaker 2': 'Ian',
  'speaker 1': 'Seth',
  'speaker 2': 'Ian',
};

/**
 * Parse a transcript file, auto-detecting format
 */
export function parseTranscriptFile(
  filePath: string,
  speakerMap: Record<string, string> = DEFAULT_SPEAKER_MAP
): ParsedTranscript {
  const raw = readFileSync(filePath, 'utf-8');
  return parseTranscript(raw, speakerMap);
}

/**
 * Parse transcript content string, auto-detecting format
 */
export function parseTranscript(
  content: string,
  speakerMap: Record<string, string> = DEFAULT_SPEAKER_MAP
): ParsedTranscript {
  const format = detectFormat(content);

  switch (format) {
    case 'riverside-json':
      return parseRiverside(JSON.parse(content), speakerMap);
    case 'timestamped-text':
      return parseTimestamped(content);
    case 'raw-text':
      return parseRawText(content);
  }
}

/**
 * Detect transcript format from content
 */
export function detectFormat(content: string): TranscriptFormat {
  const trimmed = content.trim();

  // JSON with words array = Riverside
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      const data = Array.isArray(parsed) ? parsed[0] : parsed;
      if (data?.words && Array.isArray(data.words)) {
        return 'riverside-json';
      }
    } catch {
      // Not valid JSON, fall through
    }
  }

  // Lines with timestamps like [00:00:00] or [0:00] = timestamped
  if (/\[\d{1,2}:\d{2}(:\d{2})?\]/.test(trimmed)) {
    return 'timestamped-text';
  }

  // Default: raw text with speaker labels
  return 'raw-text';
}

/**
 * Parse Riverside JSON transcript
 * Ported from website/src/lib/transcript-parser.ts
 */
function parseRiverside(
  json: RiversideTranscript,
  speakerMap: Record<string, string>
): ParsedTranscript {
  const { words } = json;

  if (!words || words.length === 0) {
    return {
      format: 'riverside-json',
      segments: [],
      fullText: '',
      speakers: [],
    };
  }

  const segments: SpeakerSegment[] = [];
  let currentSegment: SpeakerSegment | null = null;
  let currentWords: string[] = [];

  for (const word of words) {
    const speaker = speakerMap[word.speaker] || word.speaker;

    if (!currentSegment || currentSegment.speaker !== speaker) {
      if (currentSegment) {
        currentSegment.text = currentWords.join(' ').trim();
        segments.push(currentSegment);
      }
      currentSegment = {
        speaker,
        start: word.start,
        end: word.end,
        text: '',
      };
      currentWords = [word.word];
    } else {
      currentSegment.end = word.end;
      currentWords.push(word.word);
    }
  }

  if (currentSegment) {
    currentSegment.text = currentWords.join(' ').trim();
    segments.push(currentSegment);
  }

  const speakers = [...new Set(segments.map((s) => s.speaker))];
  const lastWord = words[words.length - 1];

  return {
    format: 'riverside-json',
    segments,
    fullText: segmentsToText(segments),
    speakers,
    durationSeconds: lastWord?.end,
  };
}

/**
 * Parse timestamped text format: [00:00:00] Speaker: Text
 */
function parseTimestamped(content: string): ParsedTranscript {
  const lines = content.split('\n').filter((l) => l.trim());
  const segments: SpeakerSegment[] = [];

  const lineRegex = /\[(\d{1,2}:\d{2}(?::\d{2})?)\]\s*(\w[\w\s]*?):\s*(.*)/;

  for (const line of lines) {
    const match = line.match(lineRegex);
    if (!match) continue;

    const [, timeStr, speaker, text] = match;
    const seconds = parseTimeToSeconds(timeStr);

    segments.push({
      speaker: speaker.trim(),
      start: seconds,
      end: seconds, // Will be refined below
      text: text.trim(),
    });
  }

  // Set end times from next segment's start
  for (let i = 0; i < segments.length - 1; i++) {
    segments[i].end = segments[i + 1].start;
  }
  if (segments.length > 0) {
    const last = segments[segments.length - 1];
    last.end = last.start + 60; // Estimate last segment at 60s
  }

  const speakers = [...new Set(segments.map((s) => s.speaker))];

  return {
    format: 'timestamped-text',
    segments,
    fullText: segmentsToText(segments),
    speakers,
    durationSeconds: segments.length > 0 ? segments[segments.length - 1].end : undefined,
  };
}

/**
 * Parse raw text format: Speaker: Text (no timestamps)
 */
function parseRawText(content: string): ParsedTranscript {
  const lines = content.split('\n').filter((l) => l.trim());
  const segments: SpeakerSegment[] = [];

  const speakerRegex = /^(\w[\w\s]*?):\s*(.*)/;
  let currentSpeaker = '';
  let currentText: string[] = [];
  let segmentIndex = 0;

  for (const line of lines) {
    const match = line.match(speakerRegex);

    if (match) {
      // Save previous segment
      if (currentSpeaker && currentText.length > 0) {
        segments.push({
          speaker: currentSpeaker,
          start: segmentIndex * 30, // Rough estimate: 30s per segment
          end: (segmentIndex + 1) * 30,
          text: currentText.join(' ').trim(),
        });
        segmentIndex++;
      }
      currentSpeaker = match[1].trim();
      currentText = [match[2].trim()];
    } else {
      // Continuation of current speaker
      currentText.push(line.trim());
    }
  }

  // Save last segment
  if (currentSpeaker && currentText.length > 0) {
    segments.push({
      speaker: currentSpeaker,
      start: segmentIndex * 30,
      end: (segmentIndex + 1) * 30,
      text: currentText.join(' ').trim(),
    });
  }

  const speakers = [...new Set(segments.map((s) => s.speaker))];

  return {
    format: 'raw-text',
    segments,
    fullText: segmentsToText(segments),
    speakers,
  };
}

// Helpers

function segmentsToText(segments: SpeakerSegment[]): string {
  return segments.map((s) => `${s.speaker}: ${s.text}`).join('\n\n');
}

function parseTimeToSeconds(time: string): number {
  const parts = time.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return parts[0] * 60 + parts[1];
}

export function formatSeconds(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}
