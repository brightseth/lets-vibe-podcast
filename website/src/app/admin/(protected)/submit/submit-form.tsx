"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { processUrl, submitLink, updateLink } from "@/actions/links"
import type { LinkAnalysis } from "@/lib/ai"
import { contentTypeIcons, contentTypeLabels } from "@/types/links"

type ContentType = "article" | "video" | "tweet" | "podcast" | "tool" | "other"

export function SubmitLinkForm() {
  const [url, setUrl] = useState("")
  const [preview, setPreview] = useState<LinkAnalysis | null>(null)
  const [editedPreview, setEditedPreview] = useState<LinkAnalysis | null>(null)
  const [step, setStep] = useState<"input" | "preview" | "success">("input")
  const [error, setError] = useState("")
  const [isProcessing, startProcessing] = useTransition()
  const [isSubmitting, startSubmitting] = useTransition()
  const router = useRouter()

  const handleProcess = () => {
    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }

    setError("")
    startProcessing(async () => {
      try {
        const result = await processUrl(url.trim())
        setPreview(result)
        setEditedPreview(result)
        setStep("preview")
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to process URL")
      }
    })
  }

  const handleSubmit = () => {
    if (!editedPreview) return

    startSubmitting(async () => {
      try {
        const link = await submitLink(url.trim())
        // Update with any edits
        if (editedPreview.title !== preview?.title ||
            editedPreview.why !== preview?.why ||
            editedPreview.category !== preview?.category ||
            editedPreview.contentType !== preview?.contentType ||
            editedPreview.requiresLogin !== preview?.requiresLogin) {
          await updateLink(link.id, {
            title: editedPreview.title,
            why: editedPreview.why,
            category: editedPreview.category,
            content_type: editedPreview.contentType,
            requires_login: editedPreview.requiresLogin,
          })
        }
        setStep("success")
        setTimeout(() => {
          router.push("/admin")
          router.refresh()
        }, 1500)
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to submit link")
      }
    })
  }

  const handleReset = () => {
    setUrl("")
    setPreview(null)
    setEditedPreview(null)
    setStep("input")
    setError("")
  }

  if (step === "success") {
    return (
      <div className="p-8 rounded-xl border border-green-200 bg-green-50 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-medium text-green-800 mb-2">Link Added!</h2>
        <p className="text-green-600">Redirecting to dashboard...</p>
      </div>
    )
  }

  if (step === "preview" && editedPreview) {
    return (
      <div className="space-y-6">
        {/* URL Display */}
        <div className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
          <p className="text-sm text-[var(--muted)] mb-1">URL</p>
          <p className="text-sm truncate">{url}</p>
        </div>

        {/* Editable Preview */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={editedPreview.title}
              onChange={(e) => setEditedPreview({ ...editedPreview, title: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Why we love it</label>
            <textarea
              value={editedPreview.why}
              onChange={(e) => setEditedPreview({ ...editedPreview, why: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
              placeholder="Why does this link deserve to be in this week's newsletter?"
            />
            <p className="text-xs text-[var(--muted)] mt-1">Written as Seth & Ian recommending it to readers</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              value={editedPreview.category}
              onChange={(e) => setEditedPreview({ ...editedPreview, category: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                         focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Content Type</label>
              <select
                value={editedPreview.contentType}
                onChange={(e) => setEditedPreview({ ...editedPreview, contentType: e.target.value as ContentType })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                {Object.entries(contentTypeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {contentTypeIcons[value as ContentType]} {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Requires Login?</label>
              <select
                value={editedPreview.requiresLogin ? "yes" : "no"}
                onChange={(e) => setEditedPreview({ ...editedPreview, requiresLogin: e.target.value === "yes" })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-medium
                       hover:bg-[var(--accent-warm)] disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? "Adding..." : "Add to Today's Digest"}
          </button>
          <button
            onClick={handleReset}
            disabled={isSubmitting}
            className="px-4 py-3 rounded-lg border border-[var(--border)]
                       hover:border-[var(--muted)] disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="url"
          placeholder="Paste a URL..."
          value={url}
          onChange={(e) => {
            setUrl(e.target.value)
            setError("")
          }}
          onKeyDown={(e) => e.key === "Enter" && handleProcess()}
          disabled={isProcessing}
          className="flex-1 px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                     disabled:opacity-50"
        />
        <button
          onClick={handleProcess}
          disabled={isProcessing || !url.trim()}
          className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium
                     hover:bg-[var(--accent-warm)] disabled:opacity-50 transition-colors
                     flex items-center gap-2"
        >
          {isProcessing ? (
            <>
              <LoadingSpinner />
              Processing...
            </>
          ) : (
            "Process"
          )}
        </button>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <p className="text-sm text-[var(--muted)]">
        AI will analyze the URL and suggest a title, category, and content type.
        You can edit everything before adding.
      </p>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
