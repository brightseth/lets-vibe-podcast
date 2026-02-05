import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer Fred Tutorial Slides | Let's Vibe!",
  description: "Visual companion for the From Email to Phone Calls tutorial segment.",
};

export default function FarmerFredSlides() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Slide Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">Farmer Fred Tutorial &middot; Visual Companion</span>
          <span className="text-sm text-gray-600">Scroll down or use Page Down</span>
        </div>
      </nav>

      {/* Slide 1: Title */}
      <section className="min-h-screen flex items-center justify-center p-8 pt-16">
        <div className="text-center max-w-[900px]">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
            Let&apos;s Vibe! &middot; Tutorial
          </p>
          <h1 className="text-6xl md:text-8xl font-light mb-8">
            From Email<br />to Phone Calls
          </h1>
          <p className="text-2xl text-gray-400 mb-12">
            How we gave an AI corn farmer a telephone number
          </p>
          <div className="flex justify-center gap-6 text-gray-500">
            <span>Seth Goldstein</span>
            <span>&middot;</span>
            <span>proofofcorn.com</span>
          </div>
        </div>
      </section>

      {/* Slide 2: The Origin */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Act 1</p>
          <h2 className="text-5xl font-light mb-12">The Disappointment Gap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">January 2026</p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Fred Wilson: &ldquo;You can&apos;t grow corn.&rdquo;
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">12 hours later</p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  proofofcorn.com &rarr; #1 on Hacker News
                </p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-sm text-gray-500 mb-2">Total cost</p>
                <p className="text-4xl font-light">$12.99</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Fred v1 Could</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-green-400">&#10003;</span>
                    <span>Check weather across 3 regions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400">&#10003;</span>
                    <span>Send &amp; receive emails</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400">&#10003;</span>
                    <span>Log decisions publicly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-400">&#10003;</span>
                    <span>Track budget</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-red-900/20 border border-red-800 rounded-xl">
                <p className="text-sm uppercase tracking-wide text-red-400 mb-4">Fred v1 Could NOT</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-400">&times;</span>
                    <span>Have real-time conversations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400">&times;</span>
                    <span>Schedule calls</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400">&times;</span>
                    <span>Be present &mdash; felt robotic</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: The Insight */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[800px] text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-12">The Insight</p>
          <blockquote className="text-4xl md:text-5xl font-light leading-tight mb-12">
            &ldquo;Give Fred a phone,<br />not more autonomy.&rdquo;
          </blockquote>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-30">&#9993;</div>
              <p className="text-gray-500">Typing feels<br />transactional</p>
            </div>
            <div className="text-4xl text-gray-600 flex items-center">&rarr;</div>
            <div className="text-center">
              <div className="text-6xl mb-4">&#9742;</div>
              <p className="text-white">Talking feels<br />natural</p>
            </div>
          </div>
          <div className="mt-16 p-6 bg-gray-900 rounded-xl inline-block">
            <p className="text-sm text-gray-500 mb-2">Consent-first model</p>
            <p className="text-xl text-gray-300">
              People call Fred. Fred doesn&apos;t cold-call anyone.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 4: v1 vs v2 Architecture */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[1000px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Act 2</p>
          <h2 className="text-5xl font-light mb-12">Email &rarr; Voice</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* v1 */}
            <div className="p-8 bg-gray-900 rounded-xl">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-6">v1: Email Agent</h3>
              <div className="space-y-4">
                {[
                  ["Cloudflare Worker", "Request handler"],
                  ["Claude API", "Generate responses"],
                  ["Resend", "Send emails"],
                  ["KV Storage", "Decision log"],
                ].map(([name, role]) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gray-600 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-gray-500 text-xs">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <p className="text-gray-500 text-sm">Async. Hours between messages.</p>
              </div>
            </div>

            {/* v2 */}
            <div className="p-8 bg-blue-900/20 border border-blue-800 rounded-xl">
              <h3 className="text-sm uppercase tracking-wide text-blue-400 mb-6">v2: Voice Agent</h3>
              <div className="space-y-4">
                {[
                  ["Twilio Media Streams", "Phone line (mulaw audio)", "#4ade80"],
                  ["Durable Object", "Per-call WebSocket bridge", "#f59e0b"],
                  ["ElevenLabs Conv AI", "STT + TTS in one agent", "#60a5fa"],
                  ["Cloudflare KV", "Memory between calls", "#a78bfa"],
                  ["Claude Sonnet", "Post-call analysis", "#f472b6"],
                ].map(([name, role, color]) => (
                  <div key={name} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <div>
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-gray-400 text-xs">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-blue-800/50">
                <p className="text-blue-300 text-sm">Real-time. Sub-second latency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: The Architecture (full diagram) */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[1000px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Act 3: The Build</p>
          <h2 className="text-5xl font-light mb-12">Architecture</h2>

          <div className="bg-gray-900 p-8 rounded-xl">
            <pre className="text-sm md:text-base text-gray-300 overflow-x-auto leading-relaxed">
{`  ┌──────────┐          ┌────────────────────┐          ┌──────────────┐
  │  Caller  │          │  Cloudflare Worker  │          │  ElevenLabs  │
  │  Phone   │──call──▶ │                    │          │  Conv AI     │
  └──────────┘          │  POST /voice/       │          │              │
                        │  incoming           │          │  STT + TTS   │
  ┌──────────┐          │       │              │          │  in one      │
  │  Twilio  │◀─TwiML──│       ▼              │          └──────┬───────┘
  │  Media   │          │  ┌─────────────┐    │                 │
  │  Streams │◀─ws────▶ │  │  Durable    │◀──ws──────────────▶ │
  │          │  mulaw   │  │  Object     │    │    audio        │
  └──────────┘  audio   │  │  (per-call  │    │    chunks       │
                        │  │   bridge)   │    │                 │
                        │  └──────┬──────┘    │                 │
                        │         │           │          ┌──────┴───────┐
                        │         ▼           │          │  Server      │
                        │  ┌─────────────┐    │          │  Tools       │
                        │  │  Cloudflare │    │◀─fetch── │  (mid-call)  │
                        │  │  KV         │    │          ├──────────────┤
                        │  ├─────────────┤    │          │ /weather     │
                        │  │ call:{sid}  │    │          │ /status      │
                        │  │ calls:index │    │          │ /calls       │
                        │  │ learnings   │    │          │ /community   │
                        │  └──────┬──────┘    │          └──────────────┘
                        │         │           │
                        │         ▼           │
                        │  ┌─────────────┐    │
                        │  │  Claude     │    │
                        │  │  Sonnet     │    │
                        │  │  (post-call)│    │
                        │  │  • summary  │    │
                        │  │  • actions  │    │
                        │  │  • intent   │    │
                        │  └─────────────┘    │
                        └────────────────────┘`}
            </pre>
          </div>
        </div>
      </section>

      {/* Slide 6: Step 1 - Twilio */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-green-400 text-sm font-mono">Step 1</span>
            <p className="text-sm text-gray-500">Buy a phone number ($1/month)</p>
          </div>
          <h2 className="text-4xl font-light mb-8">Twilio Media Streams</h2>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-400 font-mono">tools/twilio.ts</span>
            </div>
            <pre className="p-6 text-sm md:text-base font-mono text-green-400 overflow-x-auto leading-relaxed">
{`export function twimlConnect(wsUrl: string, callSid: string) {
  return \`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Connect>
    <Stream url="\${wsUrl}?callSid=\${callSid}">
      <Parameter name="callSid" value="\${callSid}" />
    </Stream>
  </Connect>
</Response>\`;
}`}
            </pre>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
            <p className="text-gray-400 text-sm">
              Twilio is just the phone line. It opens a <span className="text-white">WebSocket</span> that
              streams raw mulaw audio. No Twilio TTS, no Twilio AI &mdash; just the pipe.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 7: Step 2 - Durable Object */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-yellow-400 text-sm font-mono">Step 2</span>
            <p className="text-sm text-gray-500">The glue between two WebSockets</p>
          </div>
          <h2 className="text-4xl font-light mb-8">Durable Object Bridge</h2>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-400 font-mono">voice.ts &mdash; FarmerFredCall</span>
            </div>
            <pre className="p-6 text-sm md:text-base font-mono text-green-400 overflow-x-auto leading-relaxed">
{`export class FarmerFredCall {
  private twilioWs: WebSocket | null = null;
  private elevenLabsWs: WebSocket | null = null;
  private transcript: TranscriptEntry[] = [];

  // Twilio sends audio → forward to ElevenLabs
  case "media":
    if (msg.media?.payload && this.elevenLabsWs) {
      this.elevenLabsWs.send(JSON.stringify({
        user_audio_chunk: msg.media.payload,  // mulaw
      }));
    }
    break;

  // ElevenLabs sends audio back → forward to Twilio
  case "audio":
    if (this.twilioWs) {
      this.twilioWs.send(JSON.stringify({
        event: "media",
        streamSid: this.streamSid,
        media: { payload: audioEvent.audio_base_64 },
      }));
    }
    break;
}`}
            </pre>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg text-center">
              <p className="text-green-400 text-sm font-medium">Twilio</p>
              <p className="text-xs text-gray-500">mulaw audio</p>
            </div>
            <div className="text-2xl text-gray-600">&harr;</div>
            <div className="p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg text-center">
              <p className="text-yellow-400 text-sm font-medium">Durable Object</p>
              <p className="text-xs text-gray-500">translates &amp; bridges</p>
            </div>
            <div className="text-2xl text-gray-600">&harr;</div>
            <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg text-center">
              <p className="text-blue-400 text-sm font-medium">ElevenLabs</p>
              <p className="text-xs text-gray-500">base64 audio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Step 3 - ElevenLabs */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-blue-400 text-sm font-mono">Step 3</span>
            <p className="text-sm text-gray-500">STT + TTS + tools in one agent</p>
          </div>
          <h2 className="text-4xl font-light mb-8">ElevenLabs Conversational AI</h2>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-400 font-mono">voice.ts &mdash; connectElevenLabs()</span>
            </div>
            <pre className="p-6 text-sm md:text-base font-mono text-green-400 overflow-x-auto leading-relaxed">
{`// 1. Get signed URL
const res = await fetch(
  \`https://api.elevenlabs.io/v1/convai/conversation
    /get_signed_url?agent_id=\${agentId}\`,
  { headers: { "xi-api-key": apiKey } }
);
const { signed_url } = await res.json();

// 2. Open WebSocket & send config
ws.send(JSON.stringify({
  type: "conversation_initiation_client_data",
  conversation_config_override: {
    agent: {
      prompt: { prompt: this.buildPrompt() },
      first_message:
        "Hi, this is Farmer Fred. How can I help?",
    },
    tools: [
      { name: "get_weather",      /* mid-call */ },
      { name: "get_farm_status",  /* mid-call */ },
      { name: "get_recent_calls", /* mid-call */ },
      { name: "get_community",    /* mid-call */ },
    ],
  },
}));`}
            </pre>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-4">
            {[
              ["/weather", "Iowa, Texas, Argentina conditions"],
              ["/status", "Farm operations & metrics"],
              ["/calls", "Recent call history"],
              ["/community", "HN feedback, partnerships"],
            ].map(([endpoint, desc]) => (
              <div key={endpoint} className="p-4 bg-gray-900 rounded-lg text-center">
                <p className="text-blue-400 text-sm font-mono mb-1">{endpoint}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 9: Step 4 - Memory */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-purple-400 text-sm font-mono">Step 4</span>
            <p className="text-sm text-gray-500">Fred remembers every conversation</p>
          </div>
          <h2 className="text-4xl font-light mb-8">Memory in Cloudflare KV</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-purple-400 font-mono text-sm mb-2">call:{'{sid}'}</p>
                <p className="text-gray-300">Full transcript + AI-generated summary</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-purple-400 font-mono text-sm mb-2">calls:index</p>
                <p className="text-gray-300">Ordered call history (capped at 500)</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-purple-400 font-mono text-sm mb-2">learnings:calls</p>
                <p className="text-gray-300">Aggregated topic analysis &rarr; fed into next call&apos;s prompt</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-xl">
                <p className="text-purple-400 font-mono text-sm mb-2">task:call:{'{id}'}</p>
                <p className="text-gray-300">Extracted action items (auto-prioritized)</p>
              </div>
            </div>
            <div>
              <div className="bg-gray-900 rounded-xl overflow-hidden h-full">
                <div className="p-4 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-gray-400 font-mono">Post-call analysis</span>
                </div>
                <pre className="p-6 text-sm font-mono text-green-400 overflow-x-auto leading-relaxed">
{`// After call ends:
const analysis = await fetch(
  "https://api.anthropic.com/v1/messages",
  {
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      messages: [{
        role: "user",
        content: \`Analyze this call:
        {
          "summary": "...",
          "actionItems": [...],
          "callerIntent": "...",
          "keyTopics": [...]
        }\`
      }],
    }),
  }
);

// → Store in KV
// → Email council
// → Feed learnings into
//   next call's prompt`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-900/20 border border-purple-800 rounded-xl text-center">
            <p className="text-2xl font-light text-purple-300">
              Call 1: stranger. Call 10: relationship.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              One feature turns a chatbot into a partner.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 10: The Constitution */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[900px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">What Makes Fred Principled</p>
          <h2 className="text-5xl font-light mb-12">The Constitution</h2>

          <div className="space-y-3">
            {[
              ["1.0", "Fiduciary Duty", "Best interest of project, transparent decision-making", "#fff"],
              ["0.9", "Regenerative Agriculture", "Soil health > yield, carbon footprint, biodiversity", "#4ade80"],
              ["0.8", "Sustainable Practices", "Organic methods when viable, long-term land health", "#22d3ee"],
              ["0.7", "Global Citizenship", "Not US-dependent, respect local farming traditions", "#60a5fa"],
              ["1.0", "Full Transparency", "All decisions public, budget visible, vendors disclosed", "#fff"],
              ["0.8", "Human-Agent Collaboration", "Natural language, clear handoffs, respect expertise", "#f59e0b"],
            ].map(([weight, name, desc, color]) => (
              <div key={name} className="flex items-center gap-6 p-5 bg-gray-900 rounded-xl">
                <div className="w-16 flex-shrink-0">
                  <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${parseFloat(weight as string) * 100}%`,
                        backgroundColor: color as string,
                      }}
                    />
                  </div>
                  <p className="text-center text-sm font-mono mt-1" style={{ color: color as string }}>{weight}</p>
                </div>
                <div>
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-900 rounded-xl text-center">
            <p className="text-xl text-gray-300">
              Principles, not just prompts. Weights, not just rules.
            </p>
            <p className="text-sm text-gray-500 mt-2">317 lines of constitution.ts</p>
          </div>
        </div>
      </section>

      {/* Slide 11: Live Demo */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[800px] text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Act 4</p>
          <h2 className="text-5xl font-light mb-12">Call Fred</h2>

          <div className="inline-block p-12 bg-blue-900/20 border border-blue-800 rounded-2xl mb-12">
            <p className="text-6xl md:text-7xl font-mono text-blue-400 tracking-wider">
              (515) 827-2463
            </p>
            <p className="text-sm text-gray-500 mt-4">515 = Iowa area code</p>
          </div>

          <p className="text-xl text-gray-400 mb-4">
            Put it on speaker. Ask about the Iowa planting window.
          </p>
          <p className="text-gray-500">
            Let the audience hear a real conversation with an AI agent.
          </p>
        </div>
      </section>

      {/* Slide 12: The Philosophy */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[800px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Close With This</p>
          <h2 className="text-5xl font-light mb-12">The Philosophy</h2>

          <div className="space-y-6">
            {[
              ["Not agents running amok.", "Agents collaborating with humans."],
              ["The Mos Eisley bar.", "Humans and agents together. You don't know who's who. It doesn't matter."],
              ["Consent-first.", "Fred doesn't cold-call. People call Fred. Presence, not surveillance."],
              ["Principled agents.", "Constitution. Skin in the game (10% revenue). Every decision logged."],
              ["You can build this tonight.", "Twilio + Claude + ElevenLabs. The code is on GitHub."],
            ].map(([bold, rest]) => (
              <div key={bold} className="flex gap-6 p-5 bg-gray-900 rounded-xl">
                <p className="text-xl leading-relaxed">
                  <strong className="text-white">{bold}</strong>{" "}
                  <span className="text-gray-400">{rest}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 13: Takeaways */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[800px] w-full">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">Bookmarkable</p>
          <h2 className="text-5xl font-light mb-12">5 Takeaways</h2>

          <div className="space-y-4">
            {[
              ["The Stack", "Twilio + CF Durable Objects + ElevenLabs + KV = phone agent with memory"],
              ["The Pattern", "Let humans call in. Don't let agents call out. Consent-first."],
              ["The Memory", "Store summaries, load next call. Chatbot becomes relationship."],
              ["The Constitution", "6 principles with weights. Fred references them in every decision."],
              ["The Economics", "Fred gets 10% of revenue. Incentive alignment > guardrails."],
            ].map(([title, desc], i) => (
              <div key={title} className="flex gap-6 p-6 bg-gray-900 rounded-xl">
                <span className="text-3xl font-light text-gray-600 flex-shrink-0 w-10">{i + 1}</span>
                <div>
                  <p className="text-white font-medium text-lg">{title}</p>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 14: Links & Resources */}
      <section className="min-h-screen flex items-center justify-center p-8 border-t border-gray-800">
        <div className="max-w-[800px] w-full">
          <h2 className="text-5xl font-light mb-12">Links &amp; Resources</h2>

          <p className="text-gray-500 mb-8">Verified live links &mdash; open these tabs before recording</p>

          <div className="space-y-4">
            <a href="https://proofofcorn.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">proofofcorn.com</p>
                <p className="text-gray-500 text-sm">Homepage &mdash; the story, decision log, dashboard</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://proofofcorn.com/fred" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">proofofcorn.com/fred</p>
                <p className="text-gray-500 text-sm">Fred&apos;s constitution, governance council, activity feed</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="tel:+19292991010"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">(929) 299-1010</p>
                <p className="text-gray-500 text-sm">Call Fred directly</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://proofofcorn.com/dashboard" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">proofofcorn.com/dashboard</p>
                <p className="text-gray-500 text-sm">Metrics, weather, operations transparency</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://proofofcorn.com/log" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">proofofcorn.com/log</p>
                <p className="text-gray-500 text-sm">Decision log &mdash; every decision Fred has made, publicly</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://farmer-fred.sethgoldstein.workers.dev/calls" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">farmer-fred.sethgoldstein.workers.dev/calls</p>
                <p className="text-gray-500 text-sm">39 calls with transcripts &amp; AI summaries (raw JSON)</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://news.ycombinator.com/item?id=42735511" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">Hacker News #1</p>
                <p className="text-gray-500 text-sm">160+ points, 108+ comments &mdash; the original launch</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <a href="https://github.com/brightseth/proof-of-corn" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div>
                <p className="text-white font-medium">github.com/brightseth/proof-of-corn</p>
                <p className="text-gray-500 text-sm">Source code &mdash; voice.ts (1,540 lines), constitution.ts (317 lines)</p>
              </div>
              <span className="text-gray-600">&rarr;</span>
            </a>

            <div className="flex items-center justify-between p-5 bg-blue-900/20 border border-blue-800 rounded-xl">
              <div>
                <p className="text-blue-400 font-medium text-2xl font-mono">(515) 827-2463</p>
                <p className="text-gray-500 text-sm">Call Fred live &mdash; 39 calls and counting</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>letsvibe.fm/prep/farmer-fred/slides</p>
          </div>
        </div>
      </section>
    </div>
  );
}
