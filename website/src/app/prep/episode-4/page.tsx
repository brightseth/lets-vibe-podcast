import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episode 4 Prep — CONTXT: Lukas Amacher & David Simon (0xfff) | Let's Vibe!",
  description:
    "Recording prep for Episode 4. Seth hosts Lukas Amacher and David Simon (0xfff) of CONTXT.",
};

export default function Episode4Prep() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Episode 4 &middot; Recording Prep
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            CONTXT &amp; The Vibecoding Collectors
          </h1>
          <p className="text-xl text-gray-400">
            Wednesday Mar 4, 12:00pm MST &middot; Riverside
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Seth hosts Lukas Amacher &amp; David Simon (0xfff) &middot; ~45 min conversational
          </p>
        </div>
      </section>

      {/* Framing */}
      <section className="border-b border-[var(--border)] bg-blue-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-blue-900 mb-3">The Frame</h3>
          <ul className="space-y-2 text-blue-800">
            <li>&bull; First episode with <strong>two outside guests</strong> &mdash; let them tell their story, you steer</li>
            <li>&bull; <strong>Tone:</strong> Three friends who&apos;ve been in the trenches of digital art together. Not a pitch meeting.</li>
            <li>&bull; CONTXT is pre-launch &mdash; this is an <strong>unveiling</strong>, not a product demo. Focus on the vision and the vibecoding journey.</li>
            <li>&bull; You&apos;re an angel investor &mdash; <strong>don&apos;t hide it</strong>, but don&apos;t make the episode an ad. Acknowledge it naturally.</li>
            <li>&bull; <strong>Don&apos;t</strong> go deep on token/fundraising mechanics on air</li>
            <li>&bull; Let the &ldquo;BCC &mdash; Before Claude Code / After Claude Code&rdquo; framing emerge naturally</li>
          </ul>
        </div>
      </section>

      {/* Opening */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Opening
            </span>
            <span className="text-[var(--muted)]">5 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Set the Stage</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">Introduce both guests, establish the world</p>

          <div className="space-y-4">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-lg leading-relaxed">
                &ldquo;Today I&apos;m joined by two people who&apos;ve been living at the intersection of art and technology for years &mdash; Lukas Amacher, who runs one of the world&apos;s most important digital art collections, and David Simon, artist known as 0xfff. They&apos;re building something called CONTXT that I think is going to change how we experience culture.&rdquo;
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Ice Breaker</p>
              <p className="text-amber-800">
                &ldquo;We were talking the other day and Lukas said something that stuck with me: &apos;It&apos;s like BCC &mdash; Before Claude Code and After Claude Code.&apos; When was your BCC moment?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act 1 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 1
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">Origin Stories</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">How two art world people became vibecoding obsessives</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;Lukas &mdash; you run the 1of1 collection. Beeple, Refik Anadol, IX Shells. How do you go from curating world-class digital art to sitting in a terminal writing code?&rdquo;</li>
                <li>&rarr; &ldquo;David &mdash; you&apos;re an artist. You make the work. What happens when you suddenly have this tool that can build anything?&rdquo;</li>
                <li>&rarr; &ldquo;You said you catch yourself three times a day going &apos;what the fuck is going on?&apos; Walk me through one of those moments.&rdquo;</li>
                <li>&rarr; &ldquo;There was a moment where it felt like we were the only ones. Now it feels like the tech bros have co-opted the narrative again. Is that fair?&rdquo;</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Key Tension (from Feb 26 call)</p>
              <p className="text-amber-800 italic">
                &ldquo;We had the counterbalance of beautiful art. Generative art, algorithms, blockchain stuff that was aesthetically, intellectually rigorous. That made me not hate myself 100% for being in the crypto world. But now the crypto art market has gotten so small there&apos;s no counterbalance.&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">This is rich territory &mdash; the cultural weight question</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <p className="text-sm font-medium mb-2">Lukas&apos;s Arc</p>
                <p className="text-[var(--muted)] text-xs">
                  Law (St. Gallen) + Philosophy (Zurich) &rarr; Projekt Interim &rarr; musician (Ethimm) &rarr; 1of1 collection at DIALECTIC &rarr; Christie&apos;s Cartography auctions &rarr; now vibecoding CONTXT
                </p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <p className="text-sm font-medium mb-2">David&apos;s Arc</p>
                <p className="text-[var(--muted)] text-xs">
                  Digital artist (0xfff) &rarr; onchain generative work &rarr; now building CONTXT&apos;s product + design system &rarr; Claude Code &rarr; Figma pipeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 2
            </span>
            <span className="text-[var(--muted)]">15 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">CONTXT: The Product</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">&ldquo;The digital version of a book is a conversation&rdquo;</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;Explain CONTXT like I&apos;m standing in MoMA and I pull out my phone.&rdquo;</li>
                <li>&rarr; &ldquo;You said voice is the magic feature. Tell me about Marlene&apos;s reaction &mdash; what happened when she started asking questions about her own exhibition?&rdquo;</li>
                <li>&rarr; &ldquo;The digital version of a book is a conversation. Unpack that.&rdquo;</li>
                <li>&rarr; &ldquo;Footnote &mdash; you&apos;re giving every artist a catalog raisonn&eacute;. That&apos;s a term that used to be reserved for Jasper Johns and David Hockney. Now anyone can have one?&rdquo;</li>
                <li>&rarr; &ldquo;Bangkok Kunsthalle sent you a 120-page PDF. What do you do with it?&rdquo;</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">Quotable Moment (from call)</p>
              <p className="text-amber-800 italic">
                &ldquo;Turn link in bio into a catalog raisonn&eacute;.&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">This landed hard in the Feb 26 call. Push for it again on mic.</p>
            </div>

            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">CONTXT Feature Map (for reference)</p>
              <ul className="space-y-1 text-[var(--muted)] text-xs">
                <li>&bull; <strong>For museums:</strong> Voice-first interaction &mdash; visitors scan QR, speak to the exhibition</li>
                <li>&bull; <strong>For artists:</strong> Footnote &mdash; automated catalog raisonn&eacute; from social feeds</li>
                <li>&bull; <strong>For galleries:</strong> Digital native touchpoint in invitation emails (not QR codes &mdash; &ldquo;no one has ever scanned a QR code&rdquo;)</li>
                <li>&bull; <strong>For publishers:</strong> &ldquo;Print the QR code in the back of your book &mdash; let people converse with it&rdquo;</li>
                <li>&bull; <strong>For visitors:</strong> Pokemon Go style archive &mdash; collect works through physical presence across venues</li>
                <li>&bull; <strong>Social layer:</strong> Strava for culture &mdash; persistent relationships between visitors and exhibitors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-[var(--surface-dark)] text-white rounded-full">
              Act 3
            </span>
            <span className="text-[var(--muted)]">10 min</span>
          </div>
          <h2 className="text-3xl font-light mb-2">The Vibecoding Practice</h2>
          <p className="text-[var(--muted)] mb-8 text-lg">How they actually build &mdash; daily workflow, unlocks, speed</p>

          <div className="space-y-6">
            <div className="p-5 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-medium mb-3">Questions</h3>
              <ul className="space-y-3 text-[var(--muted)] text-sm">
                <li>&rarr; &ldquo;Lukas, they say you&apos;re shipping features at world record pace. What does a day look like?&rdquo;</li>
                <li>&rarr; &ldquo;David &mdash; you built a Claude Code to Figma pipeline. Explain that. You run a hundred design iterations overnight?&rdquo;</li>
                <li>&rarr; &ldquo;You completed a bootstrapping process in a month that used to take months. What broke? What surprised you?&rdquo;</li>
                <li>&rarr; &ldquo;David, you said you found a way to actually use your token allowance every night. What is it?&rdquo;</li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-900 mb-2">David&apos;s Design Unlock</p>
              <p className="text-amber-800 italic">
                &ldquo;I tell Claude to read my codebase, extract a design token, and put it into Figma visualized for me. Then I run Ralph loops on interaction specifications. Tonight I&apos;ll tell Claude: do a hundred different design iterations. Tomorrow morning I pick C7.&rdquo;
              </p>
              <p className="text-amber-600 text-xs mt-2">This is a tutorial moment &mdash; actionable for listeners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spicy Territory */}
      <section className="border-b border-[var(--border)] bg-red-50">
        <div className="max-w-[700px] mx-auto px-6 py-10">
          <h3 className="font-medium text-red-900 mb-3">Spicy Territory (if time allows)</h3>
          <ul className="space-y-2 text-red-800 text-sm">
            <li>&bull; <strong>The Ick Theory:</strong> Lukas has a whole framework &mdash; cool &rarr; ick &rarr; cringe. Bouldering crossed the threshold. Has crypto? Has AI?</li>
            <li>&bull; <strong>Curiosity vs. Vanity:</strong> Lukas says the core drive is curiosity. David says it&apos;s vanity. Who&apos;s right?</li>
            <li>&bull; <strong>Does software still need scale?</strong> David&apos;s question: &ldquo;In the new age of software, do we need Snapchat-scale or is a million power users enough?&rdquo;</li>
            <li>&bull; <strong>Your sons trying to impress their girlfriends:</strong> The best framing for consumer pull. How does CONTXT reach someone who doesn&apos;t know Hans Ulrich Obrist from John Oliver?</li>
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Closing &middot; 5 min</p>
          <h3 className="text-2xl font-light mb-4">Wrap Up</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>&rarr; Where can people find CONTXT? contxt.art</p>
            <p>&rarr; Where can people find Lukas and David?</p>
            <p>&rarr; Tease upcoming &mdash; more guests, Ian returning</p>
            <p>&rarr; Subscribe, rate, share. letsvibe.fm</p>
          </div>
        </div>
      </section>

      {/* Cheat Sheet */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">1of1 Collection</p>
              <p className="text-[var(--muted)] text-xs">
                Premier NFT art collection at DIALECTIC (Zug). Beeple, Refik Anadol, IX Shells, Sarah Meyohas. Curated Christie&apos;s Cartography auctions. Not a fund &mdash; a mission-driven collectors&apos; club.
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">CONTXT Clients</p>
              <p className="text-[var(--muted)] text-xs">
                Onboarding HGK (Marlene loved it). Bangkok Kunsthalle (120-page PDF). May36 gallery (10K invitation emails/month). Pre-launch &mdash; chasing product-market fit.
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Killer Lines (from call)</p>
              <p className="text-[var(--muted)] text-xs">
                &ldquo;The digital version of a book is a conversation&rdquo; &middot; &ldquo;Turn link in bio into a catalog raisonn&eacute;&rdquo; &middot; &ldquo;BCC &mdash; Before Claude Code&rdquo; &middot; &ldquo;We always say we&apos;re too slow, even though we&apos;re really fast&rdquo;
              </p>
            </div>
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <p className="text-sm font-medium mb-2">Network Effect</p>
              <p className="text-[var(--muted)] text-xs">
                Only need 20% institutional penetration to cover 80% of shows. Art world is tightly interwoven &mdash; one institution gives you data on artists showing at five others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Record Checklist */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">Before You Hit Record</h2>
          <div className="space-y-3">
            {[
              "Water",
              "Headphones (wired if possible)",
              "Phone on airplane mode",
              "Close unnecessary apps",
              "Good lighting",
              "Check contxt.art one more time — site may have updated",
              "Breathe. You know these guys. This is a conversation between friends.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <span className="w-5 h-5 border-2 border-[var(--border)] rounded flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
