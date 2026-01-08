#!/usr/bin/env tsx
/**
 * Show Notes Workflow
 * Generate show notes from episode transcripts
 */

import { EPISODE_FORMAT, BRAND, RAPID_FIRE_QUESTIONS } from '../config.js';
import type { Episode, ShowNotes, Timestamp, Clip, WorkflowResult } from '../types.js';

interface ShowNotesInput {
  transcript: string;
  guestName: string;
  guestBio?: string;
  episodeNumber: number;
  recordingDate: string;
}

/**
 * Generate show notes from transcript
 * Note: In production, this would use Claude API to analyze the transcript
 */
export async function generateShowNotes(input: ShowNotesInput): Promise<WorkflowResult<ShowNotes>> {
  const { transcript, guestName, guestBio, episodeNumber } = input;
  const logs: string[] = [];

  logs.push(`Generating show notes for Episode ${episodeNumber} with ${guestName}`);

  // In production, this would call Claude API to:
  // 1. Summarize the episode
  // 2. Extract key topics
  // 3. Generate timestamps
  // 4. Find quotable moments
  // 5. Extract mentioned links/resources

  // Placeholder structure
  const showNotes: ShowNotes = {
    summary: `[PLACEHOLDER] Episode ${episodeNumber} of Let's Vibe! features ${guestName} discussing [topics from transcript analysis]`,
    topics: [
      '[Topic 1 extracted from transcript]',
      '[Topic 2 extracted from transcript]',
      '[Topic 3 extracted from transcript]'
    ],
    timestamps: [
      { time: '00:00:00', label: 'Cold open / Best quote' },
      { time: '00:01:00', label: 'Intro' },
      { time: '00:03:00', label: `${guestName} introduction` },
      { time: '00:06:00', label: '[Main topic 1]', isClipWorthy: true },
      { time: '00:20:00', label: '[Main topic 2]', isClipWorthy: true },
      { time: '00:35:00', label: '[Main topic 3]' },
      { time: '00:45:00', label: 'Rapid fire questions', isClipWorthy: true },
      { time: '00:50:00', label: 'Outro / Where to find guest' },
    ],
    links: [
      { title: `${guestName}'s Twitter`, url: '[extracted from mention]' },
      { title: '[Resource mentioned]', url: '[extracted URL]' }
    ],
    guestBio: guestBio || `${guestName} is [bio extracted from intro segment]`
  };

  logs.push('Show notes template generated');
  logs.push('Note: Run with Claude API integration for actual transcript analysis');

  return {
    success: true,
    data: showNotes,
    logs
  };
}

/**
 * Identify potential clips from timestamps
 */
export function identifyClips(timestamps: Timestamp[]): Clip[] {
  const clips: Clip[] = [];

  const clipWorthy = timestamps.filter(t => t.isClipWorthy);

  for (let i = 0; i < clipWorthy.length; i++) {
    const ts = clipWorthy[i];
    const nextTs = timestamps[timestamps.indexOf(ts) + 1];

    clips.push({
      id: `clip-${i + 1}`,
      startTime: ts.time,
      endTime: nextTs?.time || addMinutes(ts.time, 2),
      quote: `[Quotable moment about: ${ts.label}]`,
      topic: ts.label,
      platform: i === 0 ? 'twitter' : i === 1 ? 'youtube-shorts' : 'tiktok',
      status: 'identified'
    });
  }

  return clips;
}

/**
 * Format show notes as markdown
 */
export function formatShowNotesMarkdown(notes: ShowNotes, episode: Partial<Episode>): string {
  let md = `# ${BRAND.name} Episode ${episode.number}: ${episode.guest?.name}\n\n`;

  md += `## Summary\n\n${notes.summary}\n\n`;

  md += `## Guest\n\n${notes.guestBio}\n\n`;

  md += `## Topics Covered\n\n`;
  for (const topic of notes.topics) {
    md += `- ${topic}\n`;
  }
  md += '\n';

  md += `## Timestamps\n\n`;
  for (const ts of notes.timestamps) {
    const marker = ts.isClipWorthy ? ' *' : '';
    md += `- ${ts.time} - ${ts.label}${marker}\n`;
  }
  md += '\n_* Clip-worthy moments_\n\n';

  md += `## Links & Resources\n\n`;
  for (const link of notes.links) {
    md += `- [${link.title}](${link.url})${link.context ? ` - ${link.context}` : ''}\n`;
  }
  md += '\n';

  md += `## Where to Find ${episode.guest?.name}\n\n`;
  if (episode.guest?.twitter) md += `- Twitter: ${episode.guest.twitter}\n`;
  if (episode.guest?.farcaster) md += `- Farcaster: ${episode.guest.farcaster}\n`;
  md += '\n';

  md += `---\n\n`;
  md += `${BRAND.name} is hosted by ${BRAND.hosts.join(' and ')}.\n\n`;
  md += `Follow us: Twitter ${BRAND.socials.twitter} | Farcaster ${BRAND.socials.farcaster}\n`;

  return md;
}

