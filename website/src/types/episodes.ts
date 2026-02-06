// Database types for episodes (matches Supabase schema)

export type EpisodeStatus = 'draft' | 'published' | 'upcoming' | 'recorded';

export interface Chapter {
  time: string;
  title: string;
}

export interface EpisodeLink {
  label: string;
  url: string;
}

export interface Episode {
  id: string;
  number: number;
  slug: string;
  title: string;
  description: string | null;
  status: EpisodeStatus;

  // Guest info
  guest_name: string | null;
  guest_handle: string | null;
  guest_bio: string | null;

  // Dates
  date: string | null;
  duration: string | null;
  recorded_at: string | null;
  published_at: string | null;

  // Platform URLs
  spotify_url: string | null;
  apple_url: string | null;
  youtube_url: string | null;

  // Content
  show_notes: string | null;
  topics: string[];
  chapters: Chapter[];
  links: EpisodeLink[];

  // Timestamps
  created_at: string;
  updated_at: string;
}

export interface SpeakerSegment {
  speaker: string;
  start: number;
  end: number;
  text: string;
}

export interface Transcript {
  id: string;
  episode_id: string;
  full_text: string | null;
  speaker_segments: SpeakerSegment[];
  source: string | null;
  created_at: string;
  updated_at: string;
}

export interface EpisodeWithTranscript extends Episode {
  transcript?: Transcript | null;
}

// For insert/update operations (omit auto-generated fields)
export type EpisodeInsert = Omit<Episode, 'id' | 'created_at' | 'updated_at'>;
export type EpisodeUpdate = Partial<EpisodeInsert>;

export type TranscriptInsert = Omit<Transcript, 'id' | 'created_at' | 'updated_at'>;
export type TranscriptUpdate = Partial<TranscriptInsert>;

// Convert legacy static data format to database format
export function staticToDbEpisode(
  staticEp: {
    number: number;
    slug: string;
    title: string;
    guest: string;
    guestHandle: string;
    guestBio: string;
    description: string;
    duration: string;
    date: string;
    status: 'live' | 'upcoming' | 'recorded';
    topics: string[];
    spotifyUrl?: string;
    appleUrl?: string;
    youtubeUrl?: string;
    showNotes?: string;
    chapters?: { time: string; title: string }[];
    links?: { label: string; url: string }[];
    transcript?: string;
  }
): Episode {
  // Map static status to db status
  const statusMap: Record<'live' | 'upcoming' | 'recorded', EpisodeStatus> = {
    live: 'published',
    upcoming: 'upcoming',
    recorded: 'recorded',
  };

  return {
    id: '', // Placeholder
    number: staticEp.number,
    slug: staticEp.slug,
    title: staticEp.title,
    description: staticEp.description,
    status: statusMap[staticEp.status],
    guest_name: staticEp.guest,
    guest_handle: staticEp.guestHandle,
    guest_bio: staticEp.guestBio,
    date: staticEp.date,
    duration: staticEp.duration,
    recorded_at: null,
    published_at: staticEp.status === 'live' ? new Date().toISOString() : null,
    spotify_url: staticEp.spotifyUrl || null,
    apple_url: staticEp.appleUrl || null,
    youtube_url: staticEp.youtubeUrl || null,
    show_notes: staticEp.showNotes || null,
    topics: staticEp.topics,
    chapters: staticEp.chapters || [],
    links: staticEp.links || [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

// Display-friendly episode format (matches legacy static format)
export interface DisplayEpisode {
  number: number;
  slug: string;
  title: string;
  guest: string;
  guestHandle: string;
  guestBio: string;
  description: string;
  duration: string;
  date: string;
  status: 'live' | 'upcoming' | 'recorded';
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  showNotes?: string;
  chapters: Chapter[];
  links: EpisodeLink[];
  transcript?: string;
}

// Convert database format to display-friendly format
export function formatEpisodeForDisplay(ep: Episode, transcript?: string): DisplayEpisode {
  // Map db status back to display status
  const statusMap: Record<EpisodeStatus, 'live' | 'upcoming' | 'recorded'> = {
    published: 'live',
    upcoming: 'upcoming',
    recorded: 'recorded',
    draft: 'recorded', // Draft shows as "in production"
  };

  return {
    number: ep.number,
    slug: ep.slug,
    title: ep.title,
    guest: ep.guest_name || '',
    guestHandle: ep.guest_handle || '',
    guestBio: ep.guest_bio || '',
    description: ep.description || '',
    duration: ep.duration || '',
    date: ep.date || '',
    status: statusMap[ep.status],
    topics: ep.topics || [],
    spotifyUrl: ep.spotify_url || undefined,
    appleUrl: ep.apple_url || undefined,
    youtubeUrl: ep.youtube_url || undefined,
    showNotes: ep.show_notes || undefined,
    chapters: ep.chapters || [],
    links: ep.links || [],
    transcript,
  };
}
