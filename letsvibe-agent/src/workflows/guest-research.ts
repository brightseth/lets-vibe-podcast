#!/usr/bin/env tsx
/**
 * Guest Research Workflow
 * Research potential guests and assess their fit for Let's Vibe!
 */

import { GUESTS, getNextGuestsToContact, getGuestsByTier } from '../data/guests.js';
import { GUEST_TIERS, BRAND } from '../config.js';
import type { Guest, GuestResearchResult, WorkflowResult } from '../types.js';

interface ResearchInput {
  query?: string;      // "vibecoding creatives with 10k+ followers"
  tier?: number;       // Research a specific tier
  name?: string;       // Research a specific person
  limit?: number;      // Max results
}

/**
 * Research guests based on criteria
 */
export async function researchGuests(input: ResearchInput): Promise<WorkflowResult<GuestResearchResult[]>> {
  const { query, tier, name, limit = 10 } = input;
  const logs: string[] = [];

  logs.push(`Starting guest research...`);

  // If researching existing guest
  if (name) {
    const existing = GUESTS.find(g =>
      g.name.toLowerCase().includes(name.toLowerCase()) ||
      g.twitter?.toLowerCase().includes(name.toLowerCase())
    );

    if (existing) {
      logs.push(`Found existing guest: ${existing.name}`);
      return {
        success: true,
        data: [{
          guest: existing,
          fitScore: assessFit(existing),
          reasoning: `Already in database. ${existing.why}`
        }],
        logs
      };
    }
  }

  // Get candidates by tier
  if (tier !== undefined) {
    const tierGuests = getGuestsByTier(tier);
    logs.push(`Found ${tierGuests.length} guests in tier ${tier} (${GUEST_TIERS[tier as keyof typeof GUEST_TIERS]?.name})`);

    return {
      success: true,
      data: tierGuests.slice(0, limit).map(g => ({
        guest: g,
        fitScore: assessFit(g),
        reasoning: g.why
      })),
      logs
    };
  }

  // Get next guests to contact
  const nextUp = getNextGuestsToContact(limit);
  logs.push(`Returning top ${nextUp.length} guests to contact`);

  return {
    success: true,
    data: nextUp.map(g => ({
      guest: g,
      fitScore: assessFit(g),
      reasoning: g.why
    })),
    logs
  };
}

/**
 * Assess how well a guest fits Let's Vibe! positioning
 */
function assessFit(guest: Guest): number {
  let score = 5; // Base score

  // Tier bonus (lower tier = higher priority = higher score)
  score += (6 - guest.tier);

  // Has multiple contact methods
  if (guest.twitter) score += 0.5;
  if (guest.farcaster) score += 0.5;
  if (guest.email) score += 0.5;

  // Has defined topics
  if (guest.topics && guest.topics.length > 0) score += 1;

  // Cap at 10
  return Math.min(10, Math.round(score * 10) / 10);
}

/**
 * Generate a prioritized outreach list
 */
export function generateOutreachPriority(): Guest[] {
  return GUESTS
    .filter(g => g.status === 'target')
    .sort((a, b) => {
      // First by tier
      if (a.tier !== b.tier) return a.tier - b.tier;
      // Then by whether we have contact info
      const aContacts = [a.twitter, a.farcaster, a.email].filter(Boolean).length;
      const bContacts = [b.twitter, b.farcaster, b.email].filter(Boolean).length;
      return bContacts - aContacts;
    });
}

/**
 * Print research report
 */
export function printResearchReport(results: GuestResearchResult[]): void {
  console.log('\n=== GUEST RESEARCH REPORT ===\n');
  console.log(`Podcast: ${BRAND.name}`);
  console.log(`Positioning: ${BRAND.tagline}\n`);

  for (const result of results) {
    const g = result.guest;
    console.log(`---`);
    console.log(`Name: ${g.name}`);
    console.log(`Tier: ${g.tier} (${GUEST_TIERS[g.tier as keyof typeof GUEST_TIERS]?.name})`);
    console.log(`Twitter: ${g.twitter || 'N/A'}`);
    console.log(`Farcaster: ${g.farcaster || 'N/A'}`);
    console.log(`Status: ${g.status}`);
    console.log(`Fit Score: ${result.fitScore}/10`);
    console.log(`Why: ${result.reasoning}`);
    if (g.topics) console.log(`Topics: ${g.topics.join(', ')}`);
    console.log();
  }
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const tier = args.find(a => a.startsWith('--tier='))?.split('=')[1];
  const limit = args.find(a => a.startsWith('--limit='))?.split('=')[1];

  const input: ResearchInput = {};
  if (tier) input.tier = parseInt(tier);
  if (limit) input.limit = parseInt(limit);

  researchGuests(input).then(result => {
    if (result.success && result.data) {
      printResearchReport(result.data);
    } else {
      console.error('Research failed:', result.error);
    }
  });
}
