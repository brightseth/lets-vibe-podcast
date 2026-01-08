# Let's Vibe! - Vision Document

## Positioning

**NOT:** Another tech podcast for software developers, founders, enterprises, agencies

**YES:** The vibecoding podcast for artists, collectors, and creatives who want to build with AI

### Tagline Options
- "Vibecoding for creatives"
- "Where art meets AI"
- "Building beautiful things with AI"
- "The podcast for creative vibecoders"

### The Gap We Fill
- Andrej Karpathy → too technical, developer-focused
- Lex Fridman → too long, too philosophical
- All In Pod → too VC/business focused
- The existing Claude Code content → tutorials, not conversations

**Let's Vibe! is:** Conversations with the most interesting people at the intersection of creativity and AI. Rick Rubin energy meets vibe coding.

---

## Dream Guest List

### Tier 0: Unicorn Gets (Would Define the Podcast)

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| Rick Rubin | Legendary producer, creativity philosopher | @RickRubin | - | "The Creative Act" energy, meditation + creation |
| Andrej Karpathy | AI educator, built AI at Tesla | @karpathy | - | Coined "vibe coding", massive reach |
| Boris Dayma | Anthropic, Claude team | @borisdayma | @boris | Inside Claude, technical but approachable |
| Ian Rogers | Ledger CEO, former Apple Music | @iancr | @iancr | Web3 + music + tech, connected to everyone |

### Tier 1: Vibe Coding Pioneers

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| Peter Steinberger | Clawdis/Clawdbot creator | @steipete | @steipete | Built the Claude Code distribution layer |
| Simon Willison | LLM tools, Datasette | @simonw | @simonw | Best AI tool builder educator |
| Pieter Levels | Indie hacker, Photo AI | @levelsio | - | Ships fast, $millions with AI |
| Riley Brown | Claude content creator | @rileybrown_ai | - | Rising vibe coding educator |
| McKay Wrigley | Chatbot UI, AI educator | @mcaboratorium | - | Open source AI tools |

### Tier 2: Digital Art / AI Art Legends

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| Gene Kogan | Abraham.ai, AI art pioneer | @genekogan | @gene | OG, deep thinker, your network |
| Claire Silver | AI artist, advocate | @clairesilver12 | @clairesilver | Voice of AI-assisted art |
| Refik Anadol | Data sculpture artist | @refikinadol | - | Mainstream AI art success |
| Tyler Hobbs | Fidenza, generative art | @tylerxhobbs | - | Generative art OG |
| XCOPY | Crypto art legend | @xcaboratory | - | Iconic, influential |
| Holly Herndon | AI music pioneer | @hollyherndon | @holly | Holly+, AI voice cloning art |
| Mat Dryhurst | AI music, tech artist | @matdryhurst | @mat | Spawning, AI ethics in art |

### Tier 3: Collectors / Tastemakers

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| tez | @thefunnyguysNFT | @thefunnyguysNFT | @tez | First guest, suggested the podcast |
| Cozomo de' Medici | Major collector | @CozomoMedici | - | Taste, resources, audience |
| 6529 | OM, thought leader | @punk6529 | @6529 | Deep thinker, huge following |
| Snowfro | Art Blocks founder | @ArtBlocks_io | @snowfro | Platform builder |
| VincentVanDough | Collector, voice | @Vince_Van_Dough | - | Collector perspective |

### Tier 4: Creative Tool Builders

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| Emad Mostaque | Stability AI founder | @EMostaque | - | Open source AI for creatives |
| Runway team | Video AI | @runwayml | - | Creative AI tools |
| Midjourney team | Image AI | @midaboratory | - | Dominant creative AI |
| Pika Labs | Video AI | @paboratorylabs | - | Video generation |
| ElevenLabs | Voice AI | @elevaboratorylabs | - | Voice cloning for creators |

### Tier 5: Music + Creative Industries

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| RAC | Grammy winner, crypto native | @RAaboratory | @rac | Music + crypto + AI |
| Grimes | Artist, AI experimenter | @Grimezsz | - | Elf.tech, AI voice |
| will.i.am | Tech-forward artist | @iamwill | - | AI music experiments |
| Imogen Heap | Mycelia, music tech | @imaboratorygen | - | Blockchain music pioneer |

### Tier 6: Spirit Protocol / Eden Network

| Name | Who They Are | Twitter | Farcaster | Why |
|------|--------------|---------|-----------|-----|
| NODE artists | Opening roster | various | various | Timing with Jan 22-26 |
| Abraham.ai team | Autonomous art | - | - | Eden adjacent |
| Phil (NODE) | Foundation director | - | - | Institutional perspective |

---

## Tech Stack

### Recording & Production
| Tool | Purpose | Cost |
|------|---------|------|
| **Riverside.fm** | Remote recording (separate tracks) | $15/mo |
| **Descript** | AI editing, transcription | $12/mo |
| **Adobe Podcast** | Audio enhancement (free) | Free |

### Hosting & Distribution
| Platform | Purpose | Cost |
|----------|---------|------|
| **Spotify for Creators** | Primary host | Free |
| **Apple Podcasts** | Distribution | Free |
| **YouTube** | Video version + Shorts | Free |
| **Fountain** | Bitcoin/podcast integration | Free |

### Graphics & Video
| Tool | Purpose | API/Access |
|------|---------|------------|
| **Nano Banana Pro** | Cover art, episode graphics | Via Manus API |
| **Veo 3** | Video sizzles, promos | Google API |
| **Imagen 4** | Static graphics | Google API |
| **Runway Gen-3** | Video clips | API |

