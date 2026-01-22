import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getUser, isAllowedEditor } from "@/lib/auth"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Login | Let's Vibe! Links Admin",
  robots: "noindex, nofollow",
}

export default async function LoginPage() {
  const user = await getUser()

  // If already logged in and authorized, redirect to dashboard
  if (user?.email && isAllowedEditor(user.email)) {
    redirect("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="max-w-sm w-full mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-light mb-2">Let's Vibe! Links</h1>
          <p className="text-[var(--muted)]">Admin access only</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-[var(--muted)] mt-8">
          Only Seth and Ian can access this area.
        </p>
      </div>
    </div>
  )
}
