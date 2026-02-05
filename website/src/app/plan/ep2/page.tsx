import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ep 2 Plan: OpenClaw Setup Guide | Let's Vibe!",
  robots: "noindex, nofollow",
};

export default function Ep2Plan() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Episode 2 Tutorial Segment
          </p>
          <h1 className="text-4xl font-light">OpenClaw Setup Guide</h1>
          <p className="text-gray-400 mt-4">
            General advice for getting started &middot; ~15 min
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Unlisted page for Seth, Ian & Matt &middot; Not linked from public site
          </p>
        </div>
      </header>

      {/* Framing */}
      <section className="border-b border-gray-800 py-10">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-blue-900/30 border border-blue-700 p-6 rounded-lg">
            <h3 className="text-blue-300 font-medium mb-2">📝 Framing Note</h3>
            <p className="text-gray-300">
              This is NOT a step-by-step tutorial or a specific project walkthrough.
              This is a <strong>conversation</strong> about how to think about setting up
              an AI assistant that runs on your own machine.
            </p>
          </div>
        </div>
      </section>

      {/* The Questions */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">The Questions to Answer</h2>
          <p className="text-gray-400 mb-6">
            Ian&apos;s outline for the tutorial segment:
          </p>

          <div className="space-y-4">
            {/* Question 1 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">1. Do You Want to Do It?</h3>
                <span className="text-gray-500 text-sm font-mono">3 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">Why should you? Why shouldn&apos;t you?</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-900/20 p-4 rounded-lg">
                  <p className="text-green-400 text-sm font-medium mb-2">Why you might want OpenClaw:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; You want an AI that can DO things (not just chat)</li>
                    <li>&bull; You care about privacy — runs on your machine</li>
                    <li>&bull; You want to connect it to your real tools</li>
                    <li>&bull; You&apos;re curious about agentic AI</li>
                    <li>&bull; You build things and want a persistent collaborator</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg">
                  <p className="text-red-400 text-sm font-medium mb-2">Why you might NOT:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; You want something that &ldquo;just works&rdquo;</li>
                    <li>&bull; Not comfortable with command line</li>
                    <li>&bull; Don&apos;t want to think about security</li>
                    <li>&bull; ChatGPT/Claude.ai already does what you need</li>
                    <li>&bull; You want polished consumer UX</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">2. How Far Should You Go?</h3>
                <span className="text-gray-500 text-sm font-mono">3 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">Levels of commitment</p>

              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-yellow-400 text-sm font-medium">Level 1: Curious</p>
                  <p className="text-gray-400 text-sm">Run CLI locally. Talk to it in terminal. No channels, no integrations.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-yellow-400 text-sm font-medium">Level 2: Connected</p>
                  <p className="text-gray-400 text-sm">Connect one channel (Signal/Telegram). Message from your phone.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-yellow-400 text-sm font-medium">Level 3: Integrated</p>
                  <p className="text-gray-400 text-sm">Email, calendar, web browsing, file access. Real tasks. Think about security.</p>
                </div>
                <div className="bg-gray-800 p-3 rounded">
                  <p className="text-yellow-400 text-sm font-medium">Level 4: Autonomous</p>
                  <p className="text-gray-400 text-sm">Heartbeats, cron jobs, proactive actions. Most people shouldn&apos;t start here.</p>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">3. What Should You Turn Off and On?</h3>
                <span className="text-gray-500 text-sm font-mono">2 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">Security is about tradeoffs</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-red-400 text-sm font-medium mb-2">Start OFF:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; <code className="bg-gray-800 px-1 rounded text-xs">exec</code> — shell commands</li>
                    <li>&bull; <code className="bg-gray-800 px-1 rounded text-xs">browser</code> — web automation</li>
                    <li>&bull; Automatic email sending</li>
                    <li>&bull; Anything irreversible</li>
                  </ul>
                </div>
                <div>
                  <p className="text-green-400 text-sm font-medium mb-2">Safe to turn ON:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; Reading specific directories</li>
                    <li>&bull; Web search (Brave API)</li>
                    <li>&bull; Receiving messages (inbound)</li>
                    <li>&bull; Calendar read access</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/30 p-3 rounded mt-4">
                <p className="text-blue-300 text-sm">
                  <strong>Golden rule:</strong> If it can spend money, send messages to others, or delete data — require explicit approval.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">4. How Do You Do It?</h3>
                <span className="text-gray-500 text-sm font-mono">2 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">The actual setup (high level)</p>

              <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
                <li>Install via npm: <code className="bg-gray-800 px-1 rounded text-xs">npm install -g openclaw</code></li>
                <li>Run the onboarding wizard: <code className="bg-gray-800 px-1 rounded text-xs">openclaw onboard</code></li>
                <li>Set up your API key (Anthropic, OpenAI, etc.)</li>
                <li>Configure your workspace (SOUL.md, MEMORY.md)</li>
                <li>Optionally: add channels, skills, automations</li>
              </ol>

              <p className="text-gray-500 text-sm mt-4">
                Docs: <a href="https://docs.openclaw.ai" className="text-blue-400 hover:underline">docs.openclaw.ai</a>
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">5. What Are the Pitfalls?</h3>
                <span className="text-gray-500 text-sm font-mono">2 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">What trips people up</p>

              <div className="space-y-2">
                {[
                  ["Giving too much access too fast", "Start minimal. Add capabilities as you need them."],
                  ["Not setting up workspace properly", "SOUL.md, MEMORY.md — the agent needs context."],
                  ["Ignoring security implications", "It can read files and send messages. Treat it accordingly."],
                  ["Expecting it to 'just work'", "You'll configure, debug, and iterate."],
                  ["Server without understanding exposure", "Local first. Server later, if ever."],
                ].map(([problem, solution]) => (
                  <div key={problem} className="flex gap-3">
                    <span className="text-red-400">✗</span>
                    <div>
                      <span className="text-gray-300 text-sm">{problem}</span>
                      <span className="text-gray-500 text-sm"> — {solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 6 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">6. What Might You Try?</h3>
                <span className="text-gray-500 text-sm font-mono">1 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">Use cases that work well</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  ["Morning briefing", "Weather, calendar, email summary"],
                  ["Research assistant", "Web search + file reading"],
                  ["Writing companion", "Drafts, edits, feedback"],
                  ["Code helper", "Explain, debug, suggest"],
                  ["Memory keeper", "Notes, todos, context"],
                  ["Message triage", "Summarize, prioritize, draft"],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-gray-800 p-3 rounded">
                    <p className="text-teal-400 text-sm font-medium">{title}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Question 7 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">7. Why Is This Interesting?</h3>
                <span className="text-gray-500 text-sm font-mono">1 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">The bigger picture</p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>&bull; First time: AI that knows your context, runs local, takes real actions</li>
                <li>&bull; Your data stays local. Privacy by default.</li>
                <li>&bull; Persists — memory across sessions</li>
                <li>&bull; You control the capabilities</li>
                <li>&bull; Open source — see exactly what it does</li>
              </ul>
            </div>

            {/* Question 8 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-pink-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">8. Where Does This Go From Here?</h3>
                <span className="text-gray-500 text-sm font-mono">1 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-3">The future</p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>&bull; Agents that collaborate with each other</li>
                <li>&bull; Real economic activity (payments, contracts)</li>
                <li>&bull; Persistent memory that compounds over time</li>
                <li>&bull; Security infrastructure to trust them with more</li>
                <li>&bull; Leverage that used to require a team — available to everyone</li>
              </ul>

              <blockquote className="text-gray-500 text-sm italic mt-4 border-l-2 border-gray-700 pl-4">
                &ldquo;We&apos;re early. But the direction is clear.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Resources to Mention</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 font-medium">Documentation</p>
              <a href="https://docs.openclaw.ai" className="text-blue-400 text-sm hover:underline">docs.openclaw.ai</a>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 font-medium">GitHub</p>
              <a href="https://github.com/openclaw/openclaw" className="text-blue-400 text-sm hover:underline">github.com/openclaw/openclaw</a>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300 font-medium">Community</p>
              <a href="https://discord.gg/clawd" className="text-blue-400 text-sm hover:underline">discord.gg/clawd</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
