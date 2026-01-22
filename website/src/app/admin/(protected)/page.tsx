import Link from "next/link"
import type { Metadata } from "next"
import { getDigestWithLinks, getCurrentEditorApprovalStatus } from "@/actions/digests"
import { getSubscriberCount } from "@/actions/subscribers"
import { contentTypeIcons } from "@/types/links"
import { LinkActions } from "./link-actions"

export const metadata: Metadata = {
  title: "Dashboard | Let's Vibe! Links Admin",
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
  })
}

export default async function LinksAdminPage() {
  const today = getTodayDate()
  const { digest, links } = await getDigestWithLinks(today)
  const subscriberCount = await getSubscriberCount()
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

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-[var(--accent)] uppercase tracking-wide mb-1">
            Today's Digest
          </p>
          <h1 className="text-2xl font-medium">{formatDate(today)}</h1>
        </div>
        <Link
          href="/admin/submit"
          className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-medium
                     hover:bg-[var(--accent-warm)] transition-colors"
        >
          + Add Link
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <p className="text-2xl font-medium">{links.length}</p>
          <p className="text-sm text-[var(--muted)]">Links today</p>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <p className="text-2xl font-medium">{subscriberCount}</p>
          <p className="text-sm text-[var(--muted)]">Subscribers</p>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]">
          <p className="text-2xl font-medium capitalize">{digest?.status || "draft"}</p>
          <p className="text-sm text-[var(--muted)]">Status</p>
        </div>
      </div>

      {/* Approval Status */}
      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${digest?.seth_approved ? "bg-green-500" : "bg-gray-300"}`} />
              <span className="text-sm">Seth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${digest?.ian_approved ? "bg-green-500" : "bg-gray-300"}`} />
              <span className="text-sm">Ian</span>
            </div>
            {digest?.override_by && (
              <span className="text-sm text-[var(--muted)]">(Override used)</span>
            )}
          </div>
          <Link
            href="/admin/review"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            {hasApproved ? "Change approval →" : "Review & Approve →"}
          </Link>
        </div>
      </div>

      {/* Links List */}
      {links.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--muted)] mb-4">No links yet today</p>
          <Link
            href="/admin/submit"
            className="text-[var(--accent)] hover:underline"
          >
            Add the first link →
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide mb-4">
                {category}
              </h2>
              <div className="space-y-3">
                {linksByCategory[category].map((link) => (
                  <div
                    key={link.id}
                    className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)]
                               hover:border-[var(--muted)] transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span>{contentTypeIcons[link.content_type]}</span>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium hover:text-[var(--accent)] transition-colors truncate"
                          >
                            {link.title}
                          </a>
                          {link.requires_login && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                              Login
                            </span>
                          )}
                        </div>
                        {link.why && (
                          <p className="text-sm text-[var(--muted)] line-clamp-2 italic">
                            {link.why}
                          </p>
                        )}
                        <p className="text-xs text-[var(--muted)] mt-1 truncate">
                          {link.url}
                        </p>
                      </div>
                      <LinkActions linkId={link.id} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
