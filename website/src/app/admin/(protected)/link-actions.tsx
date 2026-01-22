"use client"

import { useState, useTransition } from "react"
import { deleteLink } from "@/actions/links"
import { useRouter } from "next/navigation"

export function LinkActions({ linkId }: { linkId: string }) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDelete = () => {
    startTransition(async () => {
      await deleteLink(linkId)
      router.refresh()
    })
  }

  if (showConfirm) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="text-xs text-red-600 hover:text-red-700 disabled:opacity-50"
        >
          {isPending ? "Deleting..." : "Confirm"}
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          disabled={isPending}
          className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="text-xs text-[var(--muted)] hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      Remove
    </button>
  )
}
