import type { Metadata } from "next"
import Link from "next/link"
import { unsubscribe } from "@/actions/subscribers"

export const metadata: Metadata = {
  title: "Unsubscribe | Let's Vibe! Links",
  robots: "noindex, nofollow",
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; token?: string }>
}) {
  const { email, token } = await searchParams

  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-light mb-4">Invalid Link</h1>
          <p className="text-[var(--muted)] mb-8">
            This unsubscribe link is invalid.
          </p>
          <Link href="/" className="text-[var(--accent)] hover:underline">
            Go home
          </Link>
        </div>
      </div>
    )
  }

  const result = await unsubscribe(email, token)

  if (result.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-light mb-4">Oops!</h1>
          <p className="text-[var(--muted)] mb-8">{result.error}</p>
          <Link href="/" className="text-[var(--accent)] hover:underline">
            Go home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-light mb-4">Unsubscribed</h1>
        <p className="text-[var(--muted)] mb-2">
          You've been removed from Let's Vibe! Links.
        </p>
        <p className="text-[var(--muted)] mb-8">We'll miss you!</p>
        <Link
          href="/links"
          className="text-[var(--accent)] hover:underline"
        >
          Changed your mind? Subscribe again
        </Link>
      </div>
    </div>
  )
}
