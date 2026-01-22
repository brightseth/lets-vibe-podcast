"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function AuthCallback() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createClient()

      // Check for hash fragment with tokens
      const hash = window.location.hash
      if (hash && hash.includes("access_token")) {
        // Parse the hash parameters
        const hashParams = new URLSearchParams(hash.substring(1))
        const accessToken = hashParams.get("access_token")
        const refreshToken = hashParams.get("refresh_token")

        if (accessToken && refreshToken) {
          // Set the session from the tokens
          const { data, error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })

          if (sessionError) {
            console.error("Session error:", sessionError)
            setError("Failed to authenticate. Please try again.")
            return
          }

          if (data.user?.email) {
            // Verify the user is authorized
            const response = await fetch("/api/auth/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: data.user.email }),
            })

            const result = await response.json()

            if (result.authorized) {
              router.push("/admin")
              return
            } else {
              await supabase.auth.signOut()
              setError("This email is not authorized for admin access.")
              return
            }
          }
        }
      }

      // Check for existing session (in case user is already logged in)
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user?.email) {
        const response = await fetch("/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session.user.email }),
        })

        const result = await response.json()

        if (result.authorized) {
          router.push("/admin")
          return
        } else {
          setError("This email is not authorized for admin access.")
          return
        }
      }

      // No valid auth found
      setError("Invalid or expired authentication link. Please request a new one.")
    }

    handleCallback()
  }, [router])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface)]">
        <div className="max-w-md w-full mx-auto p-8">
          <div className="p-6 rounded-xl border border-red-200 bg-red-50 text-center">
            <h2 className="font-medium text-red-800 mb-2">Authentication Error</h2>
            <p className="text-sm text-red-600 mb-4">{error}</p>
            <a
              href="/admin/login"
              className="inline-block px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-warm)] transition-colors"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)]">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-[var(--accent)] border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-[var(--muted)]">Signing you in...</p>
      </div>
    </div>
  )
}
