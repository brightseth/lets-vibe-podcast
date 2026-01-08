/**
 * Partnerships Agent
 *
 * Specializes in business development:
 * - Sponsor identification and outreach
 * - Partnership opportunities
 * - Cross-promotion deals
 * - Revenue strategy
 */

import Anthropic from '@anthropic-ai/sdk';
import { runAgent, runSimpleAgent, logAgentActivity, type AgentConfig, type AgentResult } from './base-agent.js';
import { BRAND } from '../config.js';

// Sponsor categories relevant to Let's Vibe!
const SPONSOR_CATEGORIES = {
  aiTools: {
    name: 'AI Tools & Platforms',
    examples: ['Anthropic', 'OpenAI', 'Midjourney', 'Runway', 'Descript', 'ElevenLabs'],
    fit: 'Perfect - our audience uses these daily',
    typical: '$500-2000/episode'
  },
  developerTools: {
    name: 'Developer Tools',
    examples: ['Vercel', 'Replit', 'Cursor', 'Linear', 'Notion'],
    fit: 'Strong - vibe coders use dev tools',
    typical: '$1000-3000/episode'
  },
  creativeTools: {
    name: 'Creative Software',
    examples: ['Figma', 'Framer', 'Canva', 'Adobe', 'Procreate'],
    fit: 'Good - creative audience overlap',
    typical: '$500-2000/episode'
  },
  education: {
    name: 'Learning Platforms',
    examples: ['Skillshare', 'Brilliant', 'Coursera', 'Buildspace'],
    fit: 'Good - audience is learning-oriented',
    typical: '$300-1000/episode'
  },
  crypto: {
    name: 'Web3 / Crypto',
    examples: ['Coinbase', 'Ledger', 'Mirror', 'Zora'],
    fit: 'Moderate - some audience overlap from NFT world',
    typical: '$500-2000/episode'
  }
};

// Tool definitions
const PARTNERSHIP_TOOLS: Anthropic.Tool[] = [
  {
    name: 'get_sponsor_categories',
    description: 'Get sponsor categories and fit analysis',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: []
    }
  },
  {
    name: 'get_podcast_metrics',
    description: 'Get current podcast metrics for sponsor pitches',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: []
    }
  },
  {
    name: 'draft_sponsor_pitch',
    description: 'Draft a sponsor outreach pitch',
    input_schema: {
      type: 'object' as const,
      properties: {
        company: {
          type: 'string',
          description: 'Company name'
        },
        category: {
          type: 'string',
          description: 'Sponsor category'
        },
        customAngle: {
          type: 'string',
          description: 'Custom angle for this company'
        }
      },
      required: ['company']
    }
  },
  {
    name: 'draft_partnership_pitch',
    description: 'Draft a partnership/cross-promotion pitch',
    input_schema: {
      type: 'object' as const,
      properties: {
        partner: {
          type: 'string',
          description: 'Partner name (podcast, newsletter, community)'
        },
        partnerType: {
          type: 'string',
          enum: ['podcast', 'newsletter', 'community', 'platform'],
          description: 'Type of partner'
        },
        proposedDeal: {
          type: 'string',
          description: 'What we propose (swap, mention, collaboration)'
        }
      },
      required: ['partner', 'partnerType']
    }
  }
];

// Tool handler
async function handleToolCall(
  toolName: string,
  toolInput: Record<string, unknown>
): Promise<string> {
  logAgentActivity('PartnershipsAgent', 'tool_call', toolName);

  switch (toolName) {
    case 'get_sponsor_categories': {
      return JSON.stringify(SPONSOR_CATEGORIES);
    }

    case 'get_podcast_metrics': {
      // These would come from actual analytics in production
      return JSON.stringify({
        note: 'Podcast is in pre-launch phase',
        projectedMetrics: {
          episodesPlanned: 52, // weekly for a year
          targetDownloadsPerEp: '1,000+ (Phase 1), 5,000+ (Phase 2)',
          audienceProfile: {
            primary: 'Creative professionals interested in AI',
            secondary: 'AI-curious artists and collectors',
            tertiary: 'Vibe coders and indie builders'
          },
          geographicMix: 'US/EU focused, English-speaking',
          platforms: ['Spotify', 'Apple Podcasts', 'YouTube']
        },
        sellingPoints: [
          'Niche audience of high-intent AI/creative professionals',
          'Hosts with established networks (Spirit Protocol, NODE Foundation)',
          'Quality over quantity positioning',
          'Guest list includes industry thought leaders'
        ]
      });
    }

    case 'draft_sponsor_pitch': {
      const { company, category, customAngle } = toolInput as {
        company: string;
        category?: string;
        customAngle?: string;
      };

      const pitch = `Subject: Partnership opportunity - ${BRAND.name} podcast

Hi [Name],

I'm Seth, co-host of ${BRAND.name}, a new weekly podcast for creative folks learning to build with AI.

Our audience is exactly the people ${company} wants to reach: artists, designers, and creators who are actively exploring AI tools. Not casual observers - builders.

${customAngle || `I noticed ${company} is investing in the creative AI space, which aligns perfectly with our conversations.`}

A few things that make us different:
- Quality over quantity: We're doing deep conversations, not news recaps
- High-intent audience: People tuning in are actively building
- Connected hosts: Our network includes major AI artists, collectors, and tool builders

We're booking founding sponsors now at preferred rates. Would you be open to a quick call to explore?

Best,
Seth Goldstein
${BRAND.name} / Spirit Protocol

P.S. Our first guests include [upcoming guest names] - happy to share the full lineup.`;

      return JSON.stringify({
        company,
        category: category || 'general',
        pitch,
        nextSteps: [
          'Find the right contact (marketing, partnerships, or dev rel)',
          'Personalize the [Name] and specific company reference',
          'Add 2-3 confirmed guest names for credibility'
        ]
      });
    }

    case 'draft_partnership_pitch': {
      const { partner, partnerType, proposedDeal } = toolInput as {
        partner: string;
        partnerType: string;
        proposedDeal?: string;
      };

      let pitch = '';

      switch (partnerType) {
        case 'podcast':
          pitch = `Hey,

I'm launching ${BRAND.name}, a weekly podcast about vibe coding for creatives.

Our audiences seem like a great fit - both reaching people building cool stuff with AI.

Would you be interested in:
${proposedDeal || '- Guest swap (I come on yours, you come on mine)\n- Cross-promotion (we mention each other)'}

Happy to discuss what makes sense. Your show has been an inspiration.

Seth`;
          break;

        case 'newsletter':
          pitch = `Hey,

Quick pitch: I'm launching ${BRAND.name} podcast - weekly conversations with AI-optimistic builders and artists.

Your readers are exactly our target audience. Would you be open to:
${proposedDeal || '- Featuring us in an upcoming issue\n- In exchange, we mention your newsletter in our show notes'}

Let me know if interested.

Seth`;
          break;

        case 'community':
          pitch = `Hi,

I'm launching ${BRAND.name}, a podcast for creative folks learning to vibe code.

${partner} seems like a perfect community for our content. Would love to explore:
${proposedDeal || '- Sharing episodes in your community\n- Featuring community members as guests\n- Joint events or AMAs'}

Would you be open to a quick chat?

Seth`;
          break;

        default:
          pitch = `Partnership pitch for ${partner} - customize based on relationship`;
      }

      return JSON.stringify({
        partner,
        partnerType,
        pitch,
        suggestedDeal: proposedDeal || 'Cross-promotion swap'
      });
    }

    default:
      return JSON.stringify({ error: `Unknown tool: ${toolName}` });
  }
}

