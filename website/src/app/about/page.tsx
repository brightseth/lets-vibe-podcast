import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Let's Vibe!",
  description: "A weekly conversation about creativity in the age of AI, hosted by Seth Goldstein and Ian Rogers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[700px] mx-auto px-6 py-24">
        <h1 className="text-3xl font-light mb-16">About</h1>

        <div className="space-y-12 text-lg leading-relaxed">
          <p>
            Let&apos;s Vibe! is a weekly podcast about creativity in the age of AI,
            hosted by Seth Goldstein and Ian Rogers.
          </p>

          <div>
            <h2 className="text-xl font-light mb-6">Seth Goldstein</h2>
            <p className="text-[var(--muted)] mb-4">
              Founder of Turntable.fm, ROOT, SiteSpecific. Currently building /vibe,
              a social layer for Claude Code. Based in San Francisco and Paris.
            </p>
            <a
              href="https://twitter.com/seth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              @seth
            </a>
          </div>

          <div>
            <h2 className="text-xl font-light mb-6">Ian Rogers</h2>
            <p className="text-[var(--muted)] mb-4">
              CEO of Ledger. Former Chief Digital Officer at LVMH, founder of Topspin Media,
              built Beats Music. He interviewed Rick Rubin about The Creative Act.
              Based in Paris.
            </p>
            <a
              href="https://twitter.com/iancr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              @iancr
            </a>
          </div>

          <div className="pt-8 border-t border-[var(--border)]">
            <h2 className="text-xl font-light mb-6">The Name</h2>
            <p className="text-[var(--muted)]">
              &ldquo;Vibe coding&rdquo; is a term coined by Andrej Karpathy to describe
              programming with AI assistance—where you describe what you want and
              let the AI help you build it. It&apos;s less about syntax,
              more about intention.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-light mb-6">Collaborate</h2>
            <p className="text-[var(--muted)] mb-4">
              The site and all planning docs are open source.
            </p>
            <a
              href="https://github.com/brightseth/lets-vibe-podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              github.com/brightseth/lets-vibe-podcast
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
