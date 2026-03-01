/**
 * LEVI Audit Logger
 *
 * JSONL per-day audit logging for all LEVI actions.
 * Logs to state/audit-log/YYYY-MM-DD.jsonl.
 *
 * Every decision, API call, content generation, and state change
 * gets an immutable log entry. Essential for debugging and
 * understanding what the agent did and why.
 */

import {
  appendFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
} from "fs";
import { resolve, join } from "path";

const ROOT = resolve(import.meta.dirname, "../..");
const AUDIT_DIR = join(ROOT, "state/audit-log");

// Ensure audit directory exists on module load
if (!existsSync(AUDIT_DIR)) {
  mkdirSync(AUDIT_DIR, { recursive: true });
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AuditEntry {
  timestamp: string;
  action: string;
  [key: string]: unknown;
}

/** Known action categories for type safety (extensible via string) */
export type AuditAction =
  | "agent:start"
  | "agent:stop"
  | "agent:heartbeat"
  | "inbox:check"
  | "inbox:process"
  | "outbox:send"
  | "episode:create"
  | "episode:update"
  | "episode:publish"
  | "guest:research"
  | "guest:outreach"
  | "guest:confirm"
  | "social:draft"
  | "social:schedule"
  | "social:post"
  | "pipeline:start"
  | "pipeline:complete"
  | "pipeline:error"
  | "transcript:process"
  | "shownotes:generate"
  | "clips:identify"
  | "task:add"
  | "task:complete"
  | "error"
  | string;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function todayDateString(): string {
  return new Date().toISOString().split("T")[0];
}

function getLogPath(date?: string): string {
  return join(AUDIT_DIR, `${date || todayDateString()}.jsonl`);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Append an action to today's audit log.
 *
 * @param action - The action identifier (e.g. "episode:publish", "guest:outreach")
 * @param details - Arbitrary key-value pairs with context about the action
 */
export function logAction(
  action: AuditAction,
  details: Record<string, unknown> = {},
): void {
  const entry: AuditEntry = {
    timestamp: new Date().toISOString(),
    action,
    ...details,
  };

  try {
    appendFileSync(getLogPath(), JSON.stringify(entry) + "\n");
  } catch (err) {
    // Audit logging should never crash the agent
    console.error(
      `[levi/audit] Failed to log action "${action}": ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

/**
 * Read the last N actions from today's audit log.
 * Returns newest-first (reversed).
 *
 * @param n - Number of recent actions to return (default: 10)
 * @param date - Optional date string (YYYY-MM-DD) to read from a specific day
 */
export function getRecentActions(n: number = 10, date?: string): AuditEntry[] {
  const logPath = getLogPath(date);

  if (!existsSync(logPath)) return [];

  try {
    const raw = readFileSync(logPath, "utf-8").trim();
    if (!raw) return [];

    const lines = raw.split("\n").filter((l) => l.trim());
    const entries: AuditEntry[] = [];

    // Parse from end (most recent) backward
    const startIdx = Math.max(0, lines.length - n);
    for (let i = lines.length - 1; i >= startIdx; i--) {
      try {
        entries.push(JSON.parse(lines[i]));
      } catch {
        // Skip malformed entries
      }
    }

    return entries;
  } catch {
    return [];
  }
}

/**
 * Get count of actions today (useful for status reporting).
 */
export function getActionCountToday(): number {
  const logPath = getLogPath();

  if (!existsSync(logPath)) return 0;

  try {
    const raw = readFileSync(logPath, "utf-8").trim();
    if (!raw) return 0;
    return raw.split("\n").filter((l) => l.trim()).length;
  } catch {
    return 0;
  }
}

/**
 * Get the timestamp of the last action today (or null).
 */
export function getLastActionTime(): string | null {
  const recent = getRecentActions(1);
  return recent.length > 0 ? recent[0].timestamp : null;
}
