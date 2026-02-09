import { episodes } from "@/data/episodes";

export async function GET() {
  const siteUrl = "https://letsvibe.fm";
  const liveEpisodes = episodes
    .filter((ep) => ep.status === "live")
    .sort((a, b) => b.number - a.number);

  const rssItems = liveEpisodes
    .map((ep) => {
      const pubDate = new Date(ep.date).toUTCString();
      const description = ep.showNotes || ep.description;
      const link = `${siteUrl}/episodes/${ep.number}`;

      return `    <item>
      <title>Episode ${ep.number}: ${escapeXml(ep.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <itunes:author>Seth Goldstein &amp; Ian Rogers</itunes:author>
      <itunes:subtitle>${escapeXml(ep.description)}</itunes:subtitle>
      <itunes:summary>${escapeXml(description)}</itunes:summary>
      <itunes:duration>${ep.duration}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Let&apos;s Vibe!</title>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Weekly conversations with creators building at the intersection of AI and creativity. Hosted by Seth Goldstein and Ian Rogers.</description>
    <language>en-us</language>
    <copyright>2026 Let&apos;s Vibe!</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

    <itunes:author>Seth Goldstein &amp; Ian Rogers</itunes:author>
    <itunes:summary>Two founders in their 50s exploring vibe coding, AI creativity, and what happens when the command line becomes the creative tool. Seth built Turntable.fm and /vibe. Ian is CXO of Ledger and interviewed Rick Rubin about The Way of Code.</itunes:summary>
    <itunes:owner>
      <itunes:name>Seth Goldstein</itunes:name>
      <itunes:email>seth@slashvibe.dev</itunes:email>
    </itunes:owner>
    <itunes:image href="${siteUrl}/cover.png"/>
    <itunes:category text="Technology"/>
    <itunes:category text="Arts">
      <itunes:category text="Design"/>
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>episodic</itunes:type>

    <image>
      <url>${siteUrl}/cover.png</url>
      <title>Let&apos;s Vibe!</title>
      <link>${siteUrl}</link>
    </image>

${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
