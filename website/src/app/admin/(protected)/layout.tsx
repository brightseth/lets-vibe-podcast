import { redirect } from "next/navigation"
import Link from "next/link"
import { getUser, isAllowedEditor, getEditorName } from "@/lib/auth"
import { SignOutButton } from "./sign-out-button"

export default async function LinksAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  // Redirect to login if not authenticated or not authorized
  if (!user?.email || !isAllowedEditor(user.email)) {
    redirect("/admin/login")
  }

  const editorName = getEditorName(user.email)

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      {/* Admin Header */}
      <header className="border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/admin"
              className="font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              Let's Vibe! Links
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/admin"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/submit"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Add Link
              </Link>
              <Link
                href="/admin/review"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Review
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--muted)] capitalize">
              {editorName || user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>
    </div>
  )
}
