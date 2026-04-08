import Link from "next/link";
import { SubscribeForm } from "./links/subscribe-form";
import { getAllEpisodes, getLatestEpisode } from "@/lib/episodes";

export default async function Home() {
  const episodes = await getAllEpisodes();
  const liveEpisodes = episodes.filter((ep) => ep.status === "live").reverse();
  const latest = liveEpisodes[0];

  return (
    <div className="min-h-screen">
      {/* Hero — latest episode */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-6">
            A weekly conversation about creativity in the age of AI
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Let&apos;s Vibe!
          </h1>
          {latest && (
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
                Latest Episode
              </p>
              <Link
                href={`/episodes/${latest.number}`}
                className="group block"
              >
                <h2 className="text-2xl md:text-3xl font-light group-hover:text-[var(--accent)] transition-colors mb-2">
                  #{latest.number} {latest.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed max-w-[600px] mb-1">
                  with{" "}
                  <span className="text-[var(--foreground)]">
                    {latest.guest}
                  </span>
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {latest.date} &middot; {latest.duration}
                </p>
              </Link>
              <div className="flex flex-wrap gap-3 mt-6">
                {latest.spotifyUrl && (
                  <a
                    href={latest.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Listen on Spotify
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
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Episodes */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">All Episodes</h2>
          <div className="space-y-0">
            {liveEpisodes.map((ep, i) => (
              <Link
                key={ep.number}
                href={`/episodes/${ep.number}`}
                className={`group flex items-baseline gap-6 py-5 ${
                  i !== liveEpisodes.length - 1
                    ? "border-b border-[var(--border)]"
                    : ""
                }`}
              >
                <span className="text-sm text-[var(--muted)] font-mono w-8 flex-shrink-0">
                  {ep.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {ep.guest} &middot; {ep.date} &middot; {ep.duration}
                  </p>
                </div>
                <span className="text-[var(--muted)] text-sm hidden md:block">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/episodes"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              View all episodes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About — compact */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-center gap-6 mb-8">
            <a href="https://x.com/seth" target="_blank" rel="noopener noreferrer" className="text-center group">
              <img
                src="https://unavatar.io/twitter/seth"
                alt="Seth Goldstein"
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors"
              />
              <p className="mt-1 text-xs text-[var(--muted)]">@seth</p>
            </a>
            <span className="text-xl text-[var(--muted)]">&</span>
            <a href="https://x.com/iancr" target="_blank" rel="noopener noreferrer" className="text-center group">
              <img
                src="/ian.png"
                alt="Ian Rogers"
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors"
              />
              <p className="mt-1 text-xs text-[var(--muted)]">@iancr</p>
            </a>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Seth Goldstein</strong> is building /vibe, a social layer for Claude Code.
            Former founder of Turntable.fm, ROOT, SiteSpecific.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Ian Rogers</strong> is CXO of Ledger, former CDO at LVMH,
            built Beats Music, Topspin. He interviewed Rick Rubin about The Creative Act.
          </p>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            We&apos;ve both been building things for 30 years. We remember the Netscape moment.
            This feels like that.
          </p>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-light mb-4">Never miss an episode</h2>
          <p className="text-[var(--muted)] mb-6">
            Subscribe on your favorite platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
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
          <div className="max-w-md mx-auto">
            <p className="text-sm text-[var(--muted)] mb-4">
              Or get the weekly companion email.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
