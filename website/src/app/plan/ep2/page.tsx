import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ep 2 Plan: Agents Propose, Humans Sign | Let's Vibe!",
  robots: "noindex, nofollow",
};

export default function Ep2Plan() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Episode 2 Planning
            </p>
            <a
              href="/plans/ep2-openclaw.md"
              download
              className="text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
            >
              Download .md
            </a>
          </div>
          <h1 className="text-4xl font-light">Agents Propose, Humans Sign</h1>
          <p className="text-gray-400 mt-4">
            OpenClaw + Ledger Agent Intents Tutorial &middot; Recording Wed Feb 5
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Unlisted page for Seth, Ian & Matt &middot; Not linked from public site
          </p>
        </div>
      </header>

      {/* Quick Context */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">The Pitch</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              &ldquo;Agents propose, humans sign with hardware.&rdquo;
            </p>
            <p className="text-gray-400">
              Ian is building <strong className="text-white">ledger-agent-intents</strong> for
              Circle&apos;s USDC OpenClaw Hackathon (deadline Feb 8). AI agents draft transaction
              intents, but only humans with a Ledger can approve them. It solves the fundamental
              problem: agents + private keys = disaster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg">
              <p className="text-blue-400 text-sm font-medium">Ian&apos;s Repo</p>
              <a
                href="https://github.com/fistfulayen/ledger-agent-intents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-white underline"
              >
                fistfulayen/ledger-agent-intents
              </a>
            </div>
            <div className="bg-purple-900/20 border border-purple-800 p-4 rounded-lg">
              <p className="text-purple-400 text-sm font-medium">Hackathon</p>
              <p className="text-gray-300 text-sm">Circle USDC on Moltbook</p>
              <p className="text-gray-500 text-xs">Deadline: Feb 8</p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-800 p-4 rounded-lg">
              <p className="text-yellow-400 text-sm font-medium">Name Drops</p>
              <p className="text-gray-300 text-sm">Tony Fadell (Fri walkthrough)</p>
              <p className="text-gray-300 text-sm">Alexandre Arnault (first prompt)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Episode Structure</h2>

          <div className="space-y-6">
            {/* Segment 1 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">1. The Opener</h3>
                <span className="text-gray-500 text-sm font-mono">5 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-2">&ldquo;The Agent Wallet Problem&rdquo;</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>&bull; Why agents + private keys = disaster</li>
                <li>&bull; OpenClaw context: 100K GitHub stars, CNBC, mainstream moment</li>
                <li>&bull; The malware angle: 386 malicious plugins found stealing crypto</li>
                <li>&bull; Thesis: we need a security model for agent spending</li>
              </ul>
            </div>

            {/* Segment 2 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">2. The Vibe Check</h3>
                <span className="text-gray-500 text-sm font-mono">15 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-2">Seth & Ian shoot the shit</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-blue-400 mb-2">Ian&apos;s week</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; Alexandre Arnault&apos;s first Claude Code prompt</li>
                    <li>&bull; Walking Tony Fadell through OpenClaw Friday</li>
                    <li>&bull; Deep in hackathon mode</li>
                    <li>&bull; &ldquo;Agents propose, humans sign with hardware&rdquo;</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-green-400 mb-2">Seth&apos;s week</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>&bull; Proof of Corn / Farmer Fred tutorial</li>
                    <li>&bull; Solienne&apos;s &ldquo;The Rented Gaze&rdquo; response</li>
                    <li>&bull; Paris hackathon idea (late March)</li>
                    <li>&bull; &ldquo;The use cases of ETH are exploding&rdquo;</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Segment 3 */}
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-medium">3. The Tutorial</h3>
                <span className="text-gray-500 text-sm font-mono">25 min</span>
              </div>
              <p className="text-gray-300 font-medium mb-4">
                &ldquo;Building ledger-agent-intents&rdquo; &mdash; Ian walks through the full stack
              </p>

              <pre className="bg-black/50 p-4 rounded text-sm text-gray-300 overflow-x-auto mb-4">
{`OpenClaw Agent  -->  submits intent via REST API
       |
Intent Queue Backend  -->  stores proposals, audit trail
       |
Ledger Signer  -->  human reviews on device, approves/rejects`}
              </pre>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-1">Live walkthrough:</p>
                  <ol className="text-gray-400 text-sm space-y-1 list-decimal list-inside">
                    <li>Setting up the OpenClaw CLI skill (<code className="bg-gray-800 px-1 rounded text-xs">ledger-intent</code>)</li>
                    <li>The intent service (Node.js REST API)</li>
                    <li>How intents get queued and displayed</li>
                    <li>Ledger Connect Kit + wagmi integration</li>
                    <li>ERC-7730 Clear Signing - human-readable tx display</li>
                    <li>Demo: &ldquo;Send 100 USDC for podcast editing&rdquo; via Ledger</li>
                    <li>The hackathon submission itself</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Key Concepts to Explain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Intent vs Transaction</p>
              <p className="text-gray-400 text-sm">
                An intent is a proposal. A transaction is the signed execution. Agents create
                intents; humans turn them into transactions.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Clear Signing (ERC-7730)</p>
              <p className="text-gray-400 text-sm">
                Instead of signing hex gibberish, you see &ldquo;Send 100 USDC to alice.eth for
                podcast editing.&rdquo; On the Ledger screen.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Audit Trail</p>
              <p className="text-gray-400 text-sm">
                Every agent proposal is logged. You can see who proposed what and when. Accountability
                for autonomous agents.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium mb-2">Agent Spending Limits</p>
              <p className="text-gray-400 text-sm">
                Configurable thresholds. Under $10? Auto-approve. Over $100? Require hardware
                signature. Suspicious? Block and alert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Use Cases to Mention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-purple-400">Agent-to-Agent Economy</p>
              <p className="text-gray-400 text-sm mt-1">
                Agents hiring agents, bounty systems, micropayments between bots
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-blue-400">Creator Payments</p>
              <p className="text-gray-400 text-sm mt-1">
                Podcast guest fees, commission AI artists, subscriptions
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-green-400">DeFi Operations</p>
              <p className="text-gray-400 text-sm mt-1">
                Yield optimization, dollar-cost averaging, limit orders
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="font-medium text-yellow-400">Business Ops</p>
              <p className="text-gray-400 text-sm mt-1">
                Contractor invoices, expense reimbursement, payroll
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Strategy */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Promo Strategy</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-28 flex-shrink-0">Today</span>
              <div>
                <p className="font-medium">Proof of Corn teaser</p>
                <p className="text-gray-400 text-sm">
                  Seth posts clip from @seth - bridges Ep1 tutorial energy into Ep2
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-28 flex-shrink-0">Tomorrow</span>
              <div>
                <p className="font-medium">Recording tease</p>
                <p className="text-gray-400 text-sm">
                  &ldquo;Recording Episode 2 tomorrow. Topic: what happens when AI agents need to
                  spend money?&rdquo;
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
              <span className="text-blue-400 font-mono text-sm w-28 flex-shrink-0">Wed evening</span>
              <div>
                <p className="font-medium text-blue-400">Post-recording drop</p>
                <p className="text-gray-400 text-sm">
                  Tutorial clip: Ian explaining &ldquo;agents propose, humans sign&rdquo; +
                  behind-the-scenes hackathon grind
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-28 flex-shrink-0">After Feb 8</span>
              <div>
                <p className="font-medium">Hackathon results</p>
                <p className="text-gray-400 text-sm">
                  Full episode release tied to hackathon submission/results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Tech Stack</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 text-gray-400 font-normal">Layer</th>
                  <th className="py-3 text-gray-400 font-normal">Tech</th>
                  <th className="py-3 text-gray-400 font-normal">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3">Frontend</td>
                  <td className="py-3">React + Vite</td>
                  <td className="py-3 text-gray-500">Intent review web app</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Wallet</td>
                  <td className="py-3">Ledger Connect Kit + wagmi</td>
                  <td className="py-3 text-gray-500">Hardware signing</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Clear Signing</td>
                  <td className="py-3">ERC-7730</td>
                  <td className="py-3 text-gray-500">Human-readable tx display</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Backend</td>
                  <td className="py-3">Node.js Intent Service</td>
                  <td className="py-3 text-gray-500">REST API, audit logs</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Agent</td>
                  <td className="py-3">OpenClaw CLI skill</td>
                  <td className="py-3 text-gray-500">ledger-intent command</td>
                </tr>
                <tr>
                  <td className="py-3">Deploy</td>
                  <td className="py-3">Vercel (Turborepo)</td>
                  <td className="py-3 text-gray-500">Monorepo structure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Open Questions */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Open Questions</h2>
          <div className="bg-yellow-900/20 border border-yellow-800 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>Does Ian want to screen-share the live coding?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>Do we submit the hackathon live on the episode?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>How much Ledger product detail vs. general concepts?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>Should we invite a Circle person for a quick segment?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>Episode title: &ldquo;Agents Propose, Humans Sign&rdquo; or something else?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">?</span>
                <span>Does Proof of Corn stay as a Vibe Check segment or get its own episode?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">Links & Resources</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/fistfulayen/ledger-agent-intents/blob/main/PROJECT.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Ian&apos;s repo: ledger-agent-intents
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
                href="https://www.solienne.ai/rented-gaze"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Solienne: The Rented Gaze
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Let&apos;s Vibe! Episode 2 Planning &middot; Unlisted</p>
          <p className="mt-2">
            <a href="/plans/ep2-openclaw.md" download className="underline hover:text-gray-300">
              Download editable .md file
            </a>
          </p>
          <p className="mt-2">Updated Feb 4, 2026</p>
        </div>
      </footer>
    </div>
  );
}
