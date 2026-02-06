import { notFound } from "next/navigation";
import Link from "next/link";
import { getEpisodeAdmin } from "@/actions/episodes";
import { EpisodeForm } from "./episode-form";

export default async function EditEpisodePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const episode = await getEpisodeAdmin(id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">
          Edit Episode #{episode.number}
        </h1>
        <Link
          href={`/admin/episodes/${id}/transcript`}
          className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:border-[var(--muted)] transition-colors"
        >
          Manage Transcript
        </Link>
      </div>
      <EpisodeForm
        mode="edit"
        episodeId={episode.id}
        initialData={{
          number: episode.number,
          slug: episode.slug,
          title: episode.title,
          description: episode.description || "",
          status: episode.status,
          guest_name: episode.guest_name || "",
          guest_handle: episode.guest_handle || "",
          guest_bio: episode.guest_bio || "",
          date: episode.date || "",
          duration: episode.duration || "",
          spotify_url: episode.spotify_url || "",
          apple_url: episode.apple_url || "",
          youtube_url: episode.youtube_url || "",
          show_notes: episode.show_notes || "",
          topics: episode.topics || [],
          chapters: episode.chapters || [],
          links: episode.links || [],
        }}
      />
    </div>
  );
}
