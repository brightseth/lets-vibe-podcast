import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"

// Allowlist of editor emails - only Seth and Ian can access admin
const ALLOWED_EDITORS = process.env.ALLOWED_EDITOR_EMAILS?.split(',') || []

// Get editor name from email
export function getEditorName(email: string): 'seth' | 'ian' | null {
  const sethEmails = process.env.SETH_EMAILS?.split(',') || []
  const ianEmails = process.env.IAN_EMAILS?.split(',') || []

  if (sethEmails.includes(email)) return 'seth'
  if (ianEmails.includes(email)) return 'ian'
  return null
}

// Check if email is allowed
export function isAllowedEditor(email: string): boolean {
  return ALLOWED_EDITORS.includes(email)
}

// Get current session
export async function getSession() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

// Get current user
export async function getUser() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Check if current user is an editor
export async function isEditor(): Promise<boolean> {
  const user = await getUser()
  if (!user?.email) return false
  return isAllowedEditor(user.email)
}

// Get current editor info
export async function getCurrentEditor() {
  const user = await getUser()
  if (!user?.email) return null
  if (!isAllowedEditor(user.email)) return null

  return {
    id: user.id,
    email: user.email,
    name: getEditorName(user.email),
  }
}

// Send magic link
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

// Sign out
export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
}
