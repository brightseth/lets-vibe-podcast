# Supabase Setup for Let's Vibe

**Project:** Let's Vibe Podcast
**Purpose:** Episode management, guest CRM, clip tracking
**Status:** Schema ready, project needs to be created

---

## Quick Setup

### 1. Create Supabase Project

**Go to:** https://supabase.com/dashboard

1. Click "New Project"
2. **Organization:** Create new "Let's Vibe" or use existing
3. **Project name:** lets-vibe-podcast
4. **Database Password:** (Generate strong password - save it!)
5. **Region:** US East (closest to your users)
6. **Pricing Plan:** Free tier is fine to start

### 2. Run the Schema

Once project is created:

1. Go to **SQL Editor** in Supabase dashboard
2. Click **"New Query"**
3. Copy contents of `/supabase/schema.sql`
4. Paste and click **Run**

This creates:
- `episodes` table - Episode metadata, URLs, transcripts
- `clips` table - Social clips with virality scores
- `guests` table - Guest pipeline/CRM
- Row Level Security policies
- Indexes for performance

### 3. Get Your Credentials

In Supabase dashboard:

1. Go to **Settings** → **API**
2. Find these values:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon/public key:** Long string starting with `eyJ...`
   - **service_role key:** Another long string (keep secret!)

### 4. Configure Website

Add to `/Users/sethstudio1/Projects/lets-vibe-podcast/website/.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Anthropic for AI features
ANTHROPIC_API_KEY=sk-ant-...
```

### 5. Test Connection

```bash
cd /Users/sethstudio1/Projects/lets-vibe-podcast/website
npm run dev
```

Open http://localhost:3000 - should connect without errors

---

## What This Enables

### Episode Management
```sql
-- Create episode
INSERT INTO episodes (number, title, guest_name, status)
VALUES (1, 'The Vibe Coding Moment', 'Rick Rubin', 'draft');

-- Publish episode
UPDATE episodes SET status = 'published', published_at = NOW()
WHERE number = 1;
```

### Guest CRM
```sql
-- Add guest to pipeline
INSERT INTO guests (name, twitter, tier, category, outreach_status)
VALUES ('Andrej Karpathy', '@karpathy', 0, 'Vibe Coding Pioneers', 'wishlist');

-- Track outreach
UPDATE guests
SET outreach_status = 'contacted', contacted_at = NOW()
WHERE name = 'Andrej Karpathy';
```

### Clip Generation
```sql
-- AI suggests viral clips
INSERT INTO clips (episode_id, title, start_time, end_time, virality_score, status)
VALUES (
  'episode-uuid',
  'Best quote about vibe coding',
  450, -- 7:30
  480, -- 8:00
  0.92,
  'suggested'
);
```

---

## Database Features

### Tables

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `episodes` | Episode metadata | number, title, guest_name, status, urls |
| `clips` | Social clips | episode_id, start/end times, virality_score |
| `guests` | Guest pipeline | name, tier, outreach_status |

### Row Level Security

- **Public:** Can view published episodes and approved clips
- **Authenticated:** Full CRUD on all tables
- Perfect for admin panel + public website

### Indexes

- Fast queries by status, published date, tier
- Optimized for guest pipeline views
- Episode lookup by number

---

## Next Steps

Once Supabase is set up:

1. **Build admin panel** - Manage episodes, guests, clips
2. **Guest research agent** - Auto-populate guest pipeline from Twitter
3. **Clip suggestion agent** - AI identifies viral moments
4. **Show notes generator** - Auto-generate from transcript

---

## Vercel Integration

To deploy website with Supabase:

```bash
cd /Users/sethstudio1/Projects/lets-vibe-podcast/website
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add ANTHROPIC_API_KEY production
```

Then deploy:
```bash
vercel --prod
```

---

## Costs

**Supabase Free Tier:**
- 500 MB database
- 1 GB file storage
- 50 GB bandwidth
- Plenty for podcast launch

**Upgrade to Pro ($25/mo) when:**
- Need more than 500 MB (lots of transcripts)
- Want daily backups
- Need custom domains

---

*Schema ready at: `/Users/sethstudio1/Projects/lets-vibe-podcast/supabase/schema.sql`*
