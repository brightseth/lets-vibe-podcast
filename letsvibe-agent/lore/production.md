# Let's Vibe! — Production Rhythm

## Weekly Schedule

| Day | Activity |
|-----|----------|
| **Thursday** | Record episode (12pm PST / 9pm CET via Riverside) |
| **Friday** | Riverside processes Magic Episode + Magic Clips |
| **Saturday** | Review clips, select top 3-5, draft show notes |
| **Sunday** | Create episode page on website, prep social content |
| **Monday** | Final review, schedule social posts |
| **Tuesday** | Episode drops (5am EST), launch tweet thread |
| **Wed-Mon** | Staggered clip releases (1 per day) |

**Total weekly time commitment:** ~5-6 hours

## Publish Time: Tuesday 5:00 AM EST

| Time Zone | Local Time |
|-----------|------------|
| EST | 5:00 AM |
| PST | 2:00 AM |
| GMT | 10:00 AM |
| CET | 11:00 AM |

## Recording Day Workflow (Day 0)

1. **1 hour total:** Record episode (15+15+15 = 45 min + buffer)
2. Format order: Guest Segment -> Vibe Check -> Tutorial
3. Platform: Riverside.fm (separate tracks per speaker, browser-based, no guest downloads)

## Post-Production (Days 1-2)

1. Riverside auto-processes Magic Episode (filler word removal, audio enhancement)
2. Review and trim any off-topic sections
3. Export final audio + video
4. **Time:** ~1 hour

## Clips + Assets (Day 3)

1. Review Riverside Magic Clips (auto-identified key moments)
2. AI generates 30-60 second clips with captions
3. Select top 3-5 clips
4. Export for social (vertical format ready)
5. Create episode thumbnail
6. Write show notes
7. **Time:** ~1 hour

## Distribution (Day 4)

1. Upload to Spotify for Creators (primary host + RSS)
2. Push to Apple Podcasts
3. Upload video to YouTube
4. Update letsvibe.fm episode page
5. **Time:** ~30 min

## Social Cadence (Day 5+)

- Post clips throughout the week (stagger 1 per day)
- Engage with comments
- Promote next episode
- Cross-post via nft now (Matt Medved, 600K+ followers)

## Production Stack

| Tool | Purpose | Cost |
|------|---------|------|
| Riverside.fm Pro | Recording, editing, clips | $29/mo |
| Spotify for Creators | Primary host + RSS | Free |
| Apple Podcasts | Distribution | Free |
| YouTube | Video version + Shorts | Free |
| Ledger Studio | In-person Paris sessions | Free |
| letsvibe.fm (Vercel) | Website + show notes | Free |

**Monthly cost:** ~$30/month

## Pipeline Tools (letsvibe-agent)

Post-recording CLI pipeline:
- `npm run pipeline` — Full pipeline (show notes + social + chapters)
- `npm run pipeline:notes` — Generate show notes from transcript
- `npm run pipeline:social` — Draft social posts
- `npm run pipeline:chapters` — Generate chapter markers

Supports 3 transcript formats: Riverside JSON, timestamped text, raw text.

## Platform Checklist (Per Episode)

- [ ] Riverside: Export final audio + video
- [ ] Spotify for Creators: Upload audio, set metadata
- [ ] Apple Podcasts: Verify RSS propagation
- [ ] YouTube: Upload video version
- [ ] letsvibe.fm: Add episode page with show notes
- [ ] Social: Schedule launch tweet thread
- [ ] Social: Queue 3-5 clips across the week
- [ ] Show notes: Timestamps, guest links, resources mentioned

## Quality Notes

- Riverside records locally on each participant's machine = no internet quality issues
- Separate audio/video tracks per speaker for clean editing
- Magic Editor handles filler word removal automatically
- No need for Descript or separate editing tool
- OpusClip available as backup clip generator if needed
