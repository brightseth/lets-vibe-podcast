# Let's Vibe! Session Notes - Jan 14-15, 2026

## Session Summary

Major planning session. Created comprehensive agent system design for making Let's Vibe! an AI-powered media operation.

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
