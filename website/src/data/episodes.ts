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
    slug: 'seth-interviews-ian',
    title: 'Seth Interviews Ian',
    guest: 'Ian Rogers',
    guestHandle: '@iancr',
    guestBio:
      'CXO of Ledger. Former Chief Digital Officer at LVMH, founder of Topspin Media, built Beats Music. He interviewed Rick Rubin on Tetragrammaton about "The Way of Code." Texts with Rick daily about vibe coding.',
    description:
      'Seth turns the tables and interviews Ian about his 30-year arc: the BA in Computer Science that no longer exists, Topspin Media, building Beats Music with Jimmy Iovine, transforming LVMH as CDO, and the vibe coding awakening. Plus: what Rick Rubin texts him every day, and the OpenClaw hackathon tutorial.',
    duration: 'TBD',
    date: 'Feb 6, 2026',
    status: 'upcoming',
    topics: ['Ian Rogers', 'Beats Music', 'LVMH', 'Rick Rubin', 'OpenClaw'],
    showNotes: `Seth interviews Ian Rogers about his full arc — one of the most interesting people in tech who's never done an extended interview about his journey.

**The Origin Story**: A Bachelor of Arts in Computer Science (a degree that no longer exists), early internet days, and founding Topspin Media — Shopify for musicians before Shopify existed.

**The Music Industry Arc**: How do you end up building Beats Music with Jimmy Iovine and Dr. Dre? The Apple acquisition, what Apple was like from the inside, and the unexpected pivot to LVMH as Chief Digital Officer.

**The Vibe Coding Awakening**: Rick Rubin texts Ian every day about vibe coding. The Pro Tools parallel — Ian was there for that revolution too. His Claude Code New Year: RSVP systems, art galleries, and music projects shipped with "minimal keyboard time."

**Tutorial Segment**: "Agents Propose, Humans Sign" — Ian's OpenClaw hackathon project for Ledger agent intents. AI agents draft transaction proposals, but only humans with hardware wallets can approve them.`,
    chapters: [
      { time: '0:00', title: 'Turn the Tables — Seth interviews Ian' },
      { time: '5:00', title: 'The BA in Computer Science' },
      { time: '15:00', title: 'Topspin Media — Shopify for musicians' },
      { time: '25:00', title: 'Beats Music → Apple Music' },
      { time: '35:00', title: 'LVMH — Chief Digital Officer' },
      { time: '45:00', title: 'The Vibe Coding Awakening — Rick Rubin texts' },
      { time: '55:00', title: 'Tutorial: Agents Propose, Humans Sign (OpenClaw)' },
    ],
    links: [
      { label: "Ian's blog: Reflections on a Claude Code New Year", url: 'https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/' },
      { label: 'Ian on X', url: 'https://x.com/iancr' },
      { label: 'Ian\'s repo: ledger-agent-intents', url: 'https://github.com/fistfulayen/ledger-agent-intents' },
      { label: 'Episode 2 prep notes', url: '/prep/episode-2' },
      { label: 'OpenClaw tutorial plan', url: '/plan/ep2' },
    ],
  },
];
