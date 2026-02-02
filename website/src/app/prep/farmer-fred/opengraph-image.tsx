import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Farmer Fred Tutorial — From Email to Phone Calls";
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
          Let&apos;s Vibe! &middot; Tutorial Prep
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
          From Email to Phone Calls
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#888",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Building an AI agent people actually want to talk to
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#4ade80",
              backgroundColor: "rgba(74, 222, 128, 0.1)",
              border: "1px solid rgba(74, 222, 128, 0.3)",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            Twilio
          </div>
          <div style={{ display: "flex", color: "#444", fontSize: 18 }}>+</div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#60a5fa",
              backgroundColor: "rgba(96, 165, 250, 0.1)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            ElevenLabs
          </div>
          <div style={{ display: "flex", color: "#444", fontSize: 18 }}>+</div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#f59e0b",
              backgroundColor: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              padding: "8px 20px",
              borderRadius: 999,
            }}
          >
            Cloudflare Durable Objects
          </div>
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
          letsvibe.fm/prep/farmer-fred
        </div>
      </div>
    ),
    { ...size }
  );
}
