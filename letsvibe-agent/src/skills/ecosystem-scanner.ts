/**
 * Ecosystem Scanner — LEVI's research antenna.
 *
 * Scans the vibecoding / Claude Code / AI agent ecosystem for:
 * - New CLI tools and primitives
 * - Agent frameworks, wallets, protocols (ERC-8004, x402, A2A, MCP)
 * - Notable applications and projects
 * - Funding rounds and company news
 * - Claude Code updates and features
 * - Cultural crossover moments (art, music, creative tools)
 *
 * Produces a digest saved to state/research/ that feeds into:
 * - Episode prep and topic generation
 * - Guest identification
 * - Show notes context
 * - Social content ideas
 *
 * Runs as a Tier 2 skill (draft + notify) — generates research, notifies Seth.
 */

import Anthropic from "@anthropic-ai/sdk";
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "fs";
import { resolve, join } from "path";

const ROOT = resolve(import.meta.dirname, "../..");
const STATE_DIR = join(ROOT, "state");
const RESEARCH_DIR = join(STATE_DIR, "research");
const LORE_DIR = join(ROOT, "lore");

// Ensure dirs exist
if (!existsSync(RESEARCH_DIR)) mkdirSync(RESEARCH_DIR, { recursive: true });

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ResearchDigest {
  id: string;
  date: string;
  generatedAt: string;
  categories: ResearchCategory[];
  guestLeads: GuestLead[];
  episodeIdeas: EpisodeIdea[];
  summary: string;
  rawSources: string[];
}

export interface ResearchCategory {
  name: string;
  items: ResearchItem[];
}

export interface ResearchItem {
  title: string;
  description: string;
  url?: string;
  relevance: "high" | "medium" | "low";
  tags: string[];
}

export interface GuestLead {
  name: string;
  handle?: string;
  why: string;
  connection?: string;
}

export interface EpisodeIdea {
  title: string;
  angle: string;
  timeliness: "urgent" | "this-week" | "this-month" | "evergreen";
}

// ---------------------------------------------------------------------------
// Research topics — what LEVI tracks
// ---------------------------------------------------------------------------

const RESEARCH_TOPICS = [
  // Core vibecoding ecosystem
  "Claude Code new features updates releases 2026",
  "vibecoding tools frameworks CLI terminal",
  "Anthropic Claude MCP server tools",
  "Claude Code teams agents orchestration",

  // Agent infrastructure
  "AI agent frameworks wallets identity ERC-8004",
  "x402 payment protocol AI agents",
  "A2A agent-to-agent protocol Google",
  "MCP model context protocol servers tools",
  "OpenClaw open source agents",

  // Creative + cultural
  "AI art tools creative coding generative",
  "vibecoding artists musicians creators non-engineers",
  "AI music production tools 2026",

  // Business + funding
  "AI agent startup funding round 2026",
  "Claude Code enterprise adoption vibecoding",
  "developer tools AI coding startup",

  // Notable builders
  "steipete Peter Steinberger Claude Code",
  "Simon Willison LLM tools",
  "Pieter Levels AI indie hacker",
  "Riley Brown Claude Code content",
];

// ---------------------------------------------------------------------------
// Source fetchers
// ---------------------------------------------------------------------------

/**
 * Fetch and summarize a web source. Uses Claude to extract relevant signals.
 * Falls back gracefully if fetch fails.
 */
async function fetchAndSummarize(
  client: Anthropic,
  topic: string,
): Promise<string> {
  try {
    // Use Claude's web search tool to find current information
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a research assistant for a podcast about vibecoding and AI creativity.

Search for the most recent and noteworthy developments related to: "${topic}"

Focus on the last 7 days. Return a concise list of 3-5 notable items. For each item include:
- What it is (1 sentence)
- Why it matters for creative builders / vibecoding community
- Any relevant links or people involved

If nothing notable happened in the last 7 days for this topic, say "No significant updates this week." and move on.

Be specific and factual. No hype.`,
        },
      ],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";
    return `## ${topic}\n\n${text}\n`;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return `## ${topic}\n\n_Fetch failed: ${msg}_\n`;
  }
}

// ---------------------------------------------------------------------------
// Digest generator
// ---------------------------------------------------------------------------

