-- Seed Episode 1: The Netscape Moment
INSERT INTO episodes (
  number, title, slug, description, guest_name, guest_bio, guest_twitter,
  date, duration, spotify_url, apple_url, youtube_url,
  chapters, quotes, links, status, published_at
) VALUES (
  1,
  'The Netscape Moment',
  'the-netscape-moment',
  'In this inaugural episode, Ian interviews Seth about his 30-year journey through Silicon Alley, the Netscape moment parallel with Claude Code, and the profound shift happening in how we build software. From Turntable.fm to Bright Moments to discovering autonomous AI artists, Seth shares the path that led two 50-somethings to become obsessed with vibe coding.',
  'Seth Goldstein (interviewed by Ian Rogers)',
  'Seth Goldstein is the co-host of Let''s Vibe! and founder of Turntable.fm, ROOT, and SiteSpecific. He''s currently building /vibe, a social layer for Claude Code, and SOLIENNE, an autonomous AI artist.',
  '@seth',
  'January 30, 2026',
  '52 min',
  'https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY',
  'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247',
  'https://youtu.be/1kWtAUDdvJc',
  '[
    {"time": "0:00", "title": "Introduction & Theme Song"},
    {"time": "5:00", "title": "Seth''s Origin Story"},
    {"time": "12:00", "title": "The Netscape Moment"},
    {"time": "16:00", "title": "Pattern Matching & Battle Scars"},
    {"time": "20:00", "title": "The Oliver Sacks Analogy"},
    {"time": "24:00", "title": "Turntable.fm"},
    {"time": "28:00", "title": "The Pro Tools Parallel"},
    {"time": "31:00", "title": "Bright Moments"},
    {"time": "35:00", "title": "Post-Bright Moments Depression"},
    {"time": "38:00", "title": "Gene Kogan & First Vibe Code"},
    {"time": "41:00", "title": "AGI & Rick Rubin"},
    {"time": "45:00", "title": "Claude Bot Stories"},
    {"time": "50:00", "title": "Practical Tips & Closing"}
  ]'::jsonb,
  '[
    "It''s like a 55-year-old man who''s never played music, who suddenly sits in front of a piano and plays Rachmaninoff.",
    "It''s like Pac-Man when you eat the cherry and everything starts flashing. We''re running back through 30 years to create what we had ideas for but could never do ourselves.",
    "In the beginning was the command line.",
    "Because it was art, I didn''t have to worry about the roadmap, the investor update, product-market fit."
  ]'::jsonb,
  '[
    {"label": "Claude Code", "url": "https://claude.ai/claude-code"},
    {"label": "SOLIENNE", "url": "https://solienne.ai"},
    {"label": "Eden AI", "url": "https://eden.art"},
    {"label": "Bright Moments", "url": "https://brightmoments.io"},
    {"label": "/vibe", "url": "https://slashvibe.dev"}
  ]'::jsonb,
  'published',
  NOW()
) ON CONFLICT (slug) DO NOTHING;
