/**
 * Let's Vibe! Agent
 * Production assistant for the Let's Vibe! podcast
 */

import 'dotenv/config';

import { AGENT_CONFIG, BRAND, EPISODE_FORMAT, GUEST_TIERS } from './config.js';
import { GUESTS, getNextGuestsToContact, getGuestsByTier, getGuestsByStatus } from './data/guests.js';
import { researchGuests, generateOutreachPriority } from './workflows/guest-research.js';
import { generateOutreach, exportToMarkdown as exportOutreachMarkdown } from './workflows/outreach.js';
import { generateShowNotes, formatShowNotesMarkdown } from './workflows/show-notes.js';
import { generateContentCalendar, exportCalendarMarkdown } from './workflows/social.js';

// Re-export types
export * from './types.js';

// Re-export config
export { AGENT_CONFIG, BRAND, EPISODE_FORMAT, GUEST_TIERS };

// Re-export data
export { GUESTS, getNextGuestsToContact, getGuestsByTier, getGuestsByStatus };

// Re-export workflows
export {
  researchGuests,
  generateOutreachPriority,
  generateOutreach,
  exportOutreachMarkdown,
  generateShowNotes,
  formatShowNotesMarkdown,
  generateContentCalendar,
  exportCalendarMarkdown
};

/**
 * Agent status and capabilities
 */
export function getAgentStatus() {
  const enabledIntegrations = AGENT_CONFIG.integrations.filter(i => i.enabled);

  return {
    name: AGENT_CONFIG.name,
    version: AGENT_CONFIG.version,
    capabilities: AGENT_CONFIG.capabilities,
    integrations: {
      enabled: enabledIntegrations.map(i => i.name),
      disabled: AGENT_CONFIG.integrations.filter(i => !i.enabled).map(i => i.name)
    },
    guests: {
      total: GUESTS.length,
      byStatus: {
        target: getGuestsByStatus('target').length,
        invited: getGuestsByStatus('invited').length,
        confirmed: getGuestsByStatus('confirmed').length,
        scheduled: getGuestsByStatus('scheduled').length,
        recorded: getGuestsByStatus('recorded').length,
        published: getGuestsByStatus('published').length
      }
    },
    podcast: {
      name: BRAND.name,
      hosts: BRAND.hosts,
      tagline: BRAND.tagline
    }
  };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const command = process.argv[2];

  console.log(`
╔═══════════════════════════════════════════════════╗
║                                                   ║
║   LET'S VIBE! AGENT v${AGENT_CONFIG.version}                       ║
║   Production assistant for ${BRAND.name}           ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
`);

  if (!command || command === 'status') {
    const status = getAgentStatus();
    console.log('STATUS');
    console.log('======\n');
    console.log(`Podcast: ${status.podcast.name}`);
    console.log(`Hosts: ${status.podcast.hosts.join(' & ')}`);
    console.log(`Tagline: ${status.podcast.tagline}\n`);

    console.log('GUESTS');
    console.log('------');
    console.log(`Total in database: ${status.guests.total}`);
    Object.entries(status.guests.byStatus).forEach(([s, count]) => {
      if (count > 0) console.log(`  ${s}: ${count}`);
    });
    console.log();

    console.log('INTEGRATIONS');
    console.log('------------');
    console.log(`Enabled: ${status.integrations.enabled.join(', ') || 'none'}`);
    console.log(`Disabled: ${status.integrations.disabled.join(', ')}`);
    console.log();

    console.log('COMMANDS');
    console.log('--------');
    console.log('npm run guest:research     - Research and prioritize guests');
    console.log('npm run guest:outreach     - Generate outreach messages');
    console.log('npm run production:notes   - Generate show notes from transcript');
    console.log('npm run social:draft       - Generate social content calendar');
    console.log();

  } else if (command === 'help') {
    console.log('AVAILABLE COMMANDS');
    console.log('==================\n');
    console.log('status         Show agent status and guest counts');
    console.log('research       Research guests (--tier=N, --limit=N)');
    console.log('outreach       Generate outreach (--tier=N, --guest="name", --export)');
    console.log('notes          Generate show notes (--transcript=file, --guest="name")');
    console.log('social         Generate content calendar (requires episode data)');
    console.log();

  } else {
    console.log(`Unknown command: ${command}`);
    console.log('Run with no args or "help" for available commands');
  }
}
