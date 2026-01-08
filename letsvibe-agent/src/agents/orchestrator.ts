#!/usr/bin/env tsx
/**
 * Orchestrator
 *
 * Main coordinator for the Let's Vibe! agent system.
 * Routes tasks to appropriate sub-agents and coordinates multi-agent workflows.
 */

import { runBookingAgent, suggestNextGuests, draftGuestOutreach, createPreRecordingBrief } from './booking-agent.js';
import { runResearchAgent, researchGuest, prepareTalkingPoints, researchCompetitors, researchTrends } from './research-agent.js';
import { runPromotionAgent, generateShowNotes, createContentCalendar, draftSocialPosts } from './promotion-agent.js';
import { runPartnershipsAgent, findSponsors, draftSponsorPitch, findPartnerships } from './partnerships-agent.js';
import { logAgentActivity, type AgentResult } from './base-agent.js';
import { BRAND } from '../config.js';

// Task classification
type TaskCategory = 'booking' | 'research' | 'promotion' | 'partnerships' | 'unknown';

interface TaskClassification {
  category: TaskCategory;
  confidence: number;
  suggestedAgent: string;
}

/**
 * Classify a task to determine which agent should handle it
 */
function classifyTask(task: string): TaskClassification {
  const taskLower = task.toLowerCase();

  // Booking keywords
  const bookingKeywords = ['guest', 'invite', 'outreach', 'contact', 'book', 'schedule', 'dm', 'email', 'reach out', 'pipeline'];
  const bookingScore = bookingKeywords.filter(k => taskLower.includes(k)).length;

  // Research keywords
  const researchKeywords = ['research', 'learn about', 'find out', 'talking points', 'prepare', 'competitive', 'trends', 'background'];
  const researchScore = researchKeywords.filter(k => taskLower.includes(k)).length;

  // Promotion keywords
  const promotionKeywords = ['social', 'twitter', 'farcaster', 'youtube', 'instagram', 'post', 'clip', 'show notes', 'announce', 'content', 'calendar'];
  const promotionScore = promotionKeywords.filter(k => taskLower.includes(k)).length;

  // Partnerships keywords
  const partnershipKeywords = ['sponsor', 'partnership', 'revenue', 'monetize', 'pitch', 'advertiser', 'collaboration', 'cross-promotion'];
  const partnershipScore = partnershipKeywords.filter(k => taskLower.includes(k)).length;

  const scores = [
    { category: 'booking' as TaskCategory, score: bookingScore, agent: 'BookingAgent' },
    { category: 'research' as TaskCategory, score: researchScore, agent: 'ResearchAgent' },
    { category: 'promotion' as TaskCategory, score: promotionScore, agent: 'PromotionAgent' },
    { category: 'partnerships' as TaskCategory, score: partnershipScore, agent: 'PartnershipsAgent' }
  ];

  const best = scores.reduce((a, b) => a.score > b.score ? a : b);

  if (best.score === 0) {
    return { category: 'unknown', confidence: 0, suggestedAgent: 'General' };
  }

  return {
    category: best.category,
    confidence: Math.min(1, best.score / 3),
    suggestedAgent: best.agent
  };
}

/**
 * Route a task to the appropriate agent
 */
export async function routeTask(task: string): Promise<AgentResult> {
  logAgentActivity('Orchestrator', 'received_task', task.slice(0, 50));

  const classification = classifyTask(task);
  logAgentActivity('Orchestrator', 'classified', `${classification.category} (${Math.round(classification.confidence * 100)}%)`);

  switch (classification.category) {
    case 'booking':
      return runBookingAgent(task);

    case 'research':
      return runResearchAgent(task);

    case 'promotion':
      return runPromotionAgent(task);

    case 'partnerships':
      return runPartnershipsAgent(task);

    case 'unknown':
    default:
      return {
        success: false,
        output: '',
        toolsUsed: [],
        error: `Could not classify task. Try being more specific about:\n- Guests/booking\n- Research/preparation\n- Social/promotion\n- Sponsors/partnerships`
      };
  }
}

/**
 * Multi-agent workflow: Prepare for a new guest
 */
export async function prepareForGuest(guestName: string): Promise<{
  research: AgentResult;
  talkingPoints: AgentResult;
  socialPrep: AgentResult;
}> {
  logAgentActivity('Orchestrator', 'workflow', `prepareForGuest: ${guestName}`);

  // Run research and talking points in parallel
  const [research, talkingPoints] = await Promise.all([
    researchGuest(guestName),
    prepareTalkingPoints(guestName)
  ]);

  // Then prepare social content based on research
  const topics = ['vibe coding', 'AI creativity', 'building in public']; // Would extract from research
  const socialPrep = await draftSocialPosts('twitter', guestName, '', topics);

  return { research, talkingPoints, socialPrep };
}

/**
 * Multi-agent workflow: Post-episode production
 */
export async function postEpisodeProduction(
  episodeNumber: number,
  guestName: string,
  guestHandle: string,
  topics: string[]
): Promise<{
  showNotes: AgentResult;
  contentCalendar: AgentResult;
}> {
  logAgentActivity('Orchestrator', 'workflow', `postEpisodeProduction: ep${episodeNumber}`);

  const [showNotes, contentCalendar] = await Promise.all([
    generateShowNotes(guestName, topics),
    createContentCalendar(episodeNumber, guestName, guestHandle, topics)
  ]);

  return { showNotes, contentCalendar };
}

