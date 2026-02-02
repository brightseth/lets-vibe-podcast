/**
 * Let's Vibe! Agent Configuration
 */

import type { AgentConfig, Guest } from './types.js';

export const AGENT_CONFIG: AgentConfig = {
  name: 'letsvibe-agent',
  version: '0.1.0',
  capabilities: [
    'guest_research',
    'outreach_drafting',
    'show_notes',
    'clip_identification',
    'social_drafting',
    'graphics_generation',
    'scheduling',
    'analytics'
  ],
  integrations: [
    { name: 'anthropic', enabled: true },
    { name: 'manus', enabled: process.env.MANUS_API_KEY ? true : false },
    { name: 'google', enabled: process.env.GOOGLE_API_KEY ? true : false },
    { name: 'twitter', enabled: process.env.TWITTER_API_KEY ? true : false },
    { name: 'farcaster', enabled: process.env.FARCASTER_FID ? true : false },
    { name: 'youtube', enabled: process.env.YOUTUBE_API_KEY ? true : false },
    { name: 'calcom', enabled: process.env.CALCOM_API_KEY ? true : false },
    { name: 'descript', enabled: process.env.DESCRIPT_API_KEY ? true : false },
  ]
};

// Podcast branding
export const BRAND = {
  name: 'Let\'s Vibe!',
  tagline: 'Creativity in the age of AI',
  hosts: ['Seth Goldstein', 'Ian Rogers'],
  description: 'A weekly podcast for creative folks learning to vibe code. We talk to AI-optimistic builders, artists, and technologists about what they\'re making, how they\'re using AI tools, and where this is all going.',
  tone: {
    style: 'Conversational, not interview-y',
    energy: 'Rick Rubin calm curiosity meets tech optimism',
    audience: 'Non-technical creatives who want to build with AI'
  },
  socials: {
    twitter: '@letsvibeshow',
    farcaster: '@letsvibe',
    youtube: 'Let\'s Vibe!',
  }
};

// Episode format
export const EPISODE_FORMAT = {
  duration: { min: 45, max: 60 },
  segments: [
    { name: 'Cold Open', duration: 1, description: 'Best quote from episode' },
    { name: 'Intro', duration: 2, description: 'Welcome to Let\'s Vibe!...' },
    { name: 'Guest Intro', duration: 3, description: 'Who they are, recent work' },
    { name: 'Main Conversation', duration: 40, description: 'Organic, follow curiosity' },
    { name: 'Rapid Fire', duration: 5, description: 'Quick fun questions' },
    { name: 'Outro', duration: 2, description: 'Where to find guest, next episode' },
  ]
};

// Rapid fire questions pool
export const RAPID_FIRE_QUESTIONS = [
  'What\'s the first thing you made with AI?',
  'Favorite AI tool right now?',
  'Hot take on the AI art debate?',
  'What would you build if you had unlimited tokens?',
  'Best advice for someone just starting to vibe code?',
  'Overrated AI tool?',
  'Underrated AI tool?',
  'What keeps you optimistic about AI + creativity?',
  'One thing you wish AI could do better?',
  'Who should we have on the show next?'
];

// Content calendar template
export const CONTENT_CALENDAR_TEMPLATE = [
  { day: 0, platform: 'twitter', type: 'announcement' },
  { day: 0, platform: 'farcaster', type: 'announcement' },
  { day: 0, platform: 'youtube', type: 'announcement' },
  { day: 1, platform: 'twitter', type: 'clip' },
  { day: 2, platform: 'youtube', type: 'clip' },
  { day: 3, platform: 'twitter', type: 'clip' },
  { day: 4, platform: 'farcaster', type: 'thread' },
  { day: 5, platform: 'twitter', type: 'clip' },
  { day: 6, platform: 'instagram', type: 'clip' },
];

// Guest tier descriptions
export const GUEST_TIERS = {
  0: { name: 'Unicorn Gets', description: 'Would define the podcast', examples: ['Rick Rubin', 'Andrej Karpathy'] },
  1: { name: 'Vibe Coding Pioneers', description: 'Leading the vibe coding movement', examples: ['steipete', 'Simon Willison'] },
  2: { name: 'AI Art Legends', description: 'Established AI/digital artists', examples: ['Gene Kogan', 'Claire Silver'] },
  3: { name: 'Collectors/Tastemakers', description: 'Influential collectors and voices', examples: ['6529', 'Snowfro'] },
  4: { name: 'Creative Tool Builders', description: 'Building AI creative tools', examples: ['Runway', 'Midjourney'] },
  5: { name: 'Adjacent Interesting', description: 'Creative thought leaders', examples: ['Kevin Kelly', 'Craig Mod'] },
  6: { name: 'Spirit/Eden Network', description: 'Our ecosystem', examples: ['NODE artists', 'Phil'] }
};

// Outreach templates
export const OUTREACH_TEMPLATES = {
  standard: {
    subject: 'Let\'s Vibe! Podcast - Would love to have you on',
    body: `Hey {{NAME}},

Seth here from Let's Vibe! - a weekly podcast I co-host with Ian Rogers about creativity in the age of AI. We just launched Episode 1 and it's getting great traction.

Your work on {{SPECIFIC_THING}} is exactly the kind of story we want to tell. Would you be up for a ~45 min conversation about {{TOPIC}}?

Remote friendly, no prep needed - just a good chat about what you're building and thinking about.

Let me know if you're interested and we can find a time.

Best,
Seth

P.S. {{PERSONAL_NOTE}}`
  },
  tier0: {
    subject: 'Quick question about creativity + AI',
    body: `Hi {{NAME}},

I've been thinking a lot about {{THEIR_WORK}} and how it applies to the new wave of creative tools we're seeing with AI.

I'm starting a podcast called "Let's Vibe!" focused on creative people building with AI - not the technical side, but the human/creative side. Your perspective on {{SPECIFIC_ANGLE}} would be incredibly valuable.

Would you have 45 minutes for a conversation? We'd work around your schedule entirely.

Either way, thank you for {{INFLUENCE}}.

Best,
Seth Goldstein`
  }
};
