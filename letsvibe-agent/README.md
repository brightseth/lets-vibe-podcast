# letsvibe-agent

Production assistant agent for **Let's Vibe!** podcast.

## Overview

A multi-agent system that automates podcast production:

- **BookingAgent** - Guest research, outreach, scheduling
- **ResearchAgent** - Deep research, talking points, competitive intel
- **PromotionAgent** - Show notes, clips, social content
- **PartnershipsAgent** - Sponsors, collaborations, revenue

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Add ANTHROPIC_API_KEY to .env

# View agent system status
npm run agent

# Route a task to the right agent
npm run agent route "find sponsors for AI tools"

# Run a workflow
npm run agent:prepare "Simon Willison"
```

## Agent Commands

| Command | Description |
|---------|-------------|
| `npm run agent` | Show system status |
| `npm run agent route "task"` | Route task to appropriate agent |
| `npm run agent:booking "task"` | Run booking agent directly |
| `npm run agent:research "task"` | Run research agent directly |
| `npm run agent:promotion "task"` | Run promotion agent directly |
| `npm run agent:partnerships "task"` | Run partnerships agent directly |

### Multi-Agent Workflows

```bash
# Prepare for a guest (research + talking points + social prep)
npm run agent:prepare "Guest Name"

# Post-episode production (show notes + content calendar)
npm run agent -- post-episode 1 "Guest" "@handle" "topic1,topic2"

# Weekly planning (next guests + trends + partnerships)
npm run agent:weekly
```

## Workflow Commands

| Command | Description |
|---------|-------------|
| `npm run guest:research` | Research and prioritize guests |
| `npm run guest:outreach` | Generate outreach messages |
| `npm run production:notes` | Generate show notes |
| `npm run social:draft` | Generate social content |

### Research Options

```bash
# Research all (prioritized)
npm run guest:research

# Research specific tier
npm run guest:research -- --tier=0

# Limit results
npm run guest:research -- --limit=5
```

### Outreach Options

```bash
# Generate for top priorities
npm run guest:outreach

# Generate for specific tier
npm run guest:outreach -- --tier=1

# Generate for specific guest
npm run guest:outreach -- --guest="Simon Willison"

# Export as markdown
npm run guest:outreach -- --export
```

## Architecture

```
letsvibe-agent/
├── src/
│   ├── index.ts              # Main entry point
│   ├── types.ts              # TypeScript types
│   ├── config.ts             # Brand, templates, episode format
│   ├── agents/               # Multi-agent system
│   │   ├── orchestrator.ts   # Routes tasks, coordinates workflows
│   │   ├── base-agent.ts     # Shared agent infrastructure
│   │   ├── booking-agent.ts  # Guest acquisition
│   │   ├── research-agent.ts # Deep research
│   │   ├── promotion-agent.ts # Social content
│   │   └── partnerships-agent.ts # Sponsors
│   ├── data/
│   │   └── guests.ts         # 25 guests database
│   └── workflows/            # Standalone workflows
│       ├── guest-research.ts
│       ├── outreach.ts
│       ├── show-notes.ts
│       └── social.ts
├── data/                     # Runtime data (gitignored)
└── .env                      # API keys (gitignored)
```

## Agent System

```
┌─────────────────────────────────────────────────────────────┐
│                      ORCHESTRATOR                           │
│    Routes tasks • Coordinates workflows • Classifies intent │
└─────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  🎤 BOOKING     │  │  🔬 RESEARCH    │  │  📣 PROMOTION   │
│                 │  │                 │  │                 │
│ • Guest search  │  │ • Guest prep    │  │ • Show notes    │
│ • Outreach      │  │ • Talking points│  │ • Clips         │
│ • Scheduling    │  │ • Trends        │  │ • Social posts  │
│ • Pre-briefs    │  │ • Competitive   │  │ • Calendars     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
         │
         ▼
┌─────────────────┐
│ 🤝 PARTNERSHIPS │
│                 │
│ • Sponsors      │
│ • Collaborations│
│ • Revenue       │
└─────────────────┘
```

## Guest Tiers

| Tier | Name | Examples |
|------|------|----------|
| 0 | Unicorn Gets | Rick Rubin, Karpathy |
| 1 | Vibe Coding Pioneers | steipete, Simon Willison |
| 2 | AI Art Legends | Gene Kogan, Claire Silver |
| 3 | Collectors/Tastemakers | 6529, Snowfro |
| 4 | Creative Tool Builders | Runway, Midjourney |
| 5 | Adjacent Interesting | Kevin Kelly, Craig Mod |
| 6 | Spirit/Eden Network | NODE artists |

## Environment Variables

Configure in `.env`:

```bash
# Required for agents
ANTHROPIC_API_KEY=sk-ant-...

# Optional integrations
MANUS_API_KEY=
GOOGLE_API_KEY=
TWITTER_API_KEY=
FARCASTER_FID=
YOUTUBE_API_KEY=
CALCOM_API_KEY=
DESCRIPT_API_KEY=
```

## Development

```bash
# Watch mode
npm run dev

# Build
npm run build

# Test
npm test
```

## License

MIT
