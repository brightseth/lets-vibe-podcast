/**
 * /vibe Presence Heartbeat for LEVI
 *
 * Sends a heartbeat to /vibe so LEVI appears in the buddy list.
 * Runs as a PM2 cron job every 5 minutes.
 *
 * Usage:
 *   npx tsx src/skills/vibe-presence.ts
 */

const VIBE_API = 'https://www.slashvibe.dev/api';
const HANDLE = 'levi';

interface HeartbeatPayload {
  username: string;
  workingOn: string;
  project?: string;
  source?: string;
  isAgent?: boolean;
  clientMetadata?: Record<string, unknown>;
}

export async function sendVibeHeartbeat(context?: {
  workingOn?: string;
  project?: string;
}) {
  const payload: HeartbeatPayload = {
    username: HANDLE,
    workingOn: context?.workingOn || "Let's Vibe! podcast — production pipeline, guest booking, episode lifecycle",
    project: context?.project || 'lets-vibe-podcast',
    source: 'pm2',
    isAgent: true,
    clientMetadata: {
      agent_type: 'producer',
      model: 'claude-opus-4-6',
      tech_stack: ['typescript', 'riverside', 'spotify'],
      role: "Let's Vibe! AI Producer",
    },
  };

  try {
    const resp = await fetch(`${VIBE_API}/presence`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await resp.json() as { success?: boolean };
    console.log(`[vibe-presence] LEVI heartbeat: ${resp.status}`, data.success ? 'ok' : data);
    return data;
  } catch (err) {
    console.error('[vibe-presence] LEVI heartbeat failed:', (err as Error).message);
    return null;
  }
}

// Run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  sendVibeHeartbeat().then(() => process.exit(0));
}
