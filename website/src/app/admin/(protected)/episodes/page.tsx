import Link from "next/link";
import { getEpisodesAdmin } from "@/actions/episodes";

const statusBadge: Record<string, { label: string; className: string }> = {
  published: { label: "Published", className: "bg-green-100 text-green-800" },
  upcoming: { label: "Upcoming", className: "bg-blue-100 text-blue-800" },
  recorded: { label: "Recorded", className: "bg-yellow-100 text-yellow-800" },
  draft: { label: "Draft", className: "bg-gray-100 text-gray-800" },
};

export default async function EpisodesAdminPage() {
  const episodes = await getEpisodesAdmin();

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Episodes</h1>
          <p className="text-[var(--muted)]">Manage podcast episodes</p>
        </div>
        <Link
          href="/admin/episodes/new"
          className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-warm)] transition-colors"
        >
          New Episode
        </Link>
      </div>

      {/* Episode List */}
      {episodes.length === 0 ? (
        <div className="text-center py-12 text-[var(--muted)]">
          <p className="text-lg mb-4">No episodes yet</p>
          <Link
            href="/admin/episodes/new"
            className="text-[var(--accent)] hover:underline"
          >
            Create your first episode
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {episodes.map((episode) => (
            <Link
              key={episode.id}
              href={`/admin/episodes/${episode.id}`}
              className="block p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:border-[var(--muted)] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-mono text-[var(--muted)]">
                      #{episode.number}
                    </span>
                    <h2 className="text-lg font-medium truncate">{episode.title}</h2>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${
                        statusBadge[episode.status]?.className || statusBadge.draft.className
                      }`}
                    >
                      {statusBadge[episode.status]?.label || "Draft"}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] truncate">
                    {episode.guest_name ? `with ${episode.guest_name}` : "No guest"}
                    {episode.date && ` · ${episode.date}`}
                  </p>
                </div>
                <div className="text-sm text-[var(--muted)]">
                  {episode.duration || "—"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
