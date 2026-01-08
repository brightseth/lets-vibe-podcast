/**
 * Booking Agent
 *
 * Specializes in guest acquisition:
 * - Research potential guests
 * - Draft personalized outreach
 * - Track response status
 * - Prepare pre-recording briefs
 */

import Anthropic from '@anthropic-ai/sdk';
import { runAgent, runSimpleAgent, logAgentActivity, type AgentConfig, type AgentResult } from './base-agent.js';
import { GUESTS, getNextGuestsToContact, findGuestByTwitter } from '../data/guests.js';
import { OUTREACH_TEMPLATES, GUEST_TIERS, BRAND } from '../config.js';
import type { Guest, OutreachMessage } from '../types.js';

// Tool definitions
const BOOKING_TOOLS: Anthropic.Tool[] = [
  {
    name: 'list_guests',
    description: 'List guests from the database, optionally filtered by tier or status',
    input_schema: {
      type: 'object' as const,
      properties: {
        tier: {
          type: 'number',
          description: 'Filter by tier (0-6)'
        },
        status: {
          type: 'string',
          enum: ['target', 'invited', 'confirmed', 'scheduled', 'recorded', 'published'],
          description: 'Filter by status'
        },
        limit: {
          type: 'number',
          description: 'Maximum guests to return'
        }
      },
      required: []
    }
  },
  {
    name: 'get_guest',
    description: 'Get detailed information about a specific guest',
    input_schema: {
      type: 'object' as const,
      properties: {
        name: {
          type: 'string',
          description: 'Guest name or Twitter handle'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'draft_outreach',
    description: 'Draft a personalized outreach message for a guest',
    input_schema: {
      type: 'object' as const,
      properties: {
        guestName: {
          type: 'string',
          description: 'Name of the guest to draft outreach for'
        },
        angle: {
          type: 'string',
          description: 'Specific angle or hook for this outreach'
        }
      },
      required: ['guestName']
    }
  },
  {
    name: 'prioritize_outreach',
    description: 'Get a prioritized list of guests to contact next',
    input_schema: {
      type: 'object' as const,
      properties: {
        limit: {
          type: 'number',
          description: 'How many guests to suggest (default: 5)'
        }
      },
      required: []
    }
  }
];

// Tool handler
async function handleToolCall(
  toolName: string,
  toolInput: Record<string, unknown>
): Promise<string> {
  logAgentActivity('BookingAgent', 'tool_call', toolName);

  switch (toolName) {
    case 'list_guests': {
      let guests = [...GUESTS];

      if (toolInput.tier !== undefined) {
        guests = guests.filter(g => g.tier === toolInput.tier);
      }
      if (toolInput.status) {
        guests = guests.filter(g => g.status === toolInput.status);
      }
      if (toolInput.limit) {
        guests = guests.slice(0, toolInput.limit as number);
      }

      return JSON.stringify({
        count: guests.length,
        guests: guests.map(g => ({
          name: g.name,
          tier: g.tier,
          tierName: GUEST_TIERS[g.tier as keyof typeof GUEST_TIERS]?.name,
          status: g.status,
          twitter: g.twitter,
          farcaster: g.farcaster,
          why: g.why
        }))
      });
    }

    case 'get_guest': {
      const name = toolInput.name as string;
      const guest = GUESTS.find(g =>
        g.name.toLowerCase().includes(name.toLowerCase()) ||
        g.twitter?.toLowerCase().includes(name.toLowerCase())
      );

      if (!guest) {
        return JSON.stringify({ error: `Guest "${name}" not found` });
      }

      return JSON.stringify({
        ...guest,
        tierName: GUEST_TIERS[guest.tier as keyof typeof GUEST_TIERS]?.name
      });
    }

    case 'draft_outreach': {
      const guestName = toolInput.guestName as string;
      const angle = toolInput.angle as string | undefined;

      const guest = GUESTS.find(g =>
        g.name.toLowerCase().includes(guestName.toLowerCase())
      );

      if (!guest) {
        return JSON.stringify({ error: `Guest "${guestName}" not found` });
      }

      // Use tier-appropriate template
      const template = guest.tier === 0
        ? OUTREACH_TEMPLATES.tier0
        : OUTREACH_TEMPLATES.standard;

      // Generate personalized outreach
      const outreach: OutreachMessage = {
        guest,
        subject: template.subject,
        body: template.body
          .replace('{{NAME}}', guest.name.split(' ')[0])
          .replace('{{SPECIFIC_THING}}', guest.whoTheyAre)
          .replace('{{TOPIC}}', guest.topics?.[0] || 'building with AI')
          .replace('{{PERSONAL_NOTE}}', angle || 'Looking forward to connecting.')
          .replace('{{THEIR_WORK}}', guest.whoTheyAre)
          .replace('{{SPECIFIC_ANGLE}}', guest.topics?.[0] || 'creativity and AI')
          .replace('{{INFLUENCE}}', 'your work'),
        platform: guest.email ? 'email' : guest.twitter ? 'twitter-dm' : 'farcaster'
      };

      return JSON.stringify({
        guest: guest.name,
        platform: outreach.platform,
        handle: guest.twitter || guest.farcaster || guest.email,
        subject: outreach.subject,
        body: outreach.body,
        note: angle ? `Custom angle: ${angle}` : 'Using default template'
      });
    }

    case 'prioritize_outreach': {
      const limit = (toolInput.limit as number) || 5;
      const prioritized = getNextGuestsToContact(limit);

      return JSON.stringify({
        recommendation: 'Guests prioritized by tier (lower = higher priority) and contact info availability',
        guests: prioritized.map((g, i) => ({
          rank: i + 1,
          name: g.name,
          tier: g.tier,
          tierName: GUEST_TIERS[g.tier as keyof typeof GUEST_TIERS]?.name,
          twitter: g.twitter,
          why: g.why,
          contactStrategy: g.contactStrategy
        }))
      });
    }

    default:
      return JSON.stringify({ error: `Unknown tool: ${toolName}` });
  }
}

// Agent configuration
const BOOKING_AGENT_CONFIG: AgentConfig = {
  name: 'BookingAgent',
  description: 'Guest acquisition and scheduling specialist',
  systemPrompt: `You are the Booking Agent for Let's Vibe! podcast.

Your job is to help find, research, and book the best guests for the show.

Responsibilities:
1. Research potential guests and assess their fit
2. Draft personalized, non-templated outreach messages
3. Track guest pipeline and suggest who to contact next
4. Prepare pre-recording briefs for confirmed guests

When drafting outreach:
- Be genuine and specific about why we want THEM
- Reference their actual recent work
- Keep it concise (under 150 words for DMs)
- Make the ask clear and low-friction
- Never sound like a mass template

Guest priorities:
- Tier 0 (Unicorn Gets): Worth special effort, longer timeline
- Tier 1-2: Core target audience, high conversion expected
- Tier 3-4: Good variety, easier to book
- Tier 5-6: Fill-ins and network expansion

Always check the guest database before suggesting new names.`,
  tools: BOOKING_TOOLS
};

/**
 * Run the booking agent with a specific task
 */
export async function runBookingAgent(task: string): Promise<AgentResult> {
  logAgentActivity('BookingAgent', 'starting', task.slice(0, 50));
  const result = await runAgent(BOOKING_AGENT_CONFIG, task, handleToolCall);
  logAgentActivity('BookingAgent', result.success ? 'completed' : 'failed');
  return result;
}

/**
 * Quick helper: Get next guests to contact
 */
export async function suggestNextGuests(count: number = 5): Promise<AgentResult> {
  return runBookingAgent(`Suggest the next ${count} guests we should reach out to, with personalized outreach strategies for each.`);
}

/**
 * Quick helper: Draft outreach for a specific guest
 */
export async function draftGuestOutreach(guestName: string, customAngle?: string): Promise<AgentResult> {
  const task = customAngle
    ? `Draft outreach for ${guestName} with this angle: ${customAngle}`
    : `Draft personalized outreach for ${guestName}`;
  return runBookingAgent(task);
}

/**
 * Quick helper: Create pre-recording brief
 */
export async function createPreRecordingBrief(guestName: string): Promise<AgentResult> {
  return runSimpleAgent(
    BOOKING_AGENT_CONFIG.systemPrompt,
    `Create a pre-recording brief for our upcoming conversation with ${guestName}.
Include:
1. Guest background (who they are, recent work)
2. 5-7 potential discussion topics based on their expertise
3. 3-5 specific questions to ask
4. Things to avoid or be sensitive about
5. Suggested cold open clip topic`
  );
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const task = process.argv.slice(2).join(' ') || 'Suggest the next 5 guests to contact';

  console.log('🎤 Booking Agent');
  console.log('================\n');

  runBookingAgent(task).then(result => {
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
