import { z } from "zod"

const linkAnalysisSchema = z.object({
  title: z.string().describe("A compelling, editorial title for the link (not the page's actual title - write something catchier and more engaging)"),
  why: z.string().describe("A thoughtful 1-2 sentence explanation of why this link deserves to be in this week's newsletter. Write in first person plural (we/our) as if Seth and Ian are recommending it. Focus on what makes this valuable, surprising, or inspiring."),
  category: z.string().describe("A descriptive category that fits the content. Be specific, e.g., 'AI Music Production', 'Creative Workflows', 'Developer Tools', 'Industry News', 'Art & Design', 'Business Strategy'"),
  contentType: z.enum(["article", "video", "tweet", "podcast", "tool", "other"]).describe("The type of content"),
  requiresLogin: z.boolean().describe("Whether the content requires a login, subscription, or paywall to view fully"),
})

export type LinkAnalysis = z.infer<typeof linkAnalysisSchema>

// Check if AI is configured
function isAIConfigured(): boolean {
  return !!process.env.AI_GATEWAY_API_KEY
}

// Detect content type from URL patterns
function detectContentType(url: string): "article" | "video" | "tweet" | "podcast" | "tool" | "other" {
  if (url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com")) {
    return "video"
  } else if (url.includes("twitter.com") || url.includes("x.com")) {
    return "tweet"
  } else if (url.includes("podcasts.apple.com") || url.includes("spotify.com/episode") || url.includes("anchor.fm")) {
    return "podcast"
  } else if (url.includes("github.com") || url.includes("npmjs.com") || url.includes("pypi.org")) {
    return "tool"
  }
  return "article"
}

// Fetch page metadata for fallback mode
async function fetchPageMetadata(url: string): Promise<{ title: string; description: string }> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LetsVibeBot/1.0)",
      },
      signal: AbortSignal.timeout(10000),
    })
    const html = await response.text()

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const title = titleMatch ? titleMatch[1].trim() : ""

    // Extract meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i) ||
                      html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i)
    const description = descMatch ? descMatch[1].trim() : ""

    return { title, description }
  } catch {
    return { title: "", description: "" }
  }
}

export async function processLinkWithAI(url: string): Promise<LinkAnalysis> {
  const contentType = detectContentType(url)

  // If AI is not configured, use fallback mode
  if (!isAIConfigured()) {
    const { title, description } = await fetchPageMetadata(url)
    const hostname = new URL(url).hostname.replace("www.", "")

    return {
      title: title || `Link from ${hostname}`,
      why: description || "We thought you'd find this interesting.",
      category: "Uncategorized",
      contentType,
      requiresLogin: false,
    }
  }

  // AI is configured - use full AI processing
  const { generateObject, gateway } = await import("ai")

  // Fetch the page content for analysis
  let pageContent = ""
  let pageTitle = ""

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LetsVibeBot/1.0)",
      },
      signal: AbortSignal.timeout(10000),
    })
    const html = await response.text()

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    pageTitle = titleMatch ? titleMatch[1].trim() : ""

    // Extract meaningful text
    pageContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .substring(0, 6000)
  } catch {
    // If fetch fails, we'll analyze just the URL
  }

  const result = await generateObject({
    model: gateway("openai/gpt-4o"),
    schema: linkAnalysisSchema,
    prompt: `Analyze this URL and page content for a daily curated newsletter called "Let's Vibe! Links" about creativity, AI, vibe coding, music, art, and technology.

URL: ${url}
${pageTitle ? `\nOriginal Page Title: ${pageTitle}` : ""}
${pageContent ? `\nPage Content Preview:\n${pageContent}` : ""}
${contentType !== "article" ? `\nDetected content type hint: ${contentType}` : ""}

Generate:
1. An engaging, editorial title (don't just copy the page title - make it interesting and catchy for newsletter readers)
2. A thoughtful 1-2 sentence "why" explanation of why this link deserves to be in this week's newsletter - write as if you're Seth and Ian recommending this to your audience
3. The most appropriate category (be specific: "AI Music Production", "Creative Workflows", "Developer Tools", "Industry News", "Art & Design", "Business Strategy", etc.)
4. The content type (article, video, tweet, podcast, tool, other)
5. Whether it requires login/subscription to access (look for paywall indicators, login prompts, "subscribe to read more", etc.)

Be creative with the title - it should make someone want to click. For the "why", focus on what makes this valuable, surprising, or inspiring.`,
  })

  return result.object
}

// Simple URL validation
export function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}
