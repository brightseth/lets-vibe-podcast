import Link from 'next/link';
import Image from 'next/image';

// Placeholder data - will come from CMS/API later
const latestEpisode = {
  number: 1,
  title: "The Art of Vibecoding",
  guest: "tez",
  guestHandle: "@thefunnyguysNFT",
  description: "How one of NFT's most prolific collectors approaches AI-assisted creativity and why vibecoding is changing everything.",
  duration: "48 min",
  date: "Coming Feb 2026",
  image: "/cover.png",
};

const upcomingGuests = [
  { name: "Simon Willison", role: "Creator of Datasette, AI tools pioneer", tier: "Tier 1" },
  { name: "steipete", role: "Founder of PSPDFKit, Claude Code power user", tier: "Tier 1" },
  { name: "Gene Kogan", role: "Artist, Abraham AI founder", tier: "Tier 2" },
];

const tutorialTopics = [
  { title: "Building Your First Claude Code Project", level: "Beginner", duration: "15 min" },
  { title: "Multi-Agent Systems with Claude", level: "Intermediate", duration: "22 min" },
  { title: "From Prompt to Production", level: "Advanced", duration: "18 min" },
];

const curatedPodcasts = [
  { name: "Acquired", description: "Deep dives into great companies", url: "https://acquired.fm" },
  { name: "Lex Fridman", description: "Long-form tech conversations", url: "https://lexfridman.com/podcast" },
  { name: "a16z Podcast", description: "Tech and culture insights", url: "https://a16z.com/podcasts" },
  { name: "20 Minute VC", description: "Efficient founder interviews", url: "https://thetwentyminutevc.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-4">
                New Podcast
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Conversations with creators shaping AI-assisted creativity
              </h1>
              <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
                Let&apos;s Vibe! is a weekly podcast for creative folks learning to vibe code.
                We talk to the artists, builders, and thinkers pioneering a new way of making things.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/subscribe"
                  className="inline-flex px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </Link>
                <Link
                  href="/episodes"
                  className="inline-flex px-6 py-3 border border-[var(--border)] font-medium rounded-lg hover:border-[var(--foreground)] transition-colors"
                >
                  Browse Episodes
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/cover.png"
                alt="Let's Vibe! Podcast Cover"
                width={360}
                height={360}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-2xl font-bold">Latest Episode</h2>
            <Link href="/episodes" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              View all episodes &rarr;
            </Link>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-[var(--accent-warm)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">#{latestEpisode.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-[var(--muted)] mb-2">{latestEpisode.date} &middot; {latestEpisode.duration}</p>
                <h3 className="text-xl font-bold mb-2">{latestEpisode.title}</h3>
                <p className="text-[var(--muted)] mb-1">with {latestEpisode.guest} <span className="text-[var(--accent)]">{latestEpisode.guestHandle}</span></p>
                <p className="text-[var(--muted)] mt-4 leading-relaxed">{latestEpisode.description}</p>
                <div className="mt-6 flex gap-4">
                  <button className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-lg text-sm hover:opacity-90 transition-opacity">
                    Listen Now
                  </button>
                  <button className="px-5 py-2 border border-[var(--border)] font-medium rounded-lg text-sm hover:border-[var(--foreground)] transition-colors">
                    Show Notes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Upcoming Guests */}
            <div>
              <h2 className="text-lg font-bold mb-6">Upcoming Guests</h2>
              <div className="space-y-4">
                {upcomingGuests.map((guest) => (
                  <div key={guest.name} className="pb-4 border-b border-[var(--border)] last:border-0">
                    <p className="font-medium">{guest.name}</p>
                    <p className="text-sm text-[var(--muted)]">{guest.role}</p>
                  </div>
                ))}
              </div>
              <Link href="/about#guests" className="inline-block mt-4 text-sm text-[var(--accent)] hover:underline">
                See full guest pipeline &rarr;
              </Link>
            </div>

            {/* Tutorials */}
            <div>
              <h2 className="text-lg font-bold mb-6">Tutorials</h2>
              <div className="space-y-4">
                {tutorialTopics.map((tutorial) => (
                  <div key={tutorial.title} className="pb-4 border-b border-[var(--border)] last:border-0">
                    <p className="font-medium">{tutorial.title}</p>
                    <p className="text-sm text-[var(--muted)]">{tutorial.level} &middot; {tutorial.duration}</p>
                  </div>
                ))}
              </div>
              <Link href="/tutorials" className="inline-block mt-4 text-sm text-[var(--accent)] hover:underline">
                Browse all tutorials &rarr;
              </Link>
            </div>

            {/* Curated Learning */}
            <div>
              <h2 className="text-lg font-bold mb-6">Learn From Others</h2>
              <p className="text-sm text-[var(--muted)] mb-4">Podcasts we recommend for vibe coders:</p>
              <div className="space-y-4">
                {curatedPodcasts.map((podcast) => (
                  <a
                    key={podcast.name}
                    href={podcast.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block pb-4 border-b border-[var(--border)] last:border-0 hover:opacity-80 transition-opacity"
                  >
                    <p className="font-medium">{podcast.name}</p>
                    <p className="text-sm text-[var(--muted)]">{podcast.description}</p>
                  </a>
                ))}
              </div>
              <Link href="/learn" className="inline-block mt-4 text-sm text-[var(--accent)] hover:underline">
                Full resource library &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory CTA */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--accent-warm)] font-medium text-sm tracking-wide uppercase mb-4">
                Community
              </p>
              <h2 className="text-3xl font-bold mb-4">Vibecoding Directory</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover projects built by vibe coders. Submit your own work. Vote on what gets featured on the show.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/directory"
                  className="inline-flex px-5 py-2.5 bg-white text-black font-medium rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Browse Directory
                </Link>
                <Link
                  href="/directory/submit"
                  className="inline-flex px-5 py-2.5 border border-gray-600 font-medium rounded-lg text-sm hover:border-white transition-colors"
                >
                  Submit Project
                </Link>
              </div>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[var(--accent-warm)]">57+</p>
              <p className="text-gray-400 mt-2">projects in the directory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay in the loop</h2>
            <p className="text-[var(--muted)] mb-6">
              Get notified about new episodes, tutorials, and featured projects.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-[var(--border)] rounded-lg bg-[var(--surface)] focus:outline-none focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[var(--muted)] mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
