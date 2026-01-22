import type { Metadata } from "next"
import { getDigestWithLinks, getCurrentEditorApprovalStatus } from "@/actions/digests"
import { contentTypeIcons } from "@/types/links"
import { ApprovalActions } from "./approval-actions"

export const metadata: Metadata = {
  title: "Review & Approve | Let's Vibe! Links Admin",
  robots: "noindex, nofollow",
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0]
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default async function ReviewPage() {
  const today = getTodayDate()
  const { digest, links } = await getDigestWithLinks(today)
  const { editorName, hasApproved } = await getCurrentEditorApprovalStatus(today)

  // Group links by category
  const linksByCategory = links.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = []
    }
    acc[link.category].push(link)
    return acc
  }, {} as Record<string, typeof links>)

  const categories = Object.keys(linksByCategory).sort()

  const bothApproved = !!(digest?.seth_approved && digest?.ian_approved)
  const hasOverride = !!digest?.override_by

  return (
    <div className="max-w-[800px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-2">Review & Approve</h1>
        <p className="text-[var(--muted)]">
          Preview today's digest and approve for sending.
        </p>
      </div>

      {/* Approval Status Card */}
      <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] mb-8">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wide mb-4">
          Approval Status
        </h2>

        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center
              ${digest?.seth_approved ? "bg-green-500" : "bg-gray-200"}`}>
              {digest?.seth_approved && (
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <p className="font-medium">Seth</p>
              {digest?.seth_approved_at && (
                <p className="text-xs text-[var(--muted)]">
                  {new Date(digest.seth_approved_at).toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center
              ${digest?.ian_approved ? "bg-green-500" : "bg-gray-200"}`}>
              {digest?.ian_approved && (
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div>
              <p className="font-medium">Ian</p>
              {digest?.ian_approved_at && (
                <p className="text-xs text-[var(--muted)]">
                  {new Date(digest.ian_approved_at).toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>

          {hasOverride && (
            <p className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded">
              Override used
            </p>
          )}
        </div>

        <ApprovalActions
          digestDate={today}
          editorName={editorName}
          hasApproved={hasApproved}
          bothApproved={bothApproved}
          digestStatus={digest?.status || "draft"}
        />

        {bothApproved && !hasOverride && (
          <p className="text-sm text-green-600 mt-4">
            ✓ Both editors have approved. The digest will be sent at the scheduled time.
          </p>
        )}
      </div>

      {/* Digest Preview */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
        <div className="p-6 border-b border-[var(--border)] bg-[var(--surface)]">
          <h2 className="text-xl font-medium mb-1">Let's Vibe! Links</h2>
          <p className="text-[var(--muted)]">{formatDate(today)}</p>
        </div>

        {links.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[var(--muted)]">No links added yet</p>
          </div>
        ) : (
          <div className="divide-y divide-[var(--border)]">
            {categories.map((category) => (
              <div key={category} className="p-6">
                <h3 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-4">
                  {category}
                </h3>
                <div className="space-y-4">
                  {linksByCategory[category].map((link) => (
                    <div key={link.id} className="flex items-start gap-3">
                      <span className="text-lg">{contentTypeIcons[link.content_type]}</span>
                      <div className="flex-1 min-w-0">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-[var(--accent)] transition-colors"
                        >
                          {link.title}
                        </a>
                        {link.requires_login && (
                          <span className="ml-2 text-xs text-[var(--muted)]">
                            🔒 Login required
                          </span>
                        )}
                        {link.why && (
                          <p className="text-sm text-[var(--muted)] mt-1 italic">
                            {link.why}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="p-6 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
          Curated by Seth & Ian · letsvibe.fm
        </div>
      </div>
    </div>
  )
}
