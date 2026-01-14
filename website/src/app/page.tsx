import Image from 'next/image';

const dreamGuests = [
  {
    tier: "Tier 0: Unicorn Gets",
    guests: [
      { name: "Andrej Karpathy", role: "Coined 'vibe coding', ex-Tesla AI", handle: "@karpathy" },
      { name: "Rick Rubin", role: "The Creative Act, creativity philosopher", handle: "@RickRubin" },
      { name: "Boris Dayma", role: "Anthropic / Claude team", handle: "@borisdayma" },
    ]
  },
  {
    tier: "Tier 1: Vibe Coding Pioneers",
    guests: [
      { name: "steipete", role: "Clawdbot creator, Claude Code power user", handle: "@steipete" },
      { name: "Simon Willison", role: "Datasette, LLM tools educator", handle: "@simonw" },
      { name: "Pieter Levels", role: "Photo AI, ships fast", handle: "@levelsio" },
      { name: "swyx", role: "Latent Space, AI engineer", handle: "@swyx" },
    ]
  },
  {
    tier: "Tier 2: AI Art + Music",
    guests: [
      { name: "Gene Kogan", role: "Abraham.ai founder, AI art OG", handle: "@genekogan" },
      { name: "Claire Silver", role: "Voice of AI-assisted art", handle: "@clairesilver12" },
      { name: "Holly Herndon", role: "Holly+, AI voice cloning", handle: "@hollyherndon" },
      { name: "Grimes", role: "Elf.tech, AI experiments", handle: "@Grimezsz" },
    ]
  },
  {
    tier: "Ian's Network",
    guests: [
      { name: "LVMH / Beats alumni", role: "Music + luxury + tech crossover", handle: "" },
      { name: "Ledger ecosystem", role: "Web3 builders", handle: "" },
      { name: "Apple Music network", role: "Music industry innovators", handle: "" },
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero - The Pitch */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
          <p className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-6">
            Proposal for Review
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            Let&apos;s Vibe!
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 leading-relaxed max-w-[700px]">
            Weekly podcast where we shoot the shit about vibe coding, interview the most interesting people building with AI, and show tutorials that become standalone clips.
          </p>
          <div className="flex items-center gap-6 text-[var(--muted)]">
            <span>Seth Goldstein</span>
            <span className="text-[var(--border)]">&</span>
            <span>Ian Rogers</span>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Why Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                <h3 className="font-semibold mb-2">We&apos;re both deep in it</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Seth building /vibe (social layer for Claude Code). Ian building Platters (digital packaging for music) + personal gallery + Better at Living.
                </p>
              </div>
              <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                <h3 className="font-semibold mb-2">We know the playbook</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  We&apos;re the only ones old enough to remember Netscape, Winamp, Turntable. Back to Booklink. This moment feels like 1994.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                <h3 className="font-semibold mb-2">Neither of us needs to impress anyone</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  We&apos;ve built companies, worked with legends, been through the cycles. Now we&apos;re just building what we want to exist.
                </p>
              </div>
              <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                <h3 className="font-semibold mb-2">Paris studio + global reach</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  Both spending significant time in Paris. Record at Ledger studio when together. Remote when apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Format</h2>
          <p className="text-[var(--muted)] mb-8">45-60 minutes per episode</p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Opener (10-15 min)</h3>
                <p className="text-[var(--muted)]">
                  Seth & Ian catch up: what we built this week, tools we&apos;re using, patterns we&apos;re seeing in the vibe coding world.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Guest Interview (25-30 min)</h3>
                <p className="text-[var(--muted)]">
                  Deep conversation with someone at the intersection of creativity and AI. Not interrogative—curious, like Rick Rubin.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Tutorial Clip (10-15 min)</h3>
                <p className="text-[var(--muted)]">
                  Hands-on walkthrough that becomes standalone YouTube content. Guest or one of us shows how they built something.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vibe */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">The Vibe</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[var(--accent-warm)] font-medium mb-4">YES</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Acquired meets Oprah — sophisticated but warm</li>
                <li>Rick Rubin calm curiosity meets tech optimism</li>
                <li>Practical, not theoretical</li>
                <li>Accessible to non-technical creatives</li>
                <li>Show your work energy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium mb-4">NOT</h3>
              <ul className="space-y-3 text-gray-500">
                <li>Hype podcasts</li>
                <li>Crypto bro energy</li>
                <li>Empty superlatives</li>
                <li>Pure developer content</li>
                <li>Interview interrogation style</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Guests */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-2">Dream Guests</h2>
          <p className="text-[var(--muted)] mb-8">Our combined networks</p>

          <div className="space-y-10">
            {dreamGuests.map((tier) => (
              <div key={tier.tier}>
                <h3 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-4">
                  {tier.tier}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {tier.guests.map((guest) => (
                    <div key={guest.name} className="p-4 border border-[var(--border)] rounded-lg">
                      <p className="font-medium">{guest.name}</p>
                      <p className="text-sm text-[var(--muted)]">{guest.role}</p>
                      {guest.handle && (
                        <p className="text-sm text-[var(--accent)] mt-1">{guest.handle}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Why Now</h2>
          <div className="prose prose-lg max-w-none">
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 italic text-xl text-[var(--muted)] my-8">
              &ldquo;It&apos;s like Pac-Man when you eat the cherry and everything starts flashing. We&apos;re all running back through 30 years to create what we had ideas for but could never do ourselves.&rdquo;
            </blockquote>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="font-semibold mb-2">Force function to stay synced</h3>
                <p className="text-[var(--muted)] text-sm">
                  Weekly recording keeps us connected without scheduling meetings. Natural cadence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">People come to us</h3>
                <p className="text-[var(--muted)] text-sm">
                  The best people in vibe coding want to share what they&apos;re building. We become a magnet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Show and tell</h3>
                <p className="text-[var(--muted)] text-sm">
                  Forces us to ship things worth talking about. Public accountability for building.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Access to everyone</h3>
                <p className="text-[var(--muted)] text-sm">
                  Podcast gives us an excuse to reach out to anyone doing interesting work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Moment */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">The Moment</h2>
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
            &ldquo;People have no idea what&apos;s about to come. These ideas are just going to come out of nowhere now.&rdquo;
          </blockquote>
          <p className="text-[var(--muted)] mt-4">— From our call, Jan 14, 2026</p>
        </div>
      </section>

      {/* Logistics */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Logistics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Recording</h3>
              <p className="text-sm text-[var(--muted)]">
                Riverside.fm for remote sessions. Ledger studio when in Paris together.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-sm text-[var(--muted)]">
                Descript for AI editing + transcription. Minimal post-production.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Distribution</h3>
              <p className="text-sm text-[var(--muted)]">
                Spotify for Creators (free hosting). Apple Podcasts. YouTube for video + Shorts.
              </p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
            <h3 className="font-semibold mb-2">Target Launch</h3>
            <p className="text-[var(--muted)]">
              February/March 2026 with 3 episodes ready at launch.
            </p>
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section>
        <div className="max-w-[900px] mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Vibe.</h2>
          <p className="text-xl text-[var(--muted)] mb-8">
            Pick a day and time. Record Episode 1.
          </p>
          <p className="text-sm text-[var(--muted)] italic">
            &ldquo;55 years old. 5 months old. Me and Opus. That&apos;s my team.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
