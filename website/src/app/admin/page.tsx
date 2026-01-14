import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin | Let's Vibe!",
  description: "Admin dashboard for Let's Vibe! podcast production.",
  robots: "noindex, nofollow",
};

// Guest pipeline data from GUESTS.md
const guestPipeline = [
  {
    tier: 0,
    name: "Unicorn Gets",
    guests: [
      { name: "Rick Rubin", twitter: "@RickRubin", status: "target", topic: "The Creative Act, creativity philosophy" },
      { name: "Andrej Karpathy", twitter: "@karpathy", status: "target", topic: "Coined 'vibe coding', AI education" },
      { name: "Boris Dayma", twitter: "@borisdayma", status: "target", topic: "Anthropic, Claude team insider" },
      { name: "Ian Rogers", twitter: "@iancr", status: "target", topic: "Ledger CEO, web3+music" },
    ],
  },
  {
    tier: 1,
    name: "Vibe Coding Pioneers",
    guests: [
      { name: "steipete", twitter: "@steipete", status: "target", topic: "Clawdbot/Clawdis, Claude Code power user" },
      { name: "Simon Willison", twitter: "@simonw", status: "target", topic: "Datasette, AI tools educator" },
      { name: "Pieter Levels", twitter: "@levelsio", status: "target", topic: "Indie hacker, Photo AI" },
      { name: "swyx", twitter: "@swyx", status: "target", topic: "Latent Space pod, AI engineering" },
      { name: "Riley Brown", twitter: "@rileybrown_ai", status: "target", topic: "Claude content creator" },
      { name: "McKay Wrigley", twitter: "@mckaywrigley", status: "target", topic: "Chatbot UI, educator" },
      { name: "Sahil Lavingia", twitter: "@shl", status: "target", topic: "Gumroad founder, AI-first building" },
    ],
  },
  {
    tier: 2,
    name: "AI Art Legends",
    guests: [
      { name: "Gene Kogan", twitter: "@genekogan", status: "target", topic: "Abraham.ai, AI art OG" },
      { name: "Claire Silver", twitter: "@clairesilver12", status: "target", topic: "AI artist, advocate" },
      { name: "Tyler Hobbs", twitter: "@tylerxhobbs", status: "target", topic: "Fidenza, generative art legend" },
      { name: "Holly Herndon", twitter: "@hollyherndon", status: "target", topic: "Holly+, AI music pioneer" },
      { name: "Refik Anadol", twitter: "@refikinadol", status: "target", topic: "Data sculpture artist" },
    ],
  },
  {
    tier: 3,
    name: "Collectors & Tastemakers",
    guests: [
      { name: "tez", twitter: "@thefunnyguysNFT", status: "confirmed", topic: "AI-optimistic building, digital art" },
      { name: "6529", twitter: "@punk6529", status: "target", topic: "OM, thought leader" },
      { name: "Snowfro", twitter: "@ArtBlocks_io", status: "target", topic: "Art Blocks founder" },
      { name: "Cozomo de' Medici", twitter: "@CozomoMedici", status: "target", topic: "Major collector" },
    ],
  },
  {
    tier: 4,
    name: "Creative Tool Builders",
    guests: [
      { name: "Cristobal Valenzuela", twitter: "@c_valenzuelab", status: "target", topic: "Runway ML CEO" },
      { name: "Mati Staniszewski", twitter: "@matistaniszewski", status: "target", topic: "ElevenLabs CEO" },
    ],
  },
];

const outreachStatus = [
  { date: "Jan 8", guest: "tez", method: "Twitter DM", response: "Yes!", status: "confirmed" },
];

const productionTools = [
  { name: "Descript", url: "https://www.descript.com/", description: "Audio/video editing, transcription" },
  { name: "Riverside.fm", url: "https://riverside.fm/", description: "Remote recording, high quality" },
  { name: "11 Labs", url: "https://elevenlabs.io/", description: "Voice cloning, audio enhancement" },
  { name: "Opus Clip", url: "https://www.opus.pro/", description: "AI clip generation for social" },
  { name: "Figma", url: "https://figma.com/", description: "Cover art, social graphics" },
];

const publishingPlatforms = [
  { name: "Spotify for Creators", url: "https://podcasters.spotify.com/", status: "setup" },
  { name: "Apple Podcasts Connect", url: "https://podcastsconnect.apple.com/", status: "setup" },
  { name: "YouTube", url: "https://studio.youtube.com/", status: "setup" },
  { name: "RSS Feed", url: "#", status: "pending" },
];

const planningDocs = [
  { name: "CLAUDE.md", path: "/Users/sethstudio1/Projects/lets-vibe-podcast/CLAUDE.md", description: "Main project overview" },
  { name: "VISION.md", path: "/Users/sethstudio1/Projects/lets-vibe-podcast/VISION.md", description: "Full positioning, dream guests" },
  { name: "GUESTS.md", path: "/Users/sethstudio1/Projects/lets-vibe-podcast/GUESTS.md", description: "Guest database & outreach" },
  { name: "OUTREACH_QUEUE.md", path: "/Users/sethstudio1/Projects/lets-vibe-podcast/OUTREACH_QUEUE.md", description: "Generated messages" },
];

