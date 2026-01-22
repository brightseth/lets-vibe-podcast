import { Resend } from 'resend'

// Lazy-loaded Resend client instance
let resendClient: Resend | null = null

export function getResend(): Resend {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }
    resendClient = new Resend(process.env.RESEND_API_KEY)
  }
  return resendClient
}

// Default from email address
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'links@letsvibe.fm'

// Helper to send emails with consistent formatting
export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string | string[]
  subject: string
  react: React.ReactElement
}) {
  return getResend().emails.send({
    from: FROM_EMAIL,
    to,
    subject,
    react,
  })
}
