import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getEpisodeByNumber, getAllEpisodeNumbers, getAllEpisodes } from '@/lib/episodes';
import { EpisodePlayer } from '@/components/EpisodePlayer';

export async function generateStaticParams() {
  const numbers = await getAllEpisodeNumbers();
  return numbers.map((num) => ({ number: String(num) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ number: string }>;
}): Promise<Metadata> {
  const { number } = await params;
  const episode = await getEpisodeByNumber(parseInt(number, 10));
  if (!episode) return { title: 'Episode Not Found' };

  return {
    title: `Ep ${episode.number}: ${episode.title} | Let's Vibe!`,
    description: episode.description,
    openGraph: {
      title: `Ep ${episode.number}: ${episode.title} — Let's Vibe!`,
      description: episode.description,
      url: `https://letsvibe.fm/episodes/${episode.number}`,
      siteName: "Let's Vibe!",
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Ep ${episode.number}: ${episode.title} — Let's Vibe!`,
      description: episode.description,
    },
  };
}

const statusBadge = {
  live: { label: 'Live', className: 'bg-green-100 text-green-800' },
  upcoming: {
    label: 'Coming Soon',
    className: 'bg-[var(--accent)]/10 text-[var(--accent)]',
  },
  recorded: {
    label: 'In Production',
    className: 'bg-yellow-100 text-yellow-800',
  },
};

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const episode = await getEpisodeByNumber(parseInt(number, 10));
  if (!episode) notFound();

  const episodes = await getAllEpisodes();
  const episodeIndex = episodes.findIndex((ep) => ep.number === episode.number);
  const prevEpisode = episodeIndex > 0 ? episodes[episodeIndex - 1] : null;
  const nextEpisode =
    episodeIndex < episodes.length - 1 ? episodes[episodeIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16 md:py-20">
          <Link
            href="/episodes"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-6 inline-block"
          >
            &larr; All Episodes
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${statusBadge[episode.status].className}`}
            >
              {statusBadge[episode.status].label}
            </span>
            <span className="text-sm text-[var(--muted)]">
              {episode.date} &middot; {episode.duration}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            <span className="text-[var(--muted)]">#{episode.number}</span>{' '}
            {episode.title}
          </h1>

          <p className="text-lg text-[var(--muted)] mb-2">
            with{' '}
            <span className="text-[var(--foreground)] font-medium">
              {episode.guest}
            </span>{' '}
            <span className="text-[var(--accent)]">{episode.guestHandle}</span>
          </p>

          <p className="text-[var(--muted)] leading-relaxed max-w-[600px] mb-8">
            {episode.description}
          </p>

          {/* Platform buttons */}
          {episode.status === 'live' && (
            <div className="flex flex-wrap gap-3">
              {episode.spotifyUrl && (
                <a
                  href={episode.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Listen on Spotify
                </a>
              )}
              {episode.appleUrl && (
                <a
                  href={episode.appleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  Apple Podcasts
                </a>
              )}
              {episode.youtubeUrl && (
                <a
                  href={episode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
                >
                  YouTube
                </a>
              )}
            </div>
          )}

          {episode.status === 'upcoming' && (
            <p className="text-sm text-[var(--accent)] font-medium">
              Coming {episode.date}
            </p>
          )}

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mt-6">
            {episode.topics.map((topic) => (
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

      {/* Episode Player */}
      {episode.status === 'live' && (episode.youtubeUrl || episode.spotifyUrl) && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[900px] mx-auto px-6 py-8">
            <EpisodePlayer
              youtubeUrl={episode.youtubeUrl}
              spotifyUrl={episode.spotifyUrl}
              appleUrl={episode.appleUrl}
              title={`${episode.title} - Let's Vibe! Episode ${episode.number}`}
            />
          </div>
        </section>
      )}

      {/* Guest Bio */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto px-6 py-10">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-3">
            About the Guest
          </p>
          <p className="leading-relaxed">{episode.guestBio}</p>
        </div>
      </section>

      {/* Show Notes */}
      {episode.showNotes && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[900px] mx-auto px-6 py-16">
            <h2 className="text-2xl font-light mb-8">Show Notes</h2>
            <div className="prose-custom space-y-4">
              {episode.showNotes.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[var(--muted)] leading-relaxed text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chapters */}
      {episode.chapters && episode.chapters.length > 0 && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[900px] mx-auto px-6 py-16">
            <h2 className="text-2xl font-light mb-8">Chapters</h2>
            <div className="space-y-0">
              {episode.chapters.map((chapter, i) => (
                <div
                  key={i}
                  className={`flex items-baseline gap-6 py-3 ${
                    i !== episode.chapters!.length - 1
                      ? 'border-b border-[var(--border)]'
                      : ''
                  }`}
                >
                  <span className="text-sm text-[var(--accent)] font-mono w-12 flex-shrink-0">
                    {chapter.time}
                  </span>
                  <span className="text-[var(--foreground)]">
                    {chapter.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Links & Resources */}
      {episode.links && episode.links.length > 0 && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[900px] mx-auto px-6 py-16">
            <h2 className="text-2xl font-light mb-8">Links & Resources</h2>
            <div className="space-y-3">
              {episode.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith('/') ? undefined : '_blank'}
                  rel={
                    link.url.startsWith('/') ? undefined : 'noopener noreferrer'
                  }
                  className="flex items-center justify-between p-4 bg-[var(--surface)] rounded-lg hover:bg-[var(--surface-hover)] transition-colors group"
                >
                  <span className="group-hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </span>
                  <span className="text-[var(--muted)] text-sm">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transcript */}
      {episode.transcript && (
        <section className="border-b border-[var(--border)]">
          <div className="max-w-[900px] mx-auto px-6 py-16">
            <details>
              <summary className="text-2xl font-light cursor-pointer hover:text-[var(--accent)] transition-colors">
                Transcript
              </summary>
              <div className="mt-8 space-y-4">
                {episode.transcript.split('\n\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[var(--muted)] leading-relaxed"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          </div>
        </section>
      )}

      {/* Episode Navigation */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            {prevEpisode ? (
              <Link
                href={`/episodes/${prevEpisode.number}`}
                className="group"
              >
                <p className="text-sm text-[var(--muted)] mb-1">
                  &larr; Previous
                </p>
                <p className="font-medium group-hover:text-[var(--accent)] transition-colors">
                  #{prevEpisode.number} {prevEpisode.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextEpisode ? (
              <Link
                href={`/episodes/${nextEpisode.number}`}
                className="group text-right"
              >
                <p className="text-sm text-[var(--muted)] mb-1">
                  Next &rarr;
                </p>
                <p className="font-medium group-hover:text-[var(--accent)] transition-colors">
                  #{nextEpisode.number} {nextEpisode.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">Never miss an episode</h2>
          <p className="text-[var(--muted)] mb-6">
            Subscribe on your favorite platform and get notified when new
            episodes drop.
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
