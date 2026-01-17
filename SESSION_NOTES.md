# Let's Vibe! Session Notes - Jan 14-16, 2026

## Session Summary

Major planning session. Created comprehensive agent system design for making Let's Vibe! an AI-powered media operation.

---

## Jan 16 Session (Latest)

### Website Enhancements
- **Enhanced hero** with host photos (@seth, @ianrogers), CTAs, gradient
- **Profile cards** for Seth and Ian in The Canon section
- **Ian's article** "Reflections on a Claude Code New Year" featured in The Canon
- **Essential Reading** now visual grid with book cover, profile pics, links
- **Profile images** for all podcasts and X accounts to follow
- **Navigation** added: Canon | Guests | Tools | Follow anchor links

### DNS/Email Setup
Added Resend email DNS records to Vercel for letsvibe.fm:
- DKIM: `resend._domainkey` TXT record
- MX: `send` → feedback-smtp.us-east-1.amazonses.com
- SPF: `send` TXT v=spf1 include:amazonses.com
- DMARC: `_dmarc` TXT v=DMARC1; p=none

### Agent System (BUILT)
Full multi-agent system exists at `/letsvibe-agent/`:
```
AGENTS
├── 🎤 BookingAgent      - Guest acquisition & scheduling
├── 🔬 ResearchAgent     - Deep research & preparation
├── 📣 PromotionAgent    - Social content & distribution
└── 🤝 PartnershipsAgent - Sponsors & collaborations

COMMANDS
npm run agent           - Show status
npm run agent:weekly    - Run weekly planning
npm run agent:prepare "Guest Name" - Prepare for guest
```

**Note:** Needs valid Anthropic API key in `.env` (get from console.anthropic.com)

### Messaged Ian on /vibe
Sent update about agent build, launch plan, DNS setup.

---

## Launch Plan

| Date | Action |
|------|--------|
| **Jan 21-22 (Tue/Wed)** | Record Episode 1 |
| Jan 23 (Thu) | Edit + generate show notes with agent |
| **Jan 24 (Fri)** | **PUBLISH** - NODE Public Opening (1000+ RSVPs) |
| Jan 25-26 | Promote at NODE Talks + Party |

---

## Jan 17 - Cover Art Final

**New Cover Created with NanoBanana Pro (fal.ai):**
- Rick Rubin minimal aesthetic - warm cream background, stacked serif typography
- "LET'S VIBE" + "creativity in the age of AI" tagline
- Saved to `website/public/cover.png` and `letsvibe-agent/data/cover-art/FINAL-COVER-ART-v2.png`

**Generation setup:** `generate-cover.js` uses fal.ai with `FAL_KEY` env var

---

## Jan 16 - Ian Voice Message

**Ian's Update (heading to Forward conference in Munich):**
- Has local setup working, built a **link curation tool** for weekly emails
- Vision: Weekly email = episode + curated AI news of the week
- Has uncommitted code to push when back
- **Resend DNS FAILED** - will send screenshot to debug
- Away this weekend, no computer - sync after weekend

**No rush on anything until he's back.**

---

## Next Session TODO

1. [x] Create episode cover art ✓ (NanoBanana Pro, Jan 17)
2. [ ] Debug Resend DNS (wait for Ian's screenshot)
3. [ ] Get valid Anthropic API key for agent (console.anthropic.com)
4. [ ] Register @letsvibepod on Twitter
5. [ ] Prep Episode 1 topics and outline
6. [ ] Set up Riverside.fm recording room
7. [ ] Coordinate with Ian on recording time (after weekend)

---

## Key Files

| File | Purpose |
|------|---------|
| `~/.claude/plans/joyful-jingling-brooks.md` | Full agent system plan |
| `letsvibe-agent/` | Multi-agent system (BookingAgent, ResearchAgent, etc.) |
| `website/src/app/page.tsx` | Homepage with Canon, Tools, Follow sections |
| `IAN_ONBOARDING.md` | Share with Ian |
| `TECH_STACK.md` | Technical setup guide |

---

### Jan 15 Update
Fleshed out website with new sections:
- **The Canon** - Rick Rubin's "The Way of Vibing" as the bible
- **Podcasts we follow** - Lex, Dwarkesh, Latent Space, TWIML, Acquired
- **Who to follow on X** - @karpathy, @steipete, @simonw, @levelsio, @swyx, @bcherny, @claudeai, @AnthropicAI
- **Tools we use** - Claude Code, /vibe (slashvibe.dev promoted), Cursor, Descript, Riverside
- Updated all guest entries with Twitter handles

---

## What We Built

### Infrastructure
- **Website live at letsvibe.fm** - Rick Rubin aesthetic
- **GitHub connected** - github.com/brightseth/lets-vibe-podcast
- **New Vercel team** - "Lets Vibe" (Ian invited)
- **Supabase + AI SDK** - Foundation installed

### Documentation
- `PRODUCTION_PLAYBOOK.md` - Production workflow
- `IAN_ONBOARDING.md` - Everything Ian needs
- `TECH_STACK.md` - Supabase + Vercel AI Gateway setup
- `~/.claude/plans/joyful-jingling-brooks.md` - **FULL AGENT SYSTEM PLAN**

---

## The Plan (Approved)

**Let's Vibe Agent** - The fulcrum of the show

### Mode
- Hybrid: Scheduled daily cron + manual triggers
- Semi-auto Twitter: Auto likes/follows, drafts for DMs
- Handle: @letsvibepod

### Guest Research (20+ targets)
**Tier 0:** Karpathy (@karpathy), Rick Rubin, Boris Cherny (@bcherny), steipete (@steipete)
**Tier 1:** Simon Willison (@simonw), Pieter Levels (@levelsio), swyx (@swyx)
**Tier 2:** Gene Kogan, Claire Silver, Holly Herndon

### Media to Monitor
- Podcasts: Lex Fridman, Dwarkesh, Latent Space, TWIML
- YouTube: Fireship, Two Minute Papers
- Newsletters: The Neuron, Prompt Engineering Daily

### Implementation Phases
1. Foundation - Supabase schema + API
2. Twitter Integration - Monitoring + engagement
3. Outreach Workflow - DM drafts + approval
4. Scheduling - Cal.com integration
5. Production Pipeline - Show notes, clips
6. Public Website - /research, /guests pages

---

## Vercel Setup Note

**IMPORTANT:** Set Root Directory to `website` in:
- vercel.com/lets-vibe/lets-vibe-podcast/settings/general

---

## Next Session

1. Run extended Supabase schema
2. Build /api/guests and /api/outreach
3. Create /research and /guests pages
4. Register @letsvibepod on Twitter
5. Start Phase 1 implementation

---

## Key Files

| File | Purpose |
|------|---------|
| `~/.claude/plans/joyful-jingling-brooks.md` | Full agent system plan |
| `IAN_ONBOARDING.md` | Share with Ian |
| `TECH_STACK.md` | Technical setup guide |
| `supabase/schema.sql` | Database schema (needs extension) |

---

*Plan saved. Ready to implement the Let's Vibe Agent.*
