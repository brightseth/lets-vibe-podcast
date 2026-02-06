"use client";

import { useState, useCallback } from "react";

interface SpotifyEmbedProps {
  episodeId: string;
  height?: number;
}

// Extract episode ID from Spotify URL
export function extractSpotifyEpisodeId(url: string): string | null {
  const patterns = [
    /spotify\.com\/episode\/([a-zA-Z0-9]+)/,
    /spotify\.com\/embed\/episode\/([a-zA-Z0-9]+)/,
    /^([a-zA-Z0-9]{22})$/, // Already just the ID (Spotify IDs are 22 chars)
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function SpotifyEmbed({ episodeId, height = 232 }: SpotifyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Build the embed URL with dark theme
  const embedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`;

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden bg-[var(--surface)]"
      style={{ height }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-[var(--muted)]">Loading player...</div>
        </div>
      )}
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleLoad}
        loading="lazy"
        style={{ borderRadius: "12px" }}
      />
    </div>
  );
}