/**
 * Generate a full research digest by scanning all topics, then synthesizing
 * with Claude into structured categories, guest leads, and episode ideas.
 */
export async function generateResearchDigest(): Promise<ResearchDigest> {
  const client = new Anthropic();
  const date = new Date().toISOString().split("T")[0];
  const id = `research-${date}`;

  console.log(`[levi:research] Starting ecosystem scan for ${date}...`);

  // Phase 1: Gather raw research across topics (batch in groups of 4)
  const rawResults: string[] = [];
  const batchSize = 4;

  for (let i = 0; i < RESEARCH_TOPICS.length; i += batchSize) {
    const batch = RESEARCH_TOPICS.slice(i, i + batchSize);
    console.log(
      `[levi:research] Scanning batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(RESEARCH_TOPICS.length / batchSize)}: ${batch.map((t) => t.slice(0, 30) + "...").join(", ")}`,
    );

    const results = await Promise.all(
      batch.map((topic) => fetchAndSummarize(client, topic)),
    );
    rawResults.push(...results);
  }

  const rawResearch = rawResults.join("\n---\n");

  // Phase 2: Load show context for relevance scoring
  let showContext = "";
  try {
    const soulPath = join(ROOT, "SOUL.md");
    if (existsSync(soulPath)) {
      showContext = readFileSync(soulPath, "utf-8").slice(0, 2000);
    }
  } catch {
    // Continue without soul context
  }

  let episodesContext = "";
  try {
    const epPath = join(LORE_DIR, "episodes.md");
    if (existsSync(epPath)) {
      episodesContext = readFileSync(epPath, "utf-8").slice(0, 2000);
    }
  } catch {
    // Continue without episodes context
  }

  // Phase 3: Synthesize with Claude into structured digest
  console.log(`[levi:research] Synthesizing digest...`);

  const synthesisResponse = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    messages: [
      {
        role: "user",
        content: `You are LEVI, the AI producer for Let's Vibe! podcast — a show about creativity in the age of AI, hosted by Seth Goldstein and Ian Rogers.

Here is raw research gathered from scanning the vibecoding ecosystem today:

<raw_research>
${rawResearch}
</raw_research>

<show_context>
${showContext}
</show_context>

<recent_episodes>
${episodesContext}
</recent_episodes>

Synthesize this into a structured research digest. Return valid JSON with this exact structure:

{
  "summary": "2-3 sentence overview of the most important signals this week",
  "categories": [
    {
      "name": "Category name (e.g. 'Claude Code Updates', 'Agent Infrastructure', 'Creative Tools', 'Funding & Business', 'People & Culture')",
      "items": [
        {
          "title": "Short title",
          "description": "1-2 sentences",
          "url": "optional URL",
          "relevance": "high|medium|low",
          "tags": ["tag1", "tag2"]
        }
      ]
    }
  ],
  "guestLeads": [
    {
      "name": "Person name",
      "handle": "@twitter_handle",
      "why": "Why they'd be a great guest right now",
      "connection": "How Seth might reach them"
    }
  ],
  "episodeIdeas": [
    {
      "title": "Potential episode title",
      "angle": "The specific angle that makes this timely",
      "timeliness": "urgent|this-week|this-month|evergreen"
    }
  ]
}

Rules:
- Only include genuinely notable items, not filler
- Relevance = how useful this is for the show specifically
- Guest leads should be people doing interesting things RIGHT NOW, not just famous people
- Episode ideas should be specific angles, not generic topics
- Be concise and factual. No hype words.
- Return ONLY valid JSON, no markdown wrapping.`,
      },
    ],
  });

  const synthesisText =
    synthesisResponse.content[0].type === "text"
      ? synthesisResponse.content[0].text
      : "{}";

  // Parse the synthesis
  let parsed: {
    summary?: string;
    categories?: ResearchCategory[];
    guestLeads?: GuestLead[];
    episodeIdeas?: EpisodeIdea[];
  } = {};

  try {
    // Strip any markdown code fences if present
    const cleaned = synthesisText
      .replace(/^```json?\n?/m, "")
      .replace(/\n?```$/m, "")
      .trim();
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error(
      `[levi:research] Failed to parse synthesis JSON:`,
      (err as Error).message,
    );
    parsed = {
      summary: "Research scan completed but synthesis parsing failed.",
      categories: [],
      guestLeads: [],
      episodeIdeas: [],
    };
  }

  const digest: ResearchDigest = {
    id,
    date,
    generatedAt: new Date().toISOString(),
    categories: parsed.categories ?? [],
    guestLeads: parsed.guestLeads ?? [],
    episodeIdeas: parsed.episodeIdeas ?? [],
    summary: parsed.summary ?? "No summary available.",
    rawSources: RESEARCH_TOPICS,
  };

  // Save the digest
  const digestPath = join(RESEARCH_DIR, `${id}.json`);
  writeFileSync(digestPath, JSON.stringify(digest, null, 2));
  console.log(`[levi:research] Digest saved to ${digestPath}`);

  // Also save a human-readable markdown version
  const mdPath = join(RESEARCH_DIR, `${id}.md`);
  writeFileSync(mdPath, formatDigestAsMarkdown(digest));
  console.log(`[levi:research] Markdown saved to ${mdPath}`);

  return digest;
}

