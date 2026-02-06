/**
 * AI Generation — Claude API calls for each pipeline step
 *
 * Uses runSimpleAgent() from base-agent.ts for each call.
 * Steps that can run in parallel are grouped with Promise.all().
 */

import { runSimpleAgent } from '../agents/base-agent.js';
import {
  showNotesPrompt,
  chaptersPrompt,
  topicsPrompt,
  descriptionPrompt,
  linksPrompt,
  quotesPrompt,
  titlePrompt,
  socialPrompt,
  generateSlug,
} from './prompts.js';
import type {
  ParsedTranscript,
  GeneratedContent,
  SocialContent,
  Chapter,
  LinkItem,
  Quote,
} from './types.js';

/**
 * Generate all content from a parsed transcript
 */
export async function generateContent(
  transcript: ParsedTranscript,
  guest: string
): Promise<GeneratedContent> {
  const text = transcript.fullText;

  console.log('  Generating title...');
  const titleResult = await callAI('title', titlePrompt(text, guest));
  const title = titleResult.trim().replace(/^["']|["']$/g, '');

  // Run parallel generation steps
  console.log('  Generating show notes, chapters, topics, description, links, quotes (parallel)...');
  const [showNotes, chapters, topics, description, links, quotes] = await Promise.all([
    callAI('show-notes', showNotesPrompt(text)),
    callAI('chapters', chaptersPrompt(text)),
    callAI('topics', topicsPrompt(text)),
    callAI('description', descriptionPrompt(text, guest)),
    callAI('links', linksPrompt(text)),
    callAI('quotes', quotesPrompt(text)),
  ]);

  return {
    title,
    slug: generateSlug(title),
    description: description.trim(),
    showNotes: showNotes.trim(),
    chapters: parseJSON<Chapter[]>(chapters, []),
    topics: parseJSON<string[]>(topics, []),
    links: parseJSON<LinkItem[]>(links, []),
    quotes: parseJSON<Quote[]>(quotes, []),
  };
}

/**
 * Generate social content from episode content
 */
export async function generateSocial(
  content: GeneratedContent,
  episodeNumber: number,
  guestHandle?: string
): Promise<SocialContent> {
  console.log('  Generating social content...');
  const result = await callAI(
    'social',
    socialPrompt(
      {
        title: content.title,
        description: content.description,
        showNotes: content.showNotes,
        quotes: content.quotes,
        topics: content.topics,
      },
      episodeNumber,
      guestHandle
    )
  );

  return parseJSON<SocialContent>(result, {
    announcementTweet: '',
    threadTweets: [],
    farcasterPost: '',
    linkedInPost: '',
    youtubeDescription: '',
  });
}

/**
 * Generate YouTube description with chapters baked in
 */
export function buildYoutubeDescription(
  social: SocialContent,
  content: GeneratedContent,
  episodeNumber: number
): string {
  const chaptersText = content.chapters
    .map((ch) => `${ch.time} ${ch.title}`)
    .join('\n');

  let desc = social.youtubeDescription || content.description;

  // Replace chapters placeholder
  desc = desc.replace('[CHAPTERS]', chaptersText);

  // If no chapters were inserted, append them
  if (!desc.includes(chaptersText) && content.chapters.length > 0) {
    desc += `\n\nChapters:\n${chaptersText}`;
  }

  // Ensure links section
  if (content.links.length > 0 && !desc.toLowerCase().includes('links')) {
    const linksText = content.links.map((l) => `${l.label}: ${l.url}`).join('\n');
    desc += `\n\nLinks & Resources:\n${linksText}`;
  }

  desc += `\n\n---\nLet's Vibe! — Creativity in the age of AI\nNew episodes weekly.\nhttps://letsvibe.fm`;

  return desc;
}

// Internal helpers

async function callAI(step: string, prompt: string): Promise<string> {
  const result = await runSimpleAgent(
    `You are a podcast content assistant for "Let's Vibe!" — a weekly podcast about creativity in the age of AI. Follow instructions precisely and return only what is asked for.`,
    prompt
  );

  if (!result.success) {
    console.error(`  [${step}] AI call failed: ${result.error}`);
    throw new Error(`AI generation failed for ${step}: ${result.error}`);
  }

  return result.output;
}

function parseJSON<T>(raw: string, fallback: T): T {
  // Extract JSON from markdown code blocks if present
  const jsonMatch = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  const cleaned = jsonMatch ? jsonMatch[1].trim() : raw.trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    // Try to find JSON array or object in the string
    const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
    const objectMatch = cleaned.match(/\{[\s\S]*\}/);
    const match = arrayMatch || objectMatch;

    if (match) {
      try {
        return JSON.parse(match[0]);
      } catch {
        console.error(`  Failed to parse JSON: ${cleaned.slice(0, 200)}...`);
        return fallback;
      }
    }

    console.error(`  No JSON found in: ${cleaned.slice(0, 200)}...`);
    return fallback;
  }
}
