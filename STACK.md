# Let's Vibe! Production Stack

**Philosophy:** No manual tools. Everything flows through Claude Code + specialized APIs.

---

## The Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| **Orchestration** | Claude Code | Routes tasks, coordinates agents |
| **Images** | NanoBanana Pro (FAL) | Cover art, thumbnails, social graphics |
| **Video** | Veo 3 (Manus) | Promos, trailers, video clips |
| **Voice** | 11 Labs | Intros, outros, voice cloning for promos |
| **Audio Edit** | Descript | Transcription, editing, filler removal |
| **Clips** | Opus.ai | Auto-generate viral clips from episodes |
| **Complex Tasks** | Manus | Multi-step generation, research synthesis |
| **Hosting** | Vercel | Website, community submission portal |
| **Version Control** | Git | Everything versioned, collaborative |
| **Social** | /vibe + APIs | Distribution, engagement |

---

## The Flywheel

```
┌─────────────────────────────────────────────────────────────────────┐
│                         LET'S VIBE! FLYWHEEL                        │
└─────────────────────────────────────────────────────────────────────┘

    ┌──────────────┐
    │  1. RESEARCH │ ←────────────────────────────────────────────┐
    │              │                                               │
    │ • Guest discovery (web search, social)                       │
    │ • Topic trends (what's hot in vibecoding)                    │
    │ • Competitive intel (other podcasts)                         │
    │                                                              │
    │ Tools: Claude Code, Manus, Web Search                        │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 2. OUTREACH  │                                               │
    │              │                                               │
    │ • Draft personalized invites                                 │
    │ • Multi-channel (email, DM, /vibe)                          │
    │ • Follow-up sequences                                        │
    │                                                              │
    │ Tools: Claude Code, /vibe DMs                                │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │  3. PRE-PROD │                                               │
    │              │                                               │
    │ • Guest research brief                                       │
    │ • Talking points                                             │
    │ • Tutorial topic selection                                   │
    │ • Episode thumbnail                                          │
    │                                                              │
    │ Tools: Claude Code, NanoBanana Pro                           │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 4. RECORDING │                                               │
    │              │                                               │
    │ • Live recording (Riverside/Zencastr)                        │
    │ • Raw audio + video files                                    │
    │                                                              │
    │ Tools: Recording platform (TBD)                              │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 5. POST-PROD │                                               │
    │              │                                               │
    │ • Transcription                                              │
    │ • Filler word removal                                        │
    │ • Audio cleanup                                              │
    │ • Add intro/outro                                            │
    │                                                              │
    │ Tools: Descript, 11 Labs (intro/outro voice)                 │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │  6. CONTENT  │                                               │
    │              │                                               │
    │ • Show notes (from transcript)                               │
    │ • Clip selection (viral moments)                             │
    │ • Auto-generate clips                                        │
    │ • Quote cards                                                │
    │ • Trailer/promo video                                        │
    │                                                              │
    │ Tools: Claude Code, Opus.ai, NanoBanana Pro, Veo 3           │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 7. PUBLISH   │                                               │
    │              │                                               │
    │ • Spotify, Apple, YouTube                                    │
    │ • Website episode page                                       │
    │ • RSS feed update                                            │
    │                                                              │
    │ Tools: Hosting APIs, Vercel                                  │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 8. PROMOTION │                                               │
    │              │                                               │
    │ • Social posts (Twitter, Farcaster)                          │
    │ • Clips to TikTok/Reels/Shorts                              │
    │ • Newsletter                                                 │
    │ • Community ping                                             │
    │                                                              │
    │ Tools: /vibe social, Claude Code                             │
    └──────┬───────┘                                               │
           │                                                       │
           ▼                                                       │
    ┌──────────────┐                                               │
    │ 9. COMMUNITY │                                               │
    │              │                                               │
    │ • Project submissions                                        │
    │ • Voting/curation                                            │
    │ • Feature on next episode                                    │
    │ • Listener feedback → new guests                             │
    │                                                              │
    │ Tools: Vercel (portal), Claude Code                          │
    └──────┬───────┘                                               │
           │                                                       │
           └───────────────────────────────────────────────────────┘
                              (feeds back to Research)
```