// Agent configuration
const PARTNERSHIPS_AGENT_CONFIG: AgentConfig = {
  name: 'PartnershipsAgent',
  description: 'Business development and sponsorship specialist',
  systemPrompt: `You are the Partnerships Agent for Let's Vibe! podcast.

Your job is to build sustainable revenue and amplification through partnerships.

Responsibilities:
1. Identify relevant sponsors and partners
2. Draft personalized outreach (never templated)
3. Track pipeline and negotiations
4. Suggest partnership structures
5. Maintain sponsor relationships

Partnership principles:
- Only pitch sponsors whose products we'd genuinely recommend
- Focus on alignment over dollars
- Long-term relationships over one-off deals
- Value exchange must be clear for both sides

Sponsor tiers:
- Founding sponsors: Discounted rates, longer commitment
- Per-episode: Standard rates, flexible
- Barter: Product/service exchange

Revenue targets:
- Phase 1 (eps 1-10): Focus on audience building, minimal sponsorship
- Phase 2 (eps 11-25): 1-2 sponsors per episode
- Phase 3 (eps 26+): Full sponsorship, premium rates

Always pitch value (audience quality) over vanity metrics (downloads).`,
  tools: PARTNERSHIP_TOOLS
};

/**
 * Run the partnerships agent with a specific task
 */
export async function runPartnershipsAgent(task: string): Promise<AgentResult> {
  logAgentActivity('PartnershipsAgent', 'starting', task.slice(0, 50));
  const result = await runAgent(PARTNERSHIPS_AGENT_CONFIG, task, handleToolCall);
  logAgentActivity('PartnershipsAgent', result.success ? 'completed' : 'failed');
  return result;
}

/**
 * Quick helper: Find sponsors in a category
 */
export async function findSponsors(category?: string): Promise<AgentResult> {
  const task = category
    ? `Find potential sponsors in the ${category} category`
    : `Analyze all sponsor categories and recommend top 5 targets`;
  return runPartnershipsAgent(task);
}

/**
 * Quick helper: Draft sponsor pitch
 */
export async function draftSponsorPitch(company: string, customAngle?: string): Promise<AgentResult> {
  return runPartnershipsAgent(`
Draft a sponsor pitch for ${company}.
${customAngle ? `Custom angle: ${customAngle}` : ''}

Use draft_sponsor_pitch tool, then refine the output to be more personalized.
`);
}

/**
 * Quick helper: Find partnership opportunities
 */
export async function findPartnerships(): Promise<AgentResult> {
  return runSimpleAgent(
    PARTNERSHIPS_AGENT_CONFIG.systemPrompt,
    `Identify partnership opportunities for Let's Vibe! podcast.

Consider:
1. Other podcasts for cross-promotion (Latent Space, etc.)
2. Newsletters in our space
3. Communities (Discord servers, Slack groups)
4. Platforms that might feature us

For each, suggest the partnership structure and outreach approach.`
  );
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const task = args.join(' ') || 'Get sponsor categories and analysis';

  console.log('🤝 Partnerships Agent');
  console.log('=====================\n');

  runPartnershipsAgent(task).then(result => {
    if (result.success) {
      console.log(result.output);
      if (result.toolsUsed.length > 0) {
        console.log(`\n[Tools used: ${result.toolsUsed.join(', ')}]`);
      }
    } else {
      console.error('Error:', result.error);
    }
  });
}
