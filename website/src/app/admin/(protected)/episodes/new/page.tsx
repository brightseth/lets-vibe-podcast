import { getNextEpisodeNumber } from "@/actions/episodes";
import { EpisodeForm } from "../[id]/episode-form";

export default async function NewEpisodePage() {
  const nextNumber = await getNextEpisodeNumber();

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-8">New Episode</h1>
      <EpisodeForm
        mode="create"
        initialData={{
          number: nextNumber,
          slug: "",
          title: "",
          description: "",
          status: "draft",
          guest_name: "",
          guest_handle: "",
          guest_bio: "",
          date: "",
          duration: "",
          spotify_url: "",
          apple_url: "",
          youtube_url: "",
          show_notes: "",
          topics: [],
          chapters: [],
          links: [],
        }}
      />
    </div>
  );
}