---

## API Keys Required

```bash
# letsvibe-agent/.env

# Core
ANTHROPIC_API_KEY=        # Claude (agents)
FAL_API_KEY=              # NanoBanana Pro, Flux, other image models
MANUS_API_KEY=            # Manus tasks, Veo 3 video
GOOGLE_API_KEY=           # Backup image gen, search

# Audio/Video
ELEVEN_LABS_API_KEY=      # Voice synthesis
DESCRIPT_API_KEY=         # Transcription, audio edit
OPUS_AI_API_KEY=          # Auto clip generation

# Distribution
SPOTIFY_CLIENT_ID=        # Podcast publishing
SPOTIFY_CLIENT_SECRET=
YOUTUBE_API_KEY=          # Video uploads
TWITTER_API_KEY=          # Social posts
FARCASTER_FID=            # Farcaster posts

# Infrastructure
VERCEL_TOKEN=             # Deployments
```

---

## Agent → Tool Mapping

| Agent | Primary Tools |
|-------|---------------|
| 🎤 **Booking** | Claude (research), /vibe (outreach), Manus (deep research) |
| 🔬 **Research** | Claude, Manus, Web Search |
| 📣 **Promotion** | NanoBanana Pro (graphics), Veo 3 (video), Opus.ai (clips), /vibe (social) |
| 🤝 **Partnerships** | Claude (pitches), Manus (sponsor research) |
| 🎬 **Production** | Descript (edit), 11 Labs (voice), Opus.ai (clips) |

---

## Automated Workflows

### `npm run episode:full "Guest Name"`
Complete episode pipeline:
1. Research guest → talking points
2. Generate thumbnail
3. Create pre-recording brief
4. [RECORDING HAPPENS]
5. Process through Descript
6. Generate show notes from transcript
7. Auto-clip with Opus.ai
8. Create social graphics
9. Draft all social posts
10. Publish everywhere

### `npm run promo:video "Episode Title"`
1. Pull best quotes from transcript
2. Generate B-roll with Veo 3
3. Compose 60-second trailer
4. Export for YouTube Shorts / TikTok / Reels

### `npm run social:week "Episode Number"`
1. Generate 7 days of content from one episode
2. Quote cards (NanoBanana Pro)
3. Clip teasers (Opus.ai)
4. Discussion prompts
5. Schedule across platforms

---

## Content Formats

| Format | Tool | Output |
|--------|------|--------|
| Cover Art | NanoBanana Pro | 3000x3000 PNG |
| Episode Thumbnail | NanoBanana Pro | 1920x1080 PNG |
| Quote Card | NanoBanana Pro | 1080x1080 PNG |
| Video Clip | Opus.ai | 9:16 MP4 (60s) |
| Promo Trailer | Veo 3 | 16:9 MP4 (60s) |
| Intro/Outro | 11 Labs | WAV/MP3 |
| Full Episode | Descript | MP3 + transcript |

---

## Directory Structure

```
lets-vibe-podcast/
├── CLAUDE.md                    # Agent context
├── STACK.md                     # This file
├── episodes/
│   └── ep-001-tez/
│       ├── raw/                 # Raw recording
│       ├── edited/              # Descript output
│       ├── transcript.md        # Full transcript
│       ├── show-notes.md        # Generated notes
│       ├── clips/               # Opus.ai clips
│       └── assets/              # Thumbnails, graphics
├── assets/
│   ├── cover-art/              # Podcast covers
│   ├── thumbnails/             # Episode thumbnails
│   └── social/                 # Social graphics
├── content/
│   ├── social-calendar/        # Scheduled posts
│   └── newsletters/            # Email content
└── letsvibe-agent/             # Agent system
```

---

## Next: Implementation

1. [ ] Add 11 Labs integration to agents
2. [ ] Add Descript API integration
3. [ ] Add Opus.ai clip generation
4. [ ] Add Veo 3 via Manus integration
5. [ ] Build episode:full workflow
6. [ ] Build promo:video workflow
7. [ ] Build social:week workflow
8. [ ] Create community submission portal (Vercel)
