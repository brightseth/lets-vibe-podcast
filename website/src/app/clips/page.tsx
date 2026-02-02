import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clips — Let's Vibe!",
  description:
    "Short clips from Let's Vibe! podcast. Farmer Fred origin story, AI agent constitutions, vibe coding philosophy, and more.",
  openGraph: {
    title: "Clips — Let's Vibe!",
    description:
      "Short clips from Let's Vibe! podcast. The best moments from our conversations about creativity and AI.",
    url: "https://letsvibe.fm/clips",
    siteName: "Let's Vibe!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clips — Let's Vibe!",
    description:
      "Short clips from Let's Vibe! podcast. The best moments from our conversations about creativity and AI.",
  },
};

const clips = [
  {
    id: "hook-corn-bet",
    title: "Can Claude Code Grow Corn?",
    description:
      "Seth bets a legendary VC that AI can do something he says is impossible — grow corn on a fire escape in NYC.",
    duration: "0:27",
    category: "Hook",
    tags: ["origin story", "fred wilson", "proof of corn"],
    youtubeId: null,
    xPostUrl: null,
    links: [
      { label: "Proof of Corn", url: "https://proofofcorn.com" },
      { label: "Tutorial prep", url: "/prep/farmer-fred" },
    ],
  },
  {
    id: "origin-challenges-friend",
    title: "I Built an AI Farmer You Can Actually Call",
    description:
      "The origin story: a dinner with Fred Wilson, a bet about growing corn with code, and the agent Seth named after him.",
    duration: "1:15",
    category: "Hook",
    tags: ["farmer fred", "twilio", "elevenlabs", "origin story"],
    youtubeId: null,
    xPostUrl: null,
    links: [
      { label: "Call Fred: (929) 299-1010", url: "tel:+19292991010" },
      { label: "Call log", url: "https://proofofcorn.com/log" },
    ],
  },
  {
    id: "moral-compass",
    title: "This AI Agent Has a Constitution",
    description:
      "Farmer Fred has 6 weighted principles governing every conversation, a governance council, and he never cold-calls anyone. This is what responsible AI agents look like.",
    duration: "2:30",
    category: "Clip",
    tags: ["ai ethics", "constitution", "governance", "agents"],
    youtubeId: null,
    xPostUrl: null,
    links: [
      { label: "The constitution (code)", url: "/prep/farmer-fred#constitution" },
      { label: "Architecture slides", url: "/prep/farmer-fred/slides" },
    ],
  },
  {
    id: "hn-journey",
    title: "Proof of Corn: From Dinner Bet to Hacker News #1",
    description:
      "The full story of how a dinner bet with Fred Wilson became an AI farming agent, hit #1 on Hacker News, and spawned a community of growers.",
    duration: "14:30",
    category: "Segment",
    tags: ["hacker news", "proof of corn", "community", "vibe coding"],
    youtubeId: null,
    xPostUrl: null,
    links: [
      {
        label: "HN thread",
        url: "https://news.ycombinator.com/item?id=42735511",
      },
      { label: "proofofcorn.com", url: "https://proofofcorn.com" },
      { label: "Community", url: "https://proofofcorn.com/community" },
    ],
  },
];

const upcomingClips = [
  {
    title: "Prediction Markets & AI Agents",
    description: "Seth and Matt on Bad Bunny, the Grammys, and why prediction markets are the new sports betting.",
    from: "Episode 2 Preview",
  },
  {
    title: "The Architecture Walkthrough",
    description: "Twilio Media Streams + Cloudflare Durable Objects + ElevenLabs. How Farmer Fred actually works.",
    from: "Episode 2 Tutorial",
  },
  {
    title: "Union Square Farmers Market",
    description: "The goal: Farmer Fred advises enough growers to have a booth at Union Square by August 2026.",
    from: "Episode 2 Preview",
  },
];

export default function ClipsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Let&apos;s Vibe! Podcast
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Clips
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed max-w-[600px]">
            Short clips and highlights from our conversations. Subscribe for
            full episodes.
          </p>
        </div>
      </section>

      {/* Featured: Farmer Fred Tutorial */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs uppercase tracking-wider bg-[var(--foreground)] text-[var(--background)] rounded-full">
              Featured
            </span>
            <span className="text-sm text-[var(--muted)]">
              From the Episode 2 tutorial session with Matt Medved
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light mb-3">
            From Email to Phone Calls: Building Farmer Fred
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-[600px]">
            Seth walks through the full story of giving an AI agent a phone
            number, a voice, and a constitution. From a dinner bet with Fred
            Wilson to #1 on Hacker News.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/prep/farmer-fred"
              className="px-4 py-2 text-sm border border-[var(--border)] rounded-full hover:bg-[var(--surface-hover)] transition-colors"
            >
              Tutorial prep notes
            </a>
            <a
              href="/prep/farmer-fred/slides"
              className="px-4 py-2 text-sm border border-[var(--border)] rounded-full hover:bg-[var(--surface-hover)] transition-colors"
            >
              Visual slides
            </a>
            <a
              href="https://proofofcorn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-[var(--border)] rounded-full hover:bg-[var(--surface-hover)] transition-colors"
            >
              proofofcorn.com
            </a>
          </div>
        </div>
      </section>

      {/* Clips Grid */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <div className="space-y-8">
            {clips.map((clip) => (
              <div
                key={clip.id}
                id={clip.id}
                className="p-6 bg-[var(--surface)] rounded-lg scroll-mt-24"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 text-xs uppercase tracking-wider border border-[var(--border)] rounded">
                        {clip.category}
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        {clip.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{clip.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      {clip.description}
                    </p>
                  </div>
                </div>

                {/* Video embed placeholder */}
                {clip.youtubeId ? (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${clip.youtubeId}`}
                      title={clip.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-[var(--surface-dark)] rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2 text-[var(--muted)]">
                        ▶
                      </div>
                      <p className="text-sm text-[var(--muted)]">
                        Video uploading — check back soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4">
                  {clip.xPostUrl && (
                    <a
                      href={clip.xPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      View on X &rarr;
                    </a>
                  )}
                  {clip.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("/") ? undefined : "_blank"}
                      rel={
                        link.url.startsWith("/")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label} &rarr;
                    </a>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {clip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-[var(--muted)] bg-[var(--background)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Coming in Episode 2</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingClips.map((clip) => (
              <div
                key={clip.title}
                className="p-5 border border-dashed border-[var(--border)] rounded-lg"
              >
                <p className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                  {clip.from}
                </p>
                <h3 className="font-medium mb-2">{clip.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {clip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">
            Don&apos;t miss Episode 2
          </h2>
          <p className="text-[var(--muted)] mb-6">
            Seth interviews Ian Rogers (CXO of Ledger) on 30 years of building,
            from Beats Music to LVMH to vibe coding.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe on Spotify
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href="https://youtu.be/1kWtAUDdvJc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
