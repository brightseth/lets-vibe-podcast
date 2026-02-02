import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clips — Let's Vibe!";
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
          Let&apos;s Vibe! &middot; Clips
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 300,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          From Email to Phone Calls
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#888",
            textAlign: "center",
            marginBottom: 48,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Building Farmer Fred: AI agent with a phone number, a voice, and a
          constitution
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          {["Origin Story", "Architecture", "Constitution", "Live Demo"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 8,
                  fontSize: 16,
                  color: "#aaa",
                }}
              >
                {label}
              </div>
            )
          )}
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
          letsvibe.fm/clips
        </div>
      </div>
    ),
    { ...size }
  );
}
