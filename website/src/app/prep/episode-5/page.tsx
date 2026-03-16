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
            Episode 5 &middot; Recording Prep &middot; UPDATED Mar 15
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            From Lil Miquela to AI Agents
          </h1>
          <p className="text-xl text-gray-400">
            Saturday Mar 15 &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Seth hosts Trevor McFedries &middot; ~45 min conversational &middot; New dad energy
          </p>
        </div>
      </section>

      {/* LEVI Intel — Fresh */}
      <section className="border-b border-[var(--border)] bg-green-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-green-900 mb-3">Fresh Intel (LEVI, today)</h3>
          <ul className="space-y-2 text-green-800 text-sm">
            <li>&bull; <strong>Reach.social pitched directly to podcasters:</strong> Trevor tweeted &ldquo;If you&apos;ve got a podcast and want an army clipping your stuff and growing your audience, LMK!&rdquo; &mdash; Ask him if we should use Reach for Let&apos;s Vibe clips.</li>
            <li>&bull; <strong>Runner is still stealth.</strong> Nobody has publicly explained what it is since Dialectic Ep 37. This could be a genuine exclusive reveal.</li>
            <li>&bull; <strong>FWB launched &ldquo;Friends With Builders&rdquo;</strong> &mdash; cohort program with AWS, Alchemy, Base. First cohort focus: <strong>AI agents</strong>. Application deadline Apr 28. Two projects already have investor term sheets.</li>
            <li>&bull; <strong>SoFTT &ldquo;HaRDD&rdquo; EP</strong> dropped Mar 7, 2025 on PAN Records. Named Boiler Room &ldquo;Best of 2024.&rdquo; Origin story: therapist prescribed rave music for startup burnout. &ldquo;Teklife cures tech life.&rdquo;</li>
            <li>&bull; <strong>Fatherhood:</strong> Has a son. Told Dialectic &ldquo;parenting is gardening, not carpentry&rdquo; &mdash; you can&apos;t force a child to become the oak tree you wanted. Connect to Miquela (carpentry, every post handcrafted) vs AI agents (gardening, create conditions and let them evolve).</li>
            <li>&bull; <strong>He wants to play pro basketball</strong> in Puerto Rico or Europe. Mentioned in Interview Magazine with Jordan Wolfson. Wildly unexpected.</li>
            <li>&bull; <strong>X bio says &ldquo;is hiring DM me!&rdquo;</strong> &mdash; actively recruiting for Copiapoa/Reach.</li>
          </ul>
        </div>
      </section>

      {/* The Headline */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">The Frame</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; Trevor built the world&apos;s first AI agent <strong>by hand</strong> &mdash; Lil Miquela. A CGI character with 2.5M followers, Prada campaigns, Time&apos;s 25 Most Influential People on the Internet. Team of 9 puppeteered every post.</li>
            <li>&bull; Now LLMs can do what that team of 9 did. Trevor is the person who knows what happens next.</li>
            <li>&bull; <strong>Dialectic framework:</strong> Making &rarr; Framing &rarr; Predicting. Modernism valued creation. Postmodernism valued narrative. Today&apos;s &ldquo;belief economy&rdquo; rewards prediction. AI is the ultimate tool in each phase.</li>
            <li>&bull; <strong>Tone:</strong> Two builders comparing notes. Not a retrospective &mdash; a conversation about what&apos;s coming.</li>
          </ul>
        </div>
      </section>

      {/* Openers — Ranked by Energy */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-12">
          <h3 className="font-medium mb-6">Openers &mdash; Pick Your Energy</h3>
          <div className="space-y-4">
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Warm &amp; Light</p>
              <p className="text-amber-800 italic">
                &ldquo;Your therapist prescribed rave music for startup burnout, and now you&apos;re on PAN Records and Boiler Room. That might be the best therapist outcome in history.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Straight to Thesis</p>
              <p className="text-amber-800 italic">
                &ldquo;You literally built the first AI agent by hand. Nine people puppeteering every post, every DM, every brand deal. Now an LLM can do all of that. What goes through your head?&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Personal Bridge</p>
              <p className="text-amber-800 italic">
                &ldquo;You told Jackson on Dialectic that parenting is gardening, not carpentry. That&apos;s also a pretty good description of what&apos;s about to happen with AI agents.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Builder to Builder</p>
              <p className="text-amber-800 italic">
                &ldquo;Reach.social is a bounty marketplace for content. We run a podcast. Should we be using it?&rdquo;
              </p>
            </div>
          </div>
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
                <li>&rarr; <strong>Deep lore:</strong> Before all of this, he was in the rap group <strong>Shwayze</strong> with Cisco Adler (2008 album). Very few interviewers know this.</li>
                <li>&rarr; 2016: posted Miquela&apos;s first Instagram photo. Zero disclosure she was CGI. The world genuinely debated: &ldquo;Is she real?&rdquo;</li>
                <li>&rarr; The &ldquo;hack&rdquo; reveal &mdash; another Brud character hijacked Miquela&apos;s account and demanded she tell the truth. Narrative marketing as art form.</li>
                <li>&rarr; $131M raised from Sequoia + Spark Capital for a fictional Instagram character.</li>
                <li>&rarr; <strong>3 months with Kanye.</strong> He hasn&apos;t publicly discussed what he learned. Loaded topic but potentially revealing.</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">The value gap thesis</p>
              <p className="text-amber-800">
                Trevor&apos;s core philosophy: <em>&ldquo;Creative people should be rich.&rdquo;</em> and <em>&ldquo;Selling out is punk.&rdquo;</em> Reading David Graeber&apos;s <em>Debt: The First 5,000 Years of Money</em> was pivotal &mdash; &ldquo;value is whatever we collectively decide it is.&rdquo;
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
                <li>&rarr; <strong>Miquela as proto-agent:</strong> Persistent identity, narrative arc, economic activity ($10M+ lifetime brand revenue), social relationships, cultural influence. Everything an AI agent needs &mdash; except she couldn&apos;t think.</li>
                <li>&rarr; 9 people manually crafted every post, every DM, every brand negotiation. What happens when an LLM does all of that?</li>
                <li>&rarr; <strong>Virtual influencer market:</strong> $6B (2024) &rarr; projected $45.8B (2030). Ogilvy: AI influencers will be 30% of influencer marketing budgets in 2026.</li>
                <li>&rarr; <strong>FWB &ldquo;Friends With Builders&rdquo;:</strong> First cohort focused on AI agents. 20+ infrastructure partners (AWS, Alchemy, Base). 140 apps in pilot, 2 projects got term sheets. The arc: Trevor built the first agent by hand, now his DAO is incubating the next generation.</li>
                <li>&rarr; Trevor&apos;s concern about AI &ldquo;polluting information spaces&rdquo; &mdash; wants to &ldquo;poison training data with humanistic things.&rdquo; Interesting friction from the guy who built fake humans.</li>
                <li>&rarr; <strong>Gardening vs carpentry:</strong> Miquela was carpentry (every post handcrafted). AI agents are gardening (create conditions, let them evolve). He already uses this framework for parenting.</li>
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
                    <li>&bull; Manually operated by 9 people</li>
                    <li>&bull; Identity authored by team</li>
                    <li>&bull; $10M+ brand revenue to Brud</li>
                    <li>&bull; Owned by a corporation (now Dapper)</li>
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
          <p className="text-[var(--muted)] mb-8 text-lg">Reach, Runner, SoFTT &mdash; where things are headed</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Threads to pull</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; <strong>Reach.social:</strong> Bounty marketplace on Solana. Post 1,000 USDC, creators clip your content across TikTok/IG/X/YouTube, get paid instantly in crypto. He pitched it directly to podcasters &mdash; &ldquo;want an army clipping your stuff?&rdquo;</li>
                <li>&rarr; <strong>Runner:</strong> Still stealth. Listed as &ldquo;Founder of Runner&rdquo; in his Dialectic bio but never explained publicly. Could be a genuine exclusive.</li>
                <li>&rarr; <strong>SoFTT:</strong> Electronic duo with Kablito (Karen Freire, his partner). &ldquo;HaRDD&rdquo; EP on PAN Records. Boiler Room Best of 2024. Origin: therapist prescribed rave music. &ldquo;Teklife cures tech life.&rdquo;</li>
                <li>&rarr; <strong>Copiapoa Technologies:</strong> Named after a cactus that <em>kills off part of itself</em> to survive harsh climates. Ask: &ldquo;What have you killed off to survive this phase?&rdquo;</li>
                <li>&rarr; <strong>The gap he&apos;s filling:</strong> &ldquo;Nothing exists between bootstrapping and VC for mid-level creators needing ~$300K.&rdquo; Reach is capital formation around creative ideas.</li>
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
                Davenport, Iowa &rarr; football scholarship dropout &rarr; Shwayze (rap group, 2008) &rarr; DJ Skeet Skeet (Katy Perry, Warped Tour) &rarr; Brud / Lil Miquela ($131M, Sequoia) &rarr; Dapper acquisition (2021) &rarr; FWB DAO &rarr; Copiapoa / Reach.social ($6M, Ludlow) &rarr; SoFTT (PAN records) &rarr; Runner (stealth)
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Key Numbers</p>
              <p className="text-[var(--muted)] text-xs">
                $131M raised for Brud &middot; 2.5M Miquela followers &middot; $10M+ lifetime brand revenue &middot; Time&apos;s 25 Most Influential (2018) &middot; 6,000 FWB members &middot; $6M for Copiapoa &middot; $45.8B projected virtual influencer market (2030)
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Personal</p>
              <p className="text-[var(--muted)] text-xs">
                Born Nov 27, 1985 (age 40) &middot; Based LA/Miami &middot; Partner: Kablito (Karen Freire) &middot; New son &middot; Secret passion: pro basketball &middot; Intellectual hero: David Graeber &middot; 3 months with Kanye &middot; Reads: Debt: The First 5,000 Years
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Handles &amp; Links</p>
              <p className="text-[var(--muted)] text-xs">
                X: @whatdotcd &middot; IG: @whatdotcd &middot; Miquela: @lilmiquela &middot; reach.social &middot; copiapoa.co &middot; fwb.help &middot; Dialectic Ep 37 (Jan 20, 2026) &middot; SoFTT on Bandcamp
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