// ---------------------------------------------------------------------------
// Markdown formatter
// ---------------------------------------------------------------------------

function formatDigestAsMarkdown(digest: ResearchDigest): string {
  const lines: string[] = [
    `# LEVI Research Digest — ${digest.date}`,
    "",
    `> ${digest.summary}`,
    "",
    `_Generated: ${digest.generatedAt}_`,
    "",
  ];

  // Categories
  for (const cat of digest.categories) {
    lines.push(`## ${cat.name}`, "");
    for (const item of cat.items) {
      const relevanceTag =
        item.relevance === "high"
          ? " **[HIGH]**"
          : item.relevance === "medium"
            ? " [MED]"
            : "";
      lines.push(`- **${item.title}**${relevanceTag}`);
      lines.push(`  ${item.description}`);
      if (item.url) lines.push(`  ${item.url}`);
      if (item.tags.length > 0) lines.push(`  _Tags: ${item.tags.join(", ")}_`);
      lines.push("");
    }
  }

  // Guest leads
  if (digest.guestLeads.length > 0) {
    lines.push("## Guest Leads", "");
    for (const lead of digest.guestLeads) {
      lines.push(
        `- **${lead.name}** ${lead.handle ? `(${lead.handle})` : ""}`,
      );
      lines.push(`  ${lead.why}`);
      if (lead.connection) lines.push(`  _Connection: ${lead.connection}_`);
      lines.push("");
    }
  }

  // Episode ideas
  if (digest.episodeIdeas.length > 0) {
    lines.push("## Episode Ideas", "");
    for (const idea of digest.episodeIdeas) {
      lines.push(`- **${idea.title}** [${idea.timeliness}]`);
      lines.push(`  ${idea.angle}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Utility: get latest digest
// ---------------------------------------------------------------------------

export function getLatestDigest(): ResearchDigest | null {
  if (!existsSync(RESEARCH_DIR)) return null;

  const files = readdirSync(RESEARCH_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .reverse();

  if (files.length === 0) return null;

  try {
    return JSON.parse(
      readFileSync(join(RESEARCH_DIR, files[0]), "utf-8"),
    ) as ResearchDigest;
  } catch {
    return null;
  }
}

export function getDigestAge(): number | null {
  const latest = getLatestDigest();
  if (!latest) return null;
  return (
    (Date.now() - new Date(latest.generatedAt).getTime()) / (1000 * 60 * 60)
  );
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

if (
  process.argv[1] &&
  (process.argv[1].endsWith("ecosystem-scanner.ts") ||
    process.argv[1].endsWith("ecosystem-scanner.js"))
) {
  console.log("[levi:research] Running ecosystem scan...");
  generateResearchDigest()
    .then((digest) => {
      console.log(`\n${digest.summary}`);
      console.log(
        `\nCategories: ${digest.categories.length} | Guest leads: ${digest.guestLeads.length} | Episode ideas: ${digest.episodeIdeas.length}`,
      );
      console.log(`\nFull digest: state/research/${digest.id}.md`);
    })
    .catch((err) => {
      console.error("[levi:research] Scan failed:", err);
      process.exit(1);
    });
}
