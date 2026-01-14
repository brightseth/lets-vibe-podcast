const dreamGuests = [
  {
    tier: "Visionaries",
    guests: [
      { name: "Andrej Karpathy", note: "Coined 'vibe coding'" },
      { name: "Rick Rubin", note: "The Creative Act" },
      { name: "Boris Dayma", note: "Anthropic / Claude" },
    ]
  },
  {
    tier: "Builders",
    guests: [
      { name: "steipete", note: "Clawdbot" },
      { name: "Simon Willison", note: "Datasette" },
      { name: "Pieter Levels", note: "Photo AI" },
      { name: "swyx", note: "Latent Space" },
    ]
  },
  {
    tier: "Artists",
    guests: [
      { name: "Gene Kogan", note: "Abraham.ai" },
      { name: "Claire Silver", note: "AI-assisted art" },
      { name: "Holly Herndon", note: "Holly+" },
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
            Let&apos;s Vibe!
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-12">
            A weekly conversation about creativity in the age of AI.
          </p>
          <div className="flex items-center gap-3 text-[var(--muted)]">
            <span>Seth Goldstein</span>
            <span>&</span>
            <span>Ian Rogers</span>
          </div>
        </div>
      </section>

      {/* The Premise */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <p className="text-lg leading-relaxed mb-8">
            Every week, we talk about what we&apos;re building, share what we&apos;re learning,
            and have a conversation with someone doing interesting work at the intersection
            of creativity and AI.
          </p>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Not another tech podcast. This is for artists, musicians, writers, designers—anyone
            who makes things and wants to understand how AI changes the craft.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Why us</h2>
          <div className="space-y-8">
            <p className="leading-relaxed">
              <strong>Seth</strong> is building /vibe, a social layer for Claude Code.
              Former founder of Turntable.fm, ROOT, SiteSpecific.
            </p>
            <p className="leading-relaxed">
              <strong>Ian</strong> is CEO of Ledger, former Chief Digital Officer at LVMH,
              built Beats Music, Topspin. He interviewed Rick Rubin about The Creative Act.
            </p>
            <p className="leading-relaxed text-[var(--muted)]">
              We&apos;ve both been building things for 30 years. We remember the Netscape moment.
              This feels like that.
            </p>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Format</h2>
          <div className="space-y-6 text-lg">
            <div className="flex gap-8">
              <span className="text-[var(--muted)] w-24 flex-shrink-0">10–15 min</span>
              <span>What we built this week</span>
            </div>
            <div className="flex gap-8">
              <span className="text-[var(--muted)] w-24 flex-shrink-0">25–30 min</span>
              <span>Conversation with a guest</span>
            </div>
            <div className="flex gap-8">
              <span className="text-[var(--muted)] w-24 flex-shrink-0">10–15 min</span>
              <span>Tutorial or walkthrough</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guests */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">People we want to talk to</h2>
          <div className="space-y-12">
            {dreamGuests.map((tier) => (
              <div key={tier.tier}>
                <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-6">
                  {tier.tier}
                </h3>
                <div className="space-y-3">
                  {tier.guests.map((guest) => (
                    <div key={guest.name} className="flex justify-between items-baseline">
                      <span>{guest.name}</span>
                      <span className="text-[var(--muted)] text-sm">{guest.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-6">
                Ian&apos;s Network
              </h3>
              <p className="text-[var(--muted)]">
                LVMH, Beats, Apple Music, Ledger ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-24">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
            &ldquo;It&apos;s like Pac-Man when you eat the cherry and everything starts flashing.
            We&apos;re running back through 30 years to create what we had ideas for
            but could never do ourselves.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Why Now */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Why now</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The podcast keeps us synced without scheduling meetings.
            </p>
            <p>
              The best people in this space want to share what they&apos;re building.
              We become a place for that.
            </p>
            <p>
              It forces us to ship things worth talking about.
            </p>
            <p className="text-[var(--muted)]">
              And it gives us an excuse to reach out to anyone doing interesting work.
            </p>
          </div>
        </div>
      </section>

      {/* Next */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-24 text-center">
          <p className="text-2xl font-light mb-8">
            Pick a day. Record Episode 1.
          </p>
          <p className="text-[var(--muted)]">
            Let&apos;s vibe.
          </p>
        </div>
      </section>
    </div>
  );
}
