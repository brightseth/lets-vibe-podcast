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
      'Co-founder and CEO of nft now. Art Basel Digital Art Council. Built the premier web3 media platform, now vibecoding his way into AI. Executive Producer of Let\'s Vibe!',
    description:
      'Matt Medved joins Seth as cohost. From building nft now into the leading web3 media brand to discovering vibe coding — why the best media builders are becoming software builders, and what happens when you give a media CEO access to Claude Code.',
    duration: '~45 min',
    date: 'Feb 25, 2026',
    status: 'upcoming',
    topics: ['Media + AI', 'Vibe Coding', 'nft now', 'Building in Public', 'Distribution'],
  },
];
