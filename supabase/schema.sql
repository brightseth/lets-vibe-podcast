-- Let's Vibe! Database Schema
-- Run this in Supabase SQL Editor to set up tables

-- Episodes
create table episodes (
  id uuid default gen_random_uuid() primary key,
  number int not null,
  title text not null,
  description text,
  guest_name text,
  guest_twitter text,
  recorded_at timestamp with time zone,
  published_at timestamp with time zone,
  duration_seconds int,

  -- URLs
  audio_url text,
  video_url text,
  youtube_url text,
  spotify_url text,
  apple_url text,

  -- Content
  transcript text,
  show_notes text,

  -- Status
  status text default 'draft' check (status in ('draft', 'recorded', 'editing', 'published')),

  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Clips (generated from episodes)
create table clips (
  id uuid default gen_random_uuid() primary key,
  episode_id uuid references episodes(id) on delete cascade,
  title text not null,
  start_time int not null, -- seconds
  end_time int not null,
  transcript_excerpt text,

  -- URLs
  video_url text,
  tiktok_url text,
  twitter_url text,

  -- AI suggestions
  virality_score float,
  suggested_caption text,

  status text default 'suggested' check (status in ('suggested', 'approved', 'exported', 'published')),

  created_at timestamp with time zone default now()
);

-- Guests (for pipeline/CRM)
create table guests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  twitter text,
  email text,
  company text,
  role text,
  tier int check (tier between 0 and 4),
  category text,
  notes text,

  -- Outreach tracking
  outreach_status text default 'wishlist' check (outreach_status in ('wishlist', 'contacted', 'confirmed', 'recorded', 'declined')),
  contacted_at timestamp with time zone,
  confirmed_at timestamp with time zone,

  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table episodes enable row level security;
alter table clips enable row level security;
alter table guests enable row level security;

-- Policies (public read for published episodes, authenticated write)
create policy "Public can view published episodes" on episodes
  for select using (status = 'published');

create policy "Authenticated users can manage episodes" on episodes
  for all using (auth.role() = 'authenticated');

create policy "Public can view approved clips" on clips
  for select using (status in ('approved', 'exported', 'published'));

create policy "Authenticated users can manage clips" on clips
  for all using (auth.role() = 'authenticated');

create policy "Authenticated users can manage guests" on guests
  for all using (auth.role() = 'authenticated');

-- Indexes
create index episodes_status_idx on episodes(status);
create index episodes_published_at_idx on episodes(published_at desc);
create index clips_episode_id_idx on clips(episode_id);
create index guests_tier_idx on guests(tier);
create index guests_outreach_status_idx on guests(outreach_status);
