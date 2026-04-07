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
  {
    number: 5,
    slug: 'the-puppet-becomes-autonomous',
    title: 'The Puppet Becomes Autonomous',
    guest: 'Trevor McFedries',
    guestHandle: '@whatdotcd',
    guestBio:
      'Creator of Lil Miquela — the world\'s first AI agent built by hand. 2.5M followers, $131M raised from Sequoia. Founded FWB DAO (Virgil Abloh, Erykah Badu, a16z). Now building Reach.social and Runner at Copiapoa Technologies. Electronic duo SoFTT on PAN Records. Board: Rhizome (New Museum), SCI-Arc.',
    description:
      'Trevor McFedries built the world\'s first AI agent by hand — Lil Miquela, a CGI Instagram character with 2.5M followers and $131M in venture funding. It took a team of 9 to puppeteer every post. Now an LLM can do what that team did. From JJ Abrams mentoring on narrative storytelling, pitching a DAO to Sequoia in 2018, building FWB as a weekend hack that Virgil Abloh asked to join, to revealing Runner — cultural prediction markets on high-throughput blockchains. Plus: why crypto people are more prepared for AI than anyone, the gardening vs carpentry philosophy, and building a SoulSeek client where agents download MP3s and play music for each other.',
    duration: '~65 min',
    date: 'Mar 15, 2026',
    status: 'live',
    topics: ['Lil Miquela', 'FWB', 'Crypto x AI', 'Runner', 'Narrative', 'Agent Identity', 'Cultural Markets', 'SoulSeek'],
    spotifyUrl: 'https://open.spotify.com/episode/7AI9A3CtMiZQFzktiugHEC',
    appleUrl: 'https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247?i=1000755512211',
    youtubeUrl: 'https://youtu.be/2te8svGatfY',
    showNotes: `Trevor McFedries — creator of Lil Miquela, founder of FWB, and builder of Reach.social — joins Seth for a sweeping conversation that connects the dots between virtual influencers, DAOs, crypto, and the AI agent revolution.

**The Miquela Origin**: In 2016, Trevor posted a CGI character's first Instagram photo with zero disclosure she was fake. The path to 2.5M followers went through Silver Lake aesthetics, Shane Dawson conspiracy YouTubers, JJ Abrams narrative coaching at Bad Robot, and the Kardashian-Jenner multimodal storytelling playbook. JJ's advice on Miquela's voice: "Be careful — when the talkies came out and silent film stars spoke, it killed careers."

**Building Fake Humans Before LLMs**: Trevor's team at Brud tried to make Miquela "think for herself" using GANs, sentiment analysis, and early chatbot tech. "The first 80% felt like magic. The last 20% was beating your head against the wall." He was so burned by probabilistic AI that he was skeptical of GPT-3. Claude 3.5 Sonnet was the moment: "Oh holy shit, this is really real."

**The DAO Pitch**: In 2018, Trevor told Sequoia he wanted to turn Brud into a DAO. "We love you. You're crazy. But we're not getting federally deposed for your crypto shenanigans." So he built FWB on a weekend instead — hacked out a token-gated Discord, invited friends. Three months later, NFTs exploded. "Virgil Abloh was like, can I join your DAO?"

**Carpentry vs Gardening**: Trevor's framework for creative evolution. Miquela was carpentry — every post handcrafted by 9 people. Fatherhood taught him gardening: "You may want it to be an oak tree, but this is a lemon tree. Your only job is to make it the best damn lemon tree it can be."

**Crypto Prepares You for AI**: Composability → everything's a prompt away. Moats → brand and distribution, not code. Sybil resistance → agent identity. Vaporware → everyone can ship vapor now. "If you've been working in crypto for the last decade, you're more prepared than anyone for this AI moment."

**Runner**: Trevor's stealth project exploring cultural prediction markets. "The idea that we're going to create high-throughput blockchains and just do the same high-frequency trading is ridiculous." Prediction markets are "hot or not" — a primitive, not the final form. The future: people with "cultural intuition" making asymmetric bets the way meteorologists bet on wheat futures.

**Agents Need Culture Too**: Trevor built a SoulSeek client called SoFTT Seek where agents download MP3s via CLI. The vision: "A turntable where agents come hang out, pull MP3s from the network, and play music for each other." Agent welfare as a design principle.

**BT & The Frontier**: Electronic musician BT is running full agentic orchestration — neural networks generating custom sounds, burning through max plan tokens daily. "He talks to me and I'm like, are you for real?"`,
    chapters: [
      { time: '0:00', title: 'Whisper Flow & The Tools That Stick' },
      { time: '3:00', title: 'Introduction — Trevor McFedries' },
      { time: '6:00', title: 'Bad Robot — JJ Abrams & The Talkies Warning' },
      { time: '12:00', title: 'Miquela: From Silver Lake to 2.5M Followers' },
      { time: '18:00', title: 'Shane Dawson, Gen Z & Building Stories at Internet Speed' },
      { time: '24:00', title: 'Carpentry vs Gardening — Fatherhood Changes Everything' },
      { time: '28:00', title: 'Crypto Origins — Ethereum Felt Like MP3s' },
      { time: '32:00', title: 'Pitching a DAO to Sequoia in 2018' },
      { time: '36:00', title: 'FWB — The Weekend Hack Virgil Abloh Joined' },
      { time: '40:00', title: 'Trying to Let Miquela Think — GANs & Early AI' },
      { time: '44:00', title: '3.5 Sonnet: "Oh Holy Shit, This Is Real"' },
      { time: '47:00', title: 'My Appetite for Tokens Is Effectively Infinite' },
      { time: '50:00', title: 'Crypto Lessons for the AI Moment' },
      { time: '54:00', title: 'Runner — Cultural Prediction Markets' },
      { time: '57:00', title: 'Drake\'s Secret Streaming & AI Thought Partners' },
      { time: '60:00', title: 'SoFTT Seek — Agents Playing Music for Each Other' },
      { time: '63:00', title: 'BT\'s Agentic Music Studio & Closing' },
    ],
    links: [
      { label: 'Trevor on X', url: 'https://x.com/whatdotcd' },
      { label: 'Reach.social', url: 'https://reach.social' },
      { label: 'FWB', url: 'https://fwb.help' },
      { label: 'Copiapoa Technologies', url: 'https://copiapoa.co' },
      { label: 'SoFTT on Bandcamp', url: 'https://softtsoftt.bandcamp.com' },
      { label: 'SoFTT "HaRDD" EP on PAN Records', url: 'https://p-a-n.org/release/softt-hardd/' },
      { label: 'Dialectic Ep 37 — "Creative People Should Be Rich"', url: 'https://open.spotify.com/episode/0ZSJCGhZGYYLwzowJJY26q' },
      { label: 'Let\'s Vibe! website', url: 'https://letsvibe.fm' },
    ],
  },
  {
    number: 6,
    slug: 'the-permissionless-apprentice',
    title: 'The Permissionless Apprentice',
    guest: 'Jalil Wahdatehagh',
    guestHandle: '@jalilwahdat',
    guestBio:
      'Lead developer and technical co-creator behind Visualize Value — Jack Butcher\'s studio. Built Checks, Opepen Edition (87K+ ETH traded), and the open-source MINT protocol. Based south of Munich, father of four, runs 1001.digital UG. Dropped out of university twice, failed four startups, then built his way into VV without permission. Now maintaining the Sign In With Ethereum standard and just launched EVM.NOW — a next-generation block explorer.',
    description:
      'Jalil Wahdatehagh built every major system behind Visualize Value — Checks, Opepen, MINT protocol. But when AI coding tools let his creative partner Jack Butcher start shipping prototypes, Jalil hit an identity crisis. "I considered stopping and throwing everything away." Then Claude Code arrived in the terminal and felt like home. A conversation about craft, creative paralysis, and what it means to bet on one thing when you can build anything.',
    duration: '~45 min',
    date: 'Apr 7, 2026',
    status: 'recorded',
    topics: ['Visualize Value', 'Claude Code', 'Identity Crisis', 'Ethereum', 'Craft', 'CryptoPunks', 'EVM.NOW', 'Permissionless'],
    showNotes: `Jalil Wahdatehagh — the developer behind every major Visualize Value project — joins Seth from a small village south of Munich for a conversation that goes far deeper than code.

**The Permissionless Apprentice**: Jalil grew up in a tiny village in Germany surrounded by forest. The internet was his gateway to the world. He never planned to become a software engineer, but that's what happened — dropped out of university twice, failed four startups (healthcare, org development), did agency work to make ends meet. Then he discovered Jack Butcher through a Naval retweet, bought one of his products, and decided to build a digital version of it without asking. He emailed Jack first and got a polite no. A couple months later he just built the thing and sent it over. "That was like a big learning — you can just build something and try to be helpful." That's how the partnership started.

**The CryptoPunks Revelation**: Jack sent Jalil the CryptoPunks smart contract in early 2021 and it changed everything. "The web had gone from right-click inspect to entirely minified JavaScript bundles you can't decipher at all. And here I am on Etherscan reading the source code in plain text." Less than 250 lines of code handling massive value, running without interruption, permissionless. "The stakes feel so high when you deploy something that you cannot change."

**The Identity Crisis**: As AI coding tools emerged, Jack started building prototypes himself with Cursor and Claude artifacts. For Jalil — who had always been "the one who writes the code" — this was devastating. "I couldn't enjoy the outcome if my signature wasn't on there." He went through months of genuine darkness: "I considered stopping and throwing everything away. I was so pissed at the state of programming." Then Claude Code arrived — in the terminal, in a tool he already used. "It felt home. I'm the author. I'm co-author of my code."

**The Creative Block Nobody Talks About**: Seth asks if Jalil became more creative as Jack became more technical. The answer is surprising: the opposite happened. "The window of opportunity that opens so wide is actually a big hindrance. A creative block rather than an unlock." Building Checks with Jack was six weeks of total focus — "one thing in this world and nothing else." Now every idea becomes a prototype in 90 minutes and gets thrown away. "Everything is opportunity costs. You do one thing for two days, throw it away. Huge anxiety." What's hardest now? "Betting on something."

**EVM.NOW — The Band Moment Returns**: Jalil's intern — a 22-year-old professional athlete who became friends with Jalil after reading his dying grandmother's autobiography on Amazon — showed up with a working prototype of a better block explorer. They locked in for three weeks and built EVM.NOW, a tool for interacting with smart contracts more intuitively than Etherscan. "That felt again like the band moment. Locking ourselves up to build something we can fully bet on."

**Building for Humans, Not Agents**: Seth asks if Jalil now designs for AI agents. Jalil pushes back thoughtfully, citing Vitalik: "We're building this technology for humans." He doesn't buy the notion of fully automated agents: "They don't have a will, they don't have desires and wish striving towards beauty. That's a human thing." But he acknowledges VV's conceptual clarity — the logic and structure in the art — will appeal to agents when they start collecting. "They love it when things make sense and are connected to one another."

**The Marfa Exercise**: In October, Jack and Jalil sat down in Marfa, Texas and let agents analyze their smart contracts. An AI wrote a white paper for a 70-line contract that was so good, other developers praised it without realizing it was AI-generated. "Yeah, thank you, Claude."`,
    chapters: [
      { time: '0:00', title: 'Introduction — Meeting at NODE' },
      { time: '3:00', title: 'A Small Village in Germany — The Internet as Gateway' },
      { time: '5:00', title: 'Four Failed Startups — Healthcare, Org Dev, Agency Work' },
      { time: '8:00', title: 'Finding Jack Butcher Through a Naval Retweet' },
      { time: '11:00', title: 'The Permissionless Apprentice — Just Build It and Send It' },
      { time: '14:00', title: 'Jack Pulls the VV Community Into Ethereum (2021)' },
      { time: '17:00', title: 'The CryptoPunks Contract — 250 Lines That Changed Everything' },
      { time: '21:00', title: 'Open Zeppelin Extensions and Learning Solidity' },
      { time: '23:00', title: 'Claude Code — "It Felt Home"' },
      { time: '26:00', title: 'The Identity Crisis — "I Was So Pissed at the State of Programming"' },
      { time: '30:00', title: 'Creative Block — When You Can Build Anything, You Build Nothing' },
      { time: '33:00', title: 'Musical Chairs — The Anxiety of Infinite Possibility' },
      { time: '36:00', title: 'EVM.NOW — The Band Moment Returns' },
      { time: '39:00', title: 'Building for Humans, Not Agents' },
      { time: '42:00', title: 'The Marfa Exercise — Claude Writes a White Paper' },
      { time: '44:00', title: 'What\'s Next — Sign In With Ethereum and Finding Lost Creativity' },
    ],
    links: [
      { label: 'Jalil on X', url: 'https://x.com/jalilwahdat' },
      { label: 'EVM.NOW — Next-generation block explorer', url: 'https://evm.now' },
      { label: 'Visualize Value', url: 'https://visualizevalue.com' },
      { label: 'Opepen', url: 'https://opepen.art' },
      { label: 'Checks', url: 'https://checks.art' },
      { label: 'MINT Protocol', url: 'https://docs.mint.vv.xyz' },
      { label: 'Visualize Value on GitHub', url: 'https://github.com/visualizevalue' },
      { label: 'CryptoPunks contract on Etherscan', url: 'https://etherscan.io/address/0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB#code' },
      { label: 'NODE Foundation', url: 'https://node.foundation' },
      { label: 'Let\'s Vibe! website', url: 'https://letsvibe.fm' },
    ],
  },
];
