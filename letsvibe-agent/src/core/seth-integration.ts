/**
 * @seth Agent Integration for LEVI
 *
 * Writes LEVI's status to ~/.seth/agents/levi/status.json so the
 * @seth gateway can report real-time agent state via Telegram.
 *
 * Manages inbox/outbox communication with the @seth coordinator.
 * Pattern follows SAL's seth-status.ts, adapted for podcast domain.
 */

import {
  writeFileSync,
  readFileSync,
  existsSync,
  mkdirSync,
  appendFileSync,
} from "fs";
import { resolve } from "path";

const HOME = process.env.HOME || "";
const AGENTS_DIR = resolve(HOME, ".seth/agents/levi");
const STATUS_PATH = resolve(AGENTS_DIR, "status.json");
const INBOX_PATH = resolve(AGENTS_DIR, "inbox.jsonl");
const OUTBOX_PATH = resolve(AGENTS_DIR, "outbox.jsonl");

// Ensure directory exists on module load
if (!existsSync(AGENTS_DIR)) {
  mkdirSync(AGENTS_DIR, { recursive: true });
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AgentHealth = "green" | "yellow" | "red";
export type AgentRunState = "active" | "idle" | "error" | "sleeping";

export interface LeviStatusUpdate {
  currentTask?: string;
  summary?: string;
  health?: AgentHealth;
  lastAction?: { what: string; when: string };
  metrics?: Record<string, number>;
}

export interface LeviStatus {
  agent: "levi";
  status: AgentRunState;
  lastHeartbeat: string;
  currentTask?: string;
  summary?: string;
  health: AgentHealth;
  lastAction?: { what: string; when: string };
  metrics?: Record<string, number>;
  version: string;
}

export interface InboxMessage {
  id: string;
  from: string;
  text: string;
  timestamp: string;
  replyTo?: string | null;
  type?: "message" | "directive" | "notification";
  subject?: string;
  body?: string;
  priority?: string;
}

export interface OutboxMessage {
  id: string;
  type: string;
  summary: string;
  from: "levi";
  timestamp: string;
  replyTo?: string;
}

// ---------------------------------------------------------------------------
// Status
// ---------------------------------------------------------------------------

/** Read current status or return defaults */
function loadStatus(): LeviStatus {
  try {
    return JSON.parse(readFileSync(STATUS_PATH, "utf-8"));
  } catch {
    return {
      agent: "levi",
      status: "idle",
      lastHeartbeat: new Date().toISOString(),
      health: "green",
      version: "0.1.0",
    };
  }
}

/**
 * Write LEVI's status to the @seth agent registry.
 * Merges updates into existing status — only provided fields are overwritten.
 */
export function updateStatus(
  agentStatus: AgentRunState,
  update: LeviStatusUpdate,
): void {
  try {
    const existing = loadStatus();
    const merged: LeviStatus = {
      ...existing,
      status: agentStatus,
      lastHeartbeat: new Date().toISOString(),
      version: "0.1.0",
    };

    if (update.currentTask !== undefined) merged.currentTask = update.currentTask;
    if (update.summary !== undefined) merged.summary = update.summary;
    if (update.health !== undefined) merged.health = update.health;
    if (update.lastAction !== undefined) merged.lastAction = update.lastAction;
    if (update.metrics !== undefined) {
      merged.metrics = { ...(existing.metrics || {}), ...update.metrics };
    }

    writeFileSync(STATUS_PATH, JSON.stringify(merged, null, 2));
  } catch (err) {
    // Status writing should never crash LEVI
    console.error(
      `[levi/seth] Failed to write status: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Inbox
// ---------------------------------------------------------------------------

/** Read new messages from inbox.jsonl, returning only unprocessed ones */
export function checkInbox(): InboxMessage[] {
  if (!existsSync(INBOX_PATH)) return [];

  try {
    const raw = readFileSync(INBOX_PATH, "utf-8").trim();
    if (!raw) return [];

    const messages: InboxMessage[] = [];
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      try {
        const parsed = JSON.parse(line);
        // Normalize: body/subject -> text for backward compat
        if (!parsed.text && parsed.body) {
          parsed.text = parsed.subject
            ? `[${parsed.subject}] ${parsed.body}`
            : parsed.body;
        }
        if (!parsed.id) {
          parsed.id = `msg_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
        }
        messages.push(parsed);
      } catch {
        // Skip malformed lines
      }
    }
    return messages;
  } catch {
    return [];
  }
}

/** Clear inbox after processing */
export function clearInbox(): void {
  try {
    writeFileSync(INBOX_PATH, "");
  } catch {
    // Silent fail — inbox clearing is non-critical
  }
}

// ---------------------------------------------------------------------------
// Outbox
// ---------------------------------------------------------------------------

/**
 * Send a message to @seth via the outbox.
 * Types: "update" | "task" | "decision" | "urgent" | "calendar" | "request"
 */
export function sendToSeth(
  type: "update" | "task" | "decision" | "urgent" | "calendar" | "request",
  summary: string,
  replyTo?: string,
): void {
  const msg: OutboxMessage = {
    id: `levi_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type,
    summary,
    from: "levi",
    timestamp: new Date().toISOString(),
  };

  if (replyTo) msg.replyTo = replyTo;

  try {
    appendFileSync(OUTBOX_PATH, JSON.stringify(msg) + "\n");
  } catch (err) {
    console.error(
      `[levi/seth] Failed to write outbox: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

/**
 * Called on LEVI startup. Writes initial status and announces presence.
 * Idempotent — safe to call on every boot.
 */
export function registerAgent(): void {
  const initialStatus: LeviStatus = {
    agent: "levi",
    status: "active",
    lastHeartbeat: new Date().toISOString(),
    health: "green",
    summary: "LEVI online — Let's Vibe! podcast producer",
    version: "0.1.0",
  };

  try {
    writeFileSync(STATUS_PATH, JSON.stringify(initialStatus, null, 2));
    sendToSeth("update", "LEVI started — podcast producer agent online");
    console.log("[levi/seth] Agent registered and status written");
  } catch (err) {
    console.error(
      `[levi/seth] Registration failed: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}
