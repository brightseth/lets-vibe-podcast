# Let's Vibe! Session Notes - Jan 14 - Jan 30, 2026

## Session Summary

Major planning session. Created comprehensive agent system design for making Let's Vibe! an AI-powered media operation. Jan 21: Partnership exploration, Ten Commandments created. Jan 22: Entity setup, infrastructure planning. **Jan 30: EPISODE 1 RECORDED AND PUBLISHED.**

---

## Jan 30 Session - EPISODE 1 LAUNCH DAY

### Episode 1 Recorded and Published

**"The Netscape Moment"** - Ian interviews Seth

- **Recording:** Seth at 9 Orchard (NYC), Ian in Italy, via Riverside.fm
- **Duration:** ~52 minutes
- **Format:** Freeform conversation (no formal segments - finding the voice naturally)

### Distribution - ALL PLATFORMS LIVE

| Platform | Link | Status |
|----------|------|--------|
| Spotify | https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY | LIVE |
| Apple Podcasts | https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247 | LIVE |
| YouTube | https://youtu.be/1kWtAUDdvJc | LIVE |
| Website | https://letsvibe.fm | LIVE (updated with links) |

### Website Updated
- Homepage hero updated with Episode 1 live messaging and platform links
- Bottom CTA updated with episode description and listen buttons
- OG social sharing image added for link previews

### Show Notes Created
- `EPISODE_1_SHOW_NOTES.md` - Full chapters, quotes, people/projects mentioned, links
- `EPISODE_1_SOCIAL.md` - Tweet threads, clips, social strategy

### Social Launch
- Seth's 7-tweet thread drafted
- Ian's companion 4-tweet thread drafted
- 5 clip-worthy moments identified with timestamps
- 7-day content rollout planned

### Key Topics Covered in Episode
- The Netscape moment parallel (Claude Code = Netscape)
- Seth's 30-year origin story (Site Specific, Turntable.fm, Bright Moments)
- Oliver Sacks / Rachmaninoff analogy for vibe coding
- Fred Wilson "you can't grow corn" → SOLIENNE story
- Pro Tools democratization parallel
- AGI moment (Christmas 2025, Opus 4.5)
- Rick Rubin texts Ian daily about vibe coding
- Practical tips: Command+Space, Terminal, install Claude Code

### Post-Launch Plan Established
- Episode 2: Seth interviews Ian, Thu Feb 5, 12pm PST / 9pm CET
- Episode 3: tez (need to confirm)
- Weekly Thursday recording cadence
- Riverside Magic Clips replaces Descript for editing
- Agent system (`letsvibe-agent/`) ready to activate

### Next Steps
1. Update all docs to reflect Ep1 reality (SCHEDULE, PLAYBOOK, GUESTS)
2. Create Episode 2 outline and talking notes
3. Confirm tez for Episode 3
4. Begin guest outreach for Ep 4-6 (steipete, Simon Willison, Gene Kogan)
5. Test agent system
6. Create episode page template on website

---

## Jan 22 Session (Latest)

### Products Section Added ✅

Integrated Vibestation into Let's Vibe website:
- **New section:** "Products" between Tools and Why Now
- **Styled:** Clean, Rick Rubin-inspired aesthetic (not CRT retro)
- **Content:** Vibestation hardware guide featured with:
  - Link to vibestation.guide
  - 3-column grid: Displays, Keyboards, Furniture
  - Pull quote explaining the concept
  - Attribution to Seth / vibecodings ecosystem
- **Design:** Matches Let's Vibe aesthetic perfectly
- Ready to add more products in future

---

### Ten Commandments Delivered ✅

Successfully created and sent to Ian:
- **Link:** https://www.slashvibe.dev/a/let-s-vibe-ten-commandments-71812e
- Based on what makes Acquired, Dwarkesh, Lex great + what we uniquely bring
- **Top 4 Commandments:**
  1. Do the work (Acquired-level prep)
  2. Ship something buildable (tutorials mandatory)
  3. Historical context (our 30 years = superpower)
  4. Nothing to prove (freedom to be authentic)
- Ian received via WhatsApp ✅

### Entity Setup Decision

**Ian confirmed:** "Def do America and not France"

**Delaware C Corp via Stripe Atlas:**
- All-in-one: Incorporation + EIN + Bank Account + Stripe
- Timeline: 1-2 weeks
- Cost: ~$500 + state fees
- **Next step:** Decide equity split (50/50 or custom)

Updated `STRIPE_SETUP.md` with full Delaware C Corp path.

### Infrastructure Setup

**Supabase Database:** ✅ COMPLETE
- Project created: `lets-vibe-podcast`
- Schema deployed successfully:
  - `episodes` table (metadata, URLs, transcripts)
  - `clips` table (viral moments, social content)
  - `guests` table (CRM/pipeline tracking)
  - Row Level Security enabled
  - Indexes configured
- Credentials added to `website/.env.local`
- Credentials added to Vercel (production + preview)
- Ian invited to Supabase project (full access)
- Created `IAN_SUPABASE_ACCESS.md` with all details
- Connection tested and working ✅

**Team Setup Complete:**
- Both Seth and Ian can access Supabase dashboard
- Vercel deployments auto-connect to database
- Ready to build admin panel and AI agents

### Recording Schedule

- **Episode 1:** Ian interviews Seth (Italy → NY via Riverside)
- **Episode 2:** Seth interviews Ian
- **Proposed:** 9am NY / 3pm Italy
- Waiting for Ian to pick day next week

---

## Jan 21 Session

