# Let's Vibe! - Ready to Build

**Status:** Infrastructure complete, ready for development
**Date:** January 22, 2026

---

## ✅ What's Complete

### 1. Ten Commandments
- **Created:** https://www.slashvibe.dev/a/let-s-vibe-ten-commandments-71812e
- Sent to Ian on WhatsApp ✅
- Based on Acquired, Dwarkesh, Lex + what we uniquely bring
- Top 4: Do the work, Ship buildable, Historical context, Nothing to prove

### 2. Database (Supabase)
- **Project:** lets-vibe-podcast
- **Tables:** episodes, clips, guests
- **Team Access:** Seth + Ian (both admins)
- **Vercel Integration:** Auto-connected (production + preview)
- **URL:** https://mztcznhtclnenacwapaz.supabase.co

### 3. Business Entity
- **Decision:** Delaware C Corp (Ian confirmed: "Def do America")
- **Path:** Stripe Atlas (handles incorporation, EIN, bank, Stripe all-in-one)
- **Cost:** ~$500 + state fees
- **Timeline:** 1-2 weeks
- **Next:** Decide equity split (50/50 or custom)

### 4. Recording Plan
- **Format:** Ian interviews Seth (Episode 1), then flip (Episode 2)
- **Setup:** Riverside remote (Ian in Italy, Seth in NY)
- **Time:** 9am NY / 3pm Italy
- **Waiting for:** Ian to pick a day next week

---

## 📂 Key Files

| File | Purpose |
|------|---------|
| `TEN_COMMANDMENTS.md` | Podcast principles |
| `STRIPE_SETUP.md` | Entity + payment setup guide |
| `SUPABASE_SETUP.md` | Database setup guide |
| `IAN_SUPABASE_ACCESS.md` | Ian's access instructions |
| `EPISODE_1_RECORDING_PLAN.md` | Recording logistics + story arc |
| `PARTNERSHIP_PROPOSAL.md` | Matt Medved partnership details |

---

## 🚀 What You Can Build Now

### Admin Panel
Use Supabase tables to build:
- Episode manager (add, edit, publish)
- Guest CRM (track outreach, tiers)
- Clip generator (AI virality scoring)

### AI Agents
The infrastructure is ready for:
1. **Guest Research Agent** - Auto-populate pipeline from Twitter
2. **Show Notes Generator** - Create notes from transcripts
3. **Clip Suggestion Agent** - Find viral moments
4. **Outreach Agent** - Draft personalized guest invitations

### Website Features
- Episode listing (from Supabase)
- Guest showcase (from guests table)
- Clip gallery (viral moments)
- Admin dashboard

---

## 🎯 Next Actions

### This Week
1. **Decide equity split** with Ian (for Stripe Atlas application)
2. **Apply via Stripe Atlas** for Delaware C Corp
3. **Schedule Episode 1** recording (Ian to pick day)

### Before Recording
1. Prep Seth's story (Turntable → /vibe → vibe coding moment)
2. Set up Riverside.fm recording room
3. Test audio/video setup

### After Recording
1. Transcribe with Descript
2. Generate show notes (AI agent)
3. Extract viral clips (AI agent)
4. Publish to Spotify for Creators

---

## 💾 Database Schema Quick Reference

### Episodes Table
```sql
CREATE TABLE episodes (
  number INT,           -- Episode number
  title TEXT,           -- Episode title
  guest_name TEXT,      -- Guest name
  status TEXT,          -- draft | recorded | editing | published
  audio_url TEXT,       -- Spotify/RSS URL
  transcript TEXT,      -- Full transcript
  show_notes TEXT       -- Generated show notes
);
```

### Clips Table
```sql
CREATE TABLE clips (
  episode_id UUID,      -- Links to episode
  start_time INT,       -- Timestamp start (seconds)
  end_time INT,         -- Timestamp end (seconds)
  virality_score FLOAT, -- AI prediction (0-1)
  status TEXT           -- suggested | approved | published
);
```

### Guests Table
```sql
CREATE TABLE guests (
  name TEXT,
  twitter TEXT,
  tier INT,             -- 0 (unicorn) to 4 (tier 4)
  outreach_status TEXT, -- wishlist | contacted | confirmed
  notes TEXT
);
```

---

## 🔗 Quick Links

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Vercel Project:** https://vercel.com/lets-vibe/letsvibe-fm
- **Website:** https://letsvibe.fm
- **Ten Commandments:** https://www.slashvibe.dev/a/let-s-vibe-ten-commandments-71812e

---

## Team Access

**Both Seth and Ian can:**
- Access Supabase dashboard (invited as admins)
- Deploy website (Vercel team member)
- View/edit database (Table Editor)
- Run SQL queries (SQL Editor)
- Pull environment variables locally (`vercel env pull`)

---

**Infrastructure is done. Time to build.** 🚀
