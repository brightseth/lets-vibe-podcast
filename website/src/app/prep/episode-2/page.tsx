import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 2 Prep — Seth Interviews Ian | Let's Vibe!",
  description:
    "Recording prep for Episode 2. Seth interviews Ian Rogers about Beats Music, LVMH, Ledger, Rick Rubin's daily vibe coding texts, and the return to building.",
  openGraph: {
    title: "Episode 2: Seth Interviews Ian — Recording Prep",
    description:
      "Beats Music, LVMH, Ledger, Rick Rubin texts, and the vibe coding awakening. Full interview structure + bookmarkable moments.",
    url: "https://letsvibe.fm/prep/episode-2",
    siteName: "Let's Vibe!",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Episode 2: Seth Interviews Ian — Recording Prep",
    description:
      "Beats Music → Apple Music → LVMH → Ledger → vibe coding. The full Ian Rogers arc.",
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
            Wednesday Feb 5, 11am EST / 5pm CET &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Internal prep &middot; Seth + Matt review
          </p>
        </div>
      </section>

      {/* The One-Liner */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6">
            The Pitch
          </p>
          <blockquote className="text-xl md:text-2xl leading-relaxed">
            &ldquo;Rick Rubin texts Ian every day about vibe coding. Ian was there for Pro Tools.
            He has the analogies. Let&apos;s hear the story he tells best &mdash; and give people
            advice on getting started with OpenClaw.&rdquo;
          </blockquote>
          <p className="text-[var(--muted)] mt-6">
            <strong>Note:</strong> Go light on Ian&apos;s full bio arc &mdash; refer people to the{' '}
            <a href="https://www.tetragrammaton.com/ian-rogers" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--foreground)]">
              Rick Rubin interviews on Tetragrammaton
            </a>{' '}
            and The Monty Report for the long version. Focus on the Rick vibe code story, his journey building, and his analogies.
          </p>
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
          <h2 className="text-3xl font-light mb-2">Turn the Tables</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Set up the role reversal</p>

          <div className="space-y-6">
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-1">Opening Line</p>
              <p className="text-amber-800">
                &ldquo;Last week you interviewed me about my 30-year journey.
                This week I get to interview you about yours. And honestly,
                your story might be more interesting.&rdquo;
              </p>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Beats</h3>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>&bull; Quick recap of Episode 1 response &mdash; how did it land?</li>
                <li>&bull; Where is Ian? (Turin, Paris, somewhere new?)</li>
                <li>&bull; What did you build this week?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Act 1: Rick Rubin + Building */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 1
            </span>
            <span className="text-[var(--muted)]">20 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Rick Story + Analogies</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">What Rick says best, Ian&apos;s journey building</p>

          <div className="p-5 bg-amber-50 rounded-lg border border-amber-200 mb-6">
            <p className="text-sm font-medium text-amber-900 mb-1">Ian&apos;s Note</p>
            <p className="text-amber-800 text-sm">
              &ldquo;Let&apos;s refer people to the Rick Rubin interviews or The Monty Report
              if they want the long version. Let&apos;s tell the Rick vibe code story
              (also I&apos;ll refer to my interview with him because he says it best)
              and my journey building.&rdquo;
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">The Rick Rubin Vibe Code Story</h3>
              <p className="text-[var(--muted)] mb-3">
                Ian interviewed Rick on Tetragrammaton about &ldquo;The Way of Code.&rdquo;
                Rick texts Ian every day about vibe coding.
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; How did the Tetragrammaton interview come about?</p>
                <p>&rarr; What does Rick say that he says best? (Ian will refer to the interview)</p>
                <p>&rarr; What are the daily texts like?</p>
                <p>&rarr; What is Rick actually building?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Ian&apos;s Journey Building</h3>
              <p className="text-[var(--muted)] mb-3">
                A CS degree holder who spent decades as an executive, now coding again.
                What changed?
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; The Claude Code New Year (RSVP systems, art gallery, music projects)</p>
                <p>&rarr; First music project since leaving Apple Music 10+ years ago</p>
                <p>&rarr; &ldquo;Minimal keyboard time&rdquo; &mdash; walks to conceptualize, then brief prompt sessions</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">The Analogies</h3>
              <p className="text-[var(--muted)] mb-3">
                Ian has plenty of these from his journey. Let them flow naturally.
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; <strong>Pro Tools parallel</strong> &mdash; Ian was actually there for that revolution</p>
                <p>&rarr; <strong>BA in Computer Science</strong> &mdash; a degree that doesn&apos;t exist anymore predicted this</p>
                <p>&rarr; The &ldquo;future is here, not evenly distributed&rdquo; distribution angle</p>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-900 mb-1">For the Full Arc</p>
              <p className="text-blue-800 text-sm">
                Topspin → Beats Music → Apple → LVMH → Ledger &mdash; refer listeners to:{' '}
                <a href="https://www.tetragrammaton.com/ian-rogers" target="_blank" rel="noopener noreferrer" className="underline">
                  Tetragrammaton interviews
                </a>{' '}
                and The Monty Report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2: Beats + LVMH */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 2
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Music Industry Arc</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Beats Music, Apple, LVMH, Ledger</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Beats Music &rarr; Apple Music</h3>
              <p className="text-[var(--muted)] mb-3">
                &ldquo;How do you end up building a music service with Jimmy Iovine and Dr. Dre?&rdquo;
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; What was the pitch? What problem were you solving?</p>
                <p>&rarr; What was working with Jimmy like day to day?</p>
                <p>&rarr; The Apple acquisition &mdash; did you see it coming?</p>
                <p>&rarr; What was Apple like from the inside?</p>
                <p>&rarr; Why did you leave?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">LVMH &mdash; Chief Digital Officer</h3>
              <p className="text-[var(--muted)] mb-3">
                &ldquo;You went from Apple to become CDO of LVMH. That&apos;s Dior, Louis Vuitton,
                Sephora, Hennessy. What does digital transformation look like at that scale?&rdquo;
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; What surprised you about luxury?</p>
                <p>&rarr; What did tech people get wrong about luxury?</p>
                <p>&rarr; What did luxury people get wrong about tech?</p>
                <p>&rarr; Best project you shipped?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Ledger &mdash; Why Crypto After Luxury</h3>
              <p className="text-[var(--muted)] mb-3">
                &ldquo;You left the biggest luxury company in the world for a hardware wallet company. Why?&rdquo;
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; What did you see in crypto that others didn&apos;t?</p>
                <p>&rarr; Davos/DLD circuit &mdash; what&apos;s the AI + crypto conversation now?</p>
                <p>&rarr; &ldquo;The future is here, not evenly distributed &mdash; our job is to distribute it&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3: Vibe Coding */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 3
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Vibe Coding Awakening</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Rick Rubin, Claude Code, the return to building</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Rick Rubin &amp; Tetragrammaton</h3>
              <p className="text-[var(--muted)] mb-3">
                &ldquo;You interviewed Rick Rubin on Tetragrammaton about &lsquo;The Way of Code.&rsquo;
                How did that come about?&rdquo;
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; Does Rick actually code? What&apos;s his setup?</p>
                <p>&rarr; You said Rick texts you every day about vibe coding. What are those texts like?</p>
                <p>&rarr; What is Rick building?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-1">Claude Code New Year</h3>
              <p className="text-[var(--muted)] mb-3">
                Reference his blog post: RSVP system, art gallery, music projects &mdash; all over the holidays.
              </p>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; Claude 4.0 &rarr; 4.5 changed his rating from 2/5 to 3/5. What shifted?</p>
                <p>&rarr; &ldquo;Minimal keyboard time&rdquo; &mdash; walks to conceptualize, then brief prompt sessions</p>
                <p>&rarr; Wanted to set up a VPS to code while hiking. Did you do it?</p>
                <p>&rarr; First music project since leaving Apple Music 10+ years ago. What was that like?</p>
              </div>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-1">The Pro Tools Parallel (Go Deeper)</p>
              <p className="text-amber-800">
                Ian made this analogy in Ep 1 &mdash; he was actually there for the Pro Tools revolution.
                What&apos;s different this time? Is this bigger than Pro Tools was for music?
              </p>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Key Quotes from His Blog</h3>
              <div className="space-y-3">
                <blockquote className="text-[var(--muted)] border-l-2 border-[var(--border)] pl-4 italic">
                  &ldquo;What&apos;s astounding is how much I accomplished in such little time actually spent at the keyboard.&rdquo;
                </blockquote>
                <blockquote className="text-[var(--muted)] border-l-2 border-[var(--border)] pl-4 italic">
                  &ldquo;You needn&apos;t have funding to build a prototype and show demand.&rdquo;
                </blockquote>
                <p className="text-sm text-[var(--muted)]">
                  On engineers becoming &ldquo;manager of an army of coders&rdquo; and &ldquo;pipeline optimizer&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Closing
            </span>
            <span className="text-[var(--muted)]">5&ndash;10 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Big Picture + Practical</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Future vision, tips, tease Episode 3</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">The Future</h3>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; Tony Hawk analogy &mdash; building skate parks in underserved areas. Is that what Let&apos;s Vibe! is?</p>
                <p>&rarr; What does the world look like in 5 years?</p>
                <p>&rarr; What&apos;s the thing you most want to build but haven&apos;t yet?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Practical Tips</h3>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; Someone&apos;s never opened a terminal. What do they do Monday morning?</p>
                <p>&rarr; One tool recommendation beyond Claude Code?</p>
                <p>&rarr; One person to follow?</p>
              </div>
            </div>

            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Wrap</h3>
              <div className="space-y-2 text-[var(--muted)] text-sm">
                <p>&rarr; What are you building this week?</p>
                <p>&rarr; Tease Episode 3: tez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Threads */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Threads to Pull</h2>
          <p className="text-gray-400 mb-8">
            These are the deeper stories. If the conversation goes flat, pull one of these.
          </p>

          <div className="space-y-6">
            <div className="p-5 bg-white/5 rounded-lg">
              <h3 className="text-lg font-medium mb-2">1. The BA in CS</h3>
              <p className="text-gray-400 text-sm">
                This degree doesn&apos;t exist anymore. But it captured something true:
                computers are creative tools. We&apos;re coming back to that with vibe coding.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-lg">
              <h3 className="text-lg font-medium mb-2">2. The Pro Tools Parallel</h3>
              <p className="text-gray-400 text-sm">
                Ian was actually there for Pro Tools. Go deeper: what does it feel like
                to see the same pattern twice? Is this actually bigger?
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-lg">
              <h3 className="text-lg font-medium mb-2">3. Rick Rubin Texts</h3>
              <p className="text-gray-400 text-sm">
                Ian mentioned Rick texts him every day about vibe coding. What are those
                conversations like? What is Rick building? This is podcast gold.
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-lg">
              <h3 className="text-lg font-medium mb-2">4. The Davos/DLD Moment</h3>
              <p className="text-gray-400 text-sm">
                Between DLD and Davos, met with Trudeau, Katy Perry, family offices.
                His insight: &ldquo;The future is here, not evenly distributed &mdash;
                our job is to distribute it.&rdquo;
              </p>
            </div>

            <div className="p-5 bg-white/5 rounded-lg">
              <h3 className="text-lg font-medium mb-2">5. From Consumer to Builder</h3>
              <p className="text-gray-400 text-sm">
                A CS degree holder who spent decades as an executive, now coding again
                for the first time in years. What changed?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode 1 Callbacks */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Episode 1 Callbacks</h2>
          <p className="text-[var(--muted)] mb-6">
            Reference these naturally &mdash; creates continuity for listeners.
          </p>

          <div className="space-y-3">
            {[
              ["Pro Tools parallel", "Ian brought it up in Ep 1 — now go deeper since he was actually there"],
              ["Bachelor of Arts in CS", "Mentioned in passing — this is a full segment now"],
              ["Rick texts me every day", "A throwaway line in Ep 1 that deserves 5 minutes"],
              ["Oliver Sacks / Rachmaninoff", "Seth's analogy — reference it, see if Ian has his own"],
              ["The Netscape moment", "Ep 1 framing — does Ian feel it the same way?"],
            ].map(([topic, note]) => (
              <div key={topic} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <span className="font-medium text-sm md:w-48 flex-shrink-0">{topic}</span>
                <span className="text-sm text-[var(--muted)]">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Segment */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Tutorial Segment: OpenClaw 101</h2>

          <div className="p-5 bg-green-50 rounded-lg border border-green-200 mb-6">
            <h3 className="text-lg font-medium text-green-900 mb-2">Confirmed: General OpenClaw Setup Guide</h3>
            <p className="text-green-800 text-sm mb-3">
              Ian&apos;s framing: practical advice on setting up OpenClaw.
              Full plan at <a href="/plan/ep2" className="underline">/plan/ep2</a>.
            </p>
            <p className="text-green-700 text-sm">
              <strong>Not</strong> the Ledger intents stuff &mdash; they pivoted today, save that for next week.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions to Answer (~15 min)</h3>
              <ul className="text-[var(--muted)] text-sm space-y-2">
                <li>&bull; Do you want to do it? Why should you? Why shouldn&apos;t you?</li>
                <li>&bull; If you do, how far should you go?</li>
                <li>&bull; What should you turn off and on?</li>
                <li>&bull; How do you do it?</li>
                <li>&bull; What are the pitfalls?</li>
                <li>&bull; If you do, what might you try?</li>
                <li>&bull; What are the use cases?</li>
                <li>&bull; Why is this interesting?</li>
                <li>&bull; Where does this go from here?</li>
              </ul>
            </div>

            <div className="p-5 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="text-lg font-medium text-purple-900 mb-2">Coming Next Week</h3>
              <p className="text-purple-800 text-sm">
                Ledger agent intents &mdash; &ldquo;Agents Propose, Humans Sign.&rdquo;
                Ian&apos;s pivot today makes it even cooler. Save for Ep 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ian Research */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Ian Rogers &mdash; Quick Reference</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Current</p>
              <p className="font-medium">CXO, Ledger</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Previous</p>
              <p className="font-medium">CDO, LVMH</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Previous</p>
              <p className="font-medium">Beats Music &rarr; Apple Music</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Founded</p>
              <p className="font-medium">Topspin Media (~2007)</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Education</p>
              <p className="font-medium">BA in Computer Science</p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm text-[var(--muted)] mb-1">Based in</p>
              <p className="font-medium">Paris</p>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="https://x.com/iancr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors"
            >
              <span className="font-medium text-sm">X / Twitter</span>
              <span className="text-sm text-[var(--muted)]">@iancr</span>
            </a>
            <a
              href="https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors"
            >
              <span className="font-medium text-sm">Blog Post</span>
              <span className="text-sm text-[var(--muted)]">Reflections on a Claude Code New Year</span>
            </a>
            <a
              href="https://fistfulayen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors"
            >
              <span className="font-medium text-sm">Blog</span>
              <span className="text-sm text-[var(--muted)]">FISTFULAYEN</span>
            </a>
          </div>
        </div>
      </section>

      {/* Production Notes */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Production Notes</h2>

          <div className="space-y-3">
            {[
              "Invite Ian to Riverside session: fistfulayen@gmail.com",
              "Good mic + quiet space",
              "Have Episode 1 links ready to reference",
              "Prep 2-3 conversation starters in case the flow stalls",
              "Matt's rule: optimize for bookmarks on X \u2014 what are the save-worthy moments?",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <span className="w-5 h-5 border-2 border-[var(--border)] rounded flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookmarkable Moments */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-4">Bookmarkable Moments</h2>
          <p className="text-gray-400 mb-8">
            Matt&apos;s rule: optimize for bookmarks on X. These are the moments people will save and share.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white/5 rounded-lg">
              <p className="text-lg text-gray-300">
                <strong className="text-white">1. The BA in CS:</strong> A degree that doesn&apos;t exist anymore
                predicted the future of computing &mdash; creativity first, code second.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-lg">
              <p className="text-lg text-gray-300">
                <strong className="text-white">2. Pro Tools x2:</strong> Ian was there for Pro Tools democratizing music.
                Now he&apos;s watching the same thing happen to all software. What&apos;s the pattern?
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-lg">
              <p className="text-lg text-gray-300">
                <strong className="text-white">3. Rick Rubin&apos;s texts:</strong> The greatest music producer alive
                is texting about vibe coding every day. What does that tell you?
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-lg">
              <p className="text-lg text-gray-300">
                <strong className="text-white">4. The Pitch Deck Era is Over:</strong> &ldquo;You needn&apos;t
                have funding to build a prototype and show demand.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-lg">
              <p className="text-lg text-gray-300">
                <strong className="text-white">5. Distributing the Future:</strong> Like Tony Hawk building
                skate parks &mdash; take these superpowers to the people who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Note */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm font-medium text-amber-900 mb-2">Coaching Note</p>
            <p className="text-amber-800 leading-relaxed">
              Use this as a guide, not a script. Let the conversation breathe. Follow threads
              that feel alive. The best moments in Ep 1 were unplanned.
            </p>
          </div>

          <div className="mt-12 text-center text-[var(--muted)] text-sm space-y-2">
            <div className="flex justify-center gap-4">
              <a href="/prep" className="hover:text-[var(--foreground)] transition-colors">
                Ep 1 Prep &rarr;
              </a>
              <a href="/prep/farmer-fred" className="hover:text-[var(--foreground)] transition-colors">
                Farmer Fred Tutorial &rarr;
              </a>
            </div>
            <p className="mt-4">Internal prep page &middot; Not linked from public site</p>
          </div>
        </div>
      </section>
    </div>
  );
}