### Automation & Agent
| Tool | Purpose |
|------|---------|
| **Claude Agent SDK** | Let's Vibe! podcast agent |
| **Zapier/Make** | Workflow automation |
| **Notion** | Guest CRM, show notes |
| **Cal.com** | Guest scheduling |

### Social Distribution
| Platform | Handle (Suggested) | Content Type |
|----------|-------------------|--------------|
| Twitter/X | @letsvibeshow | Clips, announcements |
| Farcaster | @letsvibe | Web3 native audience |
| YouTube | Let's Vibe! | Full eps + Shorts |
| TikTok | @letsvibeshow | Clips |
| Instagram | @letsvibeshow | Clips, graphics |

---

## Let's Vibe! Agent (Claude Agent SDK)

### Agent Capabilities

```yaml
name: letsvibe-agent
description: Podcast production assistant for Let's Vibe!

capabilities:
  - guest_research: Research potential guests, find handles, assess fit
  - outreach_drafting: Write personalized guest invitations
  - show_notes: Generate show notes from transcripts
  - clip_identification: Find quotable moments for social
  - social_drafting: Write tweets, casts, YouTube descriptions
  - scheduling: Coordinate recording times
  - graphics_generation: Trigger Nano Banana Pro for visuals
  - analytics: Track episode performance

integrations:
  - twitter_api: Monitor engagement, post clips
  - farcaster: Post to Warpcast
  - youtube_api: Upload, schedule, Shorts
  - spotify_api: Check analytics
  - cal_com: Guest scheduling
  - manus_api: Graphics generation
```

### Agent Workflows

1. **Guest Research Flow**
   - Input: "Find vibecoding creatives with 10k+ followers"
   - Output: Ranked list with handles, recent work, contact approach

2. **Episode Production Flow**
   - Input: Raw audio file
   - Steps: Transcribe → Generate show notes → Identify clips → Draft social → Generate graphics
   - Output: Complete episode package

3. **Social Amplification Flow**
   - Input: Published episode
   - Steps: Extract quotes → Generate clip timestamps → Draft tweets → Schedule posts
   - Output: Week of social content

---

## Branding Direction

### Visual Identity
- **Vibe**: Warm, approachable, creative (not corporate tech)
- **Colors**: Align with /vibe brand or distinct?
- **Typography**: Friendly sans-serif, not monospace
- **Imagery**: Abstract, generative, colorful (not dark/hacker)

### Cover Art Brief (for Nano Banana Pro)
```
Create podcast cover art for "Let's Vibe!" - a podcast about vibecoding for creatives.

Style: Warm, inviting, abstract generative art aesthetic
Colors: Gradient from warm orange to purple, with pops of cyan
Elements: Abstract flowing shapes suggesting creativity and connection
Text: "LET'S VIBE!" in bold, friendly sans-serif
Subtext: Small "with Seth & Lukas" below

NOT: Dark/hacker aesthetic, corporate tech, cold/sterile
YES: Warm, human, creative, approachable, art-forward

Size: 3000x3000 pixels, square
Format: PNG with no transparency
```

### Tone of Voice
- Conversational, not interview-y
- Curious, not interrogative
- Enthusiastic but not hype-y
- Accessible to non-technical creatives
- Rick Rubin's calm curiosity meets tech optimism

---

## Content Strategy

### Episode Format (45-60 min)
1. **Cold Open** (1 min): Best quote from episode
2. **Intro** (2 min): "Welcome to Let's Vibe!..."
3. **Guest Intro** (3 min): Who they are, recent work
4. **Main Conversation** (35-45 min): Organic, follow curiosity
5. **Rapid Fire** (5 min): Quick fun questions
6. **Outro** (2 min): Where to find guest, next episode

### YouTube Shorts / TikTok Strategy
- 3-5 clips per episode
- 30-60 seconds each
- Quotable moments, "aha" insights
- Vertical format (9:16)
- Captions baked in
- Generated via Veo 3 or manual clip

### Social Cadence
| Day | Platform | Content |
|-----|----------|---------|
| Release Day | All | Episode announcement |
| Day +1 | Twitter | Clip 1 |
| Day +2 | YouTube Shorts | Clip 1 |
| Day +3 | Twitter | Clip 2 |
| Day +4 | Farcaster | Thread with insights |
| Day +5 | Twitter | Clip 3 |
| Day +6 | Instagram | Clip compilation |

---

## Success Metrics

### Phase 1 (Episodes 1-10)
- [ ] 1,000 downloads per episode
- [ ] 500 YouTube subscribers
- [ ] 5 "dream list" guests booked
- [ ] Consistent weekly release

### Phase 2 (Episodes 11-25)
- [ ] 5,000 downloads per episode
- [ ] 2,500 YouTube subscribers
- [ ] Sponsor interest
- [ ] Guest inbound > outbound

### Phase 3 (Episodes 26+)
- [ ] 10,000+ downloads per episode
- [ ] Recognized voice in creative AI space
- [ ] Live episodes at events
- [ ] Community/Discord

---

## Competitive Landscape

| Podcast | Focus | Gap We Fill |
|---------|-------|-------------|
| Latent Space | Technical AI | Too developer-focused |
| The AI Breakdown | News | Not creative-focused |
| Hard Fork | Tech/business | Not builder-focused |
| Dwarkesh Podcast | Deep interviews | Too long, too technical |
| Bankless | Crypto | Not AI-focused |

**Our unique position:** The only podcast specifically for creative people who want to build with AI. Not learn about AI. Build with it.

---

*Document created: January 8, 2026*
*Status: Vision complete, ready for execution*
