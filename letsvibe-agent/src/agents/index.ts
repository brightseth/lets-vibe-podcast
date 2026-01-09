/**
 * Let's Vibe! Agent System
 *
 * Multi-agent architecture for podcast production
 */

// Base infrastructure
export { runAgent, runSimpleAgent, logAgentActivity, PODCAST_CONTEXT } from './base-agent.js';
export type { AgentConfig, AgentResult, ToolHandler } from './base-agent.js';

// Specialized agents
export {
  runBookingAgent,
  suggestNextGuests,
  draftGuestOutreach,
  createPreRecordingBrief
} from './booking-agent.js';

export {
  runResearchAgent,
  researchGuest,
  prepareTalkingPoints,
  researchCompetitors,
  researchTrends
} from './research-agent.js';

export {
  runPromotionAgent,
  generateShowNotes,
  createContentCalendar,
  draftSocialPosts
} from './promotion-agent.js';

export {
  runPartnershipsAgent,
  findSponsors,
  draftSponsorPitch,
  findPartnerships
} from './partnerships-agent.js';

export {
  runProductionAgent,
  processEpisode,
  generateIntroOutro
} from './production-agent.js';

// Orchestrator
export {
  routeTask,
  prepareForGuest,
  postEpisodeProduction,
  weeklyPlanning,
  getSystemStatus
} from './orchestrator.js';
