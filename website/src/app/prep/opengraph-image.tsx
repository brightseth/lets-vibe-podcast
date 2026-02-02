import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Episode 1 Prep — Ian Interviews Seth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 16,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: 24,
          }}
        >
          Let&apos;s Vibe! &middot; Episode 1 Prep
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 300,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Ian Interviews Seth
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#888",
            textAlign: "center",
            marginBottom: 48,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          131 days, 13 billion tokens, 45 repos. The Netscape Moment.
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          {[
            ["131", "days"],
            ["13.29B", "tokens"],
            ["45", "repos"],
            ["$20.8K", "Paris Photo"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px 24px",
                backgroundColor: "#111",
                borderRadius: 12,
              }}
            >
              <div style={{ display: "flex", fontSize: 28, color: "#fff", fontWeight: 300 }}>{num}</div>
              <div style={{ display: "flex", fontSize: 14, color: "#666" }}>{label}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#555",
          }}
        >
          letsvibe.fm/prep
        </div>
      </div>
    ),
    { ...size }
  );
}
