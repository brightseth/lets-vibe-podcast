import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Let's Vibe! - A weekly conversation about creativity in the age of AI",
  description: "Seth Goldstein and Ian Rogers talk to creative builders shipping with AI. Vibe coding, art, music, agents, and why this feels like the Netscape moment.",
  openGraph: {
    title: "Let's Vibe! — Creativity in the Age of AI",
    description: "Seth Goldstein and Ian Rogers talk to creative builders shipping with AI. Vibe coding, art, music, agents, and why this feels like the Netscape moment.",
    url: "https://letsvibe.fm",
    siteName: "Let's Vibe!",
    type: "website",
    images: [
      {
        url: "https://letsvibe.fm/og.png",
        width: 1200,
        height: 630,
        alt: "Let's Vibe! — A weekly conversation about creativity in the age of AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Vibe! — Creativity in the Age of AI",
    description: "Seth Goldstein and Ian Rogers talk to creative builders shipping with AI. Vibe coding, art, music, agents, and why this feels like the Netscape moment.",
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
      <head>
        <link rel="alternate" type="application/rss+xml" title="Let's Vibe! Podcast" href="/feed.xml" />
      </head>
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
