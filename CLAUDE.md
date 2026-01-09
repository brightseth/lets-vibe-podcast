# Let's Vibe! Podcast

**TED Talks for vibe coders** - Weekly conversations with the creators shaping AI-assisted creativity.

Hosts: **Seth Goldstein** + **Lukas Amacher**
First Guest: tez (@thefunnyguysNFT) - CONFIRMED
Launch: Feb 10, 2026 with 3 episodes

---

## For Lucas (Collaborator Quick Start)

Hey Lucas! Point your Claude here and you're in. Everything routes through the agent system.

```bash
cd ~/Projects/lets-vibe-podcast/letsvibe-agent
npm install
npm run agent                    # See system status
npm run agent route "your task"  # Route anything to the right agent
```

**Your key tasks:**
- Co-host prep and talking points
- Guest intros and scheduling coordination
- Tutorial segment ideas
- Community/Discord planning

**To collaborate via /vibe:** `vibe dm @seth`

---

## Show Format (40-60 min)

```
┌─────────────────────────────────────────────────────────────┐
│  1. OPENER (5-10 min)                                       │
│     Seth & Lucas catch up - tools, news, what we're building│
├─────────────────────────────────────────────────────────────┤
│  2. INTERVIEW (25-35 min)                                   │
│     Deep conversation with guest - their journey, process   │
├─────────────────────────────────────────────────────────────┤
│  3. TUTORIAL CLIP (10-15 min)                               │
│     Hands-on walkthrough - becomes standalone YouTube clip  │
│     (Can be guest or community contributor)                 │
└─────────────────────────────────────────────────────────────┘
```

**Vibe:** Acquired meets Oprah - sophisticated but warm, practical not theoretical

---

## Cover Art

**LOCKED:** Refined v2 - sculptural flowing form (Peter Saville / Skulptuur energy)
- Location: `letsvibe-agent/data/cover-art/COVER-ART-FINAL-refined-v2.png`
- Next: Add "LET'S VIBE!" text in Figma, export 3000x3000

**Future idea:** Commission artists for episode covers → limited edition NFTs

---

## Quick Commands

```bash
cd letsvibe-agent

# Agent system
npm run agent                              # System status
npm run agent route "your task"            # Route to right agent
npm run agent:prepare "Guest Name"         # Full guest prep
npm run agent:weekly                       # Weekly planning

# Workflows
npm run guest:research                     # Prioritized guest list
npm run guest:outreach -- --export         # Generate outreach markdown
npm run cover-art -- --style refined       # Generate cover art variations
```

---

## Agent System

| Agent | Focus | Example Task |
|-------|-------|--------------|
| 🎤 Booking | Guests | "draft outreach for Simon Willison" |
| 🔬 Research | Prep | "research vibe coding trends" |
| 📣 Promotion | Content | "create content calendar for ep 1" |
| 🤝 Partnerships | Revenue | "find AI tool sponsors" |

---

## Guest Pipeline

**25 guests in database across 7 tiers:**

| Tier | Category | Examples |
|------|----------|----------|
| 0 | Unicorn Gets | Rick Rubin, Karpathy, Boris Dayma, Ian Rogers |
| 1 | Vibe Coding Pioneers | steipete, Simon Willison, Pieter Levels, swyx |
| 2 | AI Art Legends | Gene Kogan, Claire Silver, Holly Herndon |
| 3 | Collectors/Tastemakers | tez (CONFIRMED), 6529, Snowfro |

**Dream guests mentioned:** Karpathy (coined "vibecoding"), Rick Rubin (popularized it), Frank the Gods, steipete (Vienna), Ian Rogers (Ledger)

---

## Community Vision

**"Product Hunt for vibe coders"**
- Bottom-up: Submit your vibe-coded project
- Community votes things up/down
- Top projects get featured on show
- Connects to vibecodings directory

---

## Sponsors & Partners (Target)

| Category | Targets |
|----------|---------|
| AI Platforms | Anthropic, OpenAI, Google, Meta |
| Tools | 11 Labs, Cursor, Replit, v0 |
| Hardware | Framework, vibestation partners |
| Creative | Midjourney, Runway, Art Blocks |

---

## Inspirations

- **Acquired** - Deep research, sophisticated
- **a16z podcasts** - Tech insight
- **Lex Fridman** - Long-form depth
- **20 Minute VC** - Efficient format
- **Tim Ferriss** - Practical takeaways
- **Anthropic Claude videos** - Tutorial quality
- **Oprah** - Warm, accessible

**NOT:** Hype podcasts, crypto bro energy, empty superlatives

---

## Timeline

| Date | Milestone |
|------|-----------|
| Jan 8 | Cover art locked ✓ |
| Jan 15 | Final branding + Figma |
| Jan 20 | Record Episode 1 (tez) |
| Jan 22-26 | NODE Opening (content opp) |
| Jan 27 | Record Episode 2 |
| Feb 3 | Record Episode 3 |
| Feb 10 | Launch with 3 episodes |

---

## Next Actions

- [x] Cover art direction locked
- [ ] Add text to cover art in Figma
- [ ] Schedule recording with tez (week of Jan 20)
- [ ] Send outreach to Tier 1 guests
- [ ] Set up Spotify for Creators
- [ ] Plan tutorial segment format
- [ ] Design community submission system

---

## Key Files

| File | Purpose |
|------|---------|
| `VISION.md` | Full positioning, dream guests, tech stack |
| `GUESTS.md` | Guest pipeline tracker |
| `OUTREACH_QUEUE.md` | Generated outreach messages |
| `letsvibe-agent/` | Multi-agent system |
| `letsvibe-agent/data/cover-art/` | Cover art assets |

---

## Skills Available

- `/letsvibe` - Full podcast agent system
- `/sara-research` - Deep research
- `/sara-social` - Social content drafting

---

*Project: ~/Projects/lets-vibe-podcast*
*Agent: ~/Projects/lets-vibe-podcast/letsvibe-agent*
*Repo: Ready for collaboration*
