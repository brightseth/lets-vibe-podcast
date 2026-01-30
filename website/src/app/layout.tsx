import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Let's Vibe! - A podcast for creative folks learning to vibe code",
  description: "Weekly conversations with creators shaping AI-assisted creativity. Hosted by Seth Goldstein and Ian Rogers.",
  openGraph: {
    title: "Let's Vibe! — Creativity in the Age of AI",
    description: "Two founders in their 50s building with Claude Code. Seth Goldstein & Ian Rogers on vibe coding, AI creativity, and why this feels like the Netscape moment.",
    url: "https://letsvibe.fm",
    siteName: "Let's Vibe!",
    type: "website",
    images: [
      {
        url: "https://letsvibe.fm/og.png",
        width: 1200,
        height: 630,
        alt: "Let's Vibe! — Episode 1: The Netscape Moment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Vibe! — Creativity in the Age of AI",
    description: "Two founders in their 50s building with Claude Code. Seth Goldstein & Ian Rogers on vibe coding, AI creativity, and why this feels like the Netscape moment.",
    images: ["https://letsvibe.fm/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