### Ian's Response - He's IN!

**Voice message feedback (walking to Eurostar for Dr. Martens board meeting):**

**Mission Evolution:**
- Was at elite event with Justin Trudeau, Katy Perry, Jacob Collier, Chris Anderson, Jimmy Wales (between DLD and Davos)
- Realized: "The future is here, it's not evenly distributed - our job is to distribute it evenly"
- **Like Tony Hawk building skate parks in underserved areas** - take AI superpowers to people who need them most
- Not just creative elite, but broader community impact
- Met with family offices (L'Oreal, Technogym) - sees opportunity to help multi-billion dollar families who won't get there on their own
- **"Where we have the most leverage is distributing the superpower to the most people"**

**Production Plan:**
- **Ian is IN** - ready to go
- He's in Italy next week - wants to pick recording time
- **Episode 1:** Ian interviews Seth
- **Episode 2:** Reverse - Seth interviews Ian
- Then start with guests

**Content Ideas:**
- **Wants to create "10 Commandments for Let's Vibe"** (taking page from SOLIENNE Constitution)
- Working on "link maker" tool for curating AI news weekly
- Vision: Weekly episode + curated AI news email

**Action Items from Ian:**
1. Pick recording time next week
2. ✅ Create 10 Commandments (COMPLETED - see TEN_COMMANDMENTS.md)
   - Based on what makes Acquired, Dwarkesh, Lex, a16z great
   - What vibe coding community needs
   - What Seth + Ian uniquely bring
   - **Top 4:** Ship something buildable, Historical context, Nothing to prove, Do the work
3. Finish his link maker tool

---

### Partnership Exploration

Had sync call exploring distribution partnership model. Key insights:

**Partnership Structure Discussed:**
- Distribution partner brings: existing audience, sponsorship sales, production expertise
- Seth + Ian bring: hosts, guest access (Rick Rubin, LVMH), Paris studio, /vibe distribution
- Agents handle: guest research, outreach, show notes, clips, social content
- Revenue split model proposed: Partner 30% / Hosts 50% / Production reserve 20%

**Sponsorship Strategy:**
- Platform tier: Anthropic, OpenAI, Google
- Infrastructure tier: Vercel, Supabase, Replit
- Tools tier: Cursor, Descript, Riverside
- Adjacent tier: Notion, Linear, Figma

**Audience Clarity:**
- FOR: Curious creatives who've heard "vibe coding" but don't know where to start
- NOT FOR: Hardcore devs, crypto twitter, meme coin crowd, tutorial junkies
- Tone: "Acquired meets Oprah" — sophisticated but warm

**Content Gaps Identified:**
- "What is MCP?" — Nobody explaining Model Context Protocol simply
- Creative workflow — How artists actually use these tools
- Business of vibe coding — Economics, sustainability
- The cultural shift — Philosophy, not just technology

### Docs Created
- `PARTNERSHIP_PROPOSAL.md` — One-pager for Ian review
- Updated `/backstage` page with full insights
- Updated homepage with clearer positioning

### Website Updates
- Refined "The Premise" section with clearer audience targeting
- Added "Acquired meets Oprah" positioning
- Updated closing with Jan 24 launch date
- Backstage page now includes: content opportunities, sponsorship strategy, partnership model, weekly workflow

### Partnership Proposal Shared
- Created artifact on /vibe: https://slashvibe.dev/a/let-s-vibe-partnership-proposal
- Auto-shared with @ianrogers via DM
- **Open question:** Revenue split structure
  - Current proposal: Partner 30% / Seth+Ian 50% / Reserve 20%
  - Alternative A: Equal thirds (33/33/33)
  - Alternative B: Hosts majority (35/35/30)
  - Seth wants him and Ian to be equal partners

### Next Steps
1. **Decide revenue split structure** with Ian
2. Update artifact with agreed split
3. Set up call: Seth + Ian + potential distribution partner (Matt)
4. Finalize partnership structure
5. Record Episode 1 (Jan 21-22)
6. PUBLISH Jan 24 at NODE opening

---

## Jan 16 Session

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

## Jan 17 - Episode 1 Outline + Cover Art

**Episode 1 Outline Created:**
- "The Vibe Coding Moment" - hybrid format (hosts + Rick Rubin clip)
- 50-55 min: Intro → Rick clip → Discussion → Rapid Fire → Outro
- Full doc: `EPISODE_1_OUTLINE.md`
- Sent to Ian on /vibe for feedback
- Key ask: Ian to reach out to Rick for clip or Tetragrammaton permission

**Cover Art (NanoBanana Pro via fal.ai):**
- Rick Rubin minimal aesthetic - warm cream background, stacked serif typography
- "LET'S VIBE" + "creativity in the age of AI" tagline
- Saved to `website/public/cover.png`

**Generation setup:** `generate-cover.js` uses fal.ai with `FAL_KEY` env var

---

## TODO: Vibe Plugin Install

```bash
claude plugin add-marketplace https://github.com/VibeCodingInc/vibe-plugin.git
claude plugin install vibe@vibe-plugins
claude plugin enable vibe@vibe-plugins
```

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
2. [x] Prep Episode 1 outline ✓ (sent to Ian for feedback)
3. [ ] Wait for Ian's feedback on Episode 1 + Rick Rubin ask
4. [ ] Debug Resend DNS (wait for Ian's screenshot)
5. [ ] Register @letsvibepod on Twitter
6. [ ] Set up Riverside.fm recording room
7. [ ] Install vibe plugin (commands saved above)
8. [ ] Book recording time with Ian

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
