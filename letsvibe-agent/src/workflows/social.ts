#!/usr/bin/env tsx
/**
 * Social Content Workflow
 * Generate social posts for episode promotion
 */

import { CONTENT_CALENDAR_TEMPLATE, BRAND } from '../config.js';
import type { Episode, SocialPost, ContentCalendar, ShowNotes, Clip, WorkflowResult } from '../types.js';

interface SocialInput {
  episode: Partial<Episode>;
  showNotes: ShowNotes;
  clips?: Clip[];
}

/**
 * Generate full content calendar for an episode
 */
export async function generateContentCalendar(input: SocialInput): Promise<WorkflowResult<ContentCalendar>> {
  const { episode, showNotes, clips } = input;
  const logs: string[] = [];

  logs.push(`Generating content calendar for Episode ${episode.number}`);

  const posts: ContentCalendar['posts'] = [];

  // Day 0: Announcements
  posts.push({
    day: 0,
    platform: 'twitter',
    content: generateAnnouncementTweet(episode, showNotes)
  });

  posts.push({
    day: 0,
    platform: 'farcaster',
    content: generateFarcasterCast(episode, showNotes)
  });

  // Days 1-6: Clips and threads
  if (clips && clips.length > 0) {
    posts.push({
      day: 1,
      platform: 'twitter',
      content: generateClipTweet(episode, clips[0])
    });

    posts.push({
      day: 2,
      platform: 'youtube',
      content: generateYouTubeShortPost(episode, clips[0])
    });

    if (clips.length > 1) {
      posts.push({
        day: 3,
        platform: 'twitter',
        content: generateClipTweet(episode, clips[1])
      });
    }
  }

  // Day 4: Thread
  posts.push({
    day: 4,
    platform: 'farcaster',
    content: generateInsightsThread(episode, showNotes)
  });

  logs.push(`Generated ${posts.length} posts across ${new Set(posts.map(p => p.platform)).size} platforms`);

  return {
    success: true,
    data: {
      episodeNumber: episode.number!,
      posts
    },
    logs
  };
}

/**
 * Generate announcement tweet
 */
function generateAnnouncementTweet(episode: Partial<Episode>, notes: ShowNotes): SocialPost {
  const guestHandle = episode.guest?.twitter || episode.guest?.name;

  const content = `New episode of ${BRAND.name}!

${episode.guest?.name} (${guestHandle}) joins us to talk about:

${notes.topics.slice(0, 3).map(t => `- ${t}`).join('\n')}

Listen now: [LINK]

#vibecoding`;

  return {
    platform: 'twitter',
    type: 'announcement',
    content,
    status: 'draft'
  };
}

/**
 * Generate Farcaster announcement cast
 */
function generateFarcasterCast(episode: Partial<Episode>, notes: ShowNotes): SocialPost {
  const guestHandle = episode.guest?.farcaster || episode.guest?.name;

  const content = `New ${BRAND.name} episode dropped

Guest: ${guestHandle}

${notes.summary.slice(0, 200)}...

Full episode in replies`;

  return {
    platform: 'farcaster',
    type: 'announcement',
    content,
    status: 'draft'
  };
}

/**
 * Generate clip tweet
 */
function generateClipTweet(episode: Partial<Episode>, clip: Clip): SocialPost {
  const guestHandle = episode.guest?.twitter || episode.guest?.name;

  const content = `"${clip.quote}"

- ${guestHandle} on ${BRAND.name}

Full episode: [LINK]`;

  return {
    platform: 'twitter',
    type: 'clip',
    content,
    media: [clip.id],
    status: 'draft'
  };
}

/**
 * Generate YouTube Shorts description
 */
function generateYouTubeShortPost(episode: Partial<Episode>, clip: Clip): SocialPost {
  const content = `${clip.quote}

${episode.guest?.name} on ${BRAND.name} Episode ${episode.number}

Full episode on our channel!

#shorts #vibecoding #ai #creativity`;

  return {
    platform: 'youtube',
    type: 'clip',
    content,
    media: [clip.id],
    status: 'draft'
  };
}

