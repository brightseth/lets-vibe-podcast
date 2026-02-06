-- Episodes table
CREATE TABLE IF NOT EXISTS episodes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  number INTEGER NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'upcoming', 'recorded')),

  -- Guest info
  guest_name TEXT,
  guest_handle TEXT,
  guest_bio TEXT,

  -- Dates
  date TEXT, -- Display date like "Jan 27, 2026"
  duration TEXT, -- Display duration like "48 min"
  recorded_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,

  -- Platform URLs
  spotify_url TEXT,
  apple_url TEXT,
  youtube_url TEXT,

  -- Content
  show_notes TEXT, -- Rich text / markdown
  topics TEXT[] DEFAULT '{}',
  chapters JSONB DEFAULT '[]', -- [{ "time": "0:00", "title": "Intro" }]
  links JSONB DEFAULT '[]', -- [{ "label": "Link", "url": "https://..." }]

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Transcripts table
CREATE TABLE IF NOT EXISTS transcripts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,
  full_text TEXT,
  speaker_segments JSONB DEFAULT '[]', -- [{ "speaker": "Seth", "start": 0.5, "end": 5.2, "text": "..." }]
  source TEXT, -- "riverside", "manual", etc.
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(episode_id)
);

-- Clips table (for future use)
CREATE TABLE IF NOT EXISTS clips (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  start_time DECIMAL,
  end_time DECIMAL,
  platform TEXT, -- "youtube_shorts", "tiktok", "instagram"
  url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Guests table (for future use - many-to-many with episodes)
CREATE TABLE IF NOT EXISTS guests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  handle TEXT,
  bio TEXT,
  avatar_url TEXT,
  twitter_url TEXT,
  website_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Episode-guest join table (for future multi-guest episodes)
CREATE TABLE IF NOT EXISTS episode_guests (
  episode_id UUID REFERENCES episodes(id) ON DELETE CASCADE,
  guest_id UUID REFERENCES guests(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'guest', -- 'guest', 'host', 'co-host'
  PRIMARY KEY (episode_id, guest_id)
);

-- RLS Policies
ALTER TABLE episodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE transcripts ENABLE ROW LEVEL SECURITY;
ALTER TABLE clips ENABLE ROW LEVEL SECURITY;
ALTER TABLE guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE episode_guests ENABLE ROW LEVEL SECURITY;

-- Public read access for published episodes
CREATE POLICY "Public can view published episodes" ON episodes
  FOR SELECT USING (status = 'published' OR status = 'upcoming');

CREATE POLICY "Public can view transcripts of published episodes" ON transcripts
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM episodes WHERE id = episode_id AND (status = 'published' OR status = 'upcoming'))
  );

CREATE POLICY "Public can view clips of published episodes" ON clips
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM episodes WHERE id = episode_id AND (status = 'published' OR status = 'upcoming'))
  );

CREATE POLICY "Public can view guests" ON guests
  FOR SELECT USING (true);

CREATE POLICY "Public can view episode_guests" ON episode_guests
  FOR SELECT USING (true);

-- Service role has full access (bypasses RLS)

-- Indexes
CREATE INDEX IF NOT EXISTS idx_episodes_status ON episodes(status);
CREATE INDEX IF NOT EXISTS idx_episodes_number ON episodes(number);
CREATE INDEX IF NOT EXISTS idx_episodes_published_at ON episodes(published_at);
CREATE INDEX IF NOT EXISTS idx_transcripts_episode_id ON transcripts(episode_id);
CREATE INDEX IF NOT EXISTS idx_clips_episode_id ON clips(episode_id);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER episodes_updated_at
  BEFORE UPDATE ON episodes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER transcripts_updated_at
  BEFORE UPDATE ON transcripts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
