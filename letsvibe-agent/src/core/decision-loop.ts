/**
 * Decision Loop — LEVI's autonomous brain.
 *
 * Runs on a configurable tick interval (default: 1 hour / 3600s).
 * Each tick:
 *   1. readWorldState()  — check state/ files for pending work
 *   2. assess(world)     — rule-based task generation (no Claude calls)
 *   3. executeTasks()    — dispatch up to 3 tasks per tick
 *   4. reportStatus()    — update state/status.json
 *   5. queue.save()      — persist for crash recovery
 *
 * All assessment is rule-based with simple checks — no LLM calls in the
 * core loop. Claude is only invoked by skill dispatchers when executing.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { TaskQueue, type Task } from "./task-queue.js";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

export const TICK_INTERVAL_MS = (parseInt(process.env.LEVI_TICK_SECONDS ?? "3600", 10)) * 1000;
const MAX_TASKS_PER_TICK = 3;

const ROOT = resolve(import.meta.dirname, "../..");
const STATE_DIR = join(ROOT, "state");
const STATUS_FILE = join(STATE_DIR, "status.json");

// Ensure state dir exists
if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true });

// ---------------------------------------------------------------------------
// World State — pure filesystem reads, no network calls
// ---------------------------------------------------------------------------

export interface WorldState {
  time: {
    hour: number;
    dayOfWeek: number; // 0=Sun, 1=Mon, ..., 6=Sat
    isWeekday: boolean;
    isMorning: boolean; // 8-12
    iso: string;
  };
  transcripts: {
    /** Unprocessed transcript files in state/transcripts/ */
    pending: string[];
  };
  episodes: {
    /** Episodes with status "recorded" that need post-processing */
    needsProcessing: number;
    /** Episodes with status "ready" that could be published */
    readyToPublish: number;
    /** Total tracked episodes */
    total: number;
  };
  social: {
    /** Draft posts awaiting review in state/social-drafts/ */
    pendingDrafts: number;
    /** Hours since last social post (from state/last-social-post.json) */
    hoursSinceLastPost: number | null;
  };
  outreach: {
    /** Guest outreach targets that haven't been contacted */
    pendingTargets: number;
    /** Outreach sent but no response after 7+ days */
    staleOutreach: number;
  };
  inbox: {
    /** Messages from @seth inbox for LEVI */
    hasMessages: boolean;
    messageCount: number;
  };
  research: {
    /** Hours since last ecosystem research digest */
    hoursSinceLastDigest: number | null;
  };
  lastTick: {
    /** ISO timestamp of last completed tick */
    completedAt: string | null;
    /** Hours since last tick */
    hoursSince: number | null;
  };
}

