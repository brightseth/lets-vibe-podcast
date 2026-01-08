/**
 * Let's Vibe! Agent Types
 */

// Guest Management
export interface Guest {
  name: string;
  twitter?: string;
  farcaster?: string;
  email?: string;
  tier: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  status: 'target' | 'invited' | 'confirmed' | 'scheduled' | 'recorded' | 'published';
  whoTheyAre: string;
  why: string;
  contactStrategy: string;
  topics?: string[];
  notes?: string;
  outreachDate?: string;
  responseDate?: string;
  recordingDate?: string;
  episodeNumber?: number;
}

export interface GuestResearchResult {
  guest: Partial<Guest>;
  followers?: number;
  recentWork?: string[];
  fitScore: number; // 1-10
  reasoning: string;
}

// Episode Production
export interface Episode {
  number: number;
  title: string;
  guest: Guest;
  recordingDate: string;
  publishDate?: string;
  status: 'scheduled' | 'recorded' | 'editing' | 'ready' | 'published';
  audioFile?: string;
  transcript?: string;
  showNotes?: ShowNotes;
  clips?: Clip[];
  socialPosts?: SocialPost[];
}

export interface ShowNotes {
  summary: string;
  topics: string[];
  timestamps: Timestamp[];
  links: Link[];
  guestBio: string;
}

export interface Timestamp {
  time: string; // "00:12:34"
  label: string;
  isClipWorthy?: boolean;
}

export interface Clip {
  id: string;
  startTime: string;
  endTime: string;
  quote: string;
  topic?: string;
  platform: 'youtube-shorts' | 'tiktok' | 'twitter' | 'instagram';
  status: 'identified' | 'extracted' | 'edited' | 'posted';
}

export interface Link {
  title: string;
  url: string;
  context?: string;
}

// Social Content
export interface SocialPost {
  platform: 'twitter' | 'farcaster' | 'youtube' | 'instagram' | 'tiktok';
  type: 'announcement' | 'clip' | 'quote' | 'thread' | 'story';
  content: string;
  media?: string[];
  scheduledFor?: string;
  status: 'draft' | 'scheduled' | 'posted';
  url?: string;
}

export interface ContentCalendar {
  episodeNumber: number;
  posts: {
    day: number; // days relative to release
    platform: SocialPost['platform'];
    content: SocialPost;
  }[];
}

// Outreach
export interface OutreachMessage {
  guest: Guest;
  subject: string;
  body: string;
  platform: 'twitter-dm' | 'email' | 'farcaster';
  personalNote?: string;
  followUpDate?: string;
}

// Analytics
export interface EpisodeMetrics {
  episodeNumber: number;
  downloads: number;
  youtubeViews?: number;
  spotifyStreams?: number;
  applePlays?: number;
  clipViews?: Record<string, number>;
  socialEngagement?: {
    likes: number;
    shares: number;
    comments: number;
  };
}

// Agent Configuration
export interface AgentConfig {
  name: string;
  version: string;
  capabilities: string[];
  integrations: {
    name: string;
    enabled: boolean;
    apiKey?: string;
  }[];
}

// Workflow Results
export interface WorkflowResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  logs?: string[];
}
