import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ep 2 Plan: OpenClaw 101 | Let's Vibe!",
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
          <h1 className="text-4xl font-light">OpenClaw 101</h1>
          <p className="text-gray-400 mt-4">
            A practical guide to setting up OpenClaw &middot; ~15 min segment
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Unlisted page for Seth, Ian & Matt &middot; Not linked from public site
          </p>
        </div>
      </header>

      {/* Updated Feb 5 Note */}
      <section className="border-b border-gray-800 py-6 bg-yellow-900/10">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex items-start gap-3">
            <span className="text-yellow-400 text-lg">*</span>
            <div>
              <p className="text-yellow-200 font-medium">Updated per Ian&apos;s feedback (Feb 5)</p>
              <p className="text-gray-400 text-sm mt-1">
                Skipping Ledger intents for now &mdash; they pivoted today, will cover next week.
                This segment is now a general OpenClaw setup guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Questions to Answer */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">The Questions This Segment Answers</h2>
          <p className="text-gray-400 mb-8">
            Ian&apos;s framing: practical advice for people considering OpenClaw.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium text-blue-400">1. Do you want to do it?</p>
              <p className="text-gray-400 text-sm mt-2">
                Who is OpenClaw for? What&apos;s the pitch? Who should wait?
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-500">
              <p className="font-medium text-green-400">2. Why should you?</p>
              <p className="text-gray-400 text-sm mt-2">
                The benefits: local AI agents, MCP integrations, the ecosystem, shipping speed.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-red-500">
              <p className="font-medium text-red-400">3. Why shouldn&apos;t you?</p>
              <p className="text-gray-400 text-sm mt-2">
                The risks: 386 malicious plugins found, security model, when Claude Code is better.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="font-medium text-yellow-400">4. If you do, how far should you go?</p>
              <p className="text-gray-400 text-sm mt-2">
                Conservative setup vs. full power user. Where to start.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-purple-500">
              <p className="font-medium text-purple-400">5. What should you turn off and on?</p>
              <p className="text-gray-400 text-sm mt-2">
                Settings recommendations. Privacy toggles. Model choices.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-cyan-500">
              <p className="font-medium text-cyan-400">6. How do you do it?</p>
              <p className="text-gray-400 text-sm mt-2">
                Quick walkthrough: install, first run, key commands.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-orange-500">
              <p className="font-medium text-orange-400">7. What are the pitfalls?</p>
              <p className="text-gray-400 text-sm mt-2">
                Common mistakes, things that trip people up, what to watch for.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-pink-500">
              <p className="font-medium text-pink-400">8. What might you try?</p>
              <p className="text-gray-400 text-sm mt-2">
                First project ideas. Quick wins. What Seth + Ian have built.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-teal-500">
              <p className="font-medium text-teal-400">9. What are the use cases?</p>
              <p className="text-gray-400 text-sm mt-2">
                Where OpenClaw shines vs. other tools. The killer apps.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-indigo-500">
              <p className="font-medium text-indigo-400">10. Why is this interesting?</p>
              <p className="text-gray-400 text-sm mt-2">
                The bigger picture. Why this matters beyond productivity.
              </p>
            </div>

            <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-white">
              <p className="font-medium text-white">11. Where does this go from here?</p>
              <p className="text-gray-400 text-sm mt-2">
                The roadmap. What&apos;s coming. Where to follow along.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segment Flow */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Suggested Flow (~15 min)</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">Part 1: The Why</h3>
                <span className="text-gray-500 text-sm font-mono">3 min</span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>&bull; What is OpenClaw? (for people who missed the hype)</li>
                <li>&bull; Why it&apos;s having a moment (100K stars, CNBC coverage)</li>
                <li>&bull; Ian&apos;s personal journey with it</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">Part 2: The Decision</h3>
                <span className="text-gray-500 text-sm font-mono">4 min</span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>&bull; Should you vs. shouldn&apos;t you</li>
                <li>&bull; OpenClaw vs. Claude Code &mdash; when to use which</li>
                <li>&bull; The security considerations (386 malicious plugins)</li>
                <li>&bull; How far to go &mdash; conservative vs. power user</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">Part 3: The Setup</h3>
                <span className="text-gray-500 text-sm font-mono">4 min</span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>&bull; Quick install walkthrough</li>
                <li>&bull; Key settings to configure</li>
                <li>&bull; What to turn off for safety</li>
                <li>&bull; First run experience</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">Part 4: The Vision</h3>
                <span className="text-gray-500 text-sm font-mono">4 min</span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>&bull; Use cases that get us excited</li>
                <li>&bull; What Seth + Ian are building with it</li>
                <li>&bull; Where this goes from here</li>
                <li>&bull; Resources to follow along</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Key Points to Hit</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <p className="text-green-400 font-medium mb-2">Pro: Local-First</p>
              <p className="text-gray-400 text-sm">
                Runs on your machine. Your data stays local. No cloud dependency.
              </p>
            </div>
            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <p className="text-green-400 font-medium mb-2">Pro: MCP Ecosystem</p>
              <p className="text-gray-400 text-sm">
                Massive plugin ecosystem. Integrates with everything.
              </p>
            </div>
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg">
              <p className="text-red-400 font-medium mb-2">Con: Security Risks</p>
              <p className="text-gray-400 text-sm">
                386 malicious plugins found. Verify everything.
              </p>
            </div>
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg">
              <p className="text-red-400 font-medium mb-2">Con: Complexity</p>
              <p className="text-gray-400 text-sm">
                More setup required than Claude Code. Not for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analogies */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Analogies to Use</h2>
          <p className="text-gray-400 mb-6">Ian has plenty of these from his journey:</p>

          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-1">Pro Tools analogy</p>
              <p className="text-gray-400 text-sm">
                Ian was there for Pro Tools democratizing music production.
                Same pattern happening now with code.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-1">The BA in Computer Science</p>
              <p className="text-gray-400 text-sm">
                A degree that doesn&apos;t exist anymore predicted this moment &mdash;
                computers as creative tools, not just engineering tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Reference Links</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/OpenClaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                OpenClaw - Wikipedia
              </a>
            </li>
            <li>
              <a
                href="https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                CNBC: OpenClaw Rise & Controversy
              </a>
            </li>
            <li>
              <a
                href="https://www.opensourceforu.com/2026/02/ai-assistant-openclaw-hosts-hundreds-of-crypto-stealing-malicious-plugins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                ClawHub Malware Warning (386 malicious plugins)
              </a>
            </li>
            <li>
              <a
                href="https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Ian&apos;s blog: Reflections on a Claude Code New Year
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Coming Next Week */}
      <section className="border-t border-gray-800 py-12 bg-purple-900/10">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-4">Coming Next Week</h2>
          <p className="text-gray-400">
            Ledger agent intents &mdash; Ian&apos;s pivot today makes it even cooler.
            Save the &ldquo;Agents Propose, Humans Sign&rdquo; thesis for Episode 3.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Let&apos;s Vibe! Episode 2 Tutorial Planning &middot; Unlisted</p>
          <p className="mt-2">Updated Feb 5, 2026</p>
        </div>
      </footer>
    </div>
  );
}
