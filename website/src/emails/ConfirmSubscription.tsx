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

interface ConfirmSubscriptionProps {
  confirmUrl: string
}

export default function ConfirmSubscription({ confirmUrl }: ConfirmSubscriptionProps) {
  return (
    <Html>
      <Head />
      <Preview>Confirm your subscription to Let's Vibe! Links</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Let's Vibe! Links</Heading>
          </Section>

          <Hr style={hr} />

          <Section style={content}>
            <Text style={paragraph}>
              Thanks for subscribing to Let's Vibe! Links.
            </Text>
            <Text style={paragraph}>
              Click the button below to confirm your subscription and start receiving
              our daily curated links on creativity, AI, and technology.
            </Text>

            <Section style={buttonContainer}>
              <Link href={confirmUrl} style={button}>
                Confirm Subscription
              </Link>
            </Section>

            <Text style={smallText}>
              Or copy and paste this link into your browser:
            </Text>
            <Text style={linkText}>{confirmUrl}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              Curated by Seth & Ian
            </Text>
            <Text style={footerText}>
              <Link href="https://letsvibe.fm" style={footerLink}>
                letsvibe.fm
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
  maxWidth: "560px",
}

const header = {
  textAlign: "center" as const,
  marginBottom: "24px",
}

const h1 = {
  fontSize: "24px",
  fontWeight: "400" as const,
  color: "#1C1917",
  margin: "0",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const hr = {
  borderColor: "#E7E5E4",
  margin: "24px 0",
}

const content = {
  padding: "0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#1C1917",
  margin: "0 0 16px 0",
}

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
}

const button = {
  backgroundColor: "#92400E",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "500" as const,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const smallText = {
  fontSize: "14px",
  color: "#78716C",
  margin: "16px 0 8px 0",
}

const linkText = {
  fontSize: "12px",
  color: "#92400E",
  wordBreak: "break-all" as const,
  margin: "0",
}

const footer = {
  textAlign: "center" as const,
}

const footerText = {
  fontSize: "14px",
  color: "#78716C",
  margin: "8px 0",
}

const footerLink = {
  color: "#92400E",
  textDecoration: "none",
}
