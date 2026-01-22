import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface LinkItem {
  url: string
  title: string
  description?: string | null
  why?: string | null
  category: string
  content_type: string
  requires_login: boolean
}

interface DailyDigestProps {
  digestDate: string
  links: LinkItem[]
  unsubscribeUrl: string
}

const typeIcons: Record<string, string> = {
  article: "📄",
  video: "🎬",
  tweet: "🐦",
  podcast: "🎙️",
  tool: "🛠️",
  other: "🔗",
}

export default function DailyDigest({ digestDate, links, unsubscribeUrl }: DailyDigestProps) {
  // Group links by category
  const linksByCategory = links.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = []
    }
    acc[link.category].push(link)
    return acc
  }, {} as Record<string, LinkItem[]>)

  const categories = Object.keys(linksByCategory).sort()

  return (
    <Html>
      <Head />
      <Preview>Let's Vibe! Links - {digestDate}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Let's Vibe! Links</Heading>
            <Text style={dateText}>{digestDate}</Text>
          </Section>

          <Hr style={hr} />

          {/* Links by Category */}
          {categories.map((category) => (
            <Section key={category} style={categorySection}>
              <Heading as="h2" style={h2}>
                {category}
              </Heading>
              {linksByCategory[category].map((link, i) => (
                <Section key={i} style={linkItem}>
                  <Link href={link.url} style={linkTitle}>
                    {typeIcons[link.content_type] || "🔗"} {link.title}
                  </Link>
                  {link.requires_login && (
                    <Text style={loginBadge}>🔒 Login required</Text>
                  )}
                  {link.why && (
                    <Text style={descriptionText}>{link.why}</Text>
                  )}
                </Section>
              ))}
            </Section>
          ))}

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Curated by Seth & Ian
            </Text>
            <Text style={footerLinks}>
              <Link href="https://letsvibe.fm" style={footerLink}>
                letsvibe.fm
              </Link>
              {" · "}
              <Link href={unsubscribeUrl} style={footerLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles matching the warm editorial aesthetic
const main = {
  backgroundColor: "#FAF9F6",
  fontFamily: "Georgia, 'Times New Roman', serif",
}

const container = {
  margin: "0 auto",
  padding: "40px 24px",
  maxWidth: "600px",
}

const header = {
  textAlign: "center" as const,
  marginBottom: "24px",
}

const h1 = {
  fontSize: "28px",
  fontWeight: "400" as const,
  color: "#1C1917",
  margin: "0 0 8px 0",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const dateText = {
  fontSize: "14px",
  color: "#78716C",
  margin: "0",
}

const hr = {
  borderColor: "#E7E5E4",
  margin: "32px 0",
}

const categorySection = {
  marginBottom: "32px",
}

const h2 = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#92400E",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  margin: "0 0 16px 0",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const linkItem = {
  marginBottom: "20px",
}

const linkTitle = {
  fontSize: "16px",
  color: "#1C1917",
  textDecoration: "none",
  lineHeight: "1.5",
}

const loginBadge = {
  fontSize: "12px",
  color: "#78716C",
  margin: "4px 0 0 0",
}

const descriptionText = {
  fontSize: "14px",
  color: "#78716C",
  margin: "6px 0 0 0",
  lineHeight: "1.5",
}

const footer = {
  textAlign: "center" as const,
}

const footerText = {
  fontSize: "14px",
  color: "#78716C",
  margin: "0 0 8px 0",
}

const footerLinks = {
  fontSize: "14px",
  color: "#78716C",
  margin: "0",
}

const footerLink = {
  color: "#92400E",
  textDecoration: "none",
}
