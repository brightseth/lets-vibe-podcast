# Let's Vibe! Podcast

**Weekly conversations about vibe coding with Seth Goldstein & Ian Rogers**

## Quick Links

| Resource | URL |
|----------|-----|
| **Website** | https://letsvibe-fm.vercel.app |
| **Repo** | https://github.com/brightseth/lets-vibe-podcast |

## Overview

| Field | Value |
|-------|-------|
| **Hosts** | Seth Goldstein + Ian Rogers |
| **Frequency** | Weekly |
| **Format** | Opener + Guest Interview + Tutorial Clip |
| **Duration** | 45-60 minutes |
| **Launch** | February/March 2026 |

## The Pitch

Weekly podcast where we shoot the shit about vibe coding, interview the most interesting people building with AI, and show tutorials that become standalone clips.

**Why us:**
- Both deep in vibe coding (Seth: /vibe social layer, Ian: Platters, gallery, Better at Living)
- Old enough to remember the Netscape playbook
- Neither needs to impress anyone
- Both in Paris regularly (Ledger studio when together, remote when apart)

## Format

```
┌─────────────────────────────────────────────────────────────┐
│  1. OPENER (10-15 min)                                      │
│     Seth & Ian catch up - what we built, tools, patterns    │
├─────────────────────────────────────────────────────────────┤
│  2. GUEST INTERVIEW (25-30 min)                             │
│     Deep conversation - creativity meets AI                 │
├─────────────────────────────────────────────────────────────┤
│  3. TUTORIAL CLIP (10-15 min)                               │
│     Hands-on walkthrough → standalone YouTube content       │
└─────────────────────────────────────────────────────────────┘
```

**Vibe:** Acquired meets Oprah — sophisticated but warm, practical not theoretical

## Dream Guests

### Tier 0: Unicorn Gets
- **Andrej Karpathy** - Coined "vibe coding", ex-Tesla AI
- **Rick Rubin** - The Creative Act, creativity philosopher
- **Boris Dayma** - Anthropic / Claude team

### Tier 1: Vibe Coding Pioneers
- **steipete** - Clawdbot creator, Claude Code power user
- **Simon Willison** - Datasette, LLM tools educator
- **Pieter Levels** - Photo AI, ships fast
- **swyx** - Latent Space, AI engineer

### Tier 2: AI Art + Music
- **Gene Kogan** - Abraham.ai founder, AI art OG
- **Claire Silver** - Voice of AI-assisted art
- **Holly Herndon** - Holly+, AI voice cloning
- **Grimes** - Elf.tech, AI experiments

### Ian's Network
- LVMH / Beats alumni
- Ledger ecosystem builders
- Apple Music network

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Recording** | Riverside.fm (remote) / Ledger studio (Paris) |
| **Editing** | Descript (AI transcription + cleanup) |
| **Hosting** | Spotify for Creators (free) |
| **Distribution** | Apple Podcasts, YouTube, Farcaster |
| **Website** | Next.js on Vercel |

## Project Structure

```
lets-vibe-podcast/
├── website/              # Next.js site (Vercel deployed)
│   └── src/app/          # App router pages
├── letsvibe-agent/       # Multi-agent production system
│   └── src/agents/       # Booking, research, promotion agents
├── IAN_TLDR.md           # Summary doc for Ian
├── VISION.md             # Full strategy document
├── GUESTS.md             # Complete guest pipeline
├── CLAUDE.md             # Project context for Claude Code
└── README.md             # This file
```

## For Collaborators

Clone and start coding:

```bash
git clone git@github.com:brightseth/lets-vibe-podcast.git
cd lets-vibe-podcast

# Run website locally
cd website
npm install
npm run dev
```

## Why Now

> "It's like Pac-Man when you eat the cherry and everything starts flashing. We're all running back through 30 years to create what we had ideas for but could never do ourselves."

- **Force function** - Weekly recording keeps us synced without scheduling meetings
- **People come to us** - Best people in vibe coding want to share what they're building
- **Show and tell** - Forces us to ship things worth talking about
- **Access to everyone** - Podcast gives us an excuse to reach out to anyone

## Status

- [x] Concept aligned (Jan 14, 2026 call)
- [x] Website live
- [x] GitHub repo for collaboration
- [ ] Schedule Episode 1 recording
- [ ] Set up Spotify for Creators
- [ ] Submit to Apple Podcasts

---

*Created: January 8, 2026*
*Updated: January 14, 2026*
*Status: Ready to record*
