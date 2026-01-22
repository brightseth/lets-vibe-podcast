export default function Backstage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Behind the Scenes
          </p>
          <h1 className="text-4xl font-light">Let's Vibe! Infrastructure</h1>
          <p className="text-gray-400 mt-4">
            What we've built to run the podcast as an AI-powered media operation.
          </p>
        </div>
      </header>

      {/* The Opportunity */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-6">The Opportunity</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Vibe coding is having its Netscape moment. Millions have heard the term but don't know how to start.
            </p>
            <p className="text-gray-400">
              There's no authoritative voice contextualizing what's happening — just scattered tutorials and hype.
              <strong className="text-white"> Let's Vibe!</strong> fills that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Target Audience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-900/20 border border-green-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 text-green-400">Who This Is For</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Artists who want to build but never coded</li>
                <li>• Founders who want to ship faster</li>
                <li>• Executives trying to understand the shift</li>
                <li>• Musicians, designers, writers exploring AI</li>
                <li>• Curious creatives who've heard "vibe coding"</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 text-red-400">Who This Is NOT For</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hardcore developers (they don't need us)</li>
                <li>• Crypto Twitter / meme coin crowd</li>
                <li>• Tutorial junkies (plenty of YouTube)</li>
                <li>• AI researchers and academics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Tone:</strong> Acquired meets Oprah — sophisticated but warm, practical not theoretical.
              Rick Rubin aesthetic — contemplative, minimal, high signal.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Architecture</h2>
          <pre className="bg-gray-900 p-6 rounded-lg text-sm overflow-x-auto text-gray-300">
{`┌─────────────────────────────────────────────────────────────┐
│                     letsvibe.fm                              │
│                   Next.js on Vercel                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Vercel AI Gateway                          │
│          Caching, rate limiting, observability               │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                       Supabase                               │
│            Database + Auth + File Storage                    │
│       Episodes, Clips, Guests, Transcripts                   │
└─────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </section>

      {/* Agent System */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-4">Multi-Agent System</h2>
          <p className="text-gray-400 mb-8">
            Four specialized agents coordinate through an orchestrator to automate podcast production.
          </p>

          <pre className="bg-gray-900 p-6 rounded-lg text-sm overflow-x-auto text-gray-300 mb-8">
{`┌─────────────────────────────────────────────────────────────┐
│                      ORCHESTRATOR                            │
│    Routes tasks • Coordinates workflows • Classifies intent  │
└─────────────────────────────────────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
       ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  🎤 BOOKING     │  │  🔬 RESEARCH    │  │  📣 PROMOTION   │
│                 │  │                 │  │                 │
│ • Guest search  │  │ • Guest prep    │  │ • Show notes    │
│ • Outreach DMs  │  │ • Talking points│  │ • Clip finder   │
│ • Scheduling    │  │ • Trend analysis│  │ • Social posts  │
│ • Pre-briefs    │  │ • Competitive   │  │ • Content cal   │
└─────────────────┘  └─────────────────┘  └─────────────────┘
       │
       ▼
┌─────────────────┐
│ 🤝 PARTNERSHIPS │
│                 │
│ • Sponsors      │
│ • Collaborations│
│ • Revenue       │
└─────────────────┘`}
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span>🎤</span> Booking Agent
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Searches for potential guests across platforms</li>
                <li>• Generates personalized outreach messages</li>
                <li>• Manages scheduling via Cal.com integration</li>
                <li>• Creates pre-interview briefs for hosts</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span>🔬</span> Research Agent
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Deep research on confirmed guests</li>
                <li>• Generates talking points and questions</li>
                <li>• Monitors trends in vibe coding space</li>
                <li>• Competitive intelligence on other podcasts</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span>📣</span> Promotion Agent
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Generates show notes from transcripts</li>
                <li>• Identifies viral clip moments</li>
                <li>• Drafts social posts for all platforms</li>
                <li>• Creates content calendars</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <span>🤝</span> Partnerships Agent
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Identifies sponsor opportunities</li>
                <li>• Generates partnership proposals</li>
                <li>• Tracks revenue and deals</li>
                <li>• Manages collaboration requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Workflow */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Weekly Production Workflow</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Monday</span>
              <div>
                <p className="font-medium">Guest Prep</p>
                <p className="text-gray-400 text-sm">Agent generates guest research + talking points</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Tuesday</span>
              <div>
                <p className="font-medium">Record</p>
                <p className="text-gray-400 text-sm">Record episode (remote via Riverside or Ledger studio Paris)</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Wednesday</span>
              <div>
                <p className="font-medium">Edit</p>
                <p className="text-gray-400 text-sm">Edit in Descript, agent generates show notes from transcript</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-gray-900 rounded-lg">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Thursday</span>
              <div>
                <p className="font-medium">Content</p>
                <p className="text-gray-400 text-sm">Agent generates clips + social content for all platforms</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
              <span className="text-blue-400 font-mono text-sm w-24 flex-shrink-0">Friday</span>
              <div>
                <p className="font-medium text-blue-400">Publish</p>
                <p className="text-gray-400 text-sm">Episode goes live + distribute across all channels</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Human in the Loop</h3>
            <p className="text-gray-400 text-sm">
              Agents draft, humans approve. Hosts review outreach messages, approve show notes, select final clips.
              The goal is augmentation, not replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Content Opportunities */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Content Opportunities</h2>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-yellow-400">Underserved Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="font-medium mb-2">"What is MCP?"</p>
                <p className="text-gray-400 text-sm">Nobody explaining Model Context Protocol simply. It's as important as HTTP was for the web.</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="font-medium mb-2">Creative Workflow</p>
                <p className="text-gray-400 text-sm">How artists are actually using these tools day-to-day, not just demos.</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="font-medium mb-2">Business of Vibe Coding</p>
                <p className="text-gray-400 text-sm">Economics, pricing, sustainability — can you make a living this way?</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="font-medium mb-2">The Cultural Shift</p>
                <p className="text-gray-400 text-sm">Why this feels different. The philosophy, not just the technology.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Competitive Landscape</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 text-gray-400 font-normal">Podcast</th>
                    <th className="py-3 text-gray-400 font-normal">Gap We Fill</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3">Latent Space</td>
                    <td className="py-3 text-gray-500">Too technical, developer-focused</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3">Lex Fridman</td>
                    <td className="py-3 text-gray-500">Not focused on building/making</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3">TWIML</td>
                    <td className="py-3 text-gray-500">Academic, ML research heavy</td>
                  </tr>
                  <tr>
                    <td className="py-3">Dwarkesh</td>
                    <td className="py-3 text-gray-500">Great but not vibe coding specific</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              <strong className="text-white">Our lane:</strong> The intersection of creativity and AI, for makers not researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Strategy */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Sponsorship Strategy</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 text-gray-400 font-normal">Tier</th>
                  <th className="py-3 text-gray-400 font-normal">Targets</th>
                  <th className="py-3 text-gray-400 font-normal">Why They Want Us</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 font-medium text-purple-400">Platform</td>
                  <td className="py-3">Anthropic, OpenAI, Google</td>
                  <td className="py-3 text-gray-500">Premium positioning, thought leadership</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 font-medium text-blue-400">Infrastructure</td>
                  <td className="py-3">Vercel, Supabase, Replit</td>
                  <td className="py-3 text-gray-500">Developer adoption, high-intent audience</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 font-medium text-green-400">Tools</td>
                  <td className="py-3">Cursor, Descript, Riverside</td>
                  <td className="py-3 text-gray-500">Direct user acquisition</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-yellow-400">Adjacent</td>
                  <td className="py-3">Notion, Linear, Figma</td>
                  <td className="py-3 text-gray-500">Creative professional audience</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Why Sponsors Want This</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Audience of decision-makers and early adopters</li>
              <li>• High intent — people actively learning to build</li>
              <li>• Premium positioning alongside Rick Rubin / Karpathy tier guests</li>
              <li>• Not saturated like developer podcasts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Partnership Model</h2>

          <pre className="bg-gray-900 p-6 rounded-lg text-sm overflow-x-auto text-gray-300 mb-8">
{`┌─────────────────────────────────────────────────────────────┐
│                    LET'S VIBE! VENTURE                       │
└─────────────────────────────────────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
       ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  SETH + IAN     │  │  DISTRIBUTION   │  │  AGENT SYSTEM   │
│                 │  │  PARTNER        │  │                 │
│ • Hosts         │  │ • Sponsorships  │  │ • Guest research│
│ • Creative dir  │  │ • Production    │  │ • Outreach      │
│ • Guest access  │  │ • Distribution  │  │ • Show notes    │
│ • Studio access │  │ • Ad sales      │  │ • Clip gen      │
└─────────────────┘  └─────────────────┘  └─────────────────┘`}
          </pre>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Hosts Bring</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• 30+ years building on internet</li>
                <li>• Rick Rubin relationship</li>
                <li>• LVMH / Ledger network</li>
                <li>• Paris studio access</li>
                <li>• /vibe distribution</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Partner Brings</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Existing audience</li>
                <li>• Sponsorship relationships</li>
                <li>• Production expertise</li>
                <li>• Operational knowledge</li>
                <li>• Media sales capability</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Agents Handle</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Guest research</li>
                <li>• Outreach drafts</li>
                <li>• Show notes</li>
                <li>• Clip identification</li>
                <li>• Social content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Pipeline */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Guest Pipeline</h2>
          <p className="text-gray-400 mb-6">25 guests seeded across 7 tiers, managed by the agent system.</p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded font-mono">Tier 0</span>
              <div>
                <p className="font-medium">Unicorn Gets</p>
                <p className="text-gray-400 text-sm">Rick Rubin, Andrej Karpathy, Boris Cherny</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded font-mono">Tier 1</span>
              <div>
                <p className="font-medium">Vibe Coding Pioneers</p>
                <p className="text-gray-400 text-sm">steipete, Simon Willison, Pieter Levels, swyx</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded font-mono">Tier 2</span>
              <div>
                <p className="font-medium">AI Art Legends</p>
                <p className="text-gray-400 text-sm">Gene Kogan, Claire Silver, Holly Herndon, Grimes</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded font-mono">Tier 3</span>
              <div>
                <p className="font-medium">Collectors & Tastemakers</p>
                <p className="text-gray-400 text-sm">6529, Snowfro, DCinvestor</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-orange-900 text-orange-300 px-2 py-1 rounded font-mono">Tier 4</span>
              <div>
                <p className="font-medium">Creative Tool Builders</p>
                <p className="text-gray-400 text-sm">Runway, Midjourney, ElevenLabs teams</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded font-mono">Tier 5</span>
              <div>
                <p className="font-medium">Adjacent Interesting</p>
                <p className="text-gray-400 text-sm">Kevin Kelly, Craig Mod, Robin Sloan</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
              <span className="text-xs bg-pink-900 text-pink-300 px-2 py-1 rounded font-mono">Tier 6</span>
              <div>
                <p className="font-medium">Spirit/Eden Network</p>
                <p className="text-gray-400 text-sm">NODE artists, Spirit Protocol creators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Stack */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Production Stack</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 text-gray-400 font-normal">Stage</th>
                  <th className="py-3 text-gray-400 font-normal">Tool</th>
                  <th className="py-3 text-gray-400 font-normal">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3">Recording</td>
                  <td className="py-3">Riverside.fm / Ledger Studio</td>
                  <td className="py-3 text-gray-500">Remote or in-person Paris</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Editing</td>
                  <td className="py-3">Descript</td>
                  <td className="py-3 text-gray-500">Text-based editing, AI cleanup</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Clip Generation</td>
                  <td className="py-3">OpusClip + Agent</td>
                  <td className="py-3 text-gray-500">AI-powered viral clip finder</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Hosting</td>
                  <td className="py-3">Spotify for Creators</td>
                  <td className="py-3 text-gray-500">Free, handles RSS</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Distribution</td>
                  <td className="py-3">Apple, YouTube, Farcaster</td>
                  <td className="py-3 text-gray-500">Multi-platform</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3">Website</td>
                  <td className="py-3">Next.js on Vercel</td>
                  <td className="py-3 text-gray-500">letsvibe.fm</td>
                </tr>
                <tr>
                  <td className="py-3">Database</td>
                  <td className="py-3">Supabase</td>
                  <td className="py-3 text-gray-500">Episodes, guests, clips</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="border-b border-gray-800 py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Current Status</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-green-400">Built</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Website at letsvibe.fm
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Multi-agent system (4 agents + orchestrator)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Guest database (25 guests, 7 tiers)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Episode 1 outline
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Cover art generated
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Vercel team (Ian invited)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> GitHub repo connected
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-yellow-400">Pending</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Deploy Supabase (schema ready)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Register @letsvibepod on Twitter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Set up Riverside.fm room
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Book recording with Ian
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Ian's Rick Rubin ask
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Spotify for Creators setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">○</span> Finalize distribution partnership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-12">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl font-light mb-8">Launch Plan</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Jan 21-22</span>
              <div>
                <p className="font-medium">Record Episode 1</p>
                <p className="text-gray-400 text-sm">Seth + Ian, "The Vibe Coding Moment"</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Jan 23</span>
              <div>
                <p className="font-medium">Post-Production</p>
                <p className="text-gray-400 text-sm">Edit in Descript, agent generates show notes + clips</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-yellow-400 font-mono text-sm w-24 flex-shrink-0">Jan 24</span>
              <div>
                <p className="font-medium text-yellow-400">PUBLISH</p>
                <p className="text-gray-400 text-sm">NODE Public Opening (1000+ RSVPs) - maximum visibility</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Jan 25-26</span>
              <div>
                <p className="font-medium">Promote at NODE</p>
                <p className="text-gray-400 text-sm">Talks + Party - in-person audience</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Feb</span>
              <div>
                <p className="font-medium">Establish Rhythm</p>
                <p className="text-gray-400 text-sm">Episodes 2-4, weekly cadence</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Mar</span>
              <div>
                <p className="font-medium">Sponsorships</p>
                <p className="text-gray-400 text-sm">First sponsor deals closed</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-gray-500 font-mono text-sm w-24 flex-shrink-0">Q2</span>
              <div>
                <p className="font-medium">Scale</p>
                <p className="text-gray-400 text-sm">Distribution expansion, add video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-[900px] mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Let's Vibe! Backstage · Not linked from public site</p>
          <p className="mt-2">Built with Claude Code · January 2026</p>
        </div>
      </footer>
    </div>
  );
}
