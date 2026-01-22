"use client"

import { useState, useTransition } from "react"
import { sendMagicLink } from "@/actions/auth"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus("error")
      setMessage("Please enter your email")
      return
    }

    startTransition(async () => {
      const result = await sendMagicLink(email.trim().toLowerCase())

      if (result.error) {
        setStatus("error")
        setMessage(result.error)
      } else {
        setStatus("success")
        setMessage("Check your email for a login link")
      }
    })
  }

  if (status === "success") {
    return (
      <div className="p-6 rounded-xl border border-green-200 bg-green-50 text-center">
        <div className="text-3xl mb-3">✉️</div>
        <h2 className="font-medium text-green-800 mb-2">Check your email</h2>
        <p className="text-sm text-green-600">
          We sent a login link to <strong>{email}</strong>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") {
              setStatus("idle")
              setMessage("")
            }
          }}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                     disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-medium
                   hover:bg-[var(--accent-warm)] disabled:opacity-50 transition-colors"
      >
        {isPending ? "Sending..." : "Send Login Link"}
      </button>
    </form>
  )
}
