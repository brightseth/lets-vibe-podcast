#!/usr/bin/env npx tsx
/**
 * Post-Recording Pipeline — CLI entry point + orchestrator
 *
 * Usage:
 *   npx tsx src/pipeline/post-recording.ts \
 *     --transcript ../transcripts/ep3.txt \
 *     --episode 3 \
 *     --guest "Simon Willison" \
 *     --guest-handle "@simonw" \
 *     --date "Feb 12, 2026" \
 *     --duration "52 min" \
 *     [--dry-run]
 *
 *   npx tsx src/pipeline/post-recording.ts show-notes --transcript ep3.txt
 *   npx tsx src/pipeline/post-recording.ts social --transcript ep3.txt --episode 3
 */

import 'dotenv/config';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { parseTranscriptFile } from './transcript-parser.js';
import { generateContent, generateSocial, buildYoutubeDescription } from './ai-generate.js';
import { writeEpisode } from './episodes-writer.js';
import type { PipelineOutput, EpisodeDataOutput, GeneratedContent, SocialContent } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '..', '..', 'output');

// --- CLI Argument Parsing ---

interface CliArgs {
  command: 'full' | 'show-notes' | 'social' | 'chapters' | 'help';
  transcript?: string;
  episode?: number;
  guest?: string;
  guestHandle?: string;
  date?: string;
  duration?: string;
  dryRun: boolean;
}

function parseArgs(): CliArgs {
  const args = process.argv.slice(2);
  const result: CliArgs = { command: 'full', dryRun: false };

  // Check for subcommand
  const subcommands = ['show-notes', 'social', 'chapters', 'help'];
  if (args[0] && subcommands.includes(args[0])) {
    result.command = args[0] as CliArgs['command'];
    args.shift();
  }

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--transcript':
        result.transcript = args[++i];
        break;
      case '--episode':
        result.episode = parseInt(args[++i], 10);
        break;
      case '--guest':
        result.guest = args[++i];
        break;
      case '--guest-handle':
        result.guestHandle = args[++i];
        break;
      case '--date':
        result.date = args[++i];
        break;
      case '--duration':
        result.duration = args[++i];
        break;
      case '--dry-run':
        result.dryRun = true;
        break;
      case '--help':
      case '-h':
        result.command = 'help';
        break;
    }
  }

  return result;
}

// --- Pipeline Steps ---