/** Read all state files to build current world picture */
export function readWorldState(): WorldState {
  const now = new Date();

  // --- Time ---
  const time: WorldState["time"] = {
    hour: now.getHours(),
    dayOfWeek: now.getDay(),
    isWeekday: now.getDay() >= 1 && now.getDay() <= 5,
    isMorning: now.getHours() >= 8 && now.getHours() < 12,
    iso: now.toISOString(),
  };

  // --- Pending transcripts ---
  const transcriptDir = join(STATE_DIR, "transcripts");
  let pendingTranscripts: string[] = [];
  if (existsSync(transcriptDir)) {
    pendingTranscripts = readdirSync(transcriptDir).filter(
      (f) => f.endsWith(".json") || f.endsWith(".txt") || f.endsWith(".srt"),
    );
  }

  // --- Episode state ---
  const episodeStateFile = join(STATE_DIR, "episodes.json");
  let episodes = { needsProcessing: 0, readyToPublish: 0, total: 0 };
  if (existsSync(episodeStateFile)) {
    try {
      const data = JSON.parse(readFileSync(episodeStateFile, "utf-8")) as Array<{
        status?: string;
      }>;
      episodes.total = data.length;
      episodes.needsProcessing = data.filter((e) => e.status === "recorded").length;
      episodes.readyToPublish = data.filter((e) => e.status === "ready").length;
    } catch {
      // Malformed — ignore
    }
  }

  // --- Social drafts ---
  const socialDraftDir = join(STATE_DIR, "social-drafts");
  let pendingDrafts = 0;
  if (existsSync(socialDraftDir)) {
    pendingDrafts = readdirSync(socialDraftDir).filter((f) =>
      f.endsWith(".json"),
    ).length;
  }

  const lastPostFile = join(STATE_DIR, "last-social-post.json");
  let hoursSinceLastPost: number | null = null;
  if (existsSync(lastPostFile)) {
    try {
      const data = JSON.parse(readFileSync(lastPostFile, "utf-8")) as { postedAt?: string };
      if (data.postedAt) {
        hoursSinceLastPost =
          (Date.now() - new Date(data.postedAt).getTime()) / (1000 * 60 * 60);
      }
    } catch {
      // Ignore
    }
  }

  // --- Outreach state ---
  const outreachFile = join(STATE_DIR, "outreach.json");
  let pendingTargets = 0;
  let staleOutreach = 0;
  if (existsSync(outreachFile)) {
    try {
      const data = JSON.parse(readFileSync(outreachFile, "utf-8")) as Array<{
        status?: string;
        sentAt?: string;
      }>;
      pendingTargets = data.filter((o) => o.status === "target").length;
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      staleOutreach = data.filter(
        (o) =>
          o.status === "sent" &&
          o.sentAt &&
          new Date(o.sentAt).getTime() < sevenDaysAgo,
      ).length;
    } catch {
      // Ignore
    }
  }

  // --- @seth inbox ---
  const inboxDir = join(STATE_DIR, "inbox");
  let messageCount = 0;
  if (existsSync(inboxDir)) {
    messageCount = readdirSync(inboxDir).filter((f) =>
      f.endsWith(".json"),
    ).length;
  }

  // --- Research digest age ---
  const researchDir = join(STATE_DIR, "research");
  let hoursSinceLastDigest: number | null = null;
  if (existsSync(researchDir)) {
    const digests = readdirSync(researchDir)
      .filter((f) => f.endsWith(".json"))
      .sort()
      .reverse();
    if (digests.length > 0) {
      try {
        const latest = JSON.parse(
          readFileSync(join(researchDir, digests[0]), "utf-8"),
        ) as { generatedAt?: string };
        if (latest.generatedAt) {
          hoursSinceLastDigest =
            (Date.now() - new Date(latest.generatedAt).getTime()) / (1000 * 60 * 60);
        }
      } catch {
        // Ignore
      }
    }
  }

  // --- Last tick ---
  let lastTickCompletedAt: string | null = null;
  let hoursSinceLastTick: number | null = null;
  if (existsSync(STATUS_FILE)) {
    try {
      const data = JSON.parse(readFileSync(STATUS_FILE, "utf-8")) as {
        lastTick?: string;
      };
      if (data.lastTick) {
        lastTickCompletedAt = data.lastTick;
        hoursSinceLastTick =
          (Date.now() - new Date(data.lastTick).getTime()) / (1000 * 60 * 60);
      }
    } catch {
      // Ignore
    }
  }

  return {
    time,
    transcripts: { pending: pendingTranscripts },
    episodes,
    social: { pendingDrafts, hoursSinceLastPost },
    outreach: { pendingTargets, staleOutreach },
    inbox: { hasMessages: messageCount > 0, messageCount },
    research: { hoursSinceLastDigest },
    lastTick: { completedAt: lastTickCompletedAt, hoursSince: hoursSinceLastTick },
  };
}

/** Format world state as a one-line summary for logging */
export function formatWorldState(world: WorldState): string {
  const parts: string[] = [
    `t=${world.time.hour}h`,
    `transcripts=${world.transcripts.pending.length}`,
    `episodes=${world.episodes.total}(${world.episodes.needsProcessing}rec/${world.episodes.readyToPublish}rdy)`,
    `social=${world.social.pendingDrafts}drafts`,
    `outreach=${world.outreach.pendingTargets}tgt/${world.outreach.staleOutreach}stale`,
    `research=${world.research.hoursSinceLastDigest !== null ? Math.round(world.research.hoursSinceLastDigest) + "h" : "never"}`,
    `inbox=${world.inbox.messageCount}`,
  ];
  return parts.join(" | ");
}

