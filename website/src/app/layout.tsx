import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Let's Vibe! - A podcast for creative folks learning to vibe code",
  description: "Weekly conversations with creators shaping AI-assisted creativity. Hosted by Seth Goldstein and Lukas Amacher.",
  openGraph: {
    title: "Let's Vibe! Podcast",
    description: "TED Talks for vibe coders. Weekly conversations with creators shaping AI-assisted creativity.",
    url: "https://letsvibe.fm",
    siteName: "Let's Vibe!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Vibe! Podcast",
    description: "TED Talks for vibe coders. Weekly conversations with creators shaping AI-assisted creativity.",
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
