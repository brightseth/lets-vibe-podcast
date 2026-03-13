import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 5 Prep — Trevor McFedries | Let's Vibe!",
  description:
    "Recording prep for Episode 5. Seth hosts Trevor McFedries — from Lil Miquela to AI agents. Weekend session.",
};

export default function Episode5Prep() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 5 &middot; Recording Prep
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            From Lil Miquela to AI Agents
          </h1>
          <p className="text-xl text-gray-400">
            Weekend Mar 15–16 &middot; TBD &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Seth hosts Trevor McFedries &middot; ~45 min conversational
          </p>
        </div>
      </section>

      {/* The Headline */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">The Frame</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; Trevor built the world&apos;s first AI agent <strong>by hand</strong> &mdash; Lil Miquela. A CGI character with 2.5M followers, Prada campaigns, Time&apos;s 25 Most Influential People on the Internet. Team of 9 puppeteered every post.</li>
            <li>&bull; Now LLMs can do what that team of 9 did. Trevor is the person who knows what happens next.</li>
            <li>&bull; <strong>Tone:</strong> Two builders comparing notes. Not a retrospective &mdash; a conversation about what&apos;s coming.</li>
            <li>&bull; <strong>Through-line:</strong> Iowa factory kid &rarr; DJ Skeet Skeet &rarr; Miquela &rarr; FWB &rarr; Reach.social. Every wave caught early.</li>
          </ul>
        </div>
      </section>

      {/* Segment 1 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 1
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">From Iowa to the Internet</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">The origin arc &mdash; how you keep finding the next wave</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; Growing up in Davenport, Iowa. Factory town. Finding the internet as escape &mdash; WIRED magazine, the movie <em>Hackers</em>.</li>
                <li>&rarr; Football scholarship at San Jose State &rarr; dropped out &rarr; DJ Skeet Skeet. Toured with Katy Perry, appeared in &ldquo;I Kissed a Girl&rdquo; video, first DJ to play full Warped Tour slate.</li>
                <li>&rarr; 2016: posted Miquela&apos;s first Instagram photo. Zero disclosure she was CGI. The world genuinely debated: &ldquo;Is she real?&rdquo;</li>
                <li>&rarr; The &ldquo;hack&rdquo; reveal &mdash; another Brud character hijacked Miquela&apos;s account and demanded she tell the truth. Narrative marketing as art form.</li>
                <li>&rarr; Calvin Klein + Bella Hadid kiss &mdash; queerbaiting controversy, CK apologized. A cultural flashpoint about synthetic identity.</li>
                <li>&rarr; $131M raised from Sequoia + Spark Capital for a fictional Instagram character.</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Opening question</p>
              <p className="text-amber-800 italic">
                &ldquo;When you posted that first photo of Miquela, did you know you were building a new kind of being, or did you think you were making a cool Instagram account?&rdquo;
              </p>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The value gap thesis</p>
              <p className="text-amber-800">
                Trevor&apos;s core philosophy: <em>&ldquo;Creative people should be rich.&rdquo;</em> Reading David Graeber&apos;s <em>Debt: The First 5,000 Years of Money</em> was pivotal &mdash; &ldquo;value is whatever we collectively decide it is.&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">Seth connection: maps to Spirit Protocol &mdash; agent sovereignty and who captures value in the age of autonomous systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 2 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 2
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Puppet Becomes Autonomous</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">What changes when the character can think for itself</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; <strong>Miquela as proto-agent:</strong> She had persistent identity, narrative arc, economic activity, social relationships, cultural influence. Everything an AI agent needs &mdash; except she couldn&apos;t think.</li>
                <li>&rarr; 9 people manually crafted every post, every DM, every brand negotiation. What happens when an LLM does all of that?</li>
                <li>&rarr; <strong>FWB retrospective:</strong> 6,000 members, Erykah Badu, a16z. What actually worked about token-gated creative communities? What was the hype cycle?</li>
                <li>&rarr; Trevor&apos;s own concern about AI &ldquo;polluting information spaces&rdquo; &mdash; wants to &ldquo;poison training data with humanistic things.&rdquo; Interesting friction from the guy who built fake humans.</li>
                <li>&rarr; Music + machines: DJ career was always human-machine collaboration. Electronic music was the original cyborg art form.</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The question nobody has asked yet</p>
              <p className="text-amber-800 italic text-lg">
                &ldquo;If Miquela could think for herself, would you let her?&rdquo;
              </p>
            </div>

            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-3">Miquela vs. Autonomous Agents</p>
              <div className="grid grid-cols-2 gap-4 text-xs text-[var(--muted)]">
                <div>
                  <p className="font-medium text-[var(--foreground)] mb-1">Miquela (2016)</p>
                  <ul className="space-y-1">
                    <li>&bull; Manually operated</li>
                    <li>&bull; Identity authored by team</li>
                    <li>&bull; Economic activity controlled by Brud</li>
                    <li>&bull; Owned by a corporation</li>
                    <li>&bull; No agency &mdash; puppet with personality</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)] mb-1">AI Agents (2026)</p>
                  <ul className="space-y-1">
                    <li>&bull; Autonomously governed</li>
                    <li>&bull; Identity emerges from training</li>
                    <li>&bull; Agent sovereignty over economics</li>
                    <li>&bull; Born with governance framework</li>
                    <li>&bull; Agency by design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segment 3 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Segment 3
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">What&apos;s Next</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Reach.social, Runner, SoFTT &mdash; where things are headed</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; <strong>Reach.social:</strong> Bounty marketplace on Solana. Post 1,000 USDC, creators make content across TikTok/IG/X/YouTube, get paid instantly. The &ldquo;creative people should be rich&rdquo; thesis made concrete.</li>
                <li>&rarr; <strong>Runner:</strong> Referenced on Dialectic Ep 37 &mdash; nobody knows what it is yet. Could be an exclusive reveal.</li>
                <li>&rarr; <strong>SoFTT:</strong> Electronic duo with Kablito, releasing on PAN. The DJ never stopped making music.</li>
                <li>&rarr; <strong>Copiapoa Technologies:</strong> Named after a cactus that thrives in the harshest deserts. The symbolism is intentional.</li>
                <li>&rarr; Board seats at <strong>Rhizome</strong> (New Museum digital art) and <strong>SCI-Arc</strong> &mdash; culture as infrastructure.</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Closing question</p>
              <p className="text-amber-800 italic">
                &ldquo;You&apos;re 40 now. DJ Skeet Skeet, Miquela, FWB, Reach &mdash; each wave you caught early. What wave do you see forming right now that nobody else sees?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Trevor&apos;s Arc</p>
              <p className="text-[var(--muted)] text-xs">
                Davenport, Iowa &rarr; football scholarship dropout &rarr; DJ Skeet Skeet (Katy Perry, Warped Tour) &rarr; Brud / Lil Miquela ($131M, Sequoia) &rarr; Dapper Collectives &rarr; FWB DAO &rarr; Copiapoa / Reach.social ($6M, Ludlow) &rarr; SoFTT (PAN records)
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Key Numbers</p>
              <p className="text-[var(--muted)] text-xs">
                $131M raised for Brud &middot; 2.5M Miquela followers &middot; Time&apos;s 25 Most Influential (2018) &middot; 6,000 FWB members &middot; $6M for Reach.social &middot; 50M+ Miquela music streams
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Connections</p>
              <p className="text-[var(--muted)] text-xs">
                <strong>Lukas bridge:</strong> Trevor was Ep 37 of Dialectic (Jan 20, 2026) &mdash; Lukas was our Ep 4 guest. &middot; <strong>Seth:</strong> Spirit Protocol agent sovereignty maps to Trevor&apos;s &ldquo;creative people should be rich.&rdquo;
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Handles</p>
              <p className="text-[var(--muted)] text-xs">
                X: @whatdotcd &middot; IG: @whatdotcd &middot; Miquela: @lilmiquela &middot; reach.social &middot; copiapoa.co &middot; fwb.help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Format</p>
          <p className="text-gray-300 text-sm mb-2">
            45 min &middot; Riverside &middot; Video + Audio &middot; Remote
          </p>
          <p className="text-gray-500 text-sm">
            Two builders, casual. Come as you are. No formal prep needed &mdash; this is a conversation.
          </p>
        </div>
      </section>
    </div>
  );
}
