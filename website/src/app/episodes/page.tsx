import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllEpisodes } from '@/lib/episodes';

export const metadata: Metadata = {
  title: "Episodes | Let's Vibe!",
  description: "All episodes of Let's Vibe! podcast — conversations with creators shaping AI-assisted creativity.",
};

export default async function EpisodesPage() {
  const episodes = (await getAllEpisodes()).sort((a, b) => b.number - a.number);
  const latest = episodes.find((ep) => ep.status === 'live') || episodes[0];
  const rest = episodes.filter((ep) => ep.number !== latest?.number);

  return (
    <div className="min-h-screen">
      {/* Latest Episode — Hero */}
      {latest && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[700px] mx-auto px-6 py-20">
            <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6">
              Latest Episode
            </p>
            <Link href={`/episodes/${latest.number}`} className="group">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                <span className="text-[var(--muted)]">#{latest.number}</span>{' '}
                {latest.title}
              </h1>
            </Link>
            <p className="text-lg text-[var(--muted)] mb-2">
              with{' '}
              <span className="text-[var(--foreground)] font-medium">{latest.guest}</span>
              {' '}&middot;{' '}{latest.date}{' '}&middot;{' '}{latest.duration}
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed mb-8 max-w-[600px]">
              {latest.description}
            </p>

            {/* Listen buttons */}
            {latest.status === 'live' && (
              <div className="flex flex-wrap gap-3 mb-8">
                {latest.spotifyUrl && (
                  <a
                    href={latest.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Spotify
                  </a>
                )}
                {latest.appleUrl && (
                  <a
                    href={latest.appleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                  >
                    Apple Podcasts
                  </a>
                )}
                {latest.youtubeUrl && (
                  <a
                    href={latest.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                  >
                    YouTube
                  </a>
                )}
                <Link
                  href={`/episodes/${latest.number}`}
                  className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  Show Notes
                </Link>
              </div>
            )}

            {/* Topics */}
            <div className="flex flex-wrap gap-2">
              {latest.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Episodes */}
      {rest.length > 0 && (
        <section>
          <div className="max-w-[700px] mx-auto px-6 py-16">
            <h2 className="text-sm uppercase tracking-widest text-[var(--muted)] mb-10">
              All Episodes
            </h2>

            <div className="space-y-0">
              {rest.map((episode, index) => (
                <article
                  key={episode.number}
                  className={`py-8 ${index !== rest.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-sm text-[var(--muted)] font-mono w-8 flex-shrink-0">
                      {episode.number}
                    </span>
                    <div className="flex-1">
                      <Link
                        href={`/episodes/${episode.number}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        <h3 className="text-xl font-light mb-1">
                          {episode.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-[var(--muted)] mb-3">
                        {episode.guest}{' '}&middot;{' '}{episode.date}{' '}&middot;{' '}{episode.duration}
                      </p>
                      <p className="text-[var(--muted)] leading-relaxed mb-3">
                        {episode.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {episode.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-2 py-0.5 bg-[var(--surface)] border border-[var(--border)] rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        {episode.status === 'live' && (
                          <Link
                            href={`/episodes/${episode.number}`}
                            className="text-sm text-[var(--accent)] hover:underline ml-auto"
                          >
                            Listen &rarr;
                          </Link>
                        )}
                        {episode.status === 'upcoming' && (
                          <span className="text-sm text-[var(--muted)] ml-auto">
                            Coming {episode.date}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">Never miss an episode</h2>
          <p className="text-[var(--muted)] mb-6">
            New episodes weekly. Subscribe wherever you listen.
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
              href="https://www.youtube.com/@LetsVibePodcast"
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
