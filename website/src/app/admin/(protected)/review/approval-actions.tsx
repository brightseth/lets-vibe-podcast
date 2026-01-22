"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { approveDigest, revokeApproval, overrideApproval } from "@/actions/digests"

interface ApprovalActionsProps {
  digestDate: string
  editorName: string | null
  hasApproved: boolean
  bothApproved: boolean
  digestStatus: string
}

export function ApprovalActions({
  digestDate,
  editorName,
  hasApproved,
  bothApproved,
  digestStatus,
}: ApprovalActionsProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleApprove = () => {
    startTransition(async () => {
      await approveDigest(digestDate)
      router.refresh()
    })
  }

  const handleRevoke = () => {
    startTransition(async () => {
      await revokeApproval(digestDate)
      router.refresh()
    })
  }

  const handleOverride = () => {
    if (!confirm("Override the other editor's approval? The digest will be marked as approved and will send at the scheduled time.")) {
      return
    }
    startTransition(async () => {
      await overrideApproval(digestDate)
      router.refresh()
    })
  }

  if (digestStatus === "sent") {
    return (
      <p className="text-sm text-[var(--muted)]">
        This digest has already been sent.
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {hasApproved ? (
        <button
          onClick={handleRevoke}
          disabled={isPending}
          className="px-4 py-2 rounded-lg border border-[var(--border)]
                     hover:border-red-300 hover:text-red-600
                     disabled:opacity-50 transition-colors text-sm"
        >
          {isPending ? "Updating..." : "Revoke My Approval"}
        </button>
      ) : (
        <button
          onClick={handleApprove}
          disabled={isPending}
          className="px-4 py-2 rounded-lg bg-green-600 text-white
                     hover:bg-green-700 disabled:opacity-50 transition-colors text-sm font-medium"
        >
          {isPending ? "Approving..." : `Approve as ${editorName}`}
        </button>
      )}

      {!bothApproved && (hasApproved || !editorName) && (
        <button
          onClick={handleOverride}
          disabled={isPending}
          className="px-4 py-2 rounded-lg border border-amber-300 text-amber-700
                     hover:bg-amber-50 disabled:opacity-50 transition-colors text-sm"
        >
          {isPending ? "Processing..." : "Override (Send Anyway)"}
        </button>
      )}

      {!bothApproved && !hasApproved && (
        <p className="text-sm text-[var(--muted)]">
          Waiting for both editors to approve before sending.
        </p>
      )}
    </div>
  )
}