/**
 * Generate insights thread (Farcaster or Twitter)
 */
function generateInsightsThread(episode: Partial<Episode>, notes: ShowNotes): SocialPost {
  const guestName = episode.guest?.name;

  const thread = `Insights from ${BRAND.name} Ep ${episode.number} with ${guestName}

A thread

1/ ${notes.summary}

2/ On ${notes.topics[0]}:
[Key insight from transcript]

3/ On ${notes.topics[1]}:
[Key insight from transcript]

4/ The takeaway:
[Main lesson]

5/ Listen to the full conversation:
[LINK]`;

  return {
    platform: 'farcaster',
    type: 'thread',
    content: thread,
    status: 'draft'
  };
}

/**
 * Generate quote card text
 */
export function generateQuoteCard(quote: string, guest: string): string {
  return `"${quote}"

— ${guest}
${BRAND.name}`;
}

/**
 * Export content calendar to markdown
 */
export function exportCalendarMarkdown(calendar: ContentCalendar): string {
  let md = `# Content Calendar: Episode ${calendar.episodeNumber}\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;

  // Group by day
  const byDay = new Map<number, typeof calendar.posts>();
  for (const post of calendar.posts) {
    const existing = byDay.get(post.day) || [];
    existing.push(post);
    byDay.set(post.day, existing);
  }

  for (const [day, posts] of byDay) {
    md += `## Day ${day}${day === 0 ? ' (Release Day)' : ''}\n\n`;

    for (const post of posts) {
      md += `### ${post.platform.charAt(0).toUpperCase() + post.platform.slice(1)} - ${post.content.type}\n\n`;
      md += `\`\`\`\n${post.content.content}\n\`\`\`\n\n`;
      if (post.content.media) {
        md += `Media: ${post.content.media.join(', ')}\n\n`;
      }
    }
  }

  return md;
}

/**
 * Print content calendar
 */
function printCalendar(calendar: ContentCalendar): void {
  console.log(`\n=== CONTENT CALENDAR: EPISODE ${calendar.episodeNumber} ===\n`);

  for (const post of calendar.posts) {
    console.log(`--- Day ${post.day} | ${post.platform.toUpperCase()} | ${post.content.type} ---`);
    console.log(post.content.content);
    console.log();
  }
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Social Content Generator');
  console.log('========================\n');

  // Demo with sample data
  const demoEpisode: Partial<Episode> = {
    number: 1,
    title: 'AI-Optimistic Building with tez',
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
  };

  const demoNotes: ShowNotes = {
    summary: 'tez joins Seth and Lukas to discuss why the digital art community needs more builders embracing AI tools.',
    topics: [
      'AI optimism in digital art',
      'Building vs. endless debates',
      'The collector perspective on AI tools'
    ],
    timestamps: [],
    links: [],
    guestBio: 'tez is a digital art collector known for his AI-optimistic perspective.'
  };

  const demoClips: Clip[] = [
    {
      id: 'clip-1',
      startTime: '00:08:00',
      endTime: '00:09:30',
      quote: 'The best time to start building with AI was yesterday. The second best time is now.',
      topic: 'AI optimism',
      platform: 'twitter',
      status: 'identified'
    },
    {
      id: 'clip-2',
      startTime: '00:28:00',
      endTime: '00:29:30',
      quote: 'We spend so much time debating if AI art is "real art" when we could be making beautiful things.',
      topic: 'Building vs debates',
      platform: 'youtube-shorts',
      status: 'identified'
    }
  ];

  generateContentCalendar({
    episode: demoEpisode,
    showNotes: demoNotes,
    clips: demoClips
  }).then(result => {
    if (result.success && result.data) {
      printCalendar(result.data);
      console.log('\n--- MARKDOWN EXPORT ---\n');
      console.log(exportCalendarMarkdown(result.data));
    }
  });
}
