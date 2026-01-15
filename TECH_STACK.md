# Let's Vibe! Tech Stack

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│                   Next.js on Vercel                         │
│              letsvibe.fm (Lets Vibe team)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Vercel AI Gateway                        │
│            Caching, rate limiting, observability            │
│                   /api/ai endpoint                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Supabase                             │
│              Database + Auth + Storage                      │
│         Episodes, Clips, Guests, Transcripts                │
└─────────────────────────────────────────────────────────────┘
```

---

## Setup Instructions

### 1. Supabase

1. Create project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in SQL Editor
3. Get credentials from Settings > API
4. Add to Vercel env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### 2. Vercel AI Gateway

1. Go to Vercel Dashboard > Settings > AI Gateway
2. Enable AI Gateway
3. Add `ANTHROPIC_API_KEY` to env vars
4. The `/api/ai` endpoint routes through the gateway automatically

### 3. Environment Variables

```bash
# Copy template
cp website/.env.example website/.env.local

# Fill in your values
```

Required in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`

---

## Database Schema

### Episodes
- Episode metadata (title, description, guest)
- URLs (audio, video, Spotify, Apple, YouTube)
- Transcript and show notes
- Status workflow (draft → recorded → editing → published)

### Clips
- Linked to episodes
- Start/end timestamps
- AI virality score and suggested captions
- Export status tracking

### Guests
- CRM for guest pipeline
- Tier system (0-4)
- Outreach status tracking

---

## AI Features

The `/api/ai` endpoint supports:

| Type | Use Case |
|------|----------|
| `show-notes` | Generate show notes from transcript |
| `clip-suggestions` | Find viral moments in transcript |
| `guest-research` | Research potential guests |

Example:
```javascript
const response = await fetch('/api/ai', {
  method: 'POST',
  body: JSON.stringify({
    type: 'show-notes',
    prompt: transcriptText
  })
});
```

---

## Local Development

```bash
cd website
npm install
cp .env.example .env.local
# Fill in env vars
npm run dev
```

---

## Production Stack Cost

| Service | Cost |
|---------|------|
| Vercel Pro | Part of team |
| Supabase Free | $0 (up to 500MB) |
| Anthropic API | Usage-based |
| **Total** | ~$0 + API usage |

---

## Ian's Setup Checklist

- [ ] Create Supabase project
- [ ] Run schema.sql
- [ ] Add env vars to Vercel (Lets Vibe team)
- [ ] Enable Vercel AI Gateway
- [ ] Test /api/ai endpoint

---

*Last updated: January 14, 2026*
