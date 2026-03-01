/**
 * Task Queue — priority queue with persistence for LEVI's decision loop.
 *
 * Tasks have types, priorities, permission tiers, and lifecycle status.
 * Persists to state/task-queue.json for crash recovery.
 * Keeps last 50 completed tasks for context and audit.
 *
 * Priority: lower number = higher priority (0 = most urgent).
 * Tasks execute in priority order within each tick.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { getPermission, type PermissionTier } from "./permission-tiers.js";

const ROOT = resolve(import.meta.dirname, "../..");
const STATE_DIR = join(ROOT, "state");
const QUEUE_FILE = join(STATE_DIR, "task-queue.json");
const MAX_COMPLETED = 50;

if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true });

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TaskStatus =
  | "pending"
  | "executing"
  | "completed"
  | "failed"
  | "awaiting-approval";

export interface Task {
  id: string;
  type: string;
  priority: number;
  status: TaskStatus;
  tier: PermissionTier;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  result?: string;
  error?: string;
  /** Optional metadata for task-specific context */
  meta?: Record<string, unknown>;
}

export interface QueueState {
  tasks: Task[];
  completed: Task[];
  lastSavedAt: string;
}

// ---------------------------------------------------------------------------
// Queue class
// ---------------------------------------------------------------------------

export class TaskQueue {
  private tasks: Task[] = [];
  private completed: Task[] = [];

  constructor() {
    this.load();
  }

  /** Load queue from disk (crash recovery) */
  load(): void {
    if (!existsSync(QUEUE_FILE)) return;
    try {
      const raw = JSON.parse(readFileSync(QUEUE_FILE, "utf-8")) as QueueState;
      this.tasks = raw.tasks || [];
      this.completed = raw.completed || [];
      // Any tasks left in "executing" state after a crash -> reset to pending
      for (const t of this.tasks) {
        if (t.status === "executing") t.status = "pending";
      }
    } catch {
      // Corrupted file — start fresh
      this.tasks = [];
      this.completed = [];
    }
  }

  /** Persist queue to disk */
  save(): void {
    const state: QueueState = {
      tasks: this.tasks,
      completed: this.completed.slice(-MAX_COMPLETED),
      lastSavedAt: new Date().toISOString(),
    };
    writeFileSync(QUEUE_FILE, JSON.stringify(state, null, 2));
  }

