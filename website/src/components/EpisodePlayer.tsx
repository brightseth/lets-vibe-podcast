"use client";

import { useState } from "react";
import { YouTubeEmbed, extractYouTubeId } from "./embeds/YouTubeEmbed";
import { SpotifyEmbed, extractSpotifyEpisodeId } from "./embeds/SpotifyEmbed";

interface EpisodePlayerProps {
  youtubeUrl?: string;
  spotifyUrl?: string;
  appleUrl?: string;
  title?: string;
}

type TabId = "video" | "spotify" | "apple";

export function EpisodePlayer({ youtubeUrl, spotifyUrl, appleUrl, title }: EpisodePlayerProps) {
  // Determine which tabs are available
  const youtubeId = youtubeUrl ? extractYouTubeId(youtubeUrl) : null;
  const spotifyId = spotifyUrl ? extractSpotifyEpisodeId(spotifyUrl) : null;

  // Default to video if available, otherwise spotify
  const defaultTab: TabId = youtubeId ? "video" : spotifyId ? "spotify" : "apple";
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab);

  // If nothing to show, return null
  if (!youtubeId && !spotifyId && !appleUrl) {
    return null;
  }

  const tabs: { id: TabId; label: string; available: boolean }[] = [
    { id: "video", label: "Video", available: !!youtubeId },
    { id: "spotify", label: "Spotify", available: !!spotifyId },
    { id: "apple", label: "Apple", available: !!appleUrl },
  ];

  const availableTabs = tabs.filter((t) => t.available);

  return (
    <div className="bg-[var(--surface)] rounded-xl overflow-hidden">
      {/* Tab Header */}
      {availableTabs.length > 1 && (
        <div className="flex border-b border-[var(--border)]">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-[var(--foreground)] bg-[var(--background)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "video" && youtubeId && (
          <YouTubeEmbed videoId={youtubeId} title={title} />
        )}

        {activeTab === "spotify" && spotifyId && (
          <SpotifyEmbed episodeId={spotifyId} />
        )}

        {activeTab === "apple" && appleUrl && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <p className="text-[var(--muted)] text-center">
              Apple Podcasts doesn&apos;t support embeds.
            </p>
            <a
              href={appleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Open in Apple Podcasts
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
