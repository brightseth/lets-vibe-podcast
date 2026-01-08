/**
 * Promotion Agent
 *
 * Specializes in content distribution:
 * - Show notes generation
 * - Clip identification
 * - Social content drafting
 * - Content calendar management
 */

import Anthropic from '@anthropic-ai/sdk';
import { runAgent, runSimpleAgent, logAgentActivity, type AgentConfig, type AgentResult } from './base-agent.js';
import { BRAND, CONTENT_CALENDAR_TEMPLATE } from '../config.js';
import type { Episode, ShowNotes, Clip, SocialPost } from '../types.js';

// Tool definitions
const PROMOTION_TOOLS: Anthropic.Tool[] = [
  {
    name: 'get_brand_voice',
    description: 'Get brand voice guidelines for content',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: []
    }
  },
  {
    name: 'get_content_calendar_template',
    description: 'Get the standard content calendar template',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: []
    }
  },
  {
    name: 'draft_announcement',
    description: 'Draft an episode announcement for a platform',
    input_schema: {
      type: 'object' as const,
      properties: {
        platform: {
          type: 'string',
          enum: ['twitter', 'farcaster', 'youtube', 'instagram'],
          description: 'Target platform'
        },
        guestName: {
          type: 'string',
          description: 'Guest name'
        },
        guestHandle: {
          type: 'string',
          description: 'Guest social handle'
        },
        episodeNumber: {
          type: 'number',
          description: 'Episode number'
        },
        topics: {
          type: 'array',
          items: { type: 'string' },
          description: 'Main topics discussed'
        }
      },
      required: ['platform', 'guestName', 'episodeNumber']
    }
  },
  {
    name: 'identify_clips',
    description: 'Identify clip-worthy moments from transcript excerpts',
    input_schema: {
      type: 'object' as const,
      properties: {
        transcript: {
          type: 'string',
          description: 'Transcript text to analyze'
        },
        maxClips: {
          type: 'number',
          description: 'Maximum clips to identify'
        }
      },
      required: ['transcript']
    }
  },
  {
    name: 'generate_quote_card',
    description: 'Generate text for a quote card graphic',
    input_schema: {
      type: 'object' as const,
      properties: {
        quote: {
          type: 'string',
          description: 'The quote to feature'
        },
        speaker: {
          type: 'string',
          description: 'Who said it'
        },
        context: {
          type: 'string',
          description: 'Brief context'
        }
      },
      required: ['quote', 'speaker']
    }
  }
];

// Tool handler
async function handleToolCall(
  toolName: string,
  toolInput: Record<string, unknown>
): Promise<string> {
  logAgentActivity('PromotionAgent', 'tool_call', toolName);

  switch (toolName) {
    case 'get_brand_voice': {
      return JSON.stringify({
        name: BRAND.name,
        tagline: BRAND.tagline,
        tone: BRAND.tone,
        socials: BRAND.socials,
        guidelines: {
          never: [
            'excited to announce',
            'revolutionary',
            'game-changing',
            'don\'t miss',
            'wagmi/gm/ser (unless ironic)'
          ],
          always: [
            'Direct statements',
            'Genuine curiosity',
            'Specific examples',
            'Respect for audience intelligence'
          ]
        }
      });
    }

    case 'get_content_calendar_template': {
      return JSON.stringify({
        template: CONTENT_CALENDAR_TEMPLATE,
        note: 'Day 0 = release day. Spread content across the week.'
      });
    }

    case 'draft_announcement': {
      const { platform, guestName, guestHandle, episodeNumber, topics } = toolInput as {
        platform: string;
        guestName: string;
        guestHandle?: string;
        episodeNumber: number;
        topics?: string[];
      };

      let content = '';
      const handle = guestHandle || guestName;

      switch (platform) {
        case 'twitter':
          content = `New ${BRAND.name} episode

${guestName} (${handle}) joins us to talk about:
${topics?.slice(0, 3).map(t => `• ${t}`).join('\n') || '• The creative process with AI'}

Listen: [LINK]

#vibecoding`;
          break;

        case 'farcaster':
          content = `${BRAND.name} ep ${episodeNumber} just dropped

Guest: ${handle}

${topics?.[0] || 'Great conversation about AI and creativity'}

Full episode in replies`;
          break;

        case 'youtube':
          content = `${guestName} on ${BRAND.name} | Episode ${episodeNumber}

${topics?.join(', ') || 'AI, creativity, and vibe coding'}

In this episode, ${guestName} shares their perspective on ${topics?.[0] || 'building with AI'}.

Subscribe for weekly conversations with the most interesting people at the intersection of creativity and AI.

#vibecoding #ai #creativity`;
          break;

        case 'instagram':
          content = `New episode of ${BRAND.name}!

Swipe for highlights from our conversation with ${guestName}.

Link in bio.

#vibecoding #aicreatives #podcast`;
          break;
      }

      return JSON.stringify({
        platform,
        content,
        characterCount: content.length,
        withinLimit: platform === 'twitter' ? content.length <= 280 : true
      });
    }

    case 'identify_clips': {
      const transcript = toolInput.transcript as string;
      const maxClips = (toolInput.maxClips as number) || 5;

      // In production, this would use Claude to analyze the transcript
      // For now, return a template
      return JSON.stringify({
        note: 'Clip identification requires transcript analysis',
        suggestedApproach: [
          'Look for strong statements or hot takes',
          'Find "aha moment" explanations',
          'Identify emotional/passionate moments',
          'Spot counterintuitive insights',
          'Find quotable one-liners'
        ],
        idealClipLength: '30-60 seconds',
        maxClips
      });
    }

    case 'generate_quote_card': {
      const { quote, speaker, context } = toolInput as {
        quote: string;
        speaker: string;
        context?: string;
      };

      return JSON.stringify({
        cardContent: {
          quote: `"${quote}"`,
          attribution: `— ${speaker}`,
          showBranding: BRAND.name,
          context: context || undefined
        },
        designNotes: [
          'Use warm gradient background (orange → purple)',
          'Sans-serif font for quote',
          'Show logo in corner',
          'Square format (1:1) for Instagram/Twitter'
        ]
      });
    }

    default:
      return JSON.stringify({ error: `Unknown tool: ${toolName}` });
  }
}