// ---------------------------------------------------------------------------
// Assessment rules — pure logic, no Claude
// ---------------------------------------------------------------------------

interface AssessmentRule {
  condition: (world: WorldState) => boolean;
  taskType: string;
  priority: number;
  meta?: (world: WorldState) => Record<string, unknown>;
}

const ASSESSMENT_RULES: AssessmentRule[] = [
  // Priority 0 — Urgent: @seth inbox messages
  {
    condition: (w) => w.inbox.hasMessages,
    taskType: "status-check",
    priority: 0,
    meta: (w) => ({ reason: "inbox", messageCount: w.inbox.messageCount }),
  },

  // Priority 10 — New transcripts waiting for processing
  {
    condition: (w) => w.transcripts.pending.length > 0,
    taskType: "pipeline-generate",
    priority: 10,
    meta: (w) => ({ files: w.transcripts.pending }),
  },

  // Priority 15 — Episodes recorded but not yet processed (show notes)
  {
    condition: (w) => w.episodes.needsProcessing > 0,
    taskType: "show-notes-generate",
    priority: 15,
    meta: (w) => ({ count: w.episodes.needsProcessing }),
  },

  // Priority 20 — Social drafts needed (no drafts + last post > 48h ago)
  {
    condition: (w) => {
      if (w.social.pendingDrafts > 0) return false; // Already have drafts
      if (w.social.hoursSinceLastPost === null) return true; // Never posted
      return w.social.hoursSinceLastPost > 48;
    },
    taskType: "social-draft",
    priority: 20,
  },

  // Priority 25 — Clip identification for recorded episodes
  {
    condition: (w) => w.episodes.needsProcessing > 0,
    taskType: "clip-identify",
    priority: 25,
    meta: (w) => ({ count: w.episodes.needsProcessing }),
  },

  // Priority 30 — Guest research for upcoming episodes (weekday mornings)
  {
    condition: (w) => {
      if (!w.time.isWeekday || !w.time.isMorning) return false;
      return w.outreach.pendingTargets > 0;
    },
    taskType: "guest-research",
    priority: 30,
    meta: (w) => ({ pendingTargets: w.outreach.pendingTargets }),
  },

  // Priority 35 — Stale outreach follow-up (sent > 7 days, no response)
  {
    condition: (w) => w.outreach.staleOutreach > 0,
    taskType: "guest-research",
    priority: 35,
    meta: (w) => ({
      reason: "stale-followup",
      staleCount: w.outreach.staleOutreach,
    }),
  },

  // Priority 40 — Episode ready to publish (needs approval, but queue the request)
  {
    condition: (w) => w.episodes.readyToPublish > 0,
    taskType: "episode-publish",
    priority: 40,
    meta: (w) => ({ readyCount: w.episodes.readyToPublish }),
  },

  // Priority 45 — Ecosystem research scan (daily, morning, if no recent digest)
  {
    condition: (w) => {
      if (!w.time.isMorning) return false;
      if (!w.time.isWeekday) return false;
      // Check if we have a recent digest (< 20 hours old)
      if (w.research?.hoursSinceLastDigest !== null &&
          w.research?.hoursSinceLastDigest !== undefined &&
          w.research.hoursSinceLastDigest < 20) return false;
      return true;
    },
    taskType: "ecosystem-research",
    priority: 45,
  },

  // Priority 50 — Periodic analytics collection (once a day, morning)
  {
    condition: (w) => {
      if (!w.time.isMorning) return false;
      // Only if we haven't ticked in > 12 hours (prevents duplicate analytics)
      if (w.lastTick.hoursSince !== null && w.lastTick.hoursSince < 12) return false;
      return true;
    },
    taskType: "analytics-collect",
    priority: 50,
  },

  // Priority 55 — Mention scan (weekday afternoons, every few hours)
  {
    condition: (w) => {
      if (!w.time.isWeekday) return false;
      if (w.time.hour < 12 || w.time.hour > 20) return false;
      return true;
    },
    taskType: "mention-scan",
    priority: 55,
  },
];

