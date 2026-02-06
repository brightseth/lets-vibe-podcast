import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 2 Prep — Seth Interviews Ian | Let's Vibe!",
  description:
    "Recording prep for Episode 2. Seth interviews Ian Rogers about the Rick Rubin vibe coding story and his journey building.",
  openGraph: {
    title: "Episode 2: Seth Interviews Ian — Recording Prep",
    description:
      "The Rick vibe code story. The journey building. Plus: a practical OpenClaw tutorial.",
    url: "https://letsvibe.fm/prep/episode-2",
    siteName: "Let's Vibe!",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Episode 2: Seth Interviews Ian — Recording Prep",
    description:
      "The Rick vibe code story + OpenClaw tutorial. Let's Vibe! Episode 2.",
  },
};

export default function Episode2Prep() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 2 &middot; Recording Prep
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Seth Interviews Ian
          </h1>
          <p className="text-xl text-gray-400">
            Thursday Feb 6, 11am EST / 5pm CET &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Format: Interview (~45 min) + OpenClaw tutorial (~15 min)
          </p>
        </div>
      </section>

      {/* Ian's Framing Note */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">📝 Ian&apos;s Note on Framing</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; <strong>Go light on biography</strong> — refer people to the Rick Rubin interviews on Tetragrammaton or The Monty Report for the full arc</li>
            <li>&bull; <strong>Tell the Rick vibe code story</strong> — let Ian reference his interview with Rick because &ldquo;he says it best&rdquo;</li>
            <li>&bull; <strong>Focus on the journey building</strong> — Ian has analogies to add</li>
            <li>&bull; <strong>Skip Ledger Agent Intents</strong> — big pivot today, save for next week (will be cooler then)</li>
            <li>&bull; <strong>OpenClaw tutorial</strong> — general advice on setup, not a specific project walkthrough</li>
          </ul>
        </div>
      </section>

      {/* Opening */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Opening
            </span>
            <span className="text-[var(--muted)]">3 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Quick Context</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Seth sets the stage (brief!)</p>

          <div className="space-y-4">
            <p className="text-lg">
              Ian Rogers — Chief Experience Officer at Ledger. Before that: Topspin, Beats Music, Apple Music, LVMH.
            </p>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-800 text-sm">
                <strong>For the full story:</strong> Tetragrammaton (Rick Rubin) or The Monty Report.
                We&apos;re not doing the biography today.
              </p>
            </div>
            <div className="space-y-2 text-[var(--muted)]">
              <p>&bull; Where is Ian today? (Turin, Paris?)</p>
              <p>&bull; Quick Episode 1 callback — how did it land?</p>
              <p>&bull; What did you build this week?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Act 1: The Rick Story */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 1
            </span>
            <span className="text-[var(--muted)]">20 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Rick Vibe Code Story</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Seth asks: How did this start?</p>

          <div className="space-y-6">
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Key Reference</p>
              <p className="text-amber-800">
                Ian&apos;s interview with Rick on Tetragrammaton. Rick says it best.
                Let Ian tell it in his words, then point people to the full conversation.
              </p>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Rick Rubin &amp; &ldquo;The Way of Code&rdquo;</h3>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;You interviewed Rick Rubin about The Way of Code. How did that come about?&rdquo;</li>
                <li>&rarr; Does Rick actually code? What&apos;s his setup?</li>
                <li>&rarr; You said Rick texts you every day about vibe coding. What are those texts like?</li>
                <li>&rarr; What is Rick building?</li>
              </ul>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">The Pro Tools Parallel</h3>
              <p className="text-[var(--muted)] mb-3">
                Ian was actually there for Pro Tools. This is his analogy from Ep 1 — now go deeper.
              </p>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>&rarr; What does it feel like to see the same pattern twice?</li>
                <li>&rarr; Is this actually bigger than Pro Tools?</li>
                <li>&rarr; What&apos;s the same? What&apos;s different?</li>
              </ul>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">The BA in CS</h3>
              <p className="text-[var(--muted)] mb-3">
                Ian has a Bachelor of <em>Arts</em> in Computer Science. This degree doesn&apos;t exist anymore.
              </p>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>&rarr; What did that degree mean? Computers as creative tools.</li>
                <li>&rarr; We&apos;re coming back to that now with vibe coding.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2: The Journey Building */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 2
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Journey Building</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Seth asks: What have you built? What did you learn?</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">What Ian has shipped:</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; betteratliving.com — personal wellness apps</li>
                <li>&bull; letsvibe.fm — this podcast</li>
                <li>&bull; OpenClaw setup — his AI assistant</li>
                <li>&bull; Various experiments — learning in public</li>
              </ul>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions to explore:</h3>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li>&rarr; What surprised you most about building this way?</li>
                <li>&rarr; What&apos;s harder than expected? Easier?</li>
                <li>&rarr; How do you think about architecture when you&apos;re not writing code?</li>
                <li>&rarr; What does your daily practice look like?</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Ian&apos;s Analogies</p>
              <p className="text-amber-800">
                Ian has analogies from music, business, 30 years of building. Let them emerge.
                He&apos;ll add to whatever Seth sets up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Interview */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Closing
            </span>
            <span className="text-[var(--muted)]">5 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Big Picture</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Where does this go?</p>

          <div className="space-y-2 text-[var(--muted)]">
            <p>&rarr; Why is vibe coding interesting?</p>
            <p>&rarr; Who is this for?</p>
            <p>&rarr; What changes when everyone can build?</p>
            <p>&rarr; Where does this go from here?</p>
          </div>
        </div>
      </section>

      {/* Parking Lot */}
      <section className="border-b border-[var(--border)] bg-gray-100">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-gray-600 mb-4">🚫 Parked for Next Week</h3>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600 font-medium">Ledger Agent Intents / Hackathon Project</p>
            <p className="text-gray-500 text-sm mt-1">
              Big pivot today. Save for next week when the story is more complete.
            </p>
          </div>
        </div>
      </section>

      {/* Transition to Tutorial */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">After ~45 min</p>
          <h3 className="text-2xl font-light mb-4">→ Transition to OpenClaw Tutorial</h3>
          <p className="text-gray-400">
            General advice on setup — not a specific project walkthrough.
          </p>
          <p className="text-gray-500 mt-4">
            See: <a href="/plan/ep2" className="underline hover:text-white">/plan/ep2</a>
          </p>
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
              "Good lighting",
              "Join Riverside at 10:45am EST",
              "Breathe. This is a conversation between friends.",
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
