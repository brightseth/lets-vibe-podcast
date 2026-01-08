#!/usr/bin/env tsx
/**
 * Outreach Workflow
 * Generate personalized guest invitations
 */

import { GUESTS, getNextGuestsToContact, findGuestByTwitter } from '../data/guests.js';
import { OUTREACH_TEMPLATES, BRAND, GUEST_TIERS } from '../config.js';
import type { Guest, OutreachMessage, WorkflowResult } from '../types.js';

interface OutreachInput {
  guest?: string;      // Specific guest name or handle
  tier?: number;       // Generate for all in tier
  limit?: number;      // Max messages to generate
  template?: 'standard' | 'tier0';
}

/**
 * Generate outreach messages for guests
 */
export async function generateOutreach(input: OutreachInput): Promise<WorkflowResult<OutreachMessage[]>> {
  const { guest: guestQuery, tier, limit = 10, template = 'standard' } = input;
  const logs: string[] = [];
  const messages: OutreachMessage[] = [];

  logs.push('Generating outreach messages...');

  // Get target guests
  let targets: Guest[] = [];

  if (guestQuery) {
    const found = GUESTS.find(g =>
      g.name.toLowerCase().includes(guestQuery.toLowerCase()) ||
      g.twitter?.toLowerCase().includes(guestQuery.toLowerCase())
    );
    if (found) targets = [found];
  } else if (tier !== undefined) {
    targets = GUESTS.filter(g => g.tier === tier && g.status === 'target').slice(0, limit);
  } else {
    targets = getNextGuestsToContact(limit);
  }

  logs.push(`Found ${targets.length} guests to generate outreach for`);

  // Generate messages
  for (const guest of targets) {
    const msg = createOutreachMessage(guest, guest.tier === 0 ? 'tier0' : template);
    messages.push(msg);
  }

  return {
    success: true,
    data: messages,
    logs
  };
}

/**
 * Create a personalized outreach message
 */
function createOutreachMessage(guest: Guest, templateType: 'standard' | 'tier0'): OutreachMessage {
  const template = OUTREACH_TEMPLATES[templateType];

  // Variable substitution
  let body = template.body
    .replace('{{NAME}}', guest.name.split(' ')[0])
    .replace('{{SPECIFIC_THING}}', getSpecificThing(guest))
    .replace('{{TOPIC}}', guest.topics?.[0] || 'building with AI')
    .replace('{{PERSONAL_NOTE}}', getPersonalNote(guest))
    .replace('{{THEIR_WORK}}', guest.whoTheyAre)
    .replace('{{SPECIFIC_ANGLE}}', guest.topics?.[0] || 'creativity and technology')
    .replace('{{INFLUENCE}}', getInfluence(guest));

  // Determine platform
  const platform: OutreachMessage['platform'] =
    guest.email ? 'email' :
    guest.twitter ? 'twitter-dm' :
    guest.farcaster ? 'farcaster' :
    'twitter-dm';

  return {
    guest,
    subject: template.subject,
    body,
    platform,
    personalNote: getPersonalNote(guest)
  };
}

/**
 * Get a specific thing about the guest to reference
 */
function getSpecificThing(guest: Guest): string {
  // Map of known specific references
  const specifics: Record<string, string> = {
    'Andrej Karpathy': 'your "vibe coding" concept and educational videos',
    'Peter Steinberger': 'Clawdbot and Clawdis',
    'Simon Willison': 'your LLM tools and incredible documentation',
    'Pieter Levels': 'Photo AI and your incredible shipping speed',
    'Gene Kogan': 'Abraham.ai and your pioneering work in autonomous art',
    'Claire Silver': 'your advocacy for AI-assisted art and your beautiful work',
    'Holly Herndon': 'Holly+ and your exploration of AI voice',
    'Rick Rubin': '"The Creative Act" and your philosophy on creativity',
    '6529': 'OM and your thinking on digital ownership',
    'Snowfro': 'Art Blocks and what you built for generative artists',
    'Boris Dayma': 'your work on Claude and your approachable explanations',
    'swyx': 'Latent Space and your AI engineering content',
    'Tyler Hobbs': 'Fidenza and your generative art practice',
    'tez': 'your AI-optimistic perspective and community building'
  };

  return specifics[guest.name] || guest.whoTheyAre;
}

/**
 * Get a personal note based on guest context
 */
function getPersonalNote(guest: Guest): string {
  const notes: Record<string, string> = {
    'tez': 'Thanks for suggesting we do a podcast in the first place!',
    'Peter Steinberger': 'Loved watching Clawdbot evolve on /vibe.',
    'Gene Kogan': 'Been following Abraham since the early days.',
    'swyx': 'Would love to do a podcast swap - think our audiences overlap nicely.',
    'Ian Rogers': 'Still remember your talks from the Beats/Apple days.'
  };

  return notes[guest.name] || 'Looking forward to connecting.';
}

/**
 * Get something they influenced
 */
function getInfluence(guest: Guest): string {
  const influences: Record<string, string> = {
    'Rick Rubin': 'shaping how I think about the creative process',
    'Andrej Karpathy': 'making AI accessible to so many people',
    'Kevin Kelly': '1000 True Fans - it changed how I think about building',
    'Craig Mod': 'your essays on tools and walking'
  };

  return influences[guest.name] || 'your work';
}

/**
 * Print outreach messages
 */
export function printOutreachMessages(messages: OutreachMessage[]): void {
  console.log('\n=== OUTREACH MESSAGES ===\n');
  console.log(`Generated ${messages.length} messages\n`);

  for (const msg of messages) {
    console.log('---');
    console.log(`TO: ${msg.guest.name}`);
    console.log(`VIA: ${msg.platform} ${msg.guest.twitter || msg.guest.email || ''}`);
    console.log(`SUBJECT: ${msg.subject}`);
    console.log(`\n${msg.body}`);
    console.log();
  }
}

/**
 * Export messages to markdown
 */
export function exportToMarkdown(messages: OutreachMessage[]): string {
  let md = `# Let's Vibe! Outreach Queue\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;

  for (const msg of messages) {
    const tier = GUEST_TIERS[msg.guest.tier as keyof typeof GUEST_TIERS];
    md += `## ${msg.guest.name}\n\n`;
    md += `**Tier:** ${msg.guest.tier} - ${tier?.name}\n`;
    md += `**Platform:** ${msg.platform}\n`;
    md += `**Handle:** ${msg.guest.twitter || msg.guest.farcaster || msg.guest.email || 'N/A'}\n`;
    md += `**Status:** ${msg.guest.status}\n\n`;
    md += `### Message\n\n`;
    md += `**Subject:** ${msg.subject}\n\n`;
    md += `\`\`\`\n${msg.body}\n\`\`\`\n\n`;
    md += `---\n\n`;
  }

  return md;
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const tier = args.find(a => a.startsWith('--tier='))?.split('=')[1];
  const limit = args.find(a => a.startsWith('--limit='))?.split('=')[1];
  const guest = args.find(a => a.startsWith('--guest='))?.split('=')[1];
  const exportMd = args.includes('--export');

  const input: OutreachInput = {};
  if (tier) input.tier = parseInt(tier);
  if (limit) input.limit = parseInt(limit);
  if (guest) input.guest = guest;

  generateOutreach(input).then(result => {
    if (result.success && result.data) {
      if (exportMd) {
        console.log(exportToMarkdown(result.data));
      } else {
        printOutreachMessages(result.data);
      }
    } else {
      console.error('Outreach generation failed:', result.error);
    }
  });
}