const timeline = [
  { date: "Jan 8", task: "Cover art locked", status: "done" },
  { date: "Jan 15", task: "Final branding + Figma", status: "pending" },
  { date: "Jan 20", task: "Record Episode 1 (tez)", status: "pending" },
  { date: "Jan 22-26", task: "NODE Opening (content opp)", status: "pending" },
  { date: "Jan 27", task: "Record Episode 2", status: "pending" },
  { date: "Feb 3", task: "Record Episode 3", status: "pending" },
  { date: "Feb 10", task: "Launch with 3 episodes", status: "pending" },
];

const statusColors = {
  confirmed: "bg-green-100 text-green-800",
  invited: "bg-blue-100 text-blue-800",
  target: "bg-gray-100 text-gray-600",
  done: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  setup: "bg-blue-100 text-blue-800",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-2">
                Admin Dashboard
              </p>
              <h1 className="text-3xl font-bold">Let&apos;s Vibe! Production</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-[var(--muted)]">Launch Date</p>
              <p className="text-2xl font-bold text-[var(--accent)]">Feb 10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-3xl font-bold">25</p>
            <p className="text-sm text-[var(--muted)]">Guests in Pipeline</p>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-3xl font-bold text-green-600">1</p>
            <p className="text-sm text-[var(--muted)]">Confirmed</p>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-[var(--muted)]">Recorded</p>
          </div>
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-3xl font-bold">33</p>
            <p className="text-sm text-[var(--muted)]">Days to Launch</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Guest Pipeline */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-6 border-b border-[var(--border)]">
                <h2 className="text-xl font-bold">Guest Pipeline</h2>
                <p className="text-sm text-[var(--muted)]">25 guests across 5 tiers</p>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {guestPipeline.map((tier) => (
                  <div key={tier.tier} className="p-6">
                    <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide mb-4">
                      Tier {tier.tier}: {tier.name}
                    </h3>
                    <div className="space-y-3">
                      {tier.guests.map((guest) => (
                        <div
                          key={guest.name}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{guest.name}</span>
                              <a
                                href={`https://twitter.com/${guest.twitter.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--accent)] text-sm hover:underline"
                              >
                                {guest.twitter}
                              </a>
                            </div>
                            <p className="text-sm text-[var(--muted)] truncate">{guest.topic}</p>
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded ${statusColors[guest.status as keyof typeof statusColors]}`}>
                            {guest.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outreach Status */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-6 border-b border-[var(--border)]">
                <h2 className="text-xl font-bold">Outreach Log</h2>
              </div>
              <div className="p-6">
                {outreachStatus.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-[var(--muted)]">
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Guest</th>
                        <th className="pb-3">Method</th>
                        <th className="pb-3">Response</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                      {outreachStatus.map((entry, i) => (
                        <tr key={i}>
                          <td className="py-3 text-sm">{entry.date}</td>
                          <td className="py-3 font-medium">{entry.guest}</td>
                          <td className="py-3 text-sm text-[var(--muted)]">{entry.method}</td>
                          <td className="py-3">
                            <span className={`text-xs font-medium px-2 py-1 rounded ${statusColors[entry.status as keyof typeof statusColors]}`}>
                              {entry.response}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-[var(--muted)]">No outreach sent yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold">Timeline</h2>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded mt-0.5 ${statusColors[item.status as keyof typeof statusColors]}`}>
                        {item.status === 'done' ? 'Done' : 'Todo'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{item.task}</p>
                        <p className="text-xs text-[var(--muted)]">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Production Tools */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold">Production Tools</h2>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {productionTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
                    >
                      <p className="font-medium">{tool.name}</p>
                      <p className="text-xs text-[var(--muted)]">{tool.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Publishing */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold">Publishing</h2>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {publishingPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 hover:bg-[var(--surface)] rounded transition-colors"
                    >
                      <span className="text-sm font-medium">{platform.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${statusColors[platform.status as keyof typeof statusColors]}`}>
                        {platform.status}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Planning Docs */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold">Planning Docs</h2>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {planningDocs.map((doc) => (
                    <div
                      key={doc.name}
                      className="p-2 border border-[var(--border)] rounded"
                    >
                      <p className="text-sm font-mono font-medium">{doc.name}</p>
                      <p className="text-xs text-[var(--muted)]">{doc.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--muted)] mt-4">
                  Access via Claude Code: <code className="bg-[var(--surface)] px-1 rounded">cd ~/Projects/lets-vibe-podcast</code>
                </p>
              </div>
            </div>

            {/* Agent Commands */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl">
              <div className="p-4 border-b border-[var(--border)]">
                <h2 className="font-bold">Agent Commands</h2>
              </div>
              <div className="p-4">
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2 bg-[var(--surface)] rounded">
                    <code>npm run agent</code>
                    <p className="text-[var(--muted)] font-sans mt-1">System status</p>
                  </div>
                  <div className="p-2 bg-[var(--surface)] rounded">
                    <code>npm run agent:prepare &quot;Guest&quot;</code>
                    <p className="text-[var(--muted)] font-sans mt-1">Full guest prep</p>
                  </div>
                  <div className="p-2 bg-[var(--surface)] rounded">
                    <code>npm run guest:outreach</code>
                    <p className="text-[var(--muted)] font-sans mt-1">Generate outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
