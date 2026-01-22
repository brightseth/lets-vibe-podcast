import type { Metadata } from "next"
import Link from "next/link"
import { confirmSubscription } from "@/actions/subscribers"

export const metadata: Metadata = {
  title: "Confirm Subscription | Let's Vibe! Links",
  robots: "noindex, nofollow",
}

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>
}) {
  const { token } = await searchParams

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-light mb-4">Invalid Link</h1>
          <p className="text-[var(--muted)] mb-8">
            This confirmation link is invalid or has expired.
          </p>
          <Link
            href="/links"
            className="text-[var(--accent)] hover:underline"
          >
            Subscribe again
          </Link>
        </div>
      </div>
    )
  }

  const result = await confirmSubscription(token)

  if (result.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-light mb-4">Oops!</h1>
          <p className="text-[var(--muted)] mb-8">{result.error}</p>
          <Link
            href="/links"
            className="text-[var(--accent)] hover:underline"
          >
            Try subscribing again
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <div className="mb-6 text-5xl">✓</div>
        <h1 className="text-3xl font-light mb-4">You're in!</h1>
        <p className="text-[var(--muted)] mb-2">
          Your subscription to Let's Vibe! Links is confirmed.
        </p>
        <p className="text-[var(--muted)] mb-8">
          You'll receive your first daily digest tomorrow morning.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-warm)] transition-colors"
        >
          Back to Let's Vibe!
        </Link>
      </div>
    </div>
  )
}
