import { notFound } from "next/navigation";
import Link from "next/link";
import { getEpisodeAdmin } from "@/actions/episodes";
import { getTranscript } from "@/actions/transcripts";
import { TranscriptImporter } from "./transcript-importer";

export default async function TranscriptPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const episode = await getEpisodeAdmin(id);

  if (!episode) {
    notFound();
  }

  const transcript = await getTranscript(id);

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href={`/admin/episodes/${id}`}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-2 inline-block"
          >
            &larr; Back to Episode
          </Link>
          <h1 className="text-2xl font-semibold">
            Transcript: #{episode.number} {episode.title}
          </h1>
        </div>
      </div>

      {/* Transcript Importer */}
      <TranscriptImporter
        episodeId={id}
        existingTranscript={transcript}
      />
    </div>
  );
}
