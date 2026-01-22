import type { Metadata } from "next"
import { SubmitLinkForm } from "./submit-form"

export const metadata: Metadata = {
  title: "Add Link | Let's Vibe! Links Admin",
  robots: "noindex, nofollow",
}

export default function SubmitPage() {
  return (
    <div className="max-w-[700px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-2">Add Link</h1>
        <p className="text-[var(--muted)]">
          Paste a URL and AI will generate a title, category, and detect the content type.
        </p>
      </div>

      <SubmitLinkForm />
    </div>
  )
}
