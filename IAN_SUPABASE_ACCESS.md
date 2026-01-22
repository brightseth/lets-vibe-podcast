# Supabase Access for Ian

**Project:** Let's Vibe Podcast Database
**Status:** ✅ Ready to use

---

## What's Set Up

### Database Tables

| Table | What It Does |
|-------|-------------|
| **episodes** | Episode metadata, URLs (Spotify, YouTube, Apple), transcripts, show notes |
| **clips** | Viral social clips with AI virality scores |
| **guests** | Guest pipeline CRM (contact info, outreach tracking) |

---

## Your Access

### 1. Supabase Dashboard

**Watch for email invite** from Supabase to access:
- **Project:** lets-vibe-podcast
- **URL:** https://mztcznhtclnenacwapaz.supabase.co

Once you accept the invite, you can:
- View/edit data in **Table Editor**
- Run SQL queries in **SQL Editor**
- Check API logs and analytics
- Configure database settings

### 2. Vercel Environment Variables

Already added to the **"letsvibe-fm"** Vercel project:
- ✅ Production environment
- ✅ Preview environment

**These are shared with the whole team**, so when you deploy, Supabase will work automatically.

To pull them locally:
```bash
cd /path/to/lets-vibe-podcast/website
vercel env pull .env.local
```

This downloads all team env vars to your local `.env.local` file.

---

## How to Use

### View Data (Supabase Dashboard)

1. Go to https://mztcznhtclnenacwapaz.supabase.co
2. Click **Table Editor**
3. Select table: `episodes`, `clips`, or `guests`
4. View, edit, or add rows

### Query Data (SQL Editor)

```sql
-- See all episodes
SELECT * FROM episodes ORDER BY created_at DESC;

-- Add a guest to pipeline
INSERT INTO guests (name, twitter, tier, category)
VALUES ('Andrej Karpathy', '@karpathy', 0, 'Vibe Coding Pioneers');

-- Track episode progress
UPDATE episodes SET status = 'recorded' WHERE number = 1;
```

### Use in Code

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Get all published episodes
const { data: episodes } = await supabase
  .from('episodes')
  .select('*')
  .eq('status', 'published')
  .order('number', { ascending: false })

// Add a new episode
const { data } = await supabase
  .from('episodes')
  .insert({
    number: 1,
    title: 'The Vibe Coding Moment',
    guest_name: 'Seth Goldstein',
    status: 'draft'
  })
```

---

## Credentials (For Reference)

These are already in Vercel, but if you need them:

**Project URL:**
```
https://mztcznhtclnenacwapaz.supabase.co
```

**Anon Key (public, safe to expose):**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dGN6bmh0Y2xuZW5hY3dhcGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODU3MzUsImV4cCI6MjA4NDY2MTczNX0.9thE3_6tR6pfo6YPmrFIEAvWbhLIAGYeOt1dEcQ0H38
```

**Service Role Key (secret, server-side only):**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dGN6bmh0Y2xuZW5hY3dhcGF6Iiwicm9sZSI6InNlcnZpY2Vcm9sZSIsImlhdCI6MTc2OTA4NTczNSwiZXhwIjoyMDg0NjYxNzM1fQ.N86Qtoxq6m8kMf900H40mia74SIch3oGvSBJ9w6ggC8
```

---

## Next Steps

Once you have Supabase access, you can:

1. **Build admin panel** - Manage episodes, guests, clips
2. **Guest research agent** - Auto-populate guest pipeline
3. **Clip suggestion agent** - AI finds viral moments from episodes
4. **Show notes generator** - Auto-generate from transcripts

---

*Database is live and ready to use!*
