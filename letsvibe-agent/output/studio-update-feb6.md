# Let's Vibe Studio — Progress Update

**Feb 6, 2026**

---

## The Problem We Solved

Publishing Episode 2 took ~3 hours of manual work *after* the recording was done. The transcript existed — but turning it into show notes, chapters, social posts, YouTube description, and website updates was all by hand.

## What We Built

**Let's Vibe Studio** — a post-recording pipeline that turns a transcript into everything we need to publish.

You record. You drop the transcript. The pipeline generates:

```
Transcript ──→ Parse (Riverside JSON, timestamped, or raw text)
                │
                ├──→ Episode title
                ├──→ Show notes (full narrative, not bullet points)
                ├──→ Chapter markers with timestamps
                ├──→ Topic tags
                ├──→ Episode description (for Spotify/Apple)
                ├──→ Links & resources mentioned
                └──→ Best quotes
                      │
                      ├──→ Announcement tweet
                      ├──→ Twitter thread (4-6 tweets)
                      ├──→ Farcaster post
                      ├──→ LinkedIn post
                      ├──→ YouTube description (with chapters baked in)
                      ├──→ Content calendar (week of posts)
                      └──→ Website update (episodes.ts, auto-validated)
```

One command. ~60 seconds. All the content that took 3 hours.

## How It Works

```bash
cd letsvibe-agent

# Full pipeline — generates everything + updates the website
npx tsx src/pipeline/post-recording.ts \
  --transcript ../transcripts/ep3.txt \
  --episode 3 \
  --guest "Simon Willison" \
  --guest-handle "@simonw" \
  --date "Feb 12, 2026" \
  --duration "52 min"

# Dry run — see what it generates without touching the site
npx tsx src/pipeline/post-recording.ts \
  --transcript ../transcripts/ep3.txt \
  --episode 3 --dry-run
```

You can also run individual steps:
- `npm run pipeline:notes` — just show notes + chapters
- `npm run pipeline:social` — just social content

## The Key Insight

**The transcript is the edit.** Text-based editing is structured data an AI can operate on. Every downstream artifact (show notes, social, chapters) is a transformation of the transcript. The pipeline makes those transformations automatic and consistent.

This is the same insight that makes Descript work — but applied to the entire publishing workflow, not just audio editing.

## What's Next

**Phase 2: Media Processing** — Local ffmpeg on the Mac Studio for audio normalization, clip extraction, multi-aspect-ratio export (16:9 for X, 9:16 for Shorts, 1:1 for IG). The core concept is an "EditPlan" — Claude analyzes the transcript, generates a JSON cut list, you review it, ffmpeg executes. Human-reviewable, AI-generated, version-controllable.

**Phase 3: Platform APIs** — Direct upload to YouTube (with chapters), Twitter (with video), and auto-deploy to Vercel. The last manual steps disappear.

## The Vision

Record → drop transcript → review AI-generated edit plan → one command to publish everywhere.

Episode 3's total post-production time target: **15 minutes** (review + approve), down from 3 hours.

---

*Built with Claude Code. Lives in the lets-vibe-podcast repo alongside the website.*
*letsvibe.fm — the show / Let's Vibe Studio — the production pipeline behind it.*
