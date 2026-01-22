"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export function SignOutButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSignOut = () => {
    startTransition(async () => {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push("/admin/login")
      router.refresh()
    })
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors disabled:opacity-50"
    >
      {isPending ? "Signing out..." : "Sign out"}
    </button>
  )
}
