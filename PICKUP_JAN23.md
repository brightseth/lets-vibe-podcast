# Let's Vibe! - Pickup Notes (Jan 23, 2026)

**Directory:** `/Users/sethstudio1/Projects/lets-vibe-podcast`

---

## Immediate Next Steps

### 1. Ian's Newsletter System - ✅ LIVE

**Status:** Ian pushed! System fully deployed and tested

- [x] GitHub invite sent to `fistfulayen` (correct username)
- [x] Vercel env vars configured (RESEND_API_KEY, CRON_SECRET)
- [x] Ian accepted invite and pushed code
- [x] Auto-deployed to production
- [x] Tested: letsvibe.fm/admin/login ✅ (200 OK)
- [x] Tested: letsvibe.fm/links ✅ (200 OK)

**What Ian built:**
- `/admin` - Dashboard with magic link auth (ready to use)
- `/admin/submit` - Paste URL, AI generates title + "why we love it"
- `/admin/review` - Approval workflow for both hosts
- `/links` - Public subscribe page with double opt-in

**AI Features:**
- GPT-4o analyzes links via Vercel AI Gateway
- Generates catchy editorial titles (not just page titles)
- Writes "why we love it" in Seth + Ian voice
- Auto-categorizes content
- Detects paywalls/login requirements
- Fallback mode if AI_GATEWAY_API_KEY not set

### 2. Try It Now

**Login:**
```
Visit: https://letsvibe.fm/admin/login
Enter: seth@slashvibe.dev (or your email)
→ Check email for magic link
→ Click to access dashboard
```

**Test the AI:**
```
1. Go to /admin/submit
2. Paste any URL (e.g., a blog post, YouTube video, tweet)
3. Click "Process"
4. Watch AI generate title, category, description
5. Edit if needed → Add to Today's Digest
```

**Share subscribe page:**
```
https://letsvibe.fm/links
```

---

## Matt Medved Partnership

- **X Post:** 2.5k views thanking @seth for vibe coding intro
- **Meeting:** ✅ Saturday Jan 25 at NODE (COMPLETE)
- **Structure:** Seth+Ian = hosts/content, Matt = exec producer/distribution/sales
- **Entity:** Delaware C Corp via Stripe Atlas (decided)

**Current Status (Sunday AM):**
- Matt is interested and on board
- Seth + Ian need to align on exact equity split
- Then circle back to Matt with formal proposal

**Documents created for Ian alignment:**
- `INTERNAL_SETH_IAN_ALIGNMENT.md` - Full internal discussion doc
- `QUICK_COMPARISON_FOR_IAN.md` - Visual comparison of options
- `OWNERSHIP_MODEL.md` - Strategic analysis
- `EQUITY_OPTIONS_COMPARISON.md` - Detailed math at all revenue levels

**Next steps:**
1. Ian confirms equity structure (40/40/10/10 recommended)
2. Create formal proposal for Matt
3. Get Matt's verbal agreement
4. File Delaware C Corp by Feb 1

---

## NODE Opening Status

- **Jan 23 (Today):** Donor Preview
- **Jan 24 (Tomorrow):** Public Opening (1000+ RSVPs)
- **Jan 25 (Saturday):** Talks + Party + Matt meeting
- **Chat assistant:** LIVE at node-artist-relations.vercel.app

---

## Vercel Env Vars (DONE)

| Variable | Status |
|----------|--------|
| RESEND_API_KEY | ✅ Set (all environments) |
| CRON_SECRET | ✅ Set (all environments) |
| NEXT_PUBLIC_SUPABASE_URL | ✅ Already set |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | ✅ Already set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Already set |
| AI_GATEWAY_API_KEY | ⏭️ Skipped (optional) |

---

## Open Items

- [ ] Register @letsvibepod on Twitter
- [ ] Set up Riverside.fm recording room
- [ ] Book recording time with Ian (Episode 1)
- [ ] Joi Ito as future guest (Ian's idea)

---

## Key Files

| File | Purpose |
|------|---------|
| `SESSION_NOTES.md` | Full session history (updated today) |
| `IAN_SUPABASE_ACCESS.md` | Ian's database access details |
| `TEN_COMMANDMENTS.md` | Podcast principles |
| `PARTNERSHIP_PROPOSAL.md` | Matt Medved partnership doc |

---

## Commands to Resume

```bash
# Check if Ian pushed
cd /Users/sethstudio1/Projects/lets-vibe-podcast
git fetch origin && git log origin/main --oneline -5

# Pull his changes
git pull origin main

# Check Vercel deployment
vercel ls

# Test newsletter system
open https://letsvibe.fm/admin/login
```

---

*Last updated: Jan 23, 2026 ~11:05 AM*
