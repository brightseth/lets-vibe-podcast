"use client";

import { useState } from "react";

const slides = [
  {
    id: "audience",
    title: "The Audience",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <p style={{ fontSize: "1.5rem", color: "#ccc", lineHeight: 1.6 }}>
          Vibe coders are a new category: <strong style={{ color: "#fff" }}>technical creatives</strong> who
          build with AI. They ship real products, deploy to production, and spend money on developer tools.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            ["Builders", "Founders, artists, and creators shipping with Claude Code, Cursor, and AI tools daily"],
            ["Decision Makers", "CTOs, founders, and senior ICs who choose their own stack"],
            ["Web3 Native", "Crypto-literate audience deploying smart contracts, agents, and onchain apps"],
            ["High Intent", "They don't just listen — they build what they hear about on the show"],
          ].map(([label, desc]) => (
            <div key={label} style={{ padding: "1.25rem", background: "#111", borderRadius: "12px" }}>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>{label}</div>
              <div style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "reach",
    title: "The Reach",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          {[
            ["24.6K", "@seth followers"],
            ["600K+", "@mattmedved (EP) followers"],
            ["Ledger", "Ian Rogers, CXO"],
          ].map(([num, label]) => (
            <div key={label} style={{ padding: "1.5rem", background: "#111", borderRadius: "12px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 300, color: "#fff" }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.25rem" }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            ["Spotify + Apple + YouTube", "Full podcast distribution"],
            ["X / Social Clips", "1.5K views on first clip in 9 hours"],
            ["letsvibe.fm", "Website with prep notes, slides, tutorial breakdowns"],
            ["HN Audience", "Proof of Corn hit #1 on Hacker News"],
          ].map(([label, desc]) => (
            <div key={label} style={{ padding: "1rem", background: "#111", borderRadius: "12px" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff", marginBottom: "0.25rem" }}>{label}</div>
              <div style={{ fontSize: "0.8rem", color: "#888" }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "hosts",
    title: "The Hosts",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ padding: "1.5rem", background: "#111", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <img
                src="https://unavatar.io/twitter/seth"
                alt="Seth"
                style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 600, color: "#fff" }}>Seth Goldstein</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>@seth</div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#aaa", lineHeight: 1.6 }}>
              Founder of Turntable.fm, ROOT, SiteSpecific. Building /vibe (social layer for Claude Code).
              30 years building internet companies. Ships daily with Claude Code.
            </p>
          </div>
          <div style={{ padding: "1.5rem", background: "#111", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <img
                src="https://letsvibe.fm/ian.png"
                alt="Ian"
                style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 600, color: "#fff" }}>Ian Rogers</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>@iancr</div>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#aaa", lineHeight: 1.6 }}>
              CXO of Ledger. Former CDO at LVMH, founder of Topspin Media, built Beats Music.
              Interviewed Rick Rubin on Tetragrammaton. Based in Paris.
            </p>
          </div>
        </div>
        <div style={{ padding: "1.25rem", background: "#111", borderRadius: "12px" }}>
          <div style={{ fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>Executive Producer</div>
          <p style={{ fontSize: "0.875rem", color: "#aaa" }}>
            <strong style={{ color: "#fff" }}>Matt Medved</strong> — Founder of nft now, 600K+ followers.
            Former Billboard journalist. Bridges music, crypto, and culture.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "integration",
    title: "Sponsor Integration",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <p style={{ fontSize: "1.25rem", color: "#ccc", lineHeight: 1.6 }}>
          Not pre-roll ads. <strong style={{ color: "#fff" }}>Native integration</strong> that
          feels like part of the show.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            [
              "Tutorial Segment Sponsor",
              "\"This tutorial is powered by Alchemy.\" Every episode has a hands-on build segment. Your tools, demonstrated live to builders who will use them that week.",
            ],
            [
              "Prep Page Branding",
              "Every episode has a companion page on letsvibe.fm with code snippets, architecture diagrams, and links. Sponsor logo + CTA integrated into the page thousands of developers visit.",
            ],
            [
              "Clip Attribution",
              "Social clips (X, YouTube Shorts, Reels) reach beyond the podcast audience. \"Brought to you by Alchemy\" on clips that go viral in the dev community.",
            ],
            [
              "Co-created Content",
              "Build something with Alchemy tools on the show. Real integration, real code, real audience seeing your product in action.",
            ],
          ].map(([title, desc]) => (
            <div key={title} style={{ padding: "1.25rem", background: "#111", borderRadius: "12px" }}>
              <div style={{ fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>{title}</div>
              <div style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "why-alchemy",
    title: "Why Alchemy + Let's Vibe",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <p style={{ fontSize: "1.25rem", color: "#ccc", lineHeight: 1.6 }}>
          Vibe coders are the next wave of web3 developers. They build fast, ship daily,
          and need <strong style={{ color: "#fff" }}>infrastructure that just works</strong>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Vibe coders deploy smart contracts with AI — they need Alchemy's APIs from day one",
            "Our tutorial segment is hands-on: we can build with Alchemy tools live on air",
            "Ian (CXO of Ledger) brings the institutional web3 audience; Seth brings the builder audience",
            "Early sponsor = category ownership. \"The vibe coding podcast, powered by Alchemy\"",
          ].map((point, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1rem",
                background: "#111",
                borderRadius: "12px",
              }}
            >
              <div style={{ fontSize: "1.25rem", color: "#444", fontWeight: 300, flexShrink: 0, width: 28 }}>
                {i + 1}
              </div>
              <div style={{ fontSize: "1rem", color: "#ccc", lineHeight: 1.5 }}>{point}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: "1.5rem", background: "#111", borderRadius: "12px", textAlign: "center" }}>
          <div style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.5rem" }}>Let&apos;s talk</div>
          <div style={{ fontSize: "0.9rem", color: "#888" }}>
            seth@letsvibe.fm &middot; @seth on X
          </div>
        </div>
      </div>
    ),
  },
];

export default function SponsorDeck() {
  const [current, setCurrent] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Slide */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem", width: "100%" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555" }}>
              Let&apos;s Vibe! &middot; Sponsorship
            </span>
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 300,
              marginBottom: "2rem",
              letterSpacing: "-0.02em",
            }}
          >
            {slides[current].title}
          </h1>
          {slides[current].content}
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          borderTop: "1px solid #222",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          style={{
            background: "none",
            border: "1px solid #333",
            color: current === 0 ? "#333" : "#fff",
            padding: "0.5rem 1.5rem",
            borderRadius: "999px",
            cursor: current === 0 ? "default" : "pointer",
            fontSize: "0.875rem",
          }}
        >
          &larr; Back
        </button>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === current ? "#fff" : "#333",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
          disabled={current === slides.length - 1}
          style={{
            background: "none",
            border: "1px solid #333",
            color: current === slides.length - 1 ? "#333" : "#fff",
            padding: "0.5rem 1.5rem",
            borderRadius: "999px",
            cursor: current === slides.length - 1 ? "default" : "pointer",
            fontSize: "0.875rem",
          }}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
