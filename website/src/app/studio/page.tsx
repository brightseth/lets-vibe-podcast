import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Vibe Studio — The Production Pipeline",
  description:
    "How we turn a transcript into show notes, chapters, social content, and a website update in 60 seconds.",
};

const pipelineSteps = [
  {
    label: "Parse",
    detail: "Riverside JSON, timestamped text, or raw transcript",
    color: "var(--accent)",
  },
  { label: "Title", detail: "Episode title from conversation arc", color: "var(--accent-warm)" },
  { label: "Show Notes", detail: "Narrative summary, not bullet points", color: "var(--accent)" },
  { label: "Chapters", detail: "8-14 timestamped chapter markers", color: "var(--accent-warm)" },
  { label: "Topics", detail: "4-7 discovery tags for SEO", color: "var(--accent)" },
  { label: "Description", detail: "2-3 sentences for Spotify / Apple", color: "var(--accent-warm)" },
  { label: "Links", detail: "Every tool, book, and resource mentioned", color: "var(--accent)" },
  { label: "Quotes", detail: "5-8 shareable moments for social cards", color: "var(--accent-warm)" },
];

const socialOutputs = [
  { platform: "Twitter", detail: "Announcement + 4-6 tweet thread" },
  { platform: "Farcaster", detail: "Community-focused announcement" },
  { platform: "LinkedIn", detail: "Professional framing, 1-2 paragraphs" },
  { platform: "YouTube", detail: "Full description with chapters baked in" },
  { platform: "Website", detail: "episodes.ts auto-updated + validated" },
];

