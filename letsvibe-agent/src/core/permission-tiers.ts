/**
 * Permission Tiers — static permission map for LEVI task execution.
 *
 * Three tiers control what LEVI can do autonomously vs. what needs human approval:
 *
 *   Tier 3 (Autonomous)       — Execute immediately, no notification needed
 *   Tier 2 (Draft + Notify)   — Execute but notify Seth of what was done
 *   Tier 1 (Require Approval) — Draft only, wait for Seth's explicit approval
 *
 * Follows the same tier model as SAL but scoped to podcast production tasks.
 */

export type PermissionTier = 1 | 2 | 3;

export interface PermissionEntry {
  tier: PermissionTier;
  label: string;
  description: string;
}

/** All known LEVI task types and their permission tiers */
const PERMISSION_MAP: Record<string, PermissionEntry> = {
  // ---------------------------------------------------------------------------
  // Tier 3 — Autonomous (execute immediately, no notification)
  // ---------------------------------------------------------------------------
  "pipeline-generate": {
    tier: 3,
    label: "Autonomous",
    description: "Run post-recording pipeline (show notes, chapters, social drafts)",
  },
  "analytics-collect": {
    tier: 3,
    label: "Autonomous",
    description: "Collect episode download/view metrics",
  },
  "status-check": {
    tier: 3,
    label: "Autonomous",
    description: "Check agent health and state consistency",
  },
  "episode-state-update": {
    tier: 3,
    label: "Autonomous",
    description: "Update internal episode tracking state",
  },
  "mention-scan": {
    tier: 3,
    label: "Autonomous",
    description: "Scan social mentions of the podcast",
  },

  // ---------------------------------------------------------------------------
  // Tier 2 — Draft + Notify (execute, notify Seth)
  // ---------------------------------------------------------------------------
  "social-draft": {
    tier: 2,
    label: "Draft + Notify",
    description: "Draft social media posts for episode promotion",
  },
  "clip-identify": {
    tier: 2,
    label: "Draft + Notify",
    description: "Identify clip-worthy moments from transcript",
  },
  "show-notes-generate": {
    tier: 2,
    label: "Draft + Notify",
    description: "Generate show notes from transcript",
  },
  "guest-research": {
    tier: 2,
    label: "Draft + Notify",
    description: "Research potential guest and compile brief",
  },

  // ---------------------------------------------------------------------------
  // Tier 1 — Require Approval (draft only, wait for Seth)
  // ---------------------------------------------------------------------------
  "episode-publish": {
    tier: 1,
    label: "Require Approval",
    description: "Publish episode to platforms (Spotify, Apple, YouTube)",
  },
  "social-post": {
    tier: 1,
    label: "Require Approval",
    description: "Post content to social media accounts",
  },
  "guest-outreach-send": {
    tier: 1,
    label: "Require Approval",
    description: "Send outreach message to potential guest",
  },
  "website-update": {
    tier: 1,
    label: "Require Approval",
    description: "Push updates to letsvibe.fm website",
  },
  "episode-status-change": {
    tier: 1,
    label: "Require Approval",
    description: "Change episode lifecycle status (e.g. ready → published)",
  },
};

/** Get the permission tier for a task type. Defaults to Tier 1 (safest) for unknown types. */
export function getPermission(taskType: string): PermissionEntry {
  return PERMISSION_MAP[taskType] ?? {
    tier: 1 as PermissionTier,
    label: "Require Approval",
    description: `Unknown task type: ${taskType}`,
  };
}

/** Check if a task type can execute autonomously (Tier 3) */
export function isAutonomous(taskType: string): boolean {
  return getPermission(taskType).tier === 3;
}

/** Check if a task type requires human approval (Tier 1) */
export function requiresApproval(taskType: string): boolean {
  return getPermission(taskType).tier === 1;
}

/** Get all task types for a given tier */
export function getTasksForTier(tier: PermissionTier): string[] {
  return Object.entries(PERMISSION_MAP)
    .filter(([, entry]) => entry.tier === tier)
    .map(([type]) => type);
}

/** Format permission map as a human-readable string */
export function formatPermissions(): string {
  const tiers: Record<PermissionTier, string[]> = { 1: [], 2: [], 3: [] };

  for (const [type, entry] of Object.entries(PERMISSION_MAP)) {
    tiers[entry.tier].push(`  ${type.padEnd(28)} ${entry.description}`);
  }

  let out = "LEVI Permission Tiers\n";
  out += "=".repeat(60) + "\n\n";
  out += "Tier 3 — Autonomous (execute immediately):\n";
  out += tiers[3].join("\n") + "\n\n";
  out += "Tier 2 — Draft + Notify (execute, notify Seth):\n";
  out += tiers[2].join("\n") + "\n\n";
  out += "Tier 1 — Require Approval (draft, wait for Seth):\n";
  out += tiers[1].join("\n") + "\n";

  return out;
}
