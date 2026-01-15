import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

// Vercel AI Gateway endpoint
// Configure in Vercel Dashboard: Settings > AI Gateway
// This routes through Vercel's gateway for caching, rate limiting, and observability

export async function POST(req: Request) {
  const { prompt, type } = await req.json();

  // Different prompts for different use cases
  const systemPrompts: Record<string, string> = {
    'show-notes': `You are a podcast show notes writer for "Let's Vibe!" - a podcast about creativity in the age of AI.
Write concise, engaging show notes that highlight key moments and takeaways.
Format with timestamps when provided.`,

    'clip-suggestions': `You are analyzing a podcast transcript to identify viral clip moments.
Look for: surprising insights, quotable statements, emotional moments, controversial takes.
Return timestamps and brief descriptions of why each moment would make a good clip.`,

    'guest-research': `You are researching potential podcast guests for "Let's Vibe!" - a podcast about creativity in the age of AI.
Provide relevant background, recent work, and potential talking points.`,
  };

  const result = streamText({
    model: anthropic('claude-sonnet-4-20250514'),
    system: systemPrompts[type] || systemPrompts['show-notes'],
    prompt,
  });

  return result.toTextStreamResponse();
}
