/**
 * AI Prompt Templates — Separated for easy tuning
 *
 * Each prompt is a function that takes context and returns the full prompt string.
 * All prompts enforce the Let's Vibe! voice: conversational, curious, accessible.
 */

import { BRAND } from '../config.js';

const VOICE_GUIDE = `
Voice: ${BRAND.tone.style}. ${BRAND.tone.energy}.
Audience: ${BRAND.tone.audience}.
Never use: "excited to announce", "revolutionary", "game-changing", engagement bait.
Always: Direct statements, genuine curiosity, respect for audience intelligence.
`;

// --- Content Generation Prompts ---

export function showNotesPrompt(transcript: string): string {
  return `You are writing show notes for an episode of "${BRAND.name}" — ${BRAND.tagline}.
Hosts: ${BRAND.hosts.join(' & ')}.

${VOICE_GUIDE}

Write detailed show notes from this transcript. Structure:
- Start with a compelling 2-3 paragraph summary that captures the key narrative arc
- Use **bold** for important names, concepts, and moments
- Write in third person ("Seth reports..." not "I report...")
- Include specific details, anecdotes, and quotes that make someone want to listen
- End with actionable takeaways if applicable

The show notes should read like a well-written article — not a list of bullet points.

TRANSCRIPT:
${transcript}

Return ONLY the show notes text, no markdown headers or meta-commentary.`;
}

export function chaptersPrompt(transcript: string): string {
  return `You are creating chapter markers for a podcast episode of "${BRAND.name}".

Analyze this transcript and create chapter markers. Rules:
- First chapter always starts at 0:00
- Each chapter title should be descriptive and intriguing (not generic like "Introduction")
- Use the style: "Topic — Specific Detail" or a catchy phrase from the conversation
- Aim for 8-14 chapters depending on episode length
- Chapters should roughly correspond to topic shifts in the conversation

TRANSCRIPT:
${transcript}

Return ONLY a JSON array of objects with "time" (string like "0:00" or "23:00") and "title" (string) fields.
Example: [{"time": "0:00", "title": "The Pac-Man Power Pellet Moment"}, {"time": "5:00", "title": "Why Every Creative Should Try Vibe Coding"}]`;
}

export function topicsPrompt(transcript: string): string {
  return `Extract 4-7 topic tags from this podcast transcript for "${BRAND.name}".

Topics should be:
- Short (1-3 words each)
- Mix of specific names/tools and broader themes
- Useful for discovery and SEO

TRANSCRIPT:
${transcript}

Return ONLY a JSON array of strings. Example: ["OpenClaw", "Rick Rubin", "Security", "Vibe Coding", "Creative Tools"]`;
}

export function descriptionPrompt(transcript: string, guest: string): string {
  return `Write a one-paragraph episode description for "${BRAND.name}" — ${BRAND.tagline}.

${VOICE_GUIDE}

This is for podcast platforms (Spotify, Apple). Requirements:
- 2-3 sentences max
- Hook the listener immediately
- Mention the guest (${guest}) and the most compelling topic
- Make it clear what the listener will get from this episode

TRANSCRIPT:
${transcript}

Return ONLY the description text.`;
}

export function linksPrompt(transcript: string): string {
  return `Extract all links, tools, products, books, people, and resources mentioned in this podcast transcript.

For each, provide:
- A human-readable label
- The most likely URL (use real URLs you're confident about, or a reasonable search URL)

Rules:
- Include the hosts' own projects if mentioned (/vibe, Ledger, etc.)
- Include guest projects
- Include any tools, books, or websites discussed
- If you're not sure of the exact URL, use a descriptive label and a reasonable URL

TRANSCRIPT:
${transcript}

Return ONLY a JSON array of objects with "label" (string) and "url" (string) fields.`;
}

export function quotesPrompt(transcript: string): string {
  return `Extract the 5-8 most quotable, shareable moments from this podcast transcript for "${BRAND.name}".

Great quotes are:
- Punchy and self-contained (make sense without context)
- Surprising, funny, or deeply insightful
- Good for social media sharing
- Representative of the episode's best moments

For each quote, include who said it and an approximate timestamp if discernible.

TRANSCRIPT:
${transcript}

Return ONLY a JSON array of objects with "text" (string), "speaker" (string), and optionally "timestamp" (string) fields.`;
}

export function titlePrompt(transcript: string, guest: string): string {
  return `Generate an episode title for "${BRAND.name}" featuring ${guest}.

Title style:
- Short and punchy (3-7 words)
- Captures the episode's main theme or most memorable moment
- Doesn't need to mention the guest name (that appears separately)
- Can be a phrase from the conversation or a creative summary

Look at these examples from the show:
- "The Netscape Moment"
- "OpenClaw & The Rick Rubin Connection"

TRANSCRIPT:
${transcript}

Return ONLY the title string, nothing else.`;
}

// --- Social Content Prompts ---

export function socialPrompt(
  content: {
    title: string;
    description: string;
    showNotes: string;
    quotes: { text: string; speaker: string }[];
    topics: string[];
  },
  episodeNumber: number,
  guestHandle?: string
): string {
  return `Generate social media content for Episode ${episodeNumber} of "${BRAND.name}".

${VOICE_GUIDE}

Episode details:
- Title: ${content.title}
- Description: ${content.description}
- Topics: ${content.topics.join(', ')}
${guestHandle ? `- Guest handle: ${guestHandle}` : ''}

Show notes summary:
${content.showNotes.slice(0, 1500)}

Best quotes:
${content.quotes.map((q) => `"${q.text}" — ${q.speaker}`).join('\n')}

Generate ALL of the following in a single JSON response:

1. "announcementTweet" — Launch tweet (max 280 chars). Include episode link placeholder [LINK].
2. "threadTweets" — Array of 4-6 tweets for a thread. First tweet is the hook. Include ${guestHandle || 'guest'} mention. Last tweet links to episode.
3. "farcasterPost" — Farcaster post (can be longer than Twitter, more community-focused).
4. "linkedInPost" — LinkedIn post (professional tone, 1-2 paragraphs, what people will learn).
5. "youtubeDescription" — Full YouTube description with chapters placeholder [CHAPTERS], links section, and subscribe CTA.

Return ONLY valid JSON with these 5 fields.`;
}

// --- Episode Slug ---

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
