# Let's Vibe! Podcast - Claude Code Session Prompt

**Copy and paste this entire prompt into a new Claude Code terminal session to focus on podcast development.**

---

## PROMPT START

I'm launching a podcast called **"Let's Vibe!"** with Lukas Amacher. This is my priority creative project for Q1 2026.

### Project Location
```
~/Projects/lets-vibe-podcast/
├── README.md        # Project plan + timeline
├── VISION.md        # Full vision doc (READ THIS FIRST)
├── GUESTS.md        # Guest pipeline tracker
└── DISTRIBUTION.md  # Tech setup guide
```

**First action:** Read `~/Projects/lets-vibe-podcast/VISION.md` to understand the full scope.

---

### What This Podcast Is

**Positioning:** Vibecoding for artists, collectors, and creatives - NOT for software developers, founders, enterprises, or agencies.

**Hosts:** Seth Goldstein + Lukas Amacher
**Frequency:** Weekly
**Format:** 45-60 min conversations
**First Guest:** tez (@thefunnyguysNFT) - already said yes

**Vibe:** Rick Rubin's calm curiosity meets tech optimism. Conversational, not interview-y. Accessible to non-technical creatives.

---

### Tools We Have Access To

**Graphics Generation:**
- Nano Banana Pro (via Manus API) - `MANUS_API_KEY` is set
- Imagen 4 (via Google API) - `GOOGLE_API_KEY` needed
- Spirit slide deck system at `~/.claude/skills/spirit-slide-deck/`

**Video Generation:**
- Veo 3 (Google) - for sizzle reels and promos

**Agent Development:**
- Claude Agent SDK - for building a letsvibe-agent
- Clawdbot at `~/Projects/clawdbot/` - messaging gateway reference

**Design Systems:**
- `/vibe-design` skill - warmer social aesthetic
- `~/.claude/skills/vibe-design/` - design tokens

**Social:**
- `/vibe` MCP server - for sharing progress
- Twitter API access possible
- Farcaster via Warpcast

---

### Priority Tasks for This Session

**1. BRANDING**
- [ ] Generate cover art options using Nano Banana Pro (3000x3000)
- [ ] Define color palette and visual identity
- [ ] Create social media profile graphics
- [ ] Design episode thumbnail template

**2. TECH SETUP**
- [ ] Set up Spotify for Creators account structure
- [ ] Plan YouTube channel setup
- [ ] Evaluate Riverside.fm vs alternatives for recording
- [ ] Set up guest scheduling workflow (Cal.com?)

**3. LETSVIBE-AGENT**
- [ ] Design agent architecture using Claude Agent SDK
- [ ] Capabilities: guest research, outreach drafting, show notes, clip identification, social drafting
- [ ] Create agent project structure
- [ ] Build MVP of guest research capability

**4. GUEST OUTREACH**
- [ ] Draft outreach template for dream guests
- [ ] Prioritize first 10 guests to contact
- [ ] Research: Boris (Anthropic), Karpathy, Pete (steipete), Ian Rogers, Rick Rubin connections

**5. CONTENT STRATEGY**
- [ ] Define episode format and structure
- [ ] Plan YouTube Shorts / TikTok clip strategy
- [ ] Create social content calendar template

---

### Dream Guest Research Needed

Find Twitter handles, Farcaster handles, and best contact approach for:

**Tier 0 (Unicorn Gets):**
- Rick Rubin - creativity philosophy
- Andrej Karpathy - coined "vibe coding"
- Boris Dayma - Anthropic/Claude team
- Ian Rogers - Ledger Chief Experience Officer, former Apple Music

**Tier 1 (Vibe Coding Pioneers):**
- Peter Steinberger (@steipete) - Clawdbot creator
- Simon Willison (@simonw) - LLM tools
- Pieter Levels (@levelsio) - indie hacker
- Riley Brown - Claude content creator
- McKay Wrigley - AI educator

**Tier 2 (AI Art Legends):**
- Gene Kogan - Abraham.ai
- Claire Silver - AI artist advocate
- Holly Herndon + Mat Dryhurst - AI music
- Refik Anadol - data sculpture
- Tyler Hobbs - generative art

**Tier 3 (Collectors/Tastemakers):**
- tez (@thefunnyguysNFT) - FIRST GUEST
- Cozomo de' Medici
- 6529
- Snowfro (Art Blocks)

---

### Cover Art Brief (for Nano Banana Pro)

```
Create podcast cover art for "Let's Vibe!" - a podcast about vibecoding for creatives.

Style: Warm, inviting, abstract generative art aesthetic
Colors: Gradient from warm orange to purple, with pops of cyan
Elements: Abstract flowing shapes suggesting creativity and connection
Text: "LET'S VIBE!" in bold, friendly sans-serif
Mood: Approachable, creative, optimistic, human

NOT: Dark/hacker aesthetic, corporate tech, cold/sterile, cyberpunk
YES: Warm, human, creative, approachable, art-forward

Size: 3000x3000 pixels, square
Format: PNG
```

---

### Agent Architecture Spec (for Claude Agent SDK)

```yaml
name: letsvibe-agent
version: 0.1.0
description: Production assistant for Let's Vibe! podcast

skills:
  guest_research:
    - Find potential guests by topic/niche
    - Lookup Twitter/Farcaster handles
    - Assess audience size and engagement
    - Score fit for podcast positioning

  outreach:
    - Draft personalized invitation emails
    - Follow-up sequences
    - Track response status

  production:
    - Generate show notes from transcripts
    - Identify quotable moments for clips
    - Timestamp best segments

  social:
    - Draft tweets and threads
    - Create Farcaster casts
    - Write YouTube descriptions
    - Schedule content calendar

  graphics:
    - Trigger Nano Banana Pro for episode art
    - Generate thumbnail variations
    - Create quote cards

integrations:
  - manus_api (graphics)
  - twitter_api (posting)
  - farcaster (posting)
  - youtube_api (uploads)
  - cal_com (scheduling)
  - descript_api (transcription)
```

---

### Key Context

- **NODE Opening:** Jan 22-26, 2026 - potential live recording opportunity
- **Co-host:** Lukas Amacher - need to coordinate on format/schedule
- **First recording target:** Week of Jan 20
- **Launch target:** Feb 10 with 3 episodes ready

---

### Commands Available

- `/seth` - Query my task database and context
- `/vibe` - Share progress with other builders
- `/sara-research` - Deep research on topics
- `/sara-social` - Social content drafting

---

### Success for This Session

1. Cover art generated and saved
2. letsvibe-agent project scaffolded
3. First 10 guest outreach drafts ready
4. Tech stack decisions made
5. Recording scheduled with Lukas

Let's build the podcast infrastructure. Start by reading VISION.md, then tackle branding first.

---

## PROMPT END
