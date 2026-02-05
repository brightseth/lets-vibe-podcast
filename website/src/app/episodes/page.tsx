import Link from 'next/link';
import type { Metadata } from 'next';
import { episodes } from '@/data/episodes';

export const metadata: Metadata = {
  title: "Episodes | Let's Vibe!",
  description: "All episodes of Let's Vibe! podcast - conversations with creators shaping AI-assisted creativity.",
};

const statusBadge = {
  live: { label: "Live", className: "bg-green-100 text-green-800" },
  upcoming: { label: "Coming Soon", className: "bg-[var(--accent)]/10 text-[var(--accent)]" },
  recorded: { label: "In Production", className: "bg-yellow-100 text-yellow-800" },
};

export default function EpisodesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <p className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-4">
            All Episodes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Episodes
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl">
            Weekly conversations with the creators, builders, and thinkers pioneering AI-assisted creativity.
            New episodes drop every Monday.
          </p>
        </div>
      </section>

      {/* Filter/Search - placeholder for future */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium bg-[var(--foreground)] text-[var(--background)] rounded-lg">
                All Episodes
              </button>
              <button className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-lg transition-colors">
                AI Art
              </button>
              <button className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-lg transition-colors">
                Tools
              </button>
              <button className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] rounded-lg transition-colors">
                Culture
              </button>
            </div>
            <p className="text-sm text-[var(--muted)]">
              {episodes.length} episodes
            </p>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="space-y-0">
            {episodes.map((episode, index) => (
              <article
                key={episode.number}
                className={`py-8 ${index !== episodes.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Episode Number */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">#{episode.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${statusBadge[episode.status].className}`}>
                        {statusBadge[episode.status].label}
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        {episode.date} &middot; {episode.duration}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-1 hover:text-[var(--accent)] transition-colors">
                      <Link href={`/episodes/${episode.number}`}>
                        {episode.title}
                      </Link>
                    </h2>

                    <p className="text-[var(--muted)] mb-2">
                      with <span className="text-[var(--foreground)] font-medium">{episode.guest}</span>{' '}
                      <span className="text-[var(--accent)]">{episode.guestHandle}</span>
                    </p>

                    <p className="text-[var(--muted)] mb-4 leading-relaxed">
                      {episode.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {episode.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {episode.status === 'live' && (
                        <div className="flex gap-3 ml-auto">
                          <Link
                            href={`/episodes/${episode.number}`}
                            className="px-4 py-1.5 bg-[var(--foreground)] text-[var(--background)] font-medium rounded text-sm hover:opacity-90 transition-opacity"
                          >
                            Listen
                          </Link>
                          <Link
                            href={`/episodes/${episode.number}`}
                            className="px-4 py-1.5 border border-[var(--border)] font-medium rounded text-sm hover:border-[var(--foreground)] transition-colors"
                          >
                            Notes
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Never miss an episode</h2>
            <p className="text-[var(--muted)] mb-6">
              Subscribe on your favorite platform and get notified when new episodes drop.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/episode/29Du7dKES9PK5Gmu0RnHrY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--foreground)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/lets-vibe/id1873355247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--foreground)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Podcasts
              </a>
              <a
                href="https://youtu.be/1kWtAUDdvJc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg font-medium hover:border-[var(--foreground)] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
