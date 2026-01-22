"use server"

import { createAdminClient } from "@/lib/supabase/admin"

// Allowlist of editor emails - only Seth and Ian can access admin
const ALLOWED_EDITORS = process.env.ALLOWED_EDITOR_EMAILS?.split(',') || []

// Check if email is allowed
function isAllowedEditor(email: string): boolean {
  return ALLOWED_EDITORS.includes(email)
}

// Send magic link - server action
export async function sendMagicLink(email: string) {
  // Check if email is allowed before sending
  if (!isAllowedEditor(email)) {
    return { error: "This email is not authorized for admin access" }
  }

  const supabase = createAdminClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin/auth/callback`,
    },
  })

  if (error) {
    console.error("Magic link error:", error)
    return { error: "Failed to send login link. Please try again." }
  }

  return { success: true }
}