const phases = [
  {
    number: 1,
    title: "Content Pipeline",
    status: "Built",
    description:
      "Transcript in, everything out. Show notes, chapters, social posts, YouTube description, website update. One command.",
  },
  {
    number: 2,
    title: "Media Processing",
    status: "Next",
    description:
      "Local ffmpeg on the Mac Studio. Audio normalization, clip extraction, multi-aspect-ratio export. The EditPlan is a JSON cut list — human-reviewable, AI-generated, version-controllable.",
  },
  {
    number: 3,
    title: "Platform APIs",
    status: "Future",
    description:
      "Direct upload to YouTube with chapters, Twitter with video, auto-deploy to Vercel. The last manual steps disappear.",
  },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-widest text-[var(--muted)] mb-4">
            Production Pipeline
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let&apos;s Vibe Studio
          </h1>
          <p className="text-xl text-[var(--muted)] leading-relaxed mb-4">
            Publishing Episode 2 took 3 hours of manual work after the recording.
            The transcript existed&mdash;but everything downstream was done by hand.
          </p>
          <p className="text-xl leading-relaxed">
            So we built a pipeline. Drop a transcript, get everything. 60 seconds.
          </p>
        </div>
      </section>

      {/* The Insight */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-dark)] text-white">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
            &ldquo;The transcript is the edit. Text-based editing is structured data
            an AI can operate on.&rdquo;
          </blockquote>
          <p className="mt-6 text-gray-500">
            Every downstream artifact&mdash;show notes, social posts, chapters&mdash;is
            a transformation of the transcript.
          </p>
        </div>
      </section>

      {/* Pipeline Diagram */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-4">What happens when you drop a transcript</h2>
          <p className="text-[var(--muted)] mb-12">
            9 Claude API calls. Steps 2-8 run in parallel.
          </p>

          {/* Input */}
          <div className="mb-8">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "var(--surface-dark)", color: "white" }}
            >
              Transcript (any format)
            </div>
          </div>

          {/* Arrow */}
          <div className="ml-8 h-8 border-l-2 border-[var(--border)]" />

          {/* Steps */}
          <div className="space-y-3 mb-8">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
                <div className="flex-1 flex items-baseline gap-2">
                  <span className="font-medium" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                    {step.label}
                  </span>
                  <span className="text-sm text-[var(--muted)]">&mdash; {step.detail}</span>
                </div>
                {i >= 1 && i <= 7 && (
                  <span className="text-xs text-[var(--muted)] bg-[var(--surface)] px-2 py-0.5 rounded-full flex-shrink-0">
                    parallel
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="ml-8 h-8 border-l-2 border-[var(--border)]" />

          {/* Social outputs */}
          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wide text-[var(--muted)] mb-4">
              Then generates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {socialOutputs.map((output) => (
                <div
                  key={output.platform}
                  className="p-4 bg-[var(--surface)] rounded-lg"
                >
                  <div className="font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                    {output.platform}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{output.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Command */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-8">One command</h2>
          <div
            className="p-6 rounded-lg overflow-x-auto"
            style={{
              background: "var(--surface-dark)",
              color: "#e7e5e4",
              fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ color: "#78716c" }}># Full pipeline</div>
            <div>
              <span style={{ color: "#fbbf24" }}>npx tsx</span> src/pipeline/post-recording.ts \
            </div>
            <div>
              {"  "}--transcript ../transcripts/ep3.txt \
            </div>
            <div>
              {"  "}--episode 3 \
            </div>
            <div>
              {"  "}--guest <span style={{ color: "#a3e635" }}>&quot;Simon Willison&quot;</span> \
            </div>
            <div>
              {"  "}--guest-handle <span style={{ color: "#a3e635" }}>&quot;@simonw&quot;</span> \
            </div>
            <div>
              {"  "}--date <span style={{ color: "#a3e635" }}>&quot;Feb 12, 2026&quot;</span>
            </div>
            <div className="mt-4" style={{ color: "#78716c" }}>
              # Or just show notes
            </div>
            <div>
              <span style={{ color: "#fbbf24" }}>npm run</span> pipeline:notes -- --transcript ep3.txt
            </div>
            <div className="mt-4" style={{ color: "#78716c" }}>
              # Dry run (generate but don&apos;t touch the website)
            </div>
            <div>
              <span style={{ color: "#fbbf24" }}>npx tsx</span> src/pipeline/post-recording.ts \
            </div>
            <div>
              {"  "}--transcript ep3.txt --episode 3 --dry-run
            </div>
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-4">What you get</h2>
          <p className="text-[var(--muted)] mb-8">
            Four files in <code style={{ fontFamily: "monospace", fontSize: "0.9em", background: "var(--surface)", padding: "2px 6px", borderRadius: "4px" }}>output/</code>, plus the website auto-updated.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-[var(--surface)] rounded-lg">
              <div className="text-2xl flex-shrink-0" style={{ fontFamily: "monospace", lineHeight: 1 }}>{"{}"}</div>
              <div>
                <div className="font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  ep3-pipeline-output.json
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Complete structured output. Title, show notes, chapters, topics, links, quotes, all social content.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--surface)] rounded-lg">
              <div className="text-2xl flex-shrink-0" style={{ lineHeight: 1 }}>&#9654;</div>
              <div>
                <div className="font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  ep3-youtube-description.txt
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Ready to paste. Chapters, links, subscribe CTA all formatted.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--surface)] rounded-lg">
              <div className="text-2xl flex-shrink-0" style={{ lineHeight: 1 }}>&#120143;</div>
              <div>
                <div className="font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  ep3-tweets.md
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Announcement, thread, and quote cards. Copy, paste, post.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[var(--surface)] rounded-lg">
              <div className="text-2xl flex-shrink-0" style={{ lineHeight: 1 }}>&#128197;</div>
              <div>
                <div className="font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  ep3-social-calendar.md
                </div>
                <div className="text-sm text-[var(--muted)]">
                  Day-by-day content plan. Release day through day 6.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-12">Roadmap</h2>
          <div className="space-y-8">
            {phases.map((phase) => (
              <div key={phase.number} className="flex gap-6">
                <div className="flex-shrink-0 w-20">
                  <div
                    className="text-xs uppercase tracking-wide px-2 py-1 rounded-full text-center"
                    style={{
                      background:
                        phase.status === "Built"
                          ? "var(--accent)"
                          : phase.status === "Next"
                            ? "var(--surface)"
                            : "var(--surface)",
                      color:
                        phase.status === "Built"
                          ? "white"
                          : "var(--muted)",
                      border:
                        phase.status !== "Built"
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  >
                    {phase.status}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                    Phase {phase.number}: {phase.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EditPlan Concept */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-4">The EditPlan concept</h2>
          <p className="text-[var(--muted)] mb-8">
            Phase 2 introduces the EditPlan&mdash;a JSON intermediate between AI analysis and
            CPU-intensive media work. Claude reads the transcript, proposes cuts and segments.
            You review. ffmpeg executes.
          </p>
          <div
            className="p-6 rounded-lg overflow-x-auto"
            style={{
              background: "var(--surface-dark)",
              color: "#e7e5e4",
              fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
              fontSize: "13px",
              lineHeight: "1.6",
            }}
          >
            <div style={{ color: "#78716c" }}>// Human-reviewable. AI-generated. Version-controllable.</div>
            <div>{"{"}</div>
            <div>{"  "}<span style={{ color: "#a3e635" }}>&quot;segments&quot;</span>: [</div>
            <div>{"    "}{"{"} <span style={{ color: "#a3e635" }}>&quot;action&quot;</span>: <span style={{ color: "#fbbf24" }}>&quot;keep&quot;</span>, <span style={{ color: "#a3e635" }}>&quot;start&quot;</span>: 0, <span style={{ color: "#a3e635" }}>&quot;end&quot;</span>: 180 {"}"},</div>
            <div>{"    "}{"{"} <span style={{ color: "#a3e635" }}>&quot;action&quot;</span>: <span style={{ color: "#fbbf24" }}>&quot;cut&quot;</span>, <span style={{ color: "#a3e635" }}>&quot;start&quot;</span>: 180, <span style={{ color: "#a3e635" }}>&quot;end&quot;</span>: 195,</div>
            <div>{"      "}<span style={{ color: "#a3e635" }}>&quot;reason&quot;</span>: <span style={{ color: "#fbbf24" }}>&quot;dead air + throat clear&quot;</span> {"}"},</div>
            <div>{"    "}{"{"} <span style={{ color: "#a3e635" }}>&quot;action&quot;</span>: <span style={{ color: "#fbbf24" }}>&quot;keep&quot;</span>, <span style={{ color: "#a3e635" }}>&quot;start&quot;</span>: 195, <span style={{ color: "#a3e635" }}>&quot;end&quot;</span>: 2400 {"}"}</div>
            <div>{"  "}]</div>
            <div>{"}"}</div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h2 className="text-2xl font-light mb-8">The target</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-baseline">
              <span className="text-[var(--muted)] w-28 flex-shrink-0" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Before
              </span>
              <span className="text-lg">3 hours of manual post-production</span>
            </div>
            <div className="flex gap-6 items-baseline">
              <span className="text-[var(--muted)] w-28 flex-shrink-0" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Phase 1
              </span>
              <span className="text-lg">60 seconds + 15 min review</span>
            </div>
            <div className="flex gap-6 items-baseline">
              <span className="text-[var(--muted)] w-28 flex-shrink-0" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Phase 3
              </span>
              <span className="text-lg">Record. Review. One button. Published everywhere.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section>
        <div className="max-w-[700px] mx-auto px-6 py-24 text-center">
          <p className="text-lg text-[var(--muted)] mb-6">
            Built with Claude Code. Transcript is the source of truth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/"
              className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Back to letsvibe.fm
            </a>
            <a
              href="/episodes"
              className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-[var(--surface)] transition-colors"
            >
              Episodes
            </a>
          </div>
          <p className="text-xs text-[var(--muted)] mt-8">
            Last updated Feb 6, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
