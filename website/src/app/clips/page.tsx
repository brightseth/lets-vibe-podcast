import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clips — Let's Vibe!",
  description:
    "Short clips and highlights from Let's Vibe! podcast conversations about creativity and AI.",
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
    id: "software-codifies",
    title: "Software Codifies Human Behavior",
    description:
      "Lukas Amacher on how the programming language is becoming English, and why the concept-execution gap has collapsed to zero.",
    duration: "1:30",
    episode: 4,
    episodeTitle: "The Art World Runs on Narrative",
    guest: "Lukas Amacher",
    tags: ["vibecoding", "Claude Code", "English as programming"],
    youtubeId: null,
    xPostUrl: null,
  },
  {
    id: "hook-corn-bet",
    title: "Can Claude Code Grow Corn?",
    description:
      "Seth bets a legendary VC that AI can do something he says is impossible — grow corn on a fire escape in NYC.",
    duration: "0:27",
    episode: 1,
    episodeTitle: "The Netscape Moment",
    guest: "Seth Goldstein & Ian Rogers",
    tags: ["origin story", "fred wilson", "proof of corn"],
    youtubeId: null,
    xPostUrl: null,
  },
  {
    id: "origin-challenges-friend",
    title: "I Built an AI Farmer You Can Actually Call",
    description:
      "The origin story: a dinner with Fred Wilson, a bet about growing corn with code, and the agent Seth named after him.",
    duration: "1:15",
    episode: 1,
    episodeTitle: "The Netscape Moment",
    guest: "Seth Goldstein & Ian Rogers",
    tags: ["farmer fred", "twilio", "elevenlabs", "origin story"],
    youtubeId: null,
    xPostUrl: null,
  },
  {
    id: "moral-compass",
    title: "This AI Agent Has a Constitution",
    description:
      "Farmer Fred has 6 weighted principles governing every conversation, a governance council, and he never cold-calls anyone.",
    duration: "2:30",
    episode: 1,
    episodeTitle: "The Netscape Moment",
    guest: "Seth Goldstein & Ian Rogers",
    tags: ["ai ethics", "constitution", "governance", "agents"],
    youtubeId: null,
    xPostUrl: null,
  },
  {
    id: "autonomish",
    title: "Autonomish — The Honest Word for AI Agents",
    description:
      "Seth coins the term for where AI agents actually are — not fully autonomous, not fully human-controlled. Like Julian Edelman saying he's \"Jewish-ish.\"",
    duration: "2:00",
    episode: 3,
    episodeTitle: "The Media Builder",
    guest: "Matt Medved",
    tags: ["agents", "autonomy", "philosophy"],
    youtubeId: null,
    xPostUrl: null,
  },
  {
    id: "electric-screwdriver",
    title: "The Electric Screwdriver in Your Head",
    description:
      "The new creator mindset — seeing every piece of software as deconstructable and reconstructable.",
    duration: "1:45",
    episode: 3,
    episodeTitle: "The Media Builder",
    guest: "Matt Medved",
    tags: ["personal software", "vibe coding", "creator tools"],
    youtubeId: null,
    xPostUrl: null,
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
                      <Link
                        href={`/episodes/${clip.episode}`}
                        className="px-2 py-0.5 text-xs uppercase tracking-wider border border-[var(--border)] rounded hover:bg-[var(--surface-hover)] transition-colors"
                      >
                        Ep {clip.episode}
                      </Link>
                      <span className="text-sm text-[var(--muted)]">
                        {clip.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{clip.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      {clip.description}
                    </p>
                    <p className="text-sm text-[var(--muted)] mt-2">
                      {clip.guest} &middot; {clip.episodeTitle}
                    </p>
                  </div>
                </div>

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
                        &#9654;
                      </div>
                      <p className="text-sm text-[var(--muted)]">
                        Video uploading — check back soon
                      </p>
                    </div>
                  </div>
                )}

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

      {/* CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">
            Hear the full conversations
          </h2>
          <p className="text-[var(--muted)] mb-6">
            Subscribe for weekly episodes with creative builders shipping with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://open.spotify.com/show/0xtkJKB5n0CUBPwrCMCFzq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Spotify
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              Apple Podcasts
            </a>
            <a
              href="https://www.youtube.com/@godsbreak"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
