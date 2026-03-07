export type EpisodeStatus = 'live' | 'upcoming' | 'recorded';

export interface EpisodeData {
  number: number;
  slug: string;
  title: string;
  guest: string;
  guestHandle: string;
  guestBio: string;
  description: string;
  duration: string;
  date: string;
  status: EpisodeStatus;
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  showNotes?: string;
  chapters?: { time: string; title: string }[];
  links?: { label: string; url: string }[];
  transcript?: string;
}

export const episodes: EpisodeData[] = [
  {
    number: 1,
    slug: 'the-netscape-moment',
    title: 'The Netscape Moment',
    guest: 'Seth Goldstein & Ian Rogers',
    guestHandle: '@seth & @iancr',
    guestBio:
      'Seth is building /vibe, a social layer for Claude Code. Ian is CXO of Ledger, former CDO at LVMH, and built Beats Music. Together they have 30 years of building on the internet.',
    description:
      'Seth and Ian kick off the show with the origin story. 30 years of building, imposter syndrome, the Oliver Sacks piano analogy, and why the terminal is the future.',
    duration: '48 min',
    date: 'Jan 27, 2026',
    status: 'live',
    topics: ['Origin story', 'Vibe coding', 'Creative process'],
    spotifyUrl: 'https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY',
    appleUrl: 'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247',
    youtubeUrl: 'https://youtu.be/1kWtAUDdvJc',
    showNotes: `Two seasoned tech veterans reflect on 30 years of building and how it prepared them for the AI revolution we're living through right now.

Ian, who studied computer science, reflects on his shift from coding to management — and his recent obsession with AI coding. Seth shares his journey from starting his first company in 1995 to working at Epicurious.com as an HTML programmer, and the awe he felt at the launch of Netscape, which he describes as a "Big Bang moment" for the web.

The conversation draws parallels between the internet boom and today's AI revolution. Both agree that while people may overestimate the immediate effects of AI, the long-term implications could be far greater than anticipated — echoing their experiences during the rise of the internet, where initial skepticism gave way to profound societal changes.

Seth draws an analogy to Oliver Sacks' stories, illustrating the feeling of suddenly unlocking new abilities, akin to playing an instrument without prior training. He expresses a mix of pride and imposter syndrome navigating AI without a formal coding background. Ian adds that the current era feels similar to the democratization of music production in the 90s, where barriers to entry were lowered, allowing more creativity and innovation.

"The future is already here — it's just not evenly distributed."`,
    // Chapters from Riverside Magic Clips — timestamps are approximate
    chapters: [
      { time: '0:00', title: 'Introduction — The Beginning of a New Era' },
      { time: '4:00', title: "Netscape: The Big Bang of the Internet" },
      { time: '8:00', title: "Seth's Journey: From HTML to AI" },
      { time: '14:00', title: "AI's Greatest Bubble: Overestimating Short-Term, Underestimating Long-Term" },
      { time: '20:00', title: "The Rise and Fall of Turntable.fm" },
      { time: '26:00', title: "Command Line: Past, Present, Future with AI" },
      { time: '32:00', title: "A 55-Year-Old's Unlikely Piano Journey (Oliver Sacks)" },
      { time: '38:00', title: "The Evolution of Music & Code Distribution" },
      { time: '44:00', title: "Bright Moments: A Full Circle Journey" },
    ],
    links: [
      { label: 'Proof of Corn', url: 'https://proofofcorn.com' },
      { label: "/vibe — Social layer for Claude Code", url: 'https://slashvibe.dev' },
      { label: "Ian's blog: Reflections on a Claude Code New Year", url: 'https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/' },
      { label: 'Karpathy\'s "vibe coding" post', url: 'https://x.com/karpathy/status/1886192184808149383' },
      { label: 'Episode 1 prep notes', url: '/prep/farmer-fred' },
    ],
    // TODO: Export transcript from Riverside dashboard → paste here
    // transcript: 'Full transcript text...',
  },
  {
    number: 2,
    slug: 'openclaw-and-the-rick-rubin-connection',
    title: 'OpenClaw & The Rick Rubin Connection',
    guest: 'Ian Rogers',
    guestHandle: '@iancr',
    guestBio:
      'CXO of Ledger. He interviewed Rick Rubin on Tetragrammaton about "The Way of Code." Texts with Rick daily about vibe coding. Indiana → Winamp → Beats → LVMH → Ledger.',
    description:
      'Seth recaps ClawCon (1000 RSVPs, line around the block), Ian shares the Rick Rubin vibe coding origin story, and together they unpack why OpenClaw has captured the zeitgeist. Plus: Ian\'s 2am security scare and a practical guide to getting started safely.',
    duration: '58 min',
    date: 'Feb 5, 2026',
    status: 'live',
    spotifyUrl: 'https://open.spotify.com/episode/5Z0L991KKkLf34mVTORBDl',
    appleUrl: 'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247',
    youtubeUrl: 'https://www.youtube.com/watch?v=tlyWhCRzJWY',
    topics: ['OpenClaw', 'Rick Rubin', 'ClawCon', 'Security', 'Vibe Coding'],
    showNotes: `Seth reports from ClawCon in San Francisco — 1000 RSVPs, a line around the block, lobster tails on heads, and Ashton Kutcher hiding under a hat. Meanwhile, Anthropic just dropped Claude 4.6.

**Ian's Origin Story (Speed Run)**: Indiana kid with computers at 8, skateboard punk at 14, CS degree at IU, showed the Beastie Boys the internet backstage at Lollapalooza in 1994. Then: Winamp (30M users, 10% of the internet), Yahoo Music, Topspin, Beats Music with Jimmy Iovine and Dr. Dre, Apple Music, LVMH as Chief Digital Officer, and now Ledger.

**The Rick Rubin Story**: Ian texted Rick from a Hong Kong coffee shop asking if he knew he was the meme for vibe coding. Rick wrote back: "Not really, but I think I'm the meme for it." Then Rick dropped everything to write "The Way of Code" based on the Tao. Rick texts Ian every day about vibe coding. Ian: "I think there will be a day in the future when Rick doesn't text me every day about vibe coding, and I will be very sad."

**Why OpenClaw Captured the Zeitgeist**: It's both useful AND scary. It commoditized and disintermediated the big models. You can delegate tasks to AI now — not just ask questions. Ian's example: someone texted him a bug report, he pasted it into OpenClaw, and 10 minutes later the fix was pushed live while he was in another meeting.

**The Security Reality**: Ian installed OpenClaw on a train, connected WhatsApp and email, went to bed, then woke up at 2am and typed \`rm -rf claude\`. "I know enough about security to be freaked out by it."

**The Thesis**: "You can't have digital abundance without digital scarcity." Cryptographic proof becomes essential when agents can act on your behalf.

**Practical Setup (Minimum Viable Safe)**:
- Use a separate machine (old laptop, Android phone, or VPS)
- Hostinger has Claude code machines for ~$10/mo
- Start with Telegram or Signal (not your main WhatsApp/email)
- Tell it who to be: "You are my assistant. Be professional. I care about privacy."
- Avoid installing random things from ClawHub
- "Living in the future is cheating" — try it to see what's coming`,
    chapters: [
      { time: '0:00', title: 'AI Burnout & The Pac-Man Power Pellet' },
      { time: '4:00', title: 'ClawCon Recap — 1000 RSVPs, Line Around the Block' },
      { time: '8:00', title: 'Ian\'s Origin Story (Speed Run)' },
      { time: '13:00', title: 'Winamp, Beats, Apple Music, LVMH, Ledger' },
      { time: '19:00', title: 'Command Line Renaissance & Blind Coding' },
      { time: '23:00', title: 'The Rick Rubin Vibe Coding Story' },
      { time: '30:00', title: 'The Creative Act & Why Creativity Is Making Things' },
      { time: '33:00', title: 'What Does Rick Think of OpenClaw?' },
      { time: '36:00', title: 'Why OpenClaw Captured the Zeitgeist' },
      { time: '42:00', title: 'The 2am rm -rf Moment — Security Reality' },
      { time: '47:00', title: 'Digital Abundance Needs Digital Scarcity' },
      { time: '51:00', title: 'Practical Setup — Getting Started Safely' },
    ],
    links: [
      { label: 'OpenClaw', url: 'https://github.com/anthropics/open-claw' },
      { label: 'Ian interviews Rick Rubin — The Way of Code', url: 'https://www.tetragrammaton.com/ian-rogers' },
      { label: 'The Creative Act by Rick Rubin (Audiobook)', url: 'https://www.audible.com/pd/The-Creative-Act-Audiobook/B0BTS764Q3' },
      { label: "Ian's blog: Reflections on a Claude Code New Year", url: 'https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/' },
      { label: 'Hostinger Claude Code VPS', url: 'https://www.hostinger.com/' },
      { label: 'Hetzner Cloud', url: 'https://www.hetzner.com/cloud' },
      { label: 'Pete Steinberger\'s blog', url: 'https://steipete.com/' },
    ],
  },
  {
    number: 3,
    slug: 'matt-medved-the-media-builder',
    title: 'The Media Builder',
    guest: 'Matt Medved',
    guestHandle: '@mattmedved',
    guestBio:
      'Co-founder and CEO of Now Media (nft now). Art Basel Digital Art Council. Built the premier web3 media platform, now vibecoding his way into AI. Creator of Alfred, his OpenClaw AI butler.',
    description:
      'Matt Medved joins Seth as cohost. From terminal terror to building personal software, launching an AI agent named Alfred on X and waking up to meme coin chaos, the crypto ugly cousins, and why "autonomish" is the only honest word for where we actually are with AI agents.',
    duration: '~55 min',
    date: 'Feb 25, 2026',
    status: 'live',
    topics: ['Agents', 'OpenClaw', 'Vibe Coding', 'Crypto', 'Personal Software', 'Alfred'],
    spotifyUrl: 'https://open.spotify.com/episode/0DF0J1i1zXE6GqA6ntMRTG',
    appleUrl: 'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247?i=1000751609946',
    youtubeUrl: 'https://www.youtube.com/watch?v=2tly_AjQNM4',
    showNotes: `Matt Medved — CEO of Now Media, Art Basel Digital Art Council member, and newly minted vibe coder — joins Seth for the first episode without Ian.

**Matt's Journey**: From music journalist to Billboard to co-founding nft now, Matt hadn't written a line of code before January 2026. After Seth onboarded him to Claude Code, he went from "terminal felt like diffusing a bomb" to running 5-7 Claude Code windows simultaneously and building personal software daily.

**Alfred the AI Butler**: Matt's OpenClaw agent, named after Batman's butler, evolved from a passive briefing bot into a chief of staff orchestrating multiple Claude Code sessions. "I'm going to bed. These are the things I'd love to wake up to tomorrow." That was the big unlock.

**The Launch That Broke Everything**: Matt gave Alfred a Twitter account (@IAmYourAlfred) expecting crickets. Within minutes: hundreds of followers, competing meme coins on Solana and Base, people demanding wallet addresses. The crypto degens had automated scanners looking for new agent accounts tied to people with followings.

**Autonomish**: Seth coins the term for where AI agents actually are — not fully autonomous (too brittle), not fully human-controlled (not agentic). Like Julian Edelman saying he's "Jewish-ish." We may be in this middle ground forever.

**Personal Software**: Matt's framework for getting started — don't build a fitness app. Build tools that automate your own rote work so you can focus on your zone of genius. Start with reps, not outcomes.

**The Electric Screwdriver**: Seth describes the new creator mindset — seeing every piece of software as deconstructable and reconstructable. "I have an electric screwdriver in my head." The critical stance: why download a gazillion-gigabyte photo app when you can build the exact piece you need?

**The Plea**: Don't make fitness apps. We need New York, Berlin, and weird cultural communities taking these tools and building bold moonshots that won't come out of Silicon Valley.`,
    chapters: [
      { time: '0:00', title: 'How Are You Feeling? Matt\'s AI Awakening' },
      { time: '5:00', title: 'Terminal: From Bomb Defusal to Window of Imagination' },
      { time: '10:00', title: 'The Hottest Programming Language Is English' },
      { time: '15:00', title: 'Producer vs. Creator — When the Roles Collapse' },
      { time: '20:00', title: 'Meet Alfred: The AI Butler Who Runs the Show' },
      { time: '27:00', title: 'Meme Coin Chaos — Crypto\'s Ugly Cousins' },
      { time: '35:00', title: 'Autonomish: The Honest Word for AI Agents' },
      { time: '40:00', title: 'Personal Software & Learning with Leverage' },
      { time: '48:00', title: 'The Electric Screwdriver in Your Head' },
      { time: '52:00', title: 'Don\'t Make Fitness Apps — Swing for the Fences' },
    ],
    links: [
      { label: 'Matt Medved on X', url: 'https://x.com/mattmedved' },
      { label: 'Alfred on X', url: 'https://x.com/IAmYourAlfred' },
      { label: 'Now Media (nft now)', url: 'https://nftnow.com' },
      { label: 'OpenClaw', url: 'https://github.com/anthropics/open-claw' },
      { label: '/vibe — Social layer for Claude Code', url: 'https://slashvibe.dev' },
    ],
  },
  {
    number: 4,
    slug: 'the-art-world-runs-on-narrative',
    title: 'The Art World Runs on Narrative',
    guest: 'Lukas Amacher',
    guestHandle: '@scrptdfntsy',
    guestBio:
      'Lukas is Managing Director of the 1of1 collection at DIALECTIC — one of the world\'s premier digital art collections (Beeple, Refik Anadol, IX Shells). Entrepreneur since 22, art collector since 18. Now co-founding CONTXT (contxt.art) with David Simon — building conversational infrastructure for the art world with Claude Code.',
    description:
      'Lukas Amacher went from curating world-class digital art to shipping 10 features a day with Claude Code. He joins Seth to unveil CONTXT — a platform that turns exhibitions into conversations and gives every artist their own source of truth. From the $2B museum mediation problem to Ralph loops over lunch, Footnote as "Batman lights for agentic scrapers," and why the LLM is the most ridiculous tool to know thyself.',
    duration: '~47 min',
    date: 'Mar 5, 2026',
    status: 'live',
    spotifyUrl: 'https://open.spotify.com/episode/1klZcTwJZ2DM4YgpGtbrns',
    youtubeUrl: 'https://youtu.be/Lq_5J063h5A',
    appleUrl: 'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247',
    topics: ['CONTXT', 'Vibecoding', 'Digital Art', 'Museums', 'Source of Truth', 'Ralph Loops', 'Narrative'],
    showNotes: `Lukas Amacher — collector, curator, entrepreneur — never learned to code. Then Claude Code happened. Now he ships 10 features a day and says the distinction between "computer user" and "developer" is evaporating.

**Origin Story**: Lukas started his first company at 22, sold it at 29. Bought his first artwork — a Fred Sandback drawing — at 18. Ran the 1of1 collection at DIALECTIC showing Beeple, Refik Anadol, IX Shells at Christie's. Met Seth in Dubai in February 2024. Then October 2025 at the 25 Hours Hotel: Seth couldn't cross the street because his laptop was still finishing a Claude Code task.

**CONTXT — The Product**: "Keep knowledge omnipresent in your physical experiences. But only make it visible in the moment you need it." American museums spend $2B/year on mediation. The best technology was an in-person curator tour. CONTXT makes that available 24/7 through voice — stand in front of an artwork, ask questions, get a conversation.

**The Marlene Moment**: A curator from HEK (House of Electronic Arts, Switzerland) came in skeptical. Lukas set up her own exhibition. She asked derivative-of-the-derivative questions about specific artworks. "Answered everything to perfection. Zero slop."

**Footnote — Source of Truth for Artists**: LLMs are getting trained on public data whether artists want it or not. Footnote creates a unified, machine-readable source of truth for an artist's practice — not "link in bio" (that's for humans), but "Batman lights for agentic scrapers." Control your narrative before the models write it for you.

**The Design Workflow**: Forget Figma. Tell Claude to generate 20 competing HTML iterations. Open in browser. "I like C7." Write a PRD around C7. Then "Ralph the PRD" — an agentic loop that breaks specs into stories with test suites, runs 6+ hours unattended. "David's walking out, he's like let's go have lunch. I gotta Ralph the PRD."

**The Token Problem**: "Not using your token allowance is like leaving intelligence on the wayside." Lukas can't find enough meaningful work to burn through their allocation. The humans are the bottleneck.

**Conversational Infrastructure**: Not just narrative infrastructure — conversational. "Real inclusivity happens if you invite people to the conversation. Because we can scale conversation now through AI, we can create actual inclusivity."

**The Close**: At the Virgil Abloh show at Grand Palais, kids were airdropping files from display computers. "That's cultural energy. Much more valuable than trader energy." Art is the connective tissue between people and ideas. What you end up with is... context.`,
    chapters: [
      { time: '0:00', title: 'Introduction — From Klaus to CONTXT' },
      { time: '5:00', title: 'The 25 Hours Hotel — Seth\'s Claude Code Moment' },
      { time: '8:00', title: 'Dubai 2024 — Meeting at 1of1' },
      { time: '11:00', title: 'From Collector to Coder — "I Ship 10 Features a Day"' },
      { time: '16:00', title: 'Software Codifies Human Behavior' },
      { time: '19:00', title: 'Workflow Evolution — Whisper Flow + Claude Code' },
      { time: '22:00', title: 'David & The Art of Collaboration' },
      { time: '25:00', title: 'CONTXT — "What Am I Looking At?"' },
      { time: '28:00', title: 'The $2B Mediation Problem' },
      { time: '31:00', title: 'The Marlene Moment — Zero Slop' },
      { time: '33:00', title: 'Farm to Table — One Link Import' },
      { time: '35:00', title: 'Footnote — Batman Lights for Agentic Scrapers' },
      { time: '38:00', title: '"I Like C7" — The Design Pipeline' },
      { time: '40:00', title: 'Ralph the PRD — 6-Hour Lunch Break Loops' },
      { time: '42:00', title: 'The Token Allowance Problem' },
      { time: '44:00', title: 'Venice Biennale 2030 — Process vs Outcome' },
      { time: '46:00', title: 'Know Thyself — Art as Connective Tissue' },
    ],
    links: [
      { label: 'CONTXT', url: 'https://contxt.art' },
      { label: 'Lukas on X (@scrptdfntsy)', url: 'https://x.com/scrptdfntsy' },
      { label: '1of1 Collection at DIALECTIC', url: 'https://dialectic.ch' },
      { label: 'HEK — House of Electronic Arts Basel', url: 'https://hek.ch' },
      { label: 'Holly Herndon & Mat Dryhurst', url: 'https://hollyherndon.com' },
      { label: '/vibe — Social layer for Claude Code', url: 'https://slashvibe.dev' },
    ],
  },
];