async function runFullPipeline(args: CliArgs): Promise<PipelineOutput> {
  const startTime = Date.now();

  if (!args.transcript) {
    throw new Error('--transcript is required');
  }
  if (!args.episode) {
    throw new Error('--episode is required');
  }

  const epNum = args.episode;
  const guest = args.guest || 'Seth Goldstein & Ian Rogers';
  const guestHandle = args.guestHandle || '@seth & @iancr';

  console.log(`\n╔══════════════════════════════════════════════╗`);
  console.log(`║  Let's Vibe! Post-Recording Pipeline         ║`);
  console.log(`║  Episode ${String(epNum).padStart(2, ' ')} — ${guest.padEnd(30, ' ')}  ║`);
  console.log(`╚══════════════════════════════════════════════╝\n`);

  // Step 1: Parse transcript
  console.log(`[1/4] Parsing transcript...`);
  const transcriptPath = resolve(process.cwd(), args.transcript);
  const transcript = parseTranscriptFile(transcriptPath);
  console.log(`  Format: ${transcript.format}`);
  console.log(`  Speakers: ${transcript.speakers.join(', ')}`);
  console.log(`  Segments: ${transcript.segments.length}`);
  if (transcript.durationSeconds) {
    console.log(`  Duration: ${Math.round(transcript.durationSeconds / 60)} min`);
  }

  // Step 2: Generate content (9 AI calls, 6 in parallel)
  console.log(`\n[2/4] Generating content (Claude API)...`);
  const content = await generateContent(transcript, guest);
  console.log(`  Title: "${content.title}"`);
  console.log(`  Slug: ${content.slug}`);
  console.log(`  Chapters: ${content.chapters.length}`);
  console.log(`  Topics: ${content.topics.join(', ')}`);
  console.log(`  Links: ${content.links.length}`);
  console.log(`  Quotes: ${content.quotes.length}`);

  // Step 3: Generate social content
  console.log(`\n[3/4] Generating social content...`);
  const social = await generateSocial(content, epNum, args.guestHandle);
  const youtubeDesc = buildYoutubeDescription(social, content, epNum);
  console.log(`  Announcement tweet: ${social.announcementTweet.length} chars`);
  console.log(`  Thread tweets: ${social.threadTweets.length}`);
  console.log(`  YouTube description: ${youtubeDesc.length} chars`);

  // Build episode data
  const episodeData: EpisodeDataOutput = {
    number: epNum,
    slug: content.slug,
    title: content.title,
    guest,
    guestHandle,
    guestBio: '', // Will be filled by AI in show notes or manually
    description: content.description,
    duration: args.duration || `${Math.round((transcript.durationSeconds || 2700) / 60)} min`,
    date: args.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'upcoming',
    topics: content.topics,
    showNotes: content.showNotes,
    chapters: content.chapters,
    links: content.links,
  };

  // Step 4: Write outputs
  console.log(`\n[4/4] Writing output files...`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = [
    {
      path: resolve(OUTPUT_DIR, `ep${epNum}-pipeline-output.json`),
      content: JSON.stringify({ content, social, episodeData }, null, 2),
    },
    {
      path: resolve(OUTPUT_DIR, `ep${epNum}-youtube-description.txt`),
      content: youtubeDesc,
    },
    {
      path: resolve(OUTPUT_DIR, `ep${epNum}-tweets.md`),
      content: formatTweets(social, content, epNum),
    },
    {
      path: resolve(OUTPUT_DIR, `ep${epNum}-social-calendar.md`),
      content: formatSocialCalendar(social, content, epNum),
    },
  ];

  for (const file of files) {
    writeFileSync(file.path, file.content, 'utf-8');
    console.log(`  Written: ${file.path}`);
  }

  // Update episodes.ts (unless dry run)
  if (!args.dryRun) {
    console.log(`\n  Updating episodes.ts...`);
    const writeResult = writeEpisode(episodeData);
    if (!writeResult.success) {
      console.error(`  WARNING: Failed to update episodes.ts: ${writeResult.error}`);
      console.error(`  Episode data saved to output JSON — update manually.`);
    }
  } else {
    console.log(`\n  [DRY RUN] Skipping episodes.ts update`);
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n Done in ${elapsed}s`);
  console.log(`Output: ${OUTPUT_DIR}/ep${epNum}-*`);

  return {
    episodeNumber: epNum,
    content,
    social,
    episodeData,
    files: files.map((f) => ({ path: f.path, content: f.content })),
  };
}

async function runShowNotes(args: CliArgs): Promise<void> {
  if (!args.transcript) throw new Error('--transcript is required');

  console.log('Generating show notes...\n');
  const transcript = parseTranscriptFile(resolve(process.cwd(), args.transcript));
  const guest = args.guest || 'Seth Goldstein & Ian Rogers';
  const content = await generateContent(transcript, guest);

  console.log('--- SHOW NOTES ---\n');
  console.log(content.showNotes);
  console.log('\n--- CHAPTERS ---\n');
  for (const ch of content.chapters) {
    console.log(`${ch.time} ${ch.title}`);
  }
}

async function runSocial(args: CliArgs): Promise<void> {
  if (!args.transcript) throw new Error('--transcript is required');
  if (!args.episode) throw new Error('--episode is required');

  console.log('Generating social content...\n');
  const transcript = parseTranscriptFile(resolve(process.cwd(), args.transcript));
  const guest = args.guest || 'Seth Goldstein & Ian Rogers';
  const content = await generateContent(transcript, guest);
  const social = await generateSocial(content, args.episode, args.guestHandle);

  console.log('--- ANNOUNCEMENT ---\n');
  console.log(social.announcementTweet);
  console.log('\n--- THREAD ---\n');
  social.threadTweets.forEach((t, i) => console.log(`${i + 1}/ ${t}\n`));
  console.log('--- FARCASTER ---\n');
  console.log(social.farcasterPost);
}

function showHelp(): void {
  console.log(`
Let's Vibe! Post-Recording Pipeline

Usage:
  npx tsx src/pipeline/post-recording.ts [command] [options]

Commands:
  (default)     Full pipeline — generate all content + update website
  show-notes    Generate show notes and chapters only
  social        Generate social content only
  chapters      Generate chapter markers only
  help          Show this help

Options:
  --transcript <path>     Path to transcript file (required)
  --episode <number>      Episode number (required for full/social)
  --guest <name>          Guest name (default: "Seth Goldstein & Ian Rogers")
  --guest-handle <handle> Guest social handle
  --date <date>           Episode date (default: today)
  --duration <duration>   Episode duration (default: auto-detected)
  --dry-run               Generate content but don't write episodes.ts

Examples:
  # Full pipeline
  npx tsx src/pipeline/post-recording.ts \\
    --transcript ../transcripts/ep3.txt \\
    --episode 3 --guest "Simon Willison" --guest-handle "@simonw"

  # Dry run
  npx tsx src/pipeline/post-recording.ts \\
    --transcript ../transcripts/ep3.txt \\
    --episode 3 --dry-run

  # Just show notes
  npx tsx src/pipeline/post-recording.ts show-notes \\
    --transcript ../transcripts/ep3.txt
`);
}

// --- Formatters ---

function formatTweets(social: SocialContent, content: GeneratedContent, epNum: number): string {
  let md = `# Episode ${epNum}: ${content.title}\n\n`;
  md += `## Announcement\n\n${social.announcementTweet}\n\n`;
  md += `## Thread\n\n`;
  social.threadTweets.forEach((t: string, i: number) => {
    md += `${i + 1}/ ${t}\n\n`;
  });
  md += `## Quotes for Cards\n\n`;
  content.quotes.forEach((q: { text: string; speaker: string }) => {
    md += `> "${q.text}"\n> — ${q.speaker}\n\n`;
  });
  return md;
}

function formatSocialCalendar(
  social: SocialContent,
  content: GeneratedContent,
  epNum: number
): string {
  let md = `# Episode ${epNum}: ${content.title} — Social Calendar\n\n`;

  md += `## Day 0 (Release Day)\n\n`;
  md += `### Twitter — Announcement\n${social.announcementTweet}\n\n`;
  md += `### Farcaster — Announcement\n${social.farcasterPost}\n\n`;
  md += `### YouTube — Upload with Description\n(See ep${epNum}-youtube-description.txt)\n\n`;

  md += `## Day 1\n\n`;
  md += `### Twitter — Thread\n`;
  social.threadTweets.forEach((t: string, i: number) => {
    md += `${i + 1}/ ${t}\n\n`;
  });

  md += `## Day 2\n\n`;
  md += `### LinkedIn\n${social.linkedInPost}\n\n`;

  md += `## Day 3-6 — Quote Cards\n\n`;
  content.quotes.slice(0, 4).forEach((q: { text: string; speaker: string }, i: number) => {
    md += `### Day ${i + 3} Quote Card\n`;
    md += `> "${q.text}" — ${q.speaker}\n\n`;
  });

  return md;
}

// --- Main ---

async function main(): Promise<void> {
  const args = parseArgs();

  try {
    switch (args.command) {
      case 'help':
        showHelp();
        break;
      case 'show-notes':
        await runShowNotes(args);
        break;
      case 'social':
        await runSocial(args);
        break;
      case 'chapters':
        await runShowNotes(args); // Chapters are included in show notes generation
        break;
      case 'full':
      default:
        await runFullPipeline(args);
        break;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`\nError: ${message}`);
    process.exit(1);
  }
}

main();
