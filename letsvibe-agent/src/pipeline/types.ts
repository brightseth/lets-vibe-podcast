/**
 * Pipeline Types — Shared interfaces for the post-recording content pipeline
 */

// Transcript input formats

export interface RiversideWord {
  word: string;
  start: number;
  end: number;
  speaker: string;
}

export interface RiversideTranscript {
  words: RiversideWord[];
}

export interface SpeakerSegment {
  speaker: string;
  start: number; // seconds
  end: number;   // seconds
  text: string;
}

export type TranscriptFormat = 'riverside-json' | 'timestamped-text' | 'raw-text';

export interface ParsedTranscript {
  format: TranscriptFormat;
  segments: SpeakerSegment[];
  fullText: string;
  speakers: string[];
  durationSeconds?: number;
}

// Pipeline input

export interface PipelineInput {
  transcript: ParsedTranscript;
  episodeNumber: number;
  guest?: string;
  guestHandle?: string;
  date?: string;
  duration?: string;
  dryRun?: boolean;
}

// AI generation outputs

export interface Chapter {
  time: string;
  title: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface Quote {
  text: string;
  speaker: string;
  timestamp?: string;
}

export interface GeneratedContent {
  title: string;
  slug: string;
  description: string;
  showNotes: string;
  chapters: Chapter[];
  topics: string[];
  links: LinkItem[];
  quotes: Quote[];
}

export interface SocialContent {
  announcementTweet: string;
  threadTweets: string[];
  farcasterPost: string;
  linkedInPost: string;
  youtubeDescription: string;
}

// Full pipeline output

export interface PipelineOutput {
  episodeNumber: number;
  content: GeneratedContent;
  social: SocialContent;
  episodeData: EpisodeDataOutput;
  files: OutputFile[];
}

export interface EpisodeDataOutput {
  number: number;
  slug: string;
  title: string;
  guest: string;
  guestHandle: string;
  guestBio: string;
  description: string;
  duration: string;
  date: string;
  status: 'upcoming';
  topics: string[];
  showNotes: string;
  chapters: Chapter[];
  links: LinkItem[];
}

export interface OutputFile {
  path: string;
  content: string;
}

// Edit plan (Phase 2 prep)

export interface EditPlan {
  segments: EditSegment[];
  totalDuration: number;
  estimatedOutputDuration: number;
}

export interface EditSegment {
  action: 'keep' | 'cut' | 'transition';
  startTime: number;
  endTime: number;
  reason?: string;
}