/** Run all assessment rules against world state, return task descriptors to enqueue */
function assess(
  world: WorldState,
): Array<{ type: string; priority: number; meta?: Record<string, unknown> }> {
  const tasks: Array<{
    type: string;
    priority: number;
    meta?: Record<string, unknown>;
  }> = [];

  for (const rule of ASSESSMENT_RULES) {
    try {
      if (rule.condition(world)) {
        tasks.push({
          type: rule.taskType,
          priority: rule.priority,
          meta: rule.meta?.(world),
        });
      }
    } catch {
      // Assessment rules should never crash the loop
    }
  }

  return tasks;
}

// ---------------------------------------------------------------------------
// Skill dispatchers — placeholder stubs, connect to real skills later
// ---------------------------------------------------------------------------

type SkillFn = (meta?: Record<string, unknown>) => Promise<string>;

/**
 * Resolve a task type to a callable skill function.
 * Returns null for unrecognized types. Stubs return descriptions
 * of what they would do — wire up real implementations as skills are built.
 */
async function getSkillDispatcher(taskType: string): Promise<SkillFn | null> {
  switch (taskType) {
    case "pipeline-generate":
      return async (meta) => {
        const files = (meta?.files as string[]) ?? [];
        // TODO: wire to src/pipeline/post-recording.ts
        return `Pipeline: ${files.length} transcript(s) queued for processing`;
      };

    case "ecosystem-research":
      return async () => {
        const { generateResearchDigest } = await import("../skills/ecosystem-scanner.js");
        const digest = await generateResearchDigest();
        return `Research: ${digest.categories.length} categories, ${digest.guestLeads.length} guest leads, ${digest.episodeIdeas.length} episode ideas`;
      };

    case "analytics-collect":
      return async () => {
        // TODO: wire to analytics collector
        return "Analytics: collection cycle complete";
      };

    case "status-check":
      return async (meta) => {
        const reason = (meta?.reason as string) ?? "routine";
        return `Status check (${reason}): LEVI operational`;
      };

    case "episode-state-update":
      return async () => {
        return "Episode state updated";
      };

    case "mention-scan":
      return async () => {
        // TODO: wire to social mention scanner
        return "Mention scan: complete";
      };

    case "social-draft":
      return async () => {
        // TODO: wire to src/workflows/social.ts
        return "Social drafts: generated";
      };

    case "clip-identify":
      return async (meta) => {
        const count = (meta?.count as number) ?? 0;
        // TODO: wire to clip identifier
        return `Clip identification: ${count} episode(s) scanned`;
      };

    case "show-notes-generate":
      return async (meta) => {
        const count = (meta?.count as number) ?? 0;
        // TODO: wire to src/workflows/show-notes.ts
        return `Show notes: ${count} episode(s) processed`;
      };

    case "guest-research":
      return async (meta) => {
        const reason = (meta?.reason as string) ?? "scheduled";
        // TODO: wire to src/workflows/guest-research.ts
        return `Guest research (${reason}): complete`;
      };

    case "episode-publish":
      return async () => {
        // Tier 1 — this should only execute after approval
        return "Episode publish: awaiting platform upload";
      };

    case "social-post":
      return async () => {
        // Tier 1
        return "Social post: awaiting approval";
      };

    case "guest-outreach-send":
      return async () => {
        // Tier 1
        return "Guest outreach: draft ready for review";
      };

    case "website-update":
      return async () => {
        // Tier 1
        return "Website update: changes staged";
      };

    case "episode-status-change":
      return async () => {
        // Tier 1
        return "Episode status change: awaiting approval";
      };

    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Task execution
// ---------------------------------------------------------------------------

async function executeTask(task: Task, queue: TaskQueue): Promise<void> {
  const dispatcher = await getSkillDispatcher(task.type);

  if (!dispatcher) {
    queue.fail(task.id, `No dispatcher found for task type: ${task.type}`);
    console.error(`[levi] No dispatcher for task type: ${task.type}`);
    return;
  }

  queue.markExecuting(task.id);
  console.log(
    `[levi] Executing: ${task.type} (P${task.priority} T${task.tier})`,
  );

  try {
    const result = await dispatcher(task.meta);
    queue.complete(task.id, result);
    console.log(`[levi] Completed: ${task.type} -> ${result}`);
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    queue.fail(task.id, errorMsg);
    console.error(`[levi] Failed: ${task.type} -> ${errorMsg}`);
  }
}

// ---------------------------------------------------------------------------
// Status reporting
// ---------------------------------------------------------------------------

interface LeviStatus {
  agent: string;
  state: "active" | "idle" | "error";
  health: "green" | "yellow" | "red";
  lastTick: string;
  summary: string;
  metrics: {
    tickDurationSec: number;
    tasksEnqueued: number;
    tasksExecuted: number;
    tasksPending: number;
    tasksAwaitingApproval: number;
    completedToday: number;
    failedToday: number;
  };
  updatedAt: string;
}

function writeStatus(status: LeviStatus): void {
  writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2));
}

