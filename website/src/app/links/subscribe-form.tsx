"use client"

import { useState, useTransition } from "react"
import { subscribeToLinks } from "@/actions/subscribers"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    startTransition(async () => {
      const result = await subscribeToLinks(email.trim())

      if (result.error) {
        setStatus("error")
        setMessage(result.error)
      } else {
        setStatus("success")
        setMessage("Check your inbox to confirm your subscription")
        setEmail("")
      }
    })
  }

  if (status === "success") {
    return (
      <div className="relative overflow-hidden rounded-xl border border-[var(--accent)] bg-[var(--accent)]/5 p-8">
        <div className="flex items-start gap-4">
          <span className="text-2xl">✓</span>
          <div>
            <h3 className="font-medium text-[var(--accent)] mb-1">Almost there!</h3>
            <p className="text-[var(--muted)]">{message}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") {
              setStatus("idle")
              setMessage("")
            }
          }}
          disabled={isPending}
          className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                     text-[var(--foreground)] placeholder:text-[var(--muted)]
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-200"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium
                     hover:bg-[var(--accent-warm)] active:scale-[0.98]
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2
                     disabled:opacity-60 disabled:cursor-not-allowed
                     transition-all duration-200
                     flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <LoadingSpinner />
              <span>Subscribing...</span>
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>

      {status === "error" && message && (
        <p className="text-red-600 text-sm animate-shake">{message}</p>
      )}
    </form>
  )
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
