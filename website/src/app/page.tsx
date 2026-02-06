import { SubscribeForm } from "./links/subscribe-form";
import { getLatestEpisode as fetchLatestEpisode } from "@/lib/episodes";

const dreamGuests = [
  {
    tier: "Visionaries",
    guests: [
      { name: "Andrej Karpathy", handle: "@karpathy", note: "Coined 'vibe coding'" },
      { name: "Rick Rubin", handle: null, note: "The Way of Vibing" },
      { name: "Boris Cherny", handle: "@bcherny", note: "Created Claude Code" },
    ]
  },
  {
    tier: "Builders",
    guests: [
      { name: "Peter Steinberger", handle: "@steipete", note: "Claude Code Anonymous" },
      { name: "Simon Willison", handle: "@simonw", note: "LLM pioneer, Datasette" },
      { name: "Pieter Levels", handle: "@levelsio", note: "Photo AI, $138K/mo vibe coded" },
      { name: "swyx", handle: "@swyx", note: "Latent Space, 'AI Engineer'" },
    ]
  },
  {
    tier: "Artists",
    guests: [
      { name: "Gene Kogan", handle: "@genekogan", note: "Abraham.ai" },
      { name: "Claire Silver", handle: "@clairesilver12", note: "AI-assisted art" },
      { name: "Holly Herndon", handle: "@hollyherndon", note: "Holly+" },
    ]
  },
];

const podcastsWeFollow = [
  { name: "Lex Fridman", handle: "@lexfridman", note: "Deep AI conversations", image: "https://unavatar.io/twitter/lexfridman" },
  { name: "Dwarkesh Patel", handle: "@dwarkesh_sp", note: "AGI, alignment, scaling", image: "https://unavatar.io/twitter/dwarkesh_sp" },
  { name: "Latent Space", handle: "@latentspacepod", note: "AI engineering", image: "https://unavatar.io/twitter/latentspacepod" },
  { name: "TWIML AI", handle: "@taborML", note: "ML research", image: "https://unavatar.io/twitter/taborML" },
  { name: "Acquired", handle: "@acquiredfm", note: "Tech history", image: "https://unavatar.io/twitter/acquiredfm" },
];

const xAccountsToFollow = [
  { handle: "@karpathy", note: "The OG. Coined 'vibe coding'", image: "https://unavatar.io/twitter/karpathy" },
  { handle: "@steipete", note: "Vibe coding philosopher", image: "https://unavatar.io/twitter/steipete" },
  { handle: "@simonw", note: "Prompt injection, LLM tooling", image: "https://unavatar.io/twitter/simonw" },
  { handle: "@levelsio", note: "Building empires with AI", image: "https://unavatar.io/twitter/levelsio" },
  { handle: "@swyx", note: "AI Engineer category", image: "https://unavatar.io/twitter/swyx" },
  { handle: "@bcherny", note: "Claude Code creator", image: "https://unavatar.io/twitter/bcherny" },
  { handle: "@claudeai", note: "Official Claude", image: "https://unavatar.io/twitter/claudeai" },
  { handle: "@AnthropicAI", note: "The company", image: "https://unavatar.io/twitter/AnthropicAI" },
];

