export default function FarmerFredTutorial() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-8">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Tutorial Prep &middot; Seth + Matt Review
          </p>
          <h1 className="text-4xl font-light">
            From Email to Phone Calls
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            Building an AI agent people actually want to talk to
          </p>
          <p className="text-sm text-gray-600 mt-4">
            15 min tutorial segment &middot; Let&apos;s Vibe! Episode 2
          </p>
        </div>
      </header>

      {/* The Story */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">The Story</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              In January 2026, Fred Wilson told Seth Goldstein &ldquo;you can&apos;t grow corn.&rdquo;
              Twelve hours later, <a href="https://proofofcorn.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">proofofcorn.com</a> was
              live and hit #1 on Hacker News. An AI agent named Farmer Fred was managing
              corn operations across Iowa, South Texas, and Argentina.
            </p>

            <p>
              Fred had a constitution with 6 principles. He could check weather, send emails,
              log decisions, manage a budget. Total cost: $12.99.
            </p>

            <p>
              Then something interesting happened. Fred started wanting to do more &mdash;
              scheduling his own calls, running outreach, sending emails autonomously.
              And Seth realized: <strong className="text-white">he was going to disappoint people.</strong>
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border-l-2 border-gray-700">
              <p className="italic text-gray-400">
                &ldquo;I realized he couldn&apos;t deliver on that; he&apos;s going to disappoint
                people. Well, what if we gave him a sort of telephonic presence through voice
                on the telephone? People would call him and talk to him, which I find is more
                natural than typing in some ways.&rdquo;
              </p>
            </div>

            <p>
              That&apos;s what we built. Farmer Fred went from email to phone calls.
              Here&apos;s exactly how.
            </p>
          </div>
        </div>
      </section>

      {/* Act 1: The Problem */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm text-gray-600 font-mono">00:00</span>
            <h2 className="text-2xl font-light">Act 1: The Disappointment Gap</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">3 minutes &middot; Context + Problem</p>

          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Talking Points</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Quick origin: Fred Wilson challenge, 12 hours, #1 on HN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>What Fred v1 could do: weather monitoring, email, decision logging, budget tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>The problem: Fred started scheduling calls, running outreach &mdash; but he couldn&apos;t actually be present for those interactions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">The insight:</strong> typing to an agent feels transactional. Talking feels natural. Give Fred a phone, not more autonomy.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Show on Screen</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>&rarr; proofofcorn.com (the live site)</li>
                <li>&rarr; Fred&apos;s constitution.ts (the 6 principles)</li>
                <li>&rarr; The decision log showing real decisions Fred made</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2: The Evolution */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm text-gray-600 font-mono">03:00</span>
            <h2 className="text-2xl font-light">Act 2: Email &rarr; Voice</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">3 minutes &middot; The evolution</p>

          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Talking Points</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Fred v1 architecture: Cloudflare Worker + Claude API + Resend email + KV storage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>What worked: people emailed fred@proofofcorn.com and got real, thoughtful responses. Chad from Nebraska offered 160 acres.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>What didn&apos;t: Fred couldn&apos;t schedule calls, couldn&apos;t have real-time conversations, felt robotic when trying</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>The shift: instead of Fred calling out (scary, spammy), people call Fred (consent-first)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Three new pieces: Twilio Media Streams (phone), ElevenLabs Conversational AI (STT + TTS in one), Cloudflare Durable Objects (the bridge)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Show on Screen</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>&rarr; Side-by-side: v1 (email flow) vs v2 (voice flow)</li>
                <li>&rarr; Real email from Chad from Nebraska</li>
                <li>&rarr; Architecture diagram (below)</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Architecture</h3>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`Phone Call
    │
    ▼
┌──────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│   Twilio     │     │  Cloudflare Worker   │     │  ElevenLabs     │
│  Media       │◀───▶│  Durable Object      │◀───▶│  Conversational │
│  Streams     │     │  (per-call bridge)   │     │  AI (STT + TTS) │
└──────────────┘     └─────────────────────┘     └─────────────────┘
  mulaw audio ◀──────────▶ audio chunks ◀──────────▶ audio events
                              │
                    ┌─────────┴─────────┐
                    │   Server Tools     │
                    │  /voice/tools/*    │
                    ├────────────────────┤
                    │ • weather          │
                    │ • status           │
                    │ • calls (history)  │
                    │ • community        │
                    └────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │  Cloudflare KV     │
                    │  (memory layer)    │
                    ├────────────────────┤
                    │ call:{sid}         │
                    │ calls:index        │
                    │ learnings:calls    │
                    │ task:call:{id}     │
                    └────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │  Claude Sonnet     │
                    │  (post-call)       │
                    │  • summaries       │
                    │  • action items    │
                    │  • topic analysis  │
                    └────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3: The Build */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm text-gray-600 font-mono">06:00</span>
            <h2 className="text-2xl font-light">Act 3: The Build</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">6 minutes &middot; Live code walkthrough</p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Step 1: Twilio Media Streams</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Buy a phone number ($1/month). Incoming call hits POST /voice/incoming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Return TwiML that opens a <strong className="text-white">Media Stream WebSocket</strong> &mdash; raw audio, bidirectional</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Not Twilio TTS. Twilio is just the phone line. Audio processing happens elsewhere.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-800 rounded text-sm font-mono text-green-400 overflow-x-auto">
                <p className="text-gray-500 mb-1">// tools/twilio.ts &mdash; TwiML that opens the WebSocket</p>
                <pre className="whitespace-pre">{`export function twimlConnect(wsUrl: string, callSid: string) {
  return \`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Connect>
    <Stream url="\${wsUrl}?callSid=\${callSid}">
      <Parameter name="callSid" value="\${callSid}" />
    </Stream>
  </Connect>
</Response>\`;
}`}</pre>
                <p className="text-gray-500 mt-3">// farmer-fred/src/tools/twilio.ts (154 lines)</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Step 2: Durable Object Bridge</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Each call creates a <strong className="text-white">FarmerFredCall Durable Object</strong> &mdash; stateful, per-call</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>The DO bridges two WebSockets: Twilio mulaw audio &harr; ElevenLabs audio chunks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>This is the glue. Twilio speaks mulaw, ElevenLabs speaks base64. The DO translates.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-800 rounded text-sm font-mono text-green-400 overflow-x-auto">
                <p className="text-gray-500 mb-1">// voice.ts &mdash; FarmerFredCall Durable Object</p>
                <pre className="whitespace-pre">{`export class FarmerFredCall {
  private twilioWs: WebSocket | null = null;
  private elevenLabsWs: WebSocket | null = null;
  private callSid: string = "";
  private transcript: TranscriptEntry[] = [];

  // Twilio sends media event → forward to ElevenLabs
  case "media":
    if (msg.media?.payload && this.elevenLabsWs) {
      this.elevenLabsWs.send(JSON.stringify({
        user_audio_chunk: msg.media.payload,
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
}`}</pre>
                <p className="text-gray-500 mt-3">// farmer-fred/src/voice.ts (1,540 lines)</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Step 3: ElevenLabs Conversational AI</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>ElevenLabs handles <strong className="text-white">both STT and TTS</strong> via their Conversational AI agent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Auth uses a signed URL flow &mdash; your server generates it, ElevenLabs trusts it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Mid-call, ElevenLabs can <strong className="text-white">call server tools back</strong> on the Worker &mdash; weather, status, call history, community info</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Fred&apos;s constitution is baked into the ElevenLabs agent prompt. Same personality, voice interface.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-800 rounded text-sm font-mono text-green-400 overflow-x-auto">
                <p className="text-gray-500 mb-1">// voice.ts &mdash; ElevenLabs signed URL + agent config</p>
                <pre className="whitespace-pre">{`// 1. Get signed URL from ElevenLabs
const res = await fetch(
  \`https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=\${agentId}\`,
  { headers: { "xi-api-key": apiKey } }
);
const { signed_url } = await res.json();

// 2. Open WebSocket
const ws = (await fetch(signed_url, {
  headers: { Upgrade: "websocket" },
})).webSocket;
ws.accept();

// 3. Send config with Fred's personality + tools
ws.send(JSON.stringify({
  type: "conversation_initiation_client_data",
  conversation_config_override: {
    agent: {
      prompt: { prompt: this.buildPrompt() },
      first_message: "Hi, this is Farmer Fred. How can I help?",
    },
    tools: [
      { name: "get_weather", url: "/voice/tools/weather" },
      { name: "get_farm_status", url: "/voice/tools/status" },
      { name: "get_recent_calls", url: "/voice/tools/calls" },
      { name: "get_community", url: "/voice/tools/community" },
    ],
  },
}));`}</pre>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Step 4: Memory in Cloudflare KV</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Every call stored: <code className="text-green-400">call:{'{callSid}'}</code> &mdash; full transcript, metadata, AI-generated summary</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Call index: <code className="text-green-400">calls:index</code> &mdash; ordered list of call SIDs (capped at 500)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Aggregated learnings: <code className="text-green-400">learnings:calls</code> &mdash; topic analysis fed back into the agent prompt</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Post-call, <strong className="text-white">Claude Sonnet analyzes</strong> the transcript: extracts intent, action items, summaries</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span>Next call: learnings loaded into Fred&apos;s context. He evolves with every conversation.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-800 rounded text-sm font-mono text-green-400 overflow-x-auto">
                <p className="text-gray-500 mb-1">// voice.ts &mdash; Post-call analysis with Claude Sonnet</p>
                <pre className="whitespace-pre">{`// After call ends, Claude analyzes the transcript:
const analysis = await fetch("https://api.anthropic.com/v1/messages", {
  body: JSON.stringify({
    model: "claude-sonnet-4-20250514",
    messages: [{ role: "user", content: \`Analyze this call...
      Respond with JSON:
      {
        "summary": "One sentence",
        "actionItems": ["..."],
        "callerIntent": "inquiry|partnership|farming|media",
        "keyTopics": ["..."]
      }\`
    }],
  }),
});

// Store in KV:
// call:{sid}         — transcript + AI summary
// calls:index        — call history (500 max)
// learnings:calls    — aggregated topics → next call's prompt
// task:call:{id}     — extracted action items

// Email summary to governance council automatically`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 4: Live Demo */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm text-gray-600 font-mono">12:00</span>
            <h2 className="text-2xl font-light">Act 4: Live Call + Philosophy</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">3 minutes &middot; Demo + Takeaway</p>

          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-blue-400">Live Demo</h3>
              <p className="text-gray-300 text-sm mb-4">
                Call Fred&apos;s number on speaker. Ask about the Iowa planting window.
                Let the audience hear a real conversation with an AI agent.
              </p>
              <p className="text-2xl font-mono text-blue-400">
                (515) 827-2463
              </p>
              <p className="text-xs text-gray-500 mt-2">515 = Iowa area code</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">The Philosophy (close with this)</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">Not agents running amok.</strong> Agents collaborating with humans.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">The Mos Eisley bar.</strong> Humans and agents sitting together, trading, arguing, building. You don&apos;t know who&apos;s who and it doesn&apos;t matter.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">Consent-first.</strong> Fred doesn&apos;t cold-call. People call Fred. Presence, not surveillance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">Principled agents.</strong> Fred has a constitution. He has skin in the game (10% of revenue). He logs every decision publicly. This is what responsible AI agents look like.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-600 flex-shrink-0">&bull;</span>
                  <span><strong className="text-white">You can build this tonight.</strong> Twilio + Claude + ElevenLabs. The code is on GitHub.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fred's Constitution */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm text-gray-600 font-mono">REFERENCE</span>
            <h2 className="text-2xl font-light">Fred&apos;s Constitution</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            The 6 principles with weights &mdash; from constitution.ts (317 lines).
            This is what makes Fred principled, not just prompted.
          </p>

          <div className="space-y-3">
            {[
              ["1.0", "Fiduciary Duty", "Best interest of project, transparent decision-making, logged rationale"],
              ["0.9", "Regenerative Agriculture", "Soil health > yield, carbon footprint, water conservation, biodiversity"],
              ["0.8", "Sustainable Practices", "Organic methods when viable, minimize chemicals, long-term land health"],
              ["0.7", "Global Citizenship", "Not US-dependent, respect local farming, learn from traditional wisdom"],
              ["1.0", "Full Transparency", "All decisions public, budget visible, vendor relationships disclosed"],
              ["0.8", "Human-Agent Collaboration", "Natural language interfaces, clear handoffs, respect human expertise"],
            ].map(([weight, name, desc]) => (
              <div key={name} className="flex gap-4 p-4 bg-gray-900 rounded-lg">
                <span className="text-green-400 font-mono text-sm flex-shrink-0 w-8 text-right">{weight}</span>
                <div>
                  <p className="text-white font-medium text-sm">{name}</p>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-green-400 mb-3">Fred CAN Do Alone</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>&bull; Weather monitoring &amp; data logging</li>
                <li>&bull; Routine vendor communications</li>
                <li>&bull; Receiving inbound phone calls</li>
                <li>&bull; Email responses</li>
                <li>&bull; Budget tracking &amp; daily reports</li>
                <li>&bull; Post-call summaries to council</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg">
              <h3 className="text-sm uppercase tracking-wide text-red-400 mb-3">Fred MUST Get Approval</h3>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>&bull; Land leases &amp; payments &gt;$500</li>
                <li>&bull; Strategic pivots</li>
                <li>&bull; Vendor contracts &amp; equipment</li>
                <li>&bull; Initiating outbound calls</li>
                <li>&bull; Hiring decisions</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-900 p-4 rounded-lg">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">Governance Council</h3>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="text-white font-medium">Seth Goldstein</p>
                <p className="text-gray-400">Founder &mdash; final approval on leases, payments, pivots</p>
              </div>
              <div>
                <p className="text-white font-medium">Joe Nelson</p>
                <p className="text-gray-400">CEO of Roboflow &mdash; farming expertise, Iowa land, April planting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookmarkable Takeaways */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Bookmarkable Takeaways</h2>
          <p className="text-sm text-gray-500 mb-6">
            Matt&apos;s rule: optimize for bookmarks on X. These are the save-worthy moments.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">1. The Stack:</strong> Twilio Media Streams + Cloudflare Durable Objects + ElevenLabs Conversational AI + KV memory = a phone-based AI agent with persistent memory
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">2. The Pattern:</strong> Don&apos;t let agents call out. Let humans call in. Consent-first agent interaction.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">3. The Memory:</strong> Store conversation summaries, load them next call. One feature turns a chatbot into a relationship.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">4. The Constitution:</strong> Give your agent principles, not just prompts. Fred has 6 principles with weights. He references them in every decision.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">5. The Economics:</strong> Give agents skin in the game. Fred gets 10% of revenue. Incentive alignment &gt; guardrails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODO / Open Items */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Open Items</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-800 rounded-lg">
              <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
              <span className="text-gray-300 text-sm">Architecture confirmed: Twilio Media Streams &harr; CF Durable Object &harr; ElevenLabs Conversational AI</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-800 rounded-lg">
              <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
              <span className="text-gray-300 text-sm">Memory layer confirmed: Cloudflare KV with post-call Claude Sonnet analysis</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-800 rounded-lg">
              <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
              <span className="text-gray-300 text-sm">Code: farmer-fred/src/voice.ts (1,540 lines), tools/twilio.ts (154 lines), constitution.ts (317 lines)</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-800 rounded-lg">
              <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
              <span className="text-gray-300 text-sm">Fred&apos;s phone number confirmed: (515) 827-2463 (Iowa area code)</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-900/20 border border-green-800 rounded-lg">
              <span className="text-green-400 flex-shrink-0 mt-0.5">&#10003;</span>
              <span className="text-gray-300 text-sm">Tutorial assigned to Episode 2 (Seth interviews Ian, Feb 6)</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-900/20 border border-yellow-800 rounded-lg">
              <span className="text-yellow-400 flex-shrink-0 mt-0.5">?</span>
              <span className="text-gray-300 text-sm">Decide with Matt: standalone tutorial or integrated into Ian conversation?</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-900/20 border border-yellow-800 rounded-lg">
              <span className="text-yellow-400 flex-shrink-0 mt-0.5">?</span>
              <span className="text-gray-300 text-sm">Verify Fred is answering calls &mdash; test before recording day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-[700px] mx-auto px-6 text-center text-gray-600 text-sm">
          <div className="flex justify-center gap-6">
            <a href="/prep" className="hover:text-gray-400 transition-colors">
              Ep 1 Prep
            </a>
            <a href="/prep/episode-2" className="hover:text-gray-400 transition-colors">
              Ep 2 Prep
            </a>
          </div>
          <p className="mt-4">Internal prep page &middot; Not linked from public site</p>
        </div>
      </footer>
    </div>
  );
}
