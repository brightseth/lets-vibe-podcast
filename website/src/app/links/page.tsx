import type { Metadata } from "next"
import { SubscribeForm } from "./subscribe-form"

export const metadata: Metadata = {
  title: "Let's Vibe! Links - Daily Curated Links",
  description:
    "A daily digest of the best links on creativity, AI, music, and technology. Curated by Seth Goldstein and Ian Rogers.",
}

export default function LinksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[640px] mx-auto px-6 py-24 md:py-32">
          <div className="animate-fade-in">
            <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-6">
              Daily Newsletter
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Let's Vibe! Links
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed">
              A daily digest of the best links on creativity, AI, music, and
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[640px] mx-auto px-6 py-20">
          <div className="animate-fade-in-delay-1">
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-4">Subscribe</h2>
              <p className="text-[var(--muted)] leading-relaxed">
                Join us every morning. One email, no spam, unsubscribe anytime.
              </p>
            </div>

            <SubscribeForm />

            <p className="text-sm text-[var(--muted)] mt-6">
              Curated by{" "}
              <a
                href="https://twitter.com/seth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Seth
              </a>{" "}
              &{" "}
              <a
                href="https://twitter.com/iancr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                Ian
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[640px] mx-auto px-6 py-20">
          <div className="animate-fade-in-delay-2">
            <h2 className="text-2xl font-light mb-10">What you'll get</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-medium mb-1">Articles & Essays</h3>
                  <p className="text-[var(--muted)]">
                    Deep thinking on AI, creativity, and the future of making things
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h3 className="font-medium mb-1">Tools & Resources</h3>
                  <p className="text-[var(--muted)]">
                    The best new tools for vibe coding and creative work
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-medium mb-1">Videos & Podcasts</h3>
                  <p className="text-[var(--muted)]">
                    Conversations and tutorials worth your time
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-2xl">🐦</span>
                <div>
                  <h3 className="font-medium mb-1">Tweets & Threads</h3>
                  <p className="text-[var(--muted)]">
                    The best of what people are sharing in the community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[var(--surface-dark)] text-white">
        <div className="max-w-[640px] mx-auto px-6 py-20">
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 italic">
            "No algorithms. No ads. Just the good stuff."
          </blockquote>
        </div>
      </section>
    </div>
  )
}
