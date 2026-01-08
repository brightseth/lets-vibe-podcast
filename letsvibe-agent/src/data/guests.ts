/**
 * Let's Vibe! Guest Database
 * Master list of all potential and confirmed guests
 */

import type { Guest } from '../types.js';

export const GUESTS: Guest[] = [
  // CONFIRMED / INVITED
  {
    name: 'tez',
    twitter: '@thefunnyguysNFT',
    farcaster: '@tez',
    tier: 3,
    status: 'invited',
    whoTheyAre: 'Digital art collector, community voice',
    why: 'He suggested Seth do a podcast - natural first guest',
    contactStrategy: 'Twitter DM - already connected',
    topics: ['AI-optimistic building', 'digital art collecting', 'why we need more builders'],
    outreachDate: '2026-01-08',
    notes: 'Said "sure, lets give it a shot"'
  },

  // TIER 0: UNICORN GETS
  {
    name: 'Rick Rubin',
    twitter: '@RickRubin',
    tier: 0,
    status: 'target',
    whoTheyAre: 'Legendary producer, creativity philosopher, "The Creative Act" author',
    why: 'Ultimate voice on creativity - the Rick Rubin energy we want',
    contactStrategy: 'Through publisher/management (Penguin Random House)',
    topics: ['creativity philosophy', 'meditation + creation', 'the creative process']
  },
  {
    name: 'Andrej Karpathy',
    twitter: '@karpathy',
    tier: 0,
    status: 'target',
    whoTheyAre: 'AI educator, ex-Tesla AI Director, 2M+ Twitter followers',
    why: 'Coined "vibe coding" - the term that inspired the podcast',
    contactStrategy: 'Twitter DM, reference his YouTube videos',
    topics: ['vibe coding origin', 'AI education', 'accessible AI building']
  },
  {
    name: 'Boris Dayma',
    twitter: '@borisdayma',
    farcaster: '@boris',
    tier: 0,
    status: 'target',
    whoTheyAre: 'Anthropic, Claude team',
    why: 'Inside perspective on Claude, approachable personality',
    contactStrategy: 'Twitter DM, reference his threads',
    topics: ['building Claude', 'AI tool design', 'the Claude philosophy']
  },
  {
    name: 'Ian Rogers',
    twitter: '@iancr',
    farcaster: '@iancr',
    tier: 0,
    status: 'target',
    whoTheyAre: 'Ledger CEO, former Apple Music, Beats',
    why: 'Connected to everyone, web3 + music + tech bridge',
    contactStrategy: 'Known contact - direct ask',
    topics: ['music + tech intersection', 'web3 evolution', 'creative technology']
  },

  // TIER 1: VIBE CODING PIONEERS
  {
    name: 'Peter Steinberger',
    twitter: '@steipete',
    farcaster: '@steipete',
    tier: 1,
    status: 'target',
    whoTheyAre: 'Clawdbot/Clawdis creator, iOS veteran',
    why: 'Built the Claude Code distribution layer, deep vibe coder',
    contactStrategy: 'Known via /vibe - direct ask',
    topics: ['Clawdbot story', 'vibe coding workflow', 'shipping fast with AI']
  },
  {
    name: 'Simon Willison',
    twitter: '@simonw',
    farcaster: '@simonw',
    tier: 1,
    status: 'target',
    whoTheyAre: 'Datasette creator, LLM tools blogger, Django co-creator',
    why: 'Best AI tool builder educator, massive content output',
    contactStrategy: 'Twitter DM, reference his blog posts',
    topics: ['LLM tools', 'building in public', 'AI documentation']
  },
  {
    name: 'Pieter Levels',
    twitter: '@levelsio',
    tier: 1,
    status: 'target',
    whoTheyAre: 'Indie hacker, Photo AI, Nomad List, $M+ solo',
    why: 'Ships incredibly fast with AI, proves solo builders can win',
    contactStrategy: 'Twitter DM',
    topics: ['shipping fast', 'indie hacking with AI', 'Photo AI story']
  },
  {
    name: 'Riley Brown',
    twitter: '@rileybrown_ai',
    tier: 1,
    status: 'target',
    whoTheyAre: 'Claude content creator, rising vibe coding voice',
    why: 'Accessible AI educator, growing audience',
    contactStrategy: 'Twitter DM',
    topics: ['Claude tutorials', 'AI education content', 'vibe coding for beginners']
  },
  {
    name: 'McKay Wrigley',
    twitter: '@mckaywrigley',
    tier: 1,
    status: 'target',
    whoTheyAre: 'Chatbot UI creator, AI educator',
    why: 'Open source AI tools, builder community',
    contactStrategy: 'Twitter DM',
    topics: ['open source AI', 'Chatbot UI', 'building AI interfaces']
  },
  {
    name: 'swyx',
    twitter: '@swyx',
    farcaster: '@swyx',
    tier: 1,
    status: 'target',
    whoTheyAre: 'AI engineer, Latent Space podcast, educator',
    why: 'Deep AI scene knowledge, potential podcast swap',
    contactStrategy: 'Twitter DM, podcast swap pitch',
    topics: ['AI engineering', 'learning in public', 'AI landscape']
  },

  // TIER 2: AI ART LEGENDS
  {
    name: 'Gene Kogan',
    twitter: '@genekogan',
    farcaster: '@gene',
    tier: 2,
    status: 'target',
    whoTheyAre: 'Abraham.ai founder, AI art pioneer, deep thinker',
    why: 'OG AI artist, autonomous art visionary, in Seth\'s network',
    contactStrategy: 'Personal contact - direct',
    topics: ['Abraham.ai', 'autonomous art', 'AI art philosophy']
  },
  {
    name: 'Claire Silver',
    twitter: '@clairesilver12',
    farcaster: '@clairesilver',
    tier: 2,
    status: 'target',
    whoTheyAre: 'AI artist, advocate for AI-assisted creation',
    why: 'Voice of the AI art movement, eloquent defender',
    contactStrategy: 'Twitter DM',
    topics: ['AI-assisted art', 'artist identity', 'defending AI art']
  },
  {
    name: 'Holly Herndon',
    twitter: '@hollyherndon',
    farcaster: '@holly',
    tier: 2,
    status: 'target',
    whoTheyAre: 'AI music pioneer, Holly+ voice cloning project',
    why: 'Pushing boundaries of AI + music ownership',
    contactStrategy: 'Twitter/email',
    topics: ['Holly+', 'AI voice', 'music ownership']
  },
  {
    name: 'Mat Dryhurst',
    twitter: '@matdryhurst',
    farcaster: '@mat',
    tier: 2,
    status: 'target',
    whoTheyAre: 'AI music, Spawning founder, tech artist',
    why: 'AI ethics in art, Spawning/HaveIBeenTrained',
    contactStrategy: 'Twitter/email',
    topics: ['Spawning', 'AI ethics', 'artist consent']
  },
  {
    name: 'Refik Anadol',
    twitter: '@refikinadol',
    tier: 2,
    status: 'target',
    whoTheyAre: 'Data sculpture artist, MoMA exhibited',
    why: 'Mainstream AI art success, museum credibility',
    contactStrategy: 'Via gallery/management',
    topics: ['data visualization', 'AI sculpture', 'museum AI art']
  },
  {
    name: 'Tyler Hobbs',
    twitter: '@tylerxhobbs',
    tier: 2,
    status: 'target',
    whoTheyAre: 'Fidenza creator, generative art legend',
    why: 'Generative art OG, thoughtful on AI',
    contactStrategy: 'Twitter DM',
    topics: ['generative art', 'Fidenza', 'code as medium']
  },

  // TIER 3: COLLECTORS/TASTEMAKERS
  {
    name: '6529',
    twitter: '@punk6529',
    farcaster: '@6529',
    tier: 3,
    status: 'target',
    whoTheyAre: 'OM creator, thought leader, major collector',
    why: 'Deep thinker, huge following, influential voice',
    contactStrategy: 'Twitter DM',
    topics: ['digital ownership', 'metaverse', 'collecting philosophy']
  },
  {
    name: 'Snowfro',
    twitter: '@ArtBlocks_io',
    farcaster: '@snowfro',
    tier: 3,
    status: 'target',
    whoTheyAre: 'Art Blocks founder',
    why: 'Built the platform for generative art',
    contactStrategy: 'Twitter DM',
    topics: ['Art Blocks story', 'generative art platforms', 'on-chain art']
  },
  {
    name: 'Cozomo de\' Medici',
    twitter: '@CozomoMedici',
    tier: 3,
    status: 'target',
    whoTheyAre: 'Major collector (rumored Snoop)',
    why: 'Taste, resources, brings mainstream attention',
    contactStrategy: 'Twitter DM',
    topics: ['collecting', 'taste', 'digital art market']
  },

  // TIER 4: CREATIVE TOOL BUILDERS
  {
    name: 'Cristobal Valenzuela',
    twitter: '@c_valenzuelab',
    tier: 4,
    status: 'target',
    whoTheyAre: 'Runway ML CEO',
    why: 'Leading creative AI tools company',
    contactStrategy: 'Twitter/email',
    topics: ['Runway', 'creative AI tools', 'video generation']
  },

  // TIER 5: ADJACENT INTERESTING
  {
    name: 'Kevin Kelly',
    twitter: '@kevin2kelly',
    tier: 5,
    status: 'target',
    whoTheyAre: 'Wired co-founder, "1000 True Fans" author',
    why: 'Optimistic tech philosopher, creator economy thinking',
    contactStrategy: 'Email via site',
    topics: ['1000 true fans', 'AI optimism', 'technology futures']
  },
  {
    name: 'Craig Mod',
    twitter: '@craigmod',
    tier: 5,
    status: 'target',
    whoTheyAre: 'Writer, walker, creative tools thinker',
    why: 'Deep on creative process and tools',
    contactStrategy: 'Email/Twitter',
    topics: ['creative process', 'walking + thinking', 'tools for thought']
  },

  // TIER 6: SPIRIT PROTOCOL / EDEN
  {
    name: 'NODE Artists (Various)',
    tier: 6,
    status: 'target',
    whoTheyAre: 'Artists from NODE Foundation opening',
    why: 'Timing with Jan 22-26 opening, great content',
    contactStrategy: 'Through Phil',
    topics: ['NODE opening', 'AI art exhibition', 'institutional AI art']
  },
  {
    name: 'Phil (NODE)',
    tier: 6,
    status: 'target',
    whoTheyAre: 'NODE Foundation director',
    why: 'Institutional perspective on AI art',
    contactStrategy: 'Personal - direct',
    topics: ['NODE Foundation', 'institutional AI art', 'exhibition planning']
  }
];

// Helper functions
export function getGuestsByTier(tier: number): Guest[] {
  return GUESTS.filter(g => g.tier === tier);
}

export function getGuestsByStatus(status: Guest['status']): Guest[] {
  return GUESTS.filter(g => g.status === status);
}

export function getNextGuestsToContact(limit: number = 10): Guest[] {
  return GUESTS
    .filter(g => g.status === 'target')
    .sort((a, b) => a.tier - b.tier)
    .slice(0, limit);
}

export function findGuestByTwitter(handle: string): Guest | undefined {
  const normalized = handle.startsWith('@') ? handle : `@${handle}`;
  return GUESTS.find(g => g.twitter?.toLowerCase() === normalized.toLowerCase());
}