  /**
   * Enqueue a new task. Deduplicates by type — skips if a pending/executing/awaiting-approval
   * task of the same type already exists. Tier 1 tasks start as "awaiting-approval".
   */
  enqueue(
    type: string,
    priority: number,
    meta?: Record<string, unknown>,
  ): Task | null {
    // Deduplicate: skip if same type is already active
    const existing = this.tasks.find(
      (t) =>
        t.type === type &&
        (t.status === "pending" ||
          t.status === "executing" ||
          t.status === "awaiting-approval"),
    );
    if (existing) return null;

    const permission = getPermission(type);
    const task: Task = {
      id: `levi-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type,
      priority,
      status: permission.tier === 1 ? "awaiting-approval" : "pending",
      tier: permission.tier,
      createdAt: new Date().toISOString(),
      meta,
    };

    this.tasks.push(task);
    return task;
  }

  /**
   * Get the next N pending tasks, sorted by priority
   * (lowest number = highest priority).
   */
  dequeue(limit: number): Task[] {
    return this.tasks
      .filter((t) => t.status === "pending")
      .sort((a, b) => a.priority - b.priority)
      .slice(0, limit);
  }

  /** Mark a task as executing */
  markExecuting(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = "executing";
      task.startedAt = new Date().toISOString();
    }
  }

  /** Mark a task as completed with optional result string */
  complete(taskId: string, result?: string): void {
    const idx = this.tasks.findIndex((t) => t.id === taskId);
    if (idx === -1) return;

    const task = this.tasks[idx];
    task.status = "completed";
    task.completedAt = new Date().toISOString();
    if (result) task.result = result;

    // Move to completed history
    this.tasks.splice(idx, 1);
    this.completed.push(task);

    // Trim completed list
    if (this.completed.length > MAX_COMPLETED) {
      this.completed = this.completed.slice(-MAX_COMPLETED);
    }
  }

  /** Mark a task as failed with error message */
  fail(taskId: string, error: string): void {
    const idx = this.tasks.findIndex((t) => t.id === taskId);
    if (idx === -1) return;

    const task = this.tasks[idx];
    task.status = "failed";
    task.completedAt = new Date().toISOString();
    task.error = error;

    // Move to completed history (failures are part of history)
    this.tasks.splice(idx, 1);
    this.completed.push(task);
  }

  /** Approve a Tier 1 task (moves from awaiting-approval to pending) */
  approve(taskId: string): boolean {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task || task.status !== "awaiting-approval") return false;
    task.status = "pending";
    return true;
  }

  /** Cancel a task */
  cancel(taskId: string): boolean {
    const idx = this.tasks.findIndex((t) => t.id === taskId);
    if (idx === -1) return false;
    const task = this.tasks[idx];
    task.status = "failed";
    task.completedAt = new Date().toISOString();
    task.error = "Cancelled";
    this.tasks.splice(idx, 1);
    this.completed.push(task);
    return true;
  }

  /** Get all active tasks (pending, executing, awaiting-approval) */
  getActive(): Task[] {
    return this.tasks.filter(
      (t) =>
        t.status === "pending" ||
        t.status === "executing" ||
        t.status === "awaiting-approval",
    );
  }

  /** Get tasks awaiting approval */
  getAwaitingApproval(): Task[] {
    return this.tasks.filter((t) => t.status === "awaiting-approval");
  }

  /** Get recent completed tasks */
  getCompleted(limit = 10): Task[] {
    return this.completed.slice(-limit);
  }

  /** Get a specific task by ID (searches both active and completed) */
  getTask(taskId: string): Task | undefined {
    return (
      this.tasks.find((t) => t.id === taskId) ??
      this.completed.find((t) => t.id === taskId)
    );
  }

  /** Summary stats for status reporting */
  stats(): {
    pending: number;
    executing: number;
    awaitingApproval: number;
    completedToday: number;
    failedToday: number;
  } {
    const today = new Date().toISOString().split("T")[0];
    return {
      pending: this.tasks.filter((t) => t.status === "pending").length,
      executing: this.tasks.filter((t) => t.status === "executing").length,
      awaitingApproval: this.tasks.filter(
        (t) => t.status === "awaiting-approval",
      ).length,
      completedToday: this.completed.filter(
        (t) => t.status === "completed" && t.completedAt?.startsWith(today),
      ).length,
      failedToday: this.completed.filter(
        (t) => t.status === "failed" && t.completedAt?.startsWith(today),
      ).length,
    };
  }

  /** Format queue as human-readable string */
  format(): string {
    const active = this.getActive();
    const recent = this.getCompleted(5);

    let out = "LEVI Task Queue\n";
    out += "=".repeat(50) + "\n\n";

    if (active.length === 0) {
      out += "No active tasks.\n";
    } else {
      out += `Active (${active.length}):\n`;
      for (const t of active.sort((a, b) => a.priority - b.priority)) {
        const age = Math.round(
          (Date.now() - new Date(t.createdAt).getTime()) / 60000,
        );
        out += `  [${t.status.padEnd(18)}] ${t.type.padEnd(28)} P${t.priority} T${t.tier} (${age}m ago)\n`;
      }
    }

    if (recent.length > 0) {
      out += `\nRecent (${recent.length}):\n`;
      for (const t of recent) {
        const icon = t.status === "completed" ? "+" : "x";
        out += `  [${icon}] ${t.type.padEnd(28)} ${t.completedAt?.split("T")[1]?.slice(0, 5) ?? ""}\n`;
      }
    }

    return out;
  }
}
