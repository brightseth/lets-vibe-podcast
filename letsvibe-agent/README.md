# letsvibe-agent

Production assistant agent for **Let's Vibe!** podcast.

## Overview

This agent automates podcast production workflows:

- **Guest Research** - Find and prioritize potential guests
- **Outreach** - Generate personalized invitation messages
- **Show Notes** - Create show notes from transcripts
- **Social Content** - Generate content calendars and posts

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Edit .env with your API keys

# Run agent status
npm start

# Run specific workflows
npm run guest:research
npm run guest:outreach
```

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Show agent status |
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
│   ├── index.ts          # Main entry point
│   ├── types.ts          # TypeScript types
│   ├── config.ts         # Agent configuration
│   ├── data/
│   │   └── guests.ts     # Guest database
│   └── workflows/
│       ├── guest-research.ts
│       ├── outreach.ts
│       ├── show-notes.ts
│       └── social.ts
├── config/               # Configuration files
├── data/                 # Runtime data (gitignored)
└── scripts/              # Utility scripts
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

## Integrations

Configure in `.env`:

- **Anthropic** - Claude API for content generation
- **Manus** - Graphics via Nano Banana Pro
- **Google** - Imagen 4 for images, Veo 3 for video
- **Twitter** - Post clips and announcements
- **Farcaster** - Web3 native audience
- **YouTube** - Video episodes and Shorts
- **Cal.com** - Guest scheduling
- **Descript** - Transcription and editing

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
