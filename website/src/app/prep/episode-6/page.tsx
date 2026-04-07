import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 6 Prep — Jalil Wahdatehagh | Let's Vibe!",
  description:
    "Recording prep for Episode 6. Seth hosts Jalil Wahdatehagh — the developer behind Visualize Value, VVriter, and the Permissionless Apprentice.",
};

export default function Episode6Prep() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 6 &middot; Recording Prep &middot; Apr 7, 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            The Permissionless Apprentice
          </h1>
          <p className="text-xl text-gray-400">
            Tuesday Apr 7 &middot; 3:00 PM CEST &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Seth hosts Jalil Wahdatehagh &middot; ~45 min conversational &middot; Ian TBD
          </p>
        </div>
      </section>

      {/* LEVI Intel — Fresh */}
      <section className="border-b border-[var(--border)] bg-green-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-green-900 mb-3">Fresh Intel (LEVI, Apr 7)</h3>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>&bull; <strong>Microsoft Agent Governance Toolkit</strong> (Apr 2-3) &mdash; open source, maps to OWASP agentic AI risks. Ask Jalil: what happens when an agent uses Jack&apos;s voice for something Jack wouldn&apos;t say?</li>
            <li>&bull; <strong>Anthropic third-party tool billing</strong> (Apr 4) &mdash; OpenClaw/agent frameworks now cost extra. VV uses Claude Code extensively. Live cost pressure on the exact workflow they pioneered.</li>
            <li>&bull; <strong>Art Basel HK just happened</strong> (Mar 27-29) &mdash; &ldquo;Work, Luck, Play&rdquo; with Asprey Studio. Fresh stories guaranteed. Botto showed at same fair &mdash; $6M+ lifetime, DAO-governed AI artist vs human-crafted onchain art.</li>
            <li>&bull; <strong>VVriter updated Mar 21</strong> &mdash; MCP server encoding Jack&apos;s voice from 50K tweets. jackbutcher.md has 334 GitHub stars. The philosophical weight: a human distilled into a markdown file.</li>
            <li>&bull; <strong>MINT protocol last commit Mar 30</strong> &mdash; Active development. Open-source infrastructure for permissionless creation on Ethereum.</li>
            <li>&bull; <strong>DM energy:</strong> Warm, enthusiastic, humble (&ldquo;you have such a calm vibe :)))&rdquo;). Met Seth briefly at NODE. Comfortable in podcast format (Vaulted, Mastermind.fm, How You Create).</li>
          </ul>
        </div>
      </section>

      {/* The Frame */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">The Frame</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; Jalil built <strong>everything</strong> behind Visualize Value &mdash; Checks, Opepen (87K+ ETH), Self Checkout ($114K), Gas Wars, MINT protocol, VVriter.</li>
            <li>&bull; He calls himself a &ldquo;gardener.&rdquo; Four failed startups. University dropout twice. His first VV project was literally called &ldquo;The Permissionless Apprentice.&rdquo;</li>
            <li>&bull; Now Jack Butcher is vibecoding with Claude Code and Jalil built an MCP server that lets AI write in Jack&apos;s voice. The builder/creator dynamic is inverting in real time.</li>
            <li>&bull; <strong>Tone:</strong> Two builders. Humble craft energy. The gardener metaphor is a thread you can pull throughout.</li>
          </ul>
        </div>
      </section>

      {/* Openers */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-12">
          <h3 className="font-medium mb-6">Openers &mdash; Pick Your Energy</h3>
          <div className="space-y-4">
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The Origin</p>
              <p className="text-amber-800 italic">
                &ldquo;You had four startups fail by the time you were 30. Your fourth collapsed after a nine-year partnership dissolved. Most people would have quit. You built The Permissionless Apprentice instead.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The Inversion</p>
              <p className="text-amber-800 italic">
                &ldquo;You&apos;ve been writing smart contracts from scratch for years. Jack just learned to vibe code with Claude. Does that make you more important or less important?&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The Philosophical</p>
              <p className="text-amber-800 italic">
                &ldquo;jackbutcher.md has 334 stars on GitHub. You distilled a human being into a markdown file so an AI can write in his voice. What does it mean to be a writing profile that an AI can invoke?&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The Fresh</p>
              <p className="text-amber-800 italic">
                &ldquo;Art Basel Hong Kong was ten days ago. Silver sculptures by Asprey Studio, dice coasters at Starbucks. Walk me through what you built.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 1 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 1
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Permissionless Apprentice</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Origin story &mdash; four failures, finding VV, building without asking</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; German, dropped out of university twice, married young, started a family.</li>
                <li>&rarr; Four startups &mdash; all failed. The fourth collapsed in 2020 after a 9-year partnership dissolved. He nearly quit entrepreneurship entirely.</li>
                <li>&rarr; Found Jack Butcher&apos;s Visualize Value courses. Went solo. Built PunkScape as a portfolio piece.</li>
                <li>&rarr; Called his first project &ldquo;The Permissionless Apprentice&rdquo; &mdash; he literally named the strategy.</li>
                <li>&rarr; When did the collaboration shift from &ldquo;fan who builds things&rdquo; to &ldquo;creative partner&rdquo;?</li>
                <li>&rarr; He calls himself a &ldquo;gardener.&rdquo; What does gardening mean when you&apos;re building smart contracts?</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Listen for</p>
              <p className="text-amber-800">
                The emotional weight of the 2020 failure. The &ldquo;truly, thank you client&rdquo; moment. Where apprenticeship becomes partnership. The vulnerability of a father of four who nearly gave up.
              </p>
              <p className="text-amber-600 text-xs mt-2">Seth connection: Permissionless apprenticeship IS the Spirit Protocol Genesis cohort ethos &mdash; earning trust through contribution, not credentials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 2
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Jack Is Vibecoding &mdash; And You Built VVriter</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">When the non-technical partner learns to ship &mdash; and the AI learns to speak</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; Jack&apos;s &ldquo;Vibe Meta&rdquo; Substack (Jan 2026): &ldquo;I&apos;ve been down the Claude Code rabbit hole&hellip; transitioning from technically illiterate to technically illiterate but with an infinitely patient teacher.&rdquo;</li>
                <li>&rarr; Pattern (pattern.vv.xyz) &mdash; Jack&apos;s first vibecoded product. Did Jalil look at the code? What did he think?</li>
                <li>&rarr; <strong>VVriter:</strong> MCP server packaging 50K tweets + 400 visuals + writing profile. <code>npx vvriter</code> to install. AI identifies idea clusters, generates articles in Jack&apos;s voice.</li>
                <li>&rarr; Their philosophical position: &ldquo;AI will write about our ideas regardless. Rather than cede control, we encoded our source material.&rdquo;</li>
                <li>&rarr; jackbutcher.md &mdash; 334 GitHub stars. A human being as a markdown file. What does authorship mean now?</li>
                <li>&rarr; Is there a version of VV where Jack doesn&apos;t need a developer anymore?</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The governance question (LEVI angle)</p>
              <p className="text-amber-800 italic text-lg">
                &ldquo;VVriter lets AI agents write in Jack&apos;s voice &mdash; with consent. Microsoft just open-sourced an Agent Governance Toolkit. What happens when an agent uses Jack&apos;s voice for something Jack wouldn&apos;t say?&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">Seth connection: VVriter is authorship governance. Spirit Protocol is agent governance. Same problem, different layers.</p>
            </div>

            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-3">The Dynamic Shift</p>
              <div className="grid grid-cols-2 gap-4 text-xs text-[var(--muted)]">
                <div>
                  <p className="font-medium text-[var(--foreground)] mb-1">Before Vibecoding</p>
                  <ul className="space-y-1">
                    <li>&bull; Jack: vision, brand, content</li>
                    <li>&bull; Jalil: every line of code</li>
                    <li>&bull; Clear division of labor</li>
                    <li>&bull; Builder = bottleneck = leverage</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)] mb-1">After Vibecoding</p>
                  <ul className="space-y-1">
                    <li>&bull; Jack ships Pattern himself</li>
                    <li>&bull; Jalil builds infrastructure AI can&apos;t</li>
                    <li>&bull; The distinction: &ldquo;can ship&rdquo; vs &ldquo;can architect&rdquo;</li>
                    <li>&bull; Builder = force multiplier</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 3 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 3
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Onchain Art Meets the Physical World</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Art Basel, Self Checkout, MINT, and building things that outlast you</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; <strong>Art Basel HK &ldquo;Work, Luck, Play&rdquo;</strong> &mdash; Asprey Studio silver hand sculptures, predetermined dice sets, participatory installation with Starbucks. What did Jalil build?</li>
                <li>&rarr; <strong>Self Checkout</strong> (Art Basel Miami) &mdash; pay-what-you-want kiosk, $114K. He built the software AND the hardware.</li>
                <li>&rarr; <strong>Checks Elements at Christie&apos;s</strong> &mdash; onchain SVG mapped to physical lithographic prints on a vintage Mailander 202 press.</li>
                <li>&rarr; <strong>Botto at the same Art Basel</strong> &mdash; DAO-governed AI artist, $6M+ lifetime, 28K member DAO. Two radically different visions of art + AI at the same fair.</li>
                <li>&rarr; <strong>MINT protocol open source</strong> &mdash; why give away infrastructure? VV open-sources nearly everything.</li>
                <li>&rarr; <strong>The Infinity Checks exploit</strong> &mdash; Jalil and Jack took full responsibility and refunded everyone. What was that moment like?</li>
                <li>&rarr; He blogs about digital inheritance and civilization. What does it mean to build things onchain that outlast you?</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Closing question</p>
              <p className="text-amber-800 italic">
                &ldquo;You call yourself a gardener. You&apos;ve planted Checks, Opepen, MINT, VVriter. Which one are you most watching to see what it becomes?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Jalil&apos;s Arc</p>
              <p className="text-[var(--muted)] text-xs">
                South of Munich &rarr; university dropout (twice) &rarr; 4 failed startups &rarr; 9-year partnership dissolves (2020) &rarr; VV courses &rarr; PunkScape (2021) &rarr; Checks &amp; Opepen (Jan 2023) &rarr; Checks Elements at Christie&apos;s &rarr; Gas Wars on Art Blocks (Sep 2025) &rarr; Self Checkout at Miami ($114K, Dec 2025) &rarr; VVriter &amp; MINT (Mar 2026) &rarr; Art Basel HK (Mar 2026)
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Key Numbers</p>
              <p className="text-[var(--muted)] text-xs">
                87K+ ETH traded (Opepen) &middot; $114K from pay-what-you-want kiosk &middot; 334 GitHub stars (jackbutcher.md) &middot; 50K tweets encoded &middot; 61 repos &middot; 653 stars (personal GH) &middot; 4 failed startups &middot; 4 children &middot; VV Token $10M+ market cap in 2 hours
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Personal</p>
              <p className="text-[var(--muted)] text-xs">
                German, based south of Munich &middot; Father of four &middot; Runs 1001.digital UG &middot; Calls himself a &ldquo;gardener&rdquo; &middot; Met Seth at NODE &middot; Same timezone (CEST) &middot; Warm, humble energy
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Handles &amp; Links</p>
              <p className="text-[var(--muted)] text-xs">
                X: @jalilwahdat &middot; Warpcast: @jalil &middot; Email: jalil@vv.xyz &middot; GitHub: jwahdatehagh &middot; VV org: github.com/visualizevalue &middot; opepen.art &middot; pattern.vv.xyz &middot; docs.mint.vv.xyz &middot; 1001.digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Overlay */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">News Connections</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-1">Rogue AI Agents (Meta)</p>
              <p className="text-[var(--muted)] text-xs">VVriter gives AI agents access to a human voice &mdash; with consent and structure. The anti-rogue model.</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-1">Microsoft Agent Governance Toolkit</p>
              <p className="text-[var(--muted)] text-xs">Open-sourced Apr 2-3. Maps to OWASP agentic AI risks. Direct bridge to VVriter governance questions.</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-1">Botto at Art Basel HK</p>
              <p className="text-[var(--muted)] text-xs">DAO-governed AI vs human-crafted onchain art. Showed at the SAME fair. Two visions, one conversation.</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-1">Anthropic Third-Party Tool Billing</p>
              <p className="text-[var(--muted)] text-xs">Apr 4. VV uses Claude Code extensively for VVriter. Live cost pressure on the workflow they pioneered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Format</p>
          <p className="text-gray-300 text-sm mb-2">
            45 min &middot; Riverside &middot; Video + Audio &middot; Remote
          </p>
          <p className="text-gray-500 text-sm">
            Two builders. Gardener energy. The &ldquo;gardener&rdquo; metaphor is a thread you can pull throughout the entire conversation.
          </p>
        </div>
      </section>
    </div>
  );
}