// ---------------------------------------------------------------------------
// Single tick
// ---------------------------------------------------------------------------

export async function tick(queue: TaskQueue): Promise<void> {
  const tickStart = Date.now();

  // 1. Read world state
  const world = readWorldState();
  console.log(`[levi] World: ${formatWorldState(world)}`);

  // 2. Assess — generate tasks from rules
  const assessedTasks = assess(world);
  let enqueued = 0;
  for (const t of assessedTasks) {
    const task = queue.enqueue(t.type, t.priority, t.meta);
    if (task) enqueued++;
  }

  // 3. Execute ready tasks (up to limit)
  const ready = queue.dequeue(MAX_TASKS_PER_TICK);
  for (const task of ready) {
    await executeTask(task, queue);
  }

  // 4. Report status
  const stats = queue.stats();
  const elapsed = ((Date.now() - tickStart) / 1000).toFixed(1);

  writeStatus({
    agent: "levi",
    state: stats.failedToday > 5 ? "error" : "active",
    health: stats.failedToday > 3 ? "yellow" : "green",
    lastTick: new Date().toISOString(),
    summary: `Tick: ${enqueued} enqueued, ${ready.length} executed, ${stats.pending} pending, ${stats.awaitingApproval} awaiting approval`,
    metrics: {
      tickDurationSec: parseFloat(elapsed),
      tasksEnqueued: enqueued,
      tasksExecuted: ready.length,
      tasksPending: stats.pending,
      tasksAwaitingApproval: stats.awaitingApproval,
      completedToday: stats.completedToday,
      failedToday: stats.failedToday,
    },
    updatedAt: new Date().toISOString(),
  });

  // 5. Save queue
  queue.save();

  console.log(
    `[levi] Tick complete (${elapsed}s): ${enqueued} enqueued, ${ready.length} executed, ${stats.pending} pending`,
  );
}

// ---------------------------------------------------------------------------
// Loop runner
// ---------------------------------------------------------------------------

/** Start the decision loop. Runs immediately, then on interval. Returns a stop function. */
export function startDecisionLoop(queue: TaskQueue): { stop: () => void } {
  console.log(
    `[levi] Starting decision loop (tick every ${TICK_INTERVAL_MS / 1000}s)...`,
  );

  let running = true;

  const runTick = async () => {
    try {
      await tick(queue);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[levi] Tick error: ${msg}`);
    }
  };

  // Initial tick
  runTick();

  // Schedule recurring ticks
  const interval = setInterval(() => {
    if (running) runTick();
  }, TICK_INTERVAL_MS);

  return {
    stop: () => {
      running = false;
      clearInterval(interval);
      console.log("[levi] Decision loop stopped.");
    },
  };
}