const toolsWeUse = [
  { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code", note: "The vibe coding IDE" },
  { name: "/vibe", url: "https://slashvibe.dev", note: "Social layer for Claude Code" },
  { name: "Cursor", url: "https://cursor.com", note: "AI-first code editor" },
  { name: "Riverside", url: "https://riverside.fm", note: "Recording, editing, clips" },
];

export default async function Home() {
  const ep = await fetchLatestEpisode();
  const latestEpisode = ep ? {
    number: ep.number,
    title: ep.title,
    slug: ep.slug,
    description: ep.description,
    spotify_url: ep.spotify_url,
    apple_url: ep.apple_url,
    youtube_url: ep.youtube_url,
  } : null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-transparent">
        <div className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
                A podcast about vibe coding
              </p>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Let&apos;s Vibe!
              </h1>
              <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-8">
                Weekly conversations with creators building at the intersection of AI and creativity.
                <span className="block mt-2 text-lg">
                  {latestEpisode ? (
                    <a href={`/episodes/${latestEpisode.slug}`} className="hover:text-[var(--foreground)] transition-colors">
                      Episode {latestEpisode.number}: {latestEpisode.title} is live.
                    </a>
                  ) : (
                    <a href="/episodes/1" className="hover:text-[var(--foreground)] transition-colors">
                      Episode 1: The Netscape Moment is live.
                    </a>
                  )}
                </span>
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={latestEpisode?.spotify_url || "https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Listen on Spotify
                </a>
                <a
                  href={latestEpisode?.apple_url || "https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  Apple Podcasts
                </a>
                <a
                  href={latestEpisode?.youtube_url || "https://youtu.be/1kWtAUDdvJc"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="https://x.com/seth" target="_blank" rel="noopener noreferrer" className="text-center group">
                <img
                  src="https://unavatar.io/twitter/seth"
                  alt="Seth Goldstein"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors"
                />
                <p className="mt-2 text-sm font-medium">Seth</p>
                <p className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">@seth</p>
              </a>
              <span className="text-2xl text-[var(--muted)]">&</span>
              <a href="https://x.com/iancr" target="_blank" rel="noopener noreferrer" className="text-center group">
                <img
                  src="/ian.png"
                  alt="Ian Rogers"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors"
                />
                <p className="mt-2 text-sm font-medium">Ian</p>
                <p className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">@iancr</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-light mb-2">Get the daily links</h2>
              <p className="text-[var(--muted)]">
                The best of creativity, AI, and vibe coding. Curated daily.
              </p>
            </div>
            <div className="flex-1">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>

      {/* The Premise */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <p className="text-lg leading-relaxed mb-8">
            Vibe coding is having its Netscape moment. Millions have heard the term but don&apos;t
            know where to start. There&apos;s no authoritative voice contextualizing what&apos;s
            happening—just scattered tutorials and hype.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            <strong>Let&apos;s Vibe!</strong> fills that gap. Every week, we talk about what we&apos;re
            building, share what we&apos;re learning, and have a conversation with someone doing
            interesting work at the intersection of creativity and AI.
          </p>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            This is for curious creatives who&apos;ve heard &ldquo;vibe coding&rdquo; but don&apos;t know
            where to start. Artists who want to build. Founders who want to ship faster.
            Not another developer podcast—<em>Acquired meets Oprah</em>, sophisticated but warm.
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
              <strong>Ian</strong> is Chief Experience Officer of Ledger, former Chief Digital Officer at LVMH,
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
      <section id="guests" className="border-b border-[var(--border)] scroll-mt-24">
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
                    <div key={guest.name} className="flex justify-between items-baseline gap-4">
                      <div className="flex items-baseline gap-2">
                        <span>{guest.name}</span>
                        {guest.handle && (
                          <a
                            href={`https://x.com/${guest.handle.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                          >
                            {guest.handle}
                          </a>
                        )}
                      </div>
                      <span className="text-[var(--muted)] text-sm text-right">{guest.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

      {/* The Canon */}
      <section id="canon" className="border-b border-[var(--border)] scroll-mt-24">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-8">The Canon</h2>
          <div className="space-y-6">
            {/* Rick Rubin */}
            <div className="p-6 bg-[var(--surface)] rounded-lg">
              <h3 className="text-xl mb-4">The Way of Vibing</h3>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Rick Rubin&apos;s September 2025 conversation with Anthropic on Tetragrammaton.
                The bible of vibe coding philosophy.
              </p>
              <p className="text-lg leading-relaxed">
                &ldquo;The code is just the byproduct. What matters is the conversation—the dance
                between human intention and machine capability.&rdquo;
              </p>
              <p className="text-sm text-[var(--muted)] mt-4">
                From: The Way of Code: The Timeless Art of Vibecoding
              </p>
            </div>

            {/* Ian's Article */}
            <a
              href="https://fistfulayen.com/2026/01/13/reflections-on-a-claude-code-new-year/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
            >
              <div className="flex items-start gap-4">
                <img
                  src="/ian.png"
                  alt="Ian Rogers"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl mb-2">Reflections on a Claude Code New Year</h3>
                  <p className="text-sm text-[var(--muted)] mb-3">Ian Rogers · January 13, 2026</p>
                  <p className="text-[var(--muted)] leading-relaxed mb-4">
                    Ian built an RSVP system, digital art gallery, and music projects using Claude Code—tools
                    he hadn&apos;t touched in over a decade. On the jump from Claude 4.0 to 4.5, Vercel, Supabase, and why building beats consuming.
                  </p>
                  <p className="text-lg leading-relaxed">
                    &ldquo;What&apos;s astounding is how much I accomplished in such little time actually spent at the keyboard.&rdquo;
                  </p>
                  <p className="text-sm text-blue-500 mt-4">
                    Read on FISTFULAYEN &rarr;
                  </p>
                </div>
              </div>
            </a>

            {/* Essential Reading */}
            <div>
              <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-6">
                Essential Reading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://www.amazon.com/Creative-Act-Way-Being/dp/0593652886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors text-center"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/71stpY7GNAL._SY522_.jpg"
                    alt="The Creative Act"
                    className="w-20 h-28 object-cover rounded shadow-lg mb-3"
                  />
                  <span className="font-medium text-sm">The Creative Act</span>
                  <span className="text-xs text-[var(--muted)]">Rick Rubin</span>
                </a>
                <a
                  href="https://x.com/karpathy/status/1886192184808149383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors text-center"
                >
                  <img
                    src="https://unavatar.io/twitter/karpathy"
                    alt="Andrej Karpathy"
                    className="w-16 h-16 object-cover rounded-full mb-3"
                  />
                  <span className="font-medium text-sm">&ldquo;Vibe Coding&rdquo;</span>
                  <span className="text-xs text-[var(--muted)]">Karpathy · Feb 2025</span>
                </a>
                <a
                  href="https://docs.anthropic.com/en/docs/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors text-center"
                >
                  <img
                    src="https://unavatar.io/twitter/AnthropicAI"
                    alt="Anthropic"
                    className="w-16 h-16 object-cover rounded-full mb-3"
                  />
                  <span className="font-medium text-sm">Claude Code Docs</span>
                  <span className="text-xs text-[var(--muted)]">Anthropic</span>
                </a>
              </div>
            </div>

            {/* Host Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Seth Profile */}
              <div className="p-6 bg-[var(--surface-dark)] text-white rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://unavatar.io/twitter/seth"
                    alt="Seth Goldstein"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium">Seth Goldstein</h3>
                    <p className="text-gray-400 text-sm">Co-host of Let&apos;s Vibe!</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Building /vibe, a social layer for Claude Code. Former founder of Turntable.fm, ROOT, SiteSpecific.
                  30 years of building on the internet.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/seth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    @seth &rarr;
                  </a>
                  <a
                    href="https://slashvibe.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    slashvibe.dev &rarr;
                  </a>
                </div>
              </div>

              {/* Ian Profile */}
              <div className="p-6 bg-[var(--surface-dark)] text-white rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/ian.png"
                    alt="Ian Rogers"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium">Ian Rogers</h3>
                    <p className="text-gray-400 text-sm">CXO of Ledger · Co-host of Let&apos;s Vibe!</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Former Chief Digital Officer at LVMH, founder of Topspin Media, built Beats Music.
                  Interviewed Rick Rubin on Tetragrammaton.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/iancr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    @iancr &rarr;
                  </a>
                  <a
                    href="https://fistfulayen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    FISTFULAYEN &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts We Follow */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Podcasts we follow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {podcastsWeFollow.map((podcast) => (
              <a
                key={podcast.name}
                href={`https://x.com/${podcast.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
              >
                <img
                  src={podcast.image}
                  alt={podcast.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <div className="font-medium">{podcast.name}</div>
                  <div className="text-sm text-[var(--muted)]">{podcast.note}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* X Accounts */}
      <section id="follow" className="border-b border-[var(--border)] scroll-mt-24">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Who to follow on X</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {xAccountsToFollow.map((account) => (
              <a
                key={account.handle}
                href={`https://x.com/${account.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors text-center"
              >
                <img
                  src={account.image}
                  alt={account.handle}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <span className="font-medium text-sm">{account.handle}</span>
                <p className="text-xs text-[var(--muted)] mt-1">{account.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="border-b border-[var(--border)] scroll-mt-24">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-4">Resources</h2>
          <p className="text-[var(--muted)] mb-12">
            Software, hardware, and guides for vibe coders
          </p>

          {/* Software */}
          <div className="mb-16">
            <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-6">Software</h3>
            <div className="space-y-4">
              {toolsWeUse.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-baseline p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-[var(--muted)] text-sm">{tool.note}</span>
                </a>
              ))}
            </div>
            <div className="mt-6 p-6 bg-[var(--surface-dark)] text-white rounded-lg">
              <h3 className="text-lg mb-2">/vibe</h3>
              <p className="text-gray-400 text-sm mb-4">
                A social layer for Claude Code. DMs, presence, memory.
              </p>
              <a
                href="https://slashvibe.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                slashvibe.dev &rarr;
              </a>
            </div>
          </div>

          {/* Hardware */}
          <div>
            <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-6">Hardware</h3>
            <div className="bg-[var(--surface)] rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-light mb-2">VIBESTATION</h4>
                    <p className="text-[var(--muted)]">
                      Curated hardware guide for vibe coders
                    </p>
                  </div>
                  <a
                    href="https://gear.letsvibe.fm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-[var(--border)] rounded-full hover:bg-[var(--surface-hover)] transition-colors whitespace-nowrap"
                  >
                    Visit Guide →
                  </a>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    The definitive hardware guide for grownups who suddenly find themselves coding.
                    No CS degree required.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[var(--background)] rounded-lg">
                      <div className="text-2xl mb-2">💻</div>
                      <h5 className="font-medium text-sm mb-1">Displays</h5>
                      <p className="text-xs text-[var(--muted)]">
                        4K monitors, ultrawide setups
                      </p>
                    </div>

                    <div className="p-4 bg-[var(--background)] rounded-lg">
                      <div className="text-2xl mb-2">⌨️</div>
                      <h5 className="font-medium text-sm mb-1">Keyboards</h5>
                      <p className="text-xs text-[var(--muted)]">
                        Mechanical, ergonomic, minimal
                      </p>
                    </div>

                    <div className="p-4 bg-[var(--background)] rounded-lg">
                      <div className="text-2xl mb-2">🪑</div>
                      <h5 className="font-medium text-sm mb-1">Furniture</h5>
                      <p className="text-xs text-[var(--muted)]">
                        Standing desks, ergonomic chairs
                      </p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-[var(--border)] pl-4 italic text-[var(--muted)]">
                    "You spent your career building companies, raising kids, or doing literally anything
                    other than programming. Now Claude Code exists and suddenly you're shipping software
                    daily. Welcome to the club."
                  </blockquote>

                  <div className="pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <span>Created by Seth</span>
                      <span>·</span>
                      <span>Part of the vibecodings ecosystem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      {/* Subscribe CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Episode {latestEpisode?.number || 1} — {latestEpisode?.title || "The Netscape Moment"}
          </p>
          <p className="text-2xl font-light mb-4">
            Live now.
          </p>
          <p className="text-[var(--muted)] mb-6">
            {latestEpisode?.description || "Seth and Ian kick off the show with the origin story. 30 years of building, imposter syndrome, the Oliver Sacks piano analogy, and why the terminal is the future."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href={latestEpisode?.spotify_url || "https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Spotify
            </a>
            <a
              href={latestEpisode?.apple_url || "https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href={latestEpisode?.youtube_url || "https://youtu.be/1kWtAUDdvJc"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              YouTube
            </a>
          </div>
          <p className="text-sm text-[var(--muted)] mb-8">
            Subscribe to our daily curated links on creativity, AI, and vibe coding.
          </p>
          <div className="max-w-md mx-auto">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
