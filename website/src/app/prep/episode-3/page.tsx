import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 3 Prep — Matt Medved: The Media Builder | Let's Vibe!",
  description:
    "Recording prep for Episode 3. Seth + Matt Medved cohost.",
};

export default function Episode3Prep() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 3 &middot; Recording Prep
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            The Media Builder
          </h1>
          <p className="text-xl text-gray-400">
            Tuesday Feb 25, 12:15pm MST &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Seth + Matt Medved cohost &middot; ~45 min conversational
          </p>
        </div>
      </section>

      {/* Framing */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">The Frame</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; This introduces Matt to the audience — he&apos;s our EP, but listeners don&apos;t know him yet</li>
            <li>&bull; <strong>Tone:</strong> Two partners riffing, not an interview. Collaborative energy.</li>
            <li>&bull; <strong>Reference Ian</strong> — he&apos;ll be back. This isn&apos;t a replacement.</li>
            <li>&bull; <strong>Don&apos;t discuss</strong> equity splits or financial terms on air</li>
            <li>&bull; <strong>Don&apos;t</strong> make it sound like an nft now ad — keep it about the ideas</li>
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
            <span className="text-[var(--muted)]">5 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Introduce Matt</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Seth sets the stage</p>

          <div className="space-y-4">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-lg leading-relaxed">
                &ldquo;We&apos;re three episodes in. Eps 1 and 2 were me and Ian. Today I&apos;m joined by Matt Medved — our Executive Producer and someone who&apos;s been on the front lines of every cultural wave in tech.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Ice Breaker</p>
              <p className="text-amber-800">
                &ldquo;You posted on X that vibe coding is the next frontier after Bitcoin, NFTs, and Polymarket. Walk me through that progression — why this moment?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act 1 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 1
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Matt&apos;s Origin Story</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Music journalist → nft now → vibe coding</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;Give us the 3-minute version of your journey to nft now.&rdquo;</li>
                <li>&rarr; &ldquo;When did you first touch Claude Code / vibe coding?&rdquo;</li>
                <li>&rarr; &ldquo;You built a Manus skill — what was that experience like as a non-engineer?&rdquo;</li>
                <li>&rarr; &ldquo;You&apos;ve covered every cultural movement in tech. How does AI compare to NFTs?&rdquo;</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Matt&apos;s Key Quote</p>
              <p className="text-amber-800 italic">
                &ldquo;When technical skills are no longer a barrier, everyone with vision becomes a builder.&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">From his Jan 22 X post (2,493 views, 53 comments)</p>
            </div>

            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Matt&apos;s Arc (for reference)</p>
              <p className="text-[var(--muted)] text-sm">
                Music journalist → Billboard → co-founded nft now (2021) → built premier web3 media platform → Art Basel Digital Art Council → now vibecoding with Claude Code
              </p>
            </div>
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
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Media Meets Building</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">When media companies can ship software</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;What happens when media companies can build software? nft now has 600K+ followers — what if that distribution also ships tools?&rdquo;</li>
                <li>&rarr; &ldquo;You&apos;ve been in rooms with Kutcher, Andreessen, Art Basel people. What are they saying about AI?&rdquo;</li>
                <li>&rarr; &ldquo;Your advice to us: optimize for bookmarks on X, tutorials as moat. Explain that strategy.&rdquo;</li>
                <li>&rarr; &ldquo;What&apos;s the sponsorship landscape for AI/creative content right now?&rdquo;</li>
              </ul>
            </div>

            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Talking Points</p>
              <ul className="space-y-1 text-[var(--muted)] text-xs">
                <li>&bull; Kutcher is actively vibecoding, built projects with AI</li>
                <li>&bull; Content + product convergence — media as distribution for software</li>
                <li>&bull; Bookmarks &gt; likes (signal of real value)</li>
                <li>&bull; Ship first, sponsors come to proven audiences</li>
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
            <span className="text-[var(--muted)]">10 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">What We&apos;re Building Together</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">The partnership and what&apos;s next</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;Why did you say yes to being EP of a podcast that didn&apos;t exist yet?&rdquo;</li>
                <li>&rarr; &ldquo;What are you personally building right now with AI?&rdquo;</li>
                <li>&rarr; &ldquo;Where is vibe coding in 12 months? Bold prediction.&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Closing &middot; 5 min</p>
          <h3 className="text-2xl font-light mb-4">Wrap Up</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>&rarr; Where can people find Matt? @mattmedved, nft now</p>
            <p>&rarr; Tease upcoming — &ldquo;Ian will be back, and we have great guests coming&rdquo;</p>
            <p>&rarr; Subscribe, rate, share. letsvibe.fm</p>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Matt&apos;s X Post (Jan 22)</p>
              <p className="text-[var(--muted)] text-xs">
                Bitcoin (2013) → NFTs (2020) → Polymarket (2024) → Vibe Coding (2026). 2,493 views, 53 comments.
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">nft now</p>
              <p className="text-[var(--muted)] text-xs">
                Premier web3 media platform. 600K+ followers. Award-winning. The Gateway events. NFT100 list.
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Art Basel</p>
              <p className="text-[var(--muted)] text-xs">
                Matt is on the Digital Art Council. Bridges art world + tech.
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">His Strategy</p>
              <p className="text-[var(--muted)] text-xs">
                Bookmarks &gt; likes. Tutorials = moat. Ship fast, don&apos;t wait for sponsors.
              </p>
            </div>
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
              "Good lighting",
              "Breathe. This is a conversation between partners.",
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
