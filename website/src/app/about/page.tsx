import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Let's Vibe!",
  description: "Meet the hosts of Let's Vibe! podcast and learn about our mission to help creative people build with AI.",
};

const hosts = [
  {
    name: "Seth Goldstein",
    role: "Co-Host",
    bio: "Builder, collector, and technologist exploring the intersection of AI and creativity. Founder of Spirit Protocol and long-time advocate for artist autonomy. Based in San Francisco.",
    twitter: "@sethgoldstein",
    focus: ["AI agents", "Digital art", "Protocol design"],
  },
  {
    name: "Lukas Amacher",
    role: "Co-Host",
    bio: "Creative technologist and educator passionate about making AI tools accessible to non-technical creators. Believes everyone can be a builder in the age of vibecoding.",
    twitter: "@lukasamacher",
    focus: ["Creative tools", "Education", "Community"],
  },
];

const guestPipeline = [
  { tier: "Tier 0 - Unicorn Gets", guests: ["Rick Rubin", "Andrej Karpathy", "Boris Dayma", "Ian Rogers"] },
  { tier: "Tier 1 - Vibe Coding Pioneers", guests: ["steipete", "Simon Willison", "Pieter Levels", "swyx"] },
  { tier: "Tier 2 - AI Art Legends", guests: ["Gene Kogan", "Claire Silver", "Holly Herndon", "Tyler Hobbs"] },
  { tier: "Tier 3 - Collectors & Tastemakers", guests: ["tez", "6529", "Snowfro", "Cozomo de' Medici"] },
];

const values = [
  {
    title: "Practical, not theoretical",
    description: "Every episode includes real examples, tools, and techniques you can use today.",
  },
  {
    title: "Inclusive, not gatekept",
    description: "Vibecoding is for everyone. We break down complex topics for all skill levels.",
  },
  {
    title: "Optimistic, not hype",
    description: "We believe in AI's potential while staying grounded and honest about limitations.",
  },
  {
    title: "Process, not just outcomes",
    description: "We care about how people work as much as what they create.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <p className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            TED Talks for vibe coders
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
            Let&apos;s Vibe! is a weekly podcast for creative people learning to build with AI.
            We believe everyone can be a builder now, and we&apos;re here to show you how.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <div className="prose text-[var(--muted)] space-y-4">
                <p className="leading-relaxed">
                  Andrej Karpathy called it &quot;vibecoding&quot; - the practice of building software
                  through natural language conversation with AI. Rick Rubin popularized the idea that
                  anyone can create if they embrace their intuition.
                </p>
                <p className="leading-relaxed">
                  We&apos;re bringing these ideas together. Let&apos;s Vibe! is where artists learn
                  to ship, where developers find their creative voice, and where curious people
                  discover what they&apos;re capable of building.
                </p>
                <p className="leading-relaxed">
                  Each episode combines deep conversation with practical tutorials. Think Acquired
                  meets Oprah - sophisticated research with genuine warmth.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">What We Believe</h2>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.title} className="pb-6 border-b border-[var(--border)] last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hosts.map((host) => (
              <div
                key={host.name}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {host.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{host.name}</h3>
                    <p className="text-[var(--accent)]">{host.twitter}</p>
                  </div>
                </div>
                <p className="text-[var(--muted)] mb-4 leading-relaxed">
                  {host.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {host.focus.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Pipeline */}
      <section className="border-b border-[var(--border)]" id="guests">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-2xl font-bold">Guest Pipeline</h2>
            <p className="text-sm text-[var(--muted)]">25+ guests in the database</p>
          </div>
          <p className="text-[var(--muted)] mb-8 max-w-2xl">
            We&apos;re building a roster of the most interesting people in AI-assisted creativity.
            Here&apos;s who we&apos;re talking to (and who we dream of talking to).
          </p>

          <div className="space-y-8">
            {guestPipeline.map((tier) => (
              <div key={tier.tier} className="pb-8 border-b border-[var(--border)] last:border-0 last:pb-0">
                <h3 className="font-semibold text-sm text-[var(--accent)] uppercase tracking-wide mb-4">
                  {tier.tier}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tier.guests.map((guest) => (
                    <span
                      key={guest}
                      className="px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg font-medium"
                    >
                      {guest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
            <h3 className="font-semibold mb-2">Know someone we should talk to?</h3>
            <p className="text-[var(--muted)] text-sm mb-4">
              We&apos;re always looking for interesting guests. If you know someone building
              cool things with AI, or if that&apos;s you, reach out.
            </p>
            <a
              href="mailto:hello@letsvibe.fm"
              className="inline-flex px-4 py-2 border border-[var(--border)] font-medium rounded-lg text-sm hover:border-[var(--foreground)] transition-colors"
            >
              Suggest a Guest
            </a>
          </div>
        </div>
      </section>

      {/* Show Format */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8">Show Format</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6">
              <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--accent)] font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">The Opener</h3>
              <p className="text-sm text-[var(--muted)]">5-10 min</p>
              <p className="text-[var(--muted)] mt-2 text-sm leading-relaxed">
                Seth and Lukas catch up on what they&apos;ve been building, new tools they&apos;ve
                discovered, and news from the vibe coding world.
              </p>
            </div>
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6">
              <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--accent)] font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">The Interview</h3>
              <p className="text-sm text-[var(--muted)]">25-35 min</p>
              <p className="text-[var(--muted)] mt-2 text-sm leading-relaxed">
                Deep conversation with our guest about their journey, creative process,
                and philosophy on building with AI.
              </p>
            </div>
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6">
              <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[var(--accent)] font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">The Tutorial</h3>
              <p className="text-sm text-[var(--muted)]">10-15 min</p>
              <p className="text-[var(--muted)] mt-2 text-sm leading-relaxed">
                Hands-on walkthrough of a technique or tool. These become standalone
                YouTube clips for quick learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-[var(--muted)] mb-6">
              Questions, guest suggestions, partnership inquiries, or just want to say hi?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@letsvibe.fm"
                className="inline-flex px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                hello@letsvibe.fm
              </a>
              <a
                href="https://twitter.com/letsvibepod"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2.5 border border-[var(--border)] font-medium rounded-lg hover:border-[var(--foreground)] transition-colors"
              >
                @letsvibepod
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
