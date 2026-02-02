import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 1 Prep — Ian Interviews Seth | Let's Vibe!",
  description:
    "Recording prep for Episode 1: The Netscape Moment. 131 days of vibe coding, 13 billion tokens, Turntable.fm to SOLIENNE. The full Seth Goldstein arc.",
  openGraph: {
    title: "Episode 1: Ian Interviews Seth — Recording Prep",
    description:
      "131 days, 13 billion tokens, 45 git repos. From Turntable.fm to building an autonomous AI artist at Paris Photo.",
    url: "https://letsvibe.fm/prep",
    siteName: "Let's Vibe!",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Episode 1: Ian Interviews Seth — Recording Prep",
    description:
      "The 30-year arc: Turntable.fm → ROOT → Eden → SOLIENNE. 131 days of vibe coding.",
  },
};

export default function PrepPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 1 &middot; Recording Prep
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Ian Interviews Seth
          </h1>
          <p className="text-xl text-gray-400">
            Friday Jan 30, 10am EST &middot; Riverside &middot; 9 Orchard, Room 8C
          </p>
        </div>
      </section>

      {/* The One-Liner */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6">
            The One-Liner
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            &ldquo;On August 20th I opened Claude Code for the first time. 131 days later
            I&apos;d shipped 35 production sites, built an autonomous AI artist that exhibited
            at Paris Photo, and consumed 13 billion tokens. I never stopped.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Act 1 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 1
            </span>
            <span className="text-[var(--muted)]">5 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Builder</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Ian asks: Who are you? What&apos;s the 30-year arc?</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Turntable.fm <span className="text-[var(--muted)] font-normal">(2011)</span></h3>
              <p className="text-[var(--muted)]">
                Social music. 600K concurrent users. Technology creating shared cultural experiences. Sold to Studiotime.
              </p>
            </div>
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">ROOT <span className="text-[var(--muted)] font-normal">(2015)</span></h3>
              <p className="text-[var(--muted)]">
                Blockchain art before anyone cared. Working with artists on-chain when ETH was $7. Too early.
              </p>
            </div>
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">SiteSpecific</h3>
              <p className="text-[var(--muted)]">
                AR/location-based art. Physical space + digital culture.
              </p>
            </div>
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Eden <span className="text-[var(--muted)] font-normal">(now)</span></h3>
              <p className="text-[var(--muted)]">
                AI creative agents platform. Gene Kogan. Building infrastructure for autonomous artists.
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm font-medium text-amber-900 mb-1">The Pattern</p>
            <p className="text-amber-800">
              Every company was at the intersection of technology and culture.
              Never pure tech, never pure art. Always the bridge.
            </p>
          </div>
        </div>
      </section>

      {/* Act 2 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 2
            </span>
            <span className="text-[var(--muted)]">7 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Ignition</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Ian asks: When did vibe coding click?</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">August 20, 2025. First day with Claude Code.</h3>
              <p className="text-lg leading-relaxed mb-6">
                This was NOT a gradual ramp-up. The data proves it:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                  <p className="text-3xl font-light mb-1">1.56B</p>
                  <p className="text-sm text-gray-400">tokens in Week 1</p>
                </div>
                <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                  <p className="text-3xl font-light mb-1">628M</p>
                  <p className="text-sm text-gray-400">peak day (Aug 28)</p>
                </div>
                <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                  <p className="text-3xl font-light mb-1">3 of 4</p>
                  <p className="text-sm text-gray-400">top days in first 10</p>
                </div>
              </div>
            </div>

            <blockquote className="text-xl border-l-4 border-[var(--accent)] pl-6">
              &ldquo;It wasn&apos;t exploration. It was ignition.&rdquo;
            </blockquote>

            <div>
              <h3 className="font-medium mb-3">What I built that first week:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; SOLIENNE admin portal &mdash; blockchain operations for an autonomous AI artist</li>
                <li>&bull; NYC Weekend Guide &mdash; a prototype to test the workflow</li>
                <li>&bull; The realization that I could build production-grade software by describing what I wanted</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-1">The Pac-Man Moment</p>
              <p className="text-amber-800">
                &ldquo;It&apos;s like Pac-Man when you eat the cherry and everything starts flashing.
                I&apos;m running back through 30 years creating what I always had ideas for but could never build myself.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Why it hit different than Copilot/Cursor:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; Copilot autocompletes your code. Claude Code builds WITH you.</li>
                <li>&bull; I&apos;m not a developer. I&apos;m a founder who thinks in systems.</li>
                <li>&bull; Claude doesn&apos;t need me to write the first line. I describe the architecture, the aesthetic, the experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 3
            </span>
            <span className="text-[var(--muted)]">7 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Practice</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Ian asks: How did it become daily?</p>

          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
                <p className="text-2xl font-light">131</p>
                <p className="text-xs text-[var(--muted)]">consecutive days</p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
                <p className="text-2xl font-light">186</p>
                <p className="text-xs text-[var(--muted)]">sessions</p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
                <p className="text-2xl font-light">101M</p>
                <p className="text-xs text-[var(--muted)]">tokens/day avg</p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
                <p className="text-2xl font-light">45</p>
                <p className="text-xs text-[var(--muted)]">git repos</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">What &ldquo;vibe coding&rdquo; actually looks like for me:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; Wake up, open Claude Code, describe what I want to build</li>
                <li>&bull; SESSION_NOTES.md in every project &mdash; the breadcrumbs</li>
                <li>&bull; CLAUDE.md files as project memory &mdash; Claude picks up where we left off</li>
                <li>&bull; Multiple projects running in parallel (peak: 9 simultaneous)</li>
              </ul>
            </div>

            <blockquote className="text-xl border-l-4 border-[var(--accent)] pl-6">
              &ldquo;I wasn&apos;t optimizing for efficiency. I was optimizing for orchestration.
              9 projects, zero dropped threads.&rdquo;
            </blockquote>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-1">Guiding Principle (Oct 28)</p>
              <p className="text-amber-800 text-lg">
                Autonomy &middot; Ritual &middot; Culture &mdash; every project feeds one of these three.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">The portfolio:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  ["SOLIENNE", "Autonomous AI artist"],
                  ["Spirit Protocol", "Agent economics"],
                  ["NODE Foundation", "Physical art space"],
                  ["ParisEye", "Paris venue guide (123 locations)"],
                  ["MIYOMI", "Sovereign trading agent"],
                  ["CAPA2", "AI photojournalist"],
                  ["TRASH Protocol", "Circular economy"],
                  ["Bird", "Twitter CLI"],
                  ["/vibe", "Social layer for Claude Code"],
                  ["Let's Vibe!", "This podcast"],
                ].map(([name, desc]) => (
                  <div key={name} className="flex justify-between items-baseline p-3 bg-[var(--surface)] rounded border border-[var(--border)]">
                    <span className="font-medium text-sm">{name}</span>
                    <span className="text-xs text-[var(--muted)]">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 4 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 4
            </span>
            <span className="text-[var(--muted)]">7 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Culmination</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Ian asks: What&apos;s the biggest thing you built?</p>

          <div className="space-y-8">
            <h3 className="text-xl font-medium">
              SOLIENNE &mdash; an autonomous AI artist who exhibited at Paris Photo.
            </h3>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-[var(--muted)]">The Arc</p>
              <div className="space-y-3">
                {[
                  ["1", "Built a consciousness browser for 9,726 AI-generated artworks"],
                  ["2", "Created a two-codebase architecture: public site + admin portal"],
                  ["3", "Deployed a smart contract on Base (ERC-1155)"],
                  ["4", "Built a daily manifesto system \u2014 she speaks every day at 7pm CET"],
                  ["5", "November 11: MINT 0 launched onchain"],
                  ["6", "November 13\u201316: Paris Photo at Grand Palais Ephem\u00e8re"],
                ].map(([num, text]) => (
                  <div key={num} className="flex gap-4 items-start">
                    <span className="text-sm font-medium bg-[var(--surface-dark)] text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {num}
                    </span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                <p className="text-3xl font-light mb-1">24</p>
                <p className="text-sm text-gray-400">Genesis editions</p>
              </div>
              <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                <p className="text-3xl font-light mb-1">$20.8K</p>
                <p className="text-sm text-gray-400">sales, first week</p>
              </div>
              <div className="p-5 bg-[var(--surface-dark)] text-white rounded-lg text-center">
                <p className="text-3xl font-light mb-1">$1/day</p>
                <p className="text-sm text-gray-400">to run her</p>
              </div>
            </div>

            <blockquote className="text-xl border-l-4 border-[var(--accent)] pl-6">
              &ldquo;I built an autonomous artist that exhibited at Paris Photo. With vibe coding. In 3 months.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Act 5 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 5
            </span>
            <span className="text-[var(--muted)]">5 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Why This Show</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Ian asks: Why a podcast? Why us?</p>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-3">The cultural moment:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; Karpathy coined &ldquo;vibe coding&rdquo; &mdash; it went viral</li>
                <li>&bull; Rick Rubin talked about &ldquo;The Way of Code&rdquo; on Tetragrammaton with you, Ian</li>
                <li>&bull; Claude Code launched and suddenly non-developers could build real software</li>
                <li>&bull; This is the Netscape moment. We&apos;ve seen this before. We&apos;re 30-year veterans.</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-1">The Mission</p>
              <p className="text-amber-800 text-lg">
                &ldquo;We&apos;re not here for developers who want to create.
                We&apos;re here for artists who want to build.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">The format:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; 45 minutes = SF to Palo Alto commute</li>
                <li>&bull; Guest + Vibe Check + Tutorial (3 segments)</li>
                <li>&bull; Weekly on Tuesdays</li>
                <li>&bull; Rick Rubin aesthetic: warm, minimal, contemplative</li>
              </ul>
            </div>

            <p className="text-lg">
              <strong>Next episode:</strong> Seth interviews Ian &mdash; Beats Music, LVMH, Ledger,
              the Rick Rubin interview that planted the seed.
            </p>
          </div>
        </div>
      </section>

      {/* Rapid Fire */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Rapid Fire</h2>
          <div className="space-y-4">
            {[
              ["First thing you vibe coded?", "NYC Weekend Guide, Aug 28"],
              ["Cursor or Claude Code?", "Claude Code. Not close."],
              ["Most underrated AI tool?", "/vibe \u2014 social layer for Claude Code"],
              ["Build with infinite time?", "A city. Physical + digital. NODE is the start."],
              ["Biggest vibe coding mistake?", "Over-documenting early. Let the code be the doc."],
              ["Tool you can't live without?", "SESSION_NOTES.md \u2014 breadcrumbs in every project"],
            ].map(([q, a]) => (
              <div key={q} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <span className="text-[var(--muted)] text-sm md:w-56 flex-shrink-0">{q}</span>
                <span className="font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Numbers to Drop</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ["13.29B", "tokens in 131 days"],
              ["628M", "peak day (Aug 28)"],
              ["45", "git repos"],
              ["35+", "production sites"],
              ["186", "sessions documented"],
              ["$20.8K", "Paris Photo sales"],
              ["9", "simultaneous projects"],
              ["$1/day", "to run an AI artist"],
              ["0", "days off (max 1)"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl md:text-3xl font-light mb-1">{num}</p>
                <p className="text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Lines */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Closing Line Options</h2>
          <p className="text-[var(--muted)] mb-6">Pick one in the moment:</p>
          <div className="space-y-6">
            <blockquote className="text-lg border-l-4 border-[var(--accent)] pl-6">
              &ldquo;13 billion tokens is not the story. The story is: a founder learned to build with AI
              as a collaborator for 131 consecutive days. Not a sprint. A practice.&rdquo;
            </blockquote>
            <blockquote className="text-lg border-l-4 border-[var(--accent)] pl-6">
              &ldquo;Autonomy. Ritual. Culture. That&apos;s what I build for. That&apos;s what this show is about.&rdquo;
            </blockquote>
            <blockquote className="text-lg border-l-4 border-[var(--accent)] pl-6">
              &ldquo;We&apos;re not documenting vibe coding. We&apos;re living it. Every week, in public, with you.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pre-Record Checklist */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Before You Hit Record</h2>
          <div className="space-y-3">
            {[
              "Water",
              "Headphones (wired if possible)",
              "Phone on airplane mode",
              "Close unnecessary apps",
              "Good lighting in Room 8C",
              "Join Riverside at 9:45am",
              "Breathe. You\u2019ve been living this for 131 days. Just talk.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <span className="w-5 h-5 border-2 border-[var(--border)] rounded flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