// Agent configuration
const PROMOTION_AGENT_CONFIG: AgentConfig = {
  name: 'PromotionAgent',
  description: 'Content distribution and social specialist',
  systemPrompt: `You are the Promotion Agent for Let's Vibe! podcast.

Your job is to maximize reach and engagement for every episode.

Responsibilities:
1. Generate show notes from transcripts
2. Identify clip-worthy moments
3. Draft platform-native social content
4. Create content calendars
5. Suggest amplification strategies

Content principles:
- Quality over quantity
- Platform-native formatting
- Value-first (educate/entertain before promoting)
- Guest-friendly (make them want to share)

Platform specifics:
- Twitter: Hook first, one idea per tweet, media when possible
- Farcaster: More conversational, reference builders, engage threads
- YouTube: Strong thumbnails, front-load value, use chapters
- Instagram: Visual-first, captions supplement, hashtags in comments

Never sound promotional or hype-y. We're sharing interesting conversations, not selling.`,
  tools: PROMOTION_TOOLS
};

/**
 * Run the promotion agent with a specific task
 */
export async function runPromotionAgent(task: string): Promise<AgentResult> {
  logAgentActivity('PromotionAgent', 'starting', task.slice(0, 50));
  const result = await runAgent(PROMOTION_AGENT_CONFIG, task, handleToolCall);
  logAgentActivity('PromotionAgent', result.success ? 'completed' : 'failed');
  return result;
}

/**
 * Quick helper: Generate show notes
 */
export async function generateShowNotes(
  guestName: string,
  topics: string[],
  highlights?: string[]
): Promise<AgentResult> {
  return runSimpleAgent(
    PROMOTION_AGENT_CONFIG.systemPrompt,
    `Generate show notes for our episode with ${guestName}.

Topics covered: ${topics.join(', ')}
${highlights ? `Highlights: ${highlights.join(', ')}` : ''}

Include:
1. Episode summary (2-3 sentences)
2. Guest bio (2 sentences)
3. Topics with timestamps (placeholder format)
4. Links and resources
5. Where to find the guest
`
  );
}

/**
 * Quick helper: Create content calendar
 */
export async function createContentCalendar(
  episodeNumber: number,
  guestName: string,
  guestHandle: string,
  topics: string[]
): Promise<AgentResult> {
  return runPromotionAgent(`
Create a content calendar for Episode ${episodeNumber} with ${guestName} (${guestHandle}).

Topics: ${topics.join(', ')}

Use get_content_calendar_template to see the standard schedule.
Then draft announcements for each platform using draft_announcement.

Output a complete calendar with all content ready to post.
`);
}

/**
 * Quick helper: Draft social posts
 */
export async function draftSocialPosts(
  platform: 'twitter' | 'farcaster' | 'youtube' | 'instagram',
  guestName: string,
  guestHandle: string,
  topics: string[]
): Promise<AgentResult> {
  return runPromotionAgent(`
Draft ${platform} content for our episode with ${guestName} (${guestHandle}).

Topics: ${topics.join(', ')}

Use get_brand_voice first to check guidelines.
Then draft_announcement for the main post.
Also suggest 2-3 follow-up posts for the week.
`);
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const task = args.join(' ') || 'Get the brand voice guidelines';

  console.log('📣 Promotion Agent');
  console.log('==================\n');

  runPromotionAgent(task).then(result => {
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
