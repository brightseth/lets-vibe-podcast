/**
 * LEVI Core — entry point for the Let's Vibe! podcast AI producer agent.
 *
 * Starts the decision loop (hourly tick by default) and keeps the process alive.
 * Graceful shutdown on SIGTERM/SIGINT.
 *
 * Usage:
 *   npx tsx src/core/main.ts
 *   pm2 start ecosystem.config.cjs --only levi-core
 *
 * Environment:
 *   LEVI_TICK_SECONDS  — tick interval in seconds (default: 3600)
 */

import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(import.meta.dirname, "../..", ".env") });

import { startDecisionLoop, TICK_INTERVAL_MS } from "./decision-loop.js";
import { TaskQueue } from "./task-queue.js";

// ---------------------------------------------------------------------------
// Singleton queue
// ---------------------------------------------------------------------------

let _queue: TaskQueue | null = null;

function getTaskQueue(): TaskQueue {
  if (!_queue) {
    _queue = new TaskQueue();
  }
  return _queue;
}

// ---------------------------------------------------------------------------
// Start function (exported for programmatic use)
// ---------------------------------------------------------------------------

export function startLevi(): { stop: () => void; queue: TaskQueue } {
  console.log("=".repeat(60));
  console.log("  LEVI — Let's Vibe! AI Producer");
  console.log("  Autonomous decision loop for podcast production");
  console.log(`  Tick interval: ${TICK_INTERVAL_MS / 1000}s`);
  console.log("=".repeat(60));
  console.log();

  // Initialize task queue (loads from disk for crash recovery)
  const queue = getTaskQueue();
  const stats = queue.stats();
  console.log(
    `[levi] Task queue loaded: ${stats.pending} pending, ${stats.awaitingApproval} awaiting approval`,
  );

  // Start decision loop (non-blocking — runs on interval)
  const loop = startDecisionLoop(queue);

  return { stop: loop.stop, queue };
}

// ---------------------------------------------------------------------------
// Direct execution
// ---------------------------------------------------------------------------

if (import.meta.url === `file://${process.argv[1]}`) {
  const { stop } = startLevi();

  // Graceful shutdown handlers
  const shutdown = (signal: string) => {
    console.log(`\n[levi] Shutting down (${signal})...`);
    stop();
    // Save queue one final time
    const queue = getTaskQueue();
    queue.save();
    console.log("[levi] Queue saved. Goodbye.");
    process.exit(0);
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));

  // Keep the process alive
  // The decision loop interval keeps the event loop active, but
  // we add an explicit keep-alive in case the interval is very long.
  const keepAlive = setInterval(() => {
    // Heartbeat — keeps process alive between ticks
  }, 60_000);

  // Clean up the keep-alive on exit
  process.on("exit", () => {
    clearInterval(keepAlive);
  });
}
