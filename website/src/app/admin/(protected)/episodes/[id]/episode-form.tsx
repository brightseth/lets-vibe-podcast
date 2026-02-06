"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  createEpisode,
  updateEpisode,
  publishEpisode,
  unpublishEpisode,
  deleteEpisode,
} from "@/actions/episodes";

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import type { Chapter, EpisodeLink, EpisodeStatus } from "@/types/episodes";

interface EpisodeFormData {
  number: number;
  slug: string;
  title: string;
  description: string;
  status: EpisodeStatus;
  guest_name: string;
  guest_handle: string;
  guest_bio: string;
  date: string;
  duration: string;
  spotify_url: string;
  apple_url: string;
  youtube_url: string;
  show_notes: string;
  topics: string[];
  chapters: Chapter[];
  links: EpisodeLink[];
}

interface EpisodeFormProps {
  mode: "create" | "edit";
  episodeId?: string;
  initialData: EpisodeFormData;
}

export function EpisodeForm({ mode, episodeId, initialData }: EpisodeFormProps) {
  const router = useRouter();
  const [data, setData] = useState<EpisodeFormData>(initialData);
  const [error, setError] = useState("");
  const [isSaving, startSaving] = useTransition();
  const [isPublishing, startPublishing] = useTransition();
  const [isDeleting, startDeleting] = useTransition();

  const updateField = <K extends keyof EpisodeFormData>(field: K, value: EpisodeFormData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTitleChange = (title: string) => {
    updateField("title", title);
    if (mode === "create" || !data.slug) {
      updateField("slug", generateSlug(title));
    }
  };

  const handleSave = () => {
    if (!data.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!data.slug.trim()) {
      setError("Slug is required");
      return;
    }

    setError("");
    startSaving(async () => {
      try {
        if (mode === "create") {
          const episode = await createEpisode({
            number: data.number,
            slug: data.slug,
            title: data.title,
            description: data.description || undefined,
            status: data.status,
            guest_name: data.guest_name || undefined,
            guest_handle: data.guest_handle || undefined,
            guest_bio: data.guest_bio || undefined,
            date: data.date || undefined,
            duration: data.duration || undefined,
            spotify_url: data.spotify_url || undefined,
            apple_url: data.apple_url || undefined,
            youtube_url: data.youtube_url || undefined,
            show_notes: data.show_notes || undefined,
            topics: data.topics,
            chapters: data.chapters,
            links: data.links,
          });
          router.push(`/admin/episodes/${episode.id}`);
        } else if (episodeId) {
          await updateEpisode(episodeId, {
            slug: data.slug,
            title: data.title,
            description: data.description || undefined,
            status: data.status,
            guest_name: data.guest_name || undefined,
            guest_handle: data.guest_handle || undefined,
            guest_bio: data.guest_bio || undefined,
            date: data.date || undefined,
            duration: data.duration || undefined,
            spotify_url: data.spotify_url || undefined,
            apple_url: data.apple_url || undefined,
            youtube_url: data.youtube_url || undefined,
            show_notes: data.show_notes || undefined,
            topics: data.topics,
            chapters: data.chapters,
            links: data.links,
          });
          router.refresh();
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to save episode");
      }
    });
  };

  const handlePublish = () => {
    if (!episodeId) return;
    startPublishing(async () => {
      try {
        if (data.status === "published") {
          await unpublishEpisode(episodeId);
          setData((prev) => ({ ...prev, status: "draft" }));
        } else {
          await publishEpisode(episodeId);
          setData((prev) => ({ ...prev, status: "published" }));
        }
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to publish episode");
      }
    });
  };

  const handleDelete = () => {
    if (!episodeId) return;
    if (!confirm("Are you sure you want to delete this episode?")) return;

    startDeleting(async () => {
      try {
        await deleteEpisode(episodeId);
        router.push("/admin/episodes");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to delete episode");
      }
    });
  };

  // Topic management
  const [topicInput, setTopicInput] = useState("");
  const addTopic = () => {
    if (topicInput.trim() && !data.topics.includes(topicInput.trim())) {
      updateField("topics", [...data.topics, topicInput.trim()]);
      setTopicInput("");
    }
  };
  const removeTopic = (topic: string) => {
    updateField("topics", data.topics.filter((t) => t !== topic));
  };

  // Chapter management
  const addChapter = () => {
    updateField("chapters", [...data.chapters, { time: "", title: "" }]);
  };
  const updateChapter = (index: number, field: keyof Chapter, value: string) => {
    const newChapters = [...data.chapters];
    newChapters[index] = { ...newChapters[index], [field]: value };
    updateField("chapters", newChapters);
  };
  const removeChapter = (index: number) => {
    updateField("chapters", data.chapters.filter((_, i) => i !== index));
  };

  // Link management
  const addLink = () => {
    updateField("links", [...data.links, { label: "", url: "" }]);
  };
  const updateLink = (index: number, field: keyof EpisodeLink, value: string) => {
    const newLinks = [...data.links];
    newLinks[index] = { ...newLinks[index], [field]: value };
    updateField("links", newLinks);
  };
  const removeLink = (index: number) => {
    updateField("links", data.links.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Basic Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Episode Number</label>
            <input
              type="number"
              value={data.number}
              onChange={(e) => updateField("number", parseInt(e.target.value) || 0)}
              disabled={mode === "edit"}
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
              value={data.status}
              onChange={(e) => updateField("status", e.target.value as EpisodeStatus)}
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
            >
              <option value="draft">Draft</option>
              <option value="recorded">Recorded</option>
              <option value="upcoming">Upcoming</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="The Netscape Moment"
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Slug</label>
          <input
            type="text"
            value={data.slug}
            onChange={(e) => updateField("slug", e.target.value)}
            placeholder="the-netscape-moment"
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => updateField("description", e.target.value)}
            rows={3}
            placeholder="A short summary for social sharing..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] resize-none"
          />
        </div>
      </section>

      {/* Guest Info */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Guest Info</h2>
        <div>
          <label className="block text-sm font-medium mb-2">Guest Name</label>
          <input
            type="text"
            value={data.guest_name}
            onChange={(e) => updateField("guest_name", e.target.value)}
            placeholder="Seth Goldstein & Ian Rogers"
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Guest Handle</label>
          <input
            type="text"
            value={data.guest_handle}
            onChange={(e) => updateField("guest_handle", e.target.value)}
            placeholder="@seth & @iancr"
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Guest Bio</label>
          <textarea
            value={data.guest_bio}
            onChange={(e) => updateField("guest_bio", e.target.value)}
            rows={3}
            placeholder="A brief bio for the About the Guest section..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] resize-none"
          />
        </div>
      </section>

      {/* Dates & Duration */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Dates & Duration</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Release Date</label>
            <input
              type="text"
              value={data.date}
              onChange={(e) => updateField("date", e.target.value)}
              placeholder="Jan 27, 2026"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <input
              type="text"
              value={data.duration}
              onChange={(e) => updateField("duration", e.target.value)}
              placeholder="48 min"
              className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
            />
          </div>
        </div>
      </section>

      {/* Platform URLs */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Platform URLs</h2>
        <div>
          <label className="block text-sm font-medium mb-2">Spotify URL</label>
          <input
            type="url"
            value={data.spotify_url}
            onChange={(e) => updateField("spotify_url", e.target.value)}
            placeholder="https://open.spotify.com/episode/..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Apple Podcasts URL</label>
          <input
            type="url"
            value={data.apple_url}
            onChange={(e) => updateField("apple_url", e.target.value)}
            placeholder="https://podcasts.apple.com/..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">YouTube URL</label>
          <input
            type="url"
            value={data.youtube_url}
            onChange={(e) => updateField("youtube_url", e.target.value)}
            placeholder="https://youtu.be/..."
            className="w-full px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
        </div>
      </section>

      {/* Topics */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Topics</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTopic())}
            placeholder="Add a topic..."
            className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          />
          <button
            type="button"
            onClick={addTopic}
            className="px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--muted)] transition-colors"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm"
            >
              {topic}
              <button
                type="button"
                onClick={() => removeTopic(topic)}
                className="text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </section>

      {/* Show Notes */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Show Notes</h2>
        <RichTextEditor
          value={data.show_notes}
          onChange={(value) => updateField("show_notes", value)}
          placeholder="Write detailed show notes here..."
        />
      </section>

      {/* Chapters */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Chapters</h2>
          <button
            type="button"
            onClick={addChapter}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            + Add Chapter
          </button>
        </div>
        <div className="space-y-3">
          {data.chapters.map((chapter, index) => (
            <div key={index} className="flex gap-3 items-start">
              <input
                type="text"
                value={chapter.time}
                onChange={(e) => updateChapter(index, "time", e.target.value)}
                placeholder="0:00"
                className="w-24 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] font-mono text-sm"
              />
              <input
                type="text"
                value={chapter.title}
                onChange={(e) => updateChapter(index, "title", e.target.value)}
                placeholder="Chapter title"
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              />
              <button
                type="button"
                onClick={() => removeChapter(index)}
                className="px-3 py-2 text-[var(--muted)] hover:text-red-600"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Links & Resources</h2>
          <button
            type="button"
            onClick={addLink}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            + Add Link
          </button>
        </div>
        <div className="space-y-3">
          {data.links.map((link, index) => (
            <div key={index} className="flex gap-3 items-start">
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateLink(index, "label", e.target.value)}
                placeholder="Link label"
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              />
              <input
                type="url"
                value={link.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
                placeholder="https://..."
                className="flex-1 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
              />
              <button
                type="button"
                onClick={() => removeLink(index)}
                className="px-3 py-2 text-[var(--muted)] hover:text-red-600"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-warm)] disabled:opacity-50 transition-colors"
          >
            {isSaving ? "Saving..." : mode === "create" ? "Create Episode" : "Save Changes"}
          </button>

          {mode === "edit" && (
            <button
              type="button"
              onClick={handlePublish}
              disabled={isPublishing}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                data.status === "published"
                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              } disabled:opacity-50`}
            >
              {isPublishing ? "..." : data.status === "published" ? "Unpublish" : "Publish"}
            </button>
          )}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/episodes")}
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Cancel
          </button>

          {mode === "edit" && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 py-2 text-red-600 hover:text-red-700 disabled:opacity-50 transition-colors"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