/**
 * Generate YouTube description
 */
export function generateYouTubeDescription(notes: ShowNotes, episode: Partial<Episode>): string {
  let desc = `${notes.summary}\n\n`;

  desc += `Guest: ${episode.guest?.name}\n`;
  if (episode.guest?.twitter) desc += `Twitter: https://twitter.com/${episode.guest.twitter.replace('@', '')}\n`;
  desc += '\n';

  desc += `TIMESTAMPS:\n`;
  for (const ts of notes.timestamps) {
    desc += `${ts.time} ${ts.label}\n`;
  }
  desc += '\n';

  desc += `LINKS:\n`;
  for (const link of notes.links) {
    desc += `${link.title}: ${link.url}\n`;
  }
  desc += '\n';

  desc += `---\n`;
  desc += `${BRAND.name} - ${BRAND.tagline}\n`;
  desc += `Hosted by ${BRAND.hosts.join(' & ')}\n\n`;
  desc += `Subscribe for weekly conversations with the most interesting people at the intersection of creativity and AI.\n\n`;
  desc += `#vibecoding #aiart #creativity #podcast`;

  return desc;
}

// Helper function
function addMinutes(time: string, minutes: number): string {
  const parts = time.split(':').map(Number);
  parts[1] += minutes;
  if (parts[1] >= 60) {
    parts[0] += Math.floor(parts[1] / 60);
    parts[1] = parts[1] % 60;
  }
  return parts.map(p => p.toString().padStart(2, '0')).join(':');
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Show Notes Generator');
  console.log('====================\n');
  console.log('Usage: npm run production:notes -- --transcript=path/to/transcript.txt --guest="Guest Name" --episode=1');
  console.log('\nThis workflow requires a transcript file to analyze.');
  console.log('In production, it uses Claude API to extract insights.\n');

  // Demo output
  const demoNotes: ShowNotes = {
    summary: 'In this episode, Seth and Lukas talk with tez about AI-optimistic building, digital art collecting, and why we need more builders embracing AI tools.',
    topics: ['AI optimism in art', 'Building vs. criticizing', 'The collector perspective on AI art'],
    timestamps: [
      { time: '00:00:00', label: '"The best time to start building with AI was yesterday"', isClipWorthy: true },
      { time: '00:01:30', label: 'Welcome to Let\'s Vibe!' },
      { time: '00:03:00', label: 'tez introduction - collector, builder, optimist' },
      { time: '00:08:00', label: 'Why tez suggested this podcast', isClipWorthy: true },
      { time: '00:15:00', label: 'The state of AI in digital art' },
      { time: '00:28:00', label: 'Building vs. endless debates', isClipWorthy: true },
      { time: '00:40:00', label: 'Rapid fire questions' },
      { time: '00:48:00', label: 'Where to find tez' }
    ],
    links: [
      { title: 'tez on Twitter', url: 'https://twitter.com/thefunnyguysNFT' }
    ],
    guestBio: 'tez is a digital art collector and community voice known for his AI-optimistic perspective.'
  };

  console.log('Demo output:\n');
  console.log(formatShowNotesMarkdown(demoNotes, {
    number: 1,
    guest: {
      name: 'tez',
      twitter: '@thefunnyguysNFT',
      farcaster: '@tez',
      tier: 3,
      status: 'confirmed',
      whoTheyAre: 'Digital art collector',
      why: 'First guest',
      contactStrategy: 'Twitter DM'
    }
  }));
}