/**
 * Multi-agent workflow: Weekly planning
 */
export async function weeklyPlanning(): Promise<{
  nextGuests: AgentResult;
  trends: AgentResult;
  partnerships: AgentResult;
}> {
  logAgentActivity('Orchestrator', 'workflow', 'weeklyPlanning');

  const [nextGuests, trends, partnerships] = await Promise.all([
    suggestNextGuests(5),
    researchTrends(),
    findPartnerships()
  ]);

  return { nextGuests, trends, partnerships };
}

/**
 * Get system status
 */
export function getSystemStatus(): string {
  return `
╔════════════════════════════════════════════════════════════╗
║            LET'S VIBE! AGENT SYSTEM                         ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  ORCHESTRATOR                                              ║
║  └── Routes tasks to specialized agents                    ║
║                                                            ║
║  AGENTS                                                    ║
║  ├── 🎤 BookingAgent      Guest acquisition & scheduling   ║
║  ├── 🔬 ResearchAgent     Deep research & preparation      ║
║  ├── 📣 PromotionAgent    Social content & distribution    ║
║  └── 🤝 PartnershipsAgent Sponsors & collaborations        ║
║                                                            ║
║  WORKFLOWS                                                 ║
║  ├── prepareForGuest      Research + talking points + prep ║
║  ├── postEpisodeProduction Show notes + content calendar   ║
║  └── weeklyPlanning       Guests + trends + partnerships   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`;
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0];
  const rest = args.slice(1).join(' ');

  console.log(getSystemStatus());

  if (!command) {
    console.log('COMMANDS');
    console.log('========');
    console.log('');
    console.log('Route a task:');
    console.log('  npx tsx src/agents/orchestrator.ts route "your task here"');
    console.log('');
    console.log('Run workflows:');
    console.log('  npx tsx src/agents/orchestrator.ts prepare "Guest Name"');
    console.log('  npx tsx src/agents/orchestrator.ts post-episode 1 "Guest" "@handle" "topic1,topic2"');
    console.log('  npx tsx src/agents/orchestrator.ts weekly');
    console.log('');
    console.log('Run individual agents:');
    console.log('  npx tsx src/agents/booking-agent.ts "your task"');
    console.log('  npx tsx src/agents/research-agent.ts "your task"');
    console.log('  npx tsx src/agents/promotion-agent.ts "your task"');
    console.log('  npx tsx src/agents/partnerships-agent.ts "your task"');
    process.exit(0);
  }

  switch (command) {
    case 'route': {
      if (!rest) {
        console.error('Usage: orchestrator.ts route "your task"');
        process.exit(1);
      }
      routeTask(rest).then(result => {
        if (result.success) {
          console.log('\nRESULT');
          console.log('======\n');
          console.log(result.output);
          if (result.toolsUsed.length > 0) {
            console.log(`\n[Tools: ${result.toolsUsed.join(', ')}]`);
          }
        } else {
          console.error('Error:', result.error);
        }
      });
      break;
    }

    case 'prepare': {
      if (!rest) {
        console.error('Usage: orchestrator.ts prepare "Guest Name"');
        process.exit(1);
      }
      console.log(`\nPreparing for guest: ${rest}\n`);
      prepareForGuest(rest).then(results => {
        console.log('=== RESEARCH ===\n');
        console.log(results.research.output || results.research.error);
        console.log('\n=== TALKING POINTS ===\n');
        console.log(results.talkingPoints.output || results.talkingPoints.error);
        console.log('\n=== SOCIAL PREP ===\n');
        console.log(results.socialPrep.output || results.socialPrep.error);
      });
      break;
    }

    case 'post-episode': {
      const [epNum, guest, handle, topics] = rest.split(' ');
      if (!epNum || !guest) {
        console.error('Usage: orchestrator.ts post-episode 1 "Guest" "@handle" "topic1,topic2"');
        process.exit(1);
      }
      console.log(`\nPost-production for Episode ${epNum}\n`);
      postEpisodeProduction(
        parseInt(epNum),
        guest,
        handle || '',
        topics?.split(',') || []
      ).then(results => {
        console.log('=== SHOW NOTES ===\n');
        console.log(results.showNotes.output || results.showNotes.error);
        console.log('\n=== CONTENT CALENDAR ===\n');
        console.log(results.contentCalendar.output || results.contentCalendar.error);
      });
      break;
    }

    case 'weekly': {
      console.log('\nRunning weekly planning workflow...\n');
      weeklyPlanning().then(results => {
        console.log('=== NEXT GUESTS ===\n');
        console.log(results.nextGuests.output || results.nextGuests.error);
        console.log('\n=== TRENDS ===\n');
        console.log(results.trends.output || results.trends.error);
        console.log('\n=== PARTNERSHIPS ===\n');
        console.log(results.partnerships.output || results.partnerships.error);
      });
      break;
    }

    default:
      console.error(`Unknown command: ${command}`);
      console.log('Use "route", "prepare", "post-episode", or "weekly"');
      process.exit(1);
  }
}
