"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  parseRiversideJson,
  importTranscript,
  deleteTranscript,
} from "@/actions/transcripts";
import type { Transcript, SpeakerSegment } from "@/types/episodes";
import { formatTime } from "@/lib/transcript-parser";

interface TranscriptImporterProps {
  episodeId: string;
  existingTranscript: Transcript | null;
}

export function TranscriptImporter({
  episodeId,
  existingTranscript,
}: TranscriptImporterProps) {
  const router = useRouter();
  const [jsonInput, setJsonInput] = useState("");
  const [preview, setPreview] = useState<{
    segments: SpeakerSegment[];
    fullText: string;
    detectedSpeakers: string[];
  } | null>(null);
  const [speakerMap, setSpeakerMap] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  const [isParsing, startParsing] = useTransition();
  const [isImporting, startImporting] = useTransition();
  const [isDeleting, startDeleting] = useTransition();

  const handleParse = () => {
    if (!jsonInput.trim()) {
      setError("Please paste the Riverside JSON");
      return;
    }

    setError("");
    startParsing(async () => {
      const result = await parseRiversideJson(jsonInput, speakerMap);
      if (result.success && result.segments) {
        setPreview({
          segments: result.segments,
          fullText: result.fullText!,
          detectedSpeakers: result.detectedSpeakers!,
        });
        // Initialize speaker map
        const map: Record<string, string> = {};
        for (const speaker of result.detectedSpeakers!) {
          map[speaker] = speakerMap[speaker] || speaker;
        }
        setSpeakerMap(map);
      } else {
        setError(result.error || "Failed to parse");
      }
    });
  };

  const handleReparse = () => {
    startParsing(async () => {
      const result = await parseRiversideJson(jsonInput, speakerMap);
      if (result.success && result.segments) {
        setPreview({
          segments: result.segments,
          fullText: result.fullText!,
          detectedSpeakers: result.detectedSpeakers!,
        });
      }
    });
  };

  const handleImport = () => {
    startImporting(async () => {
      try {
        await importTranscript(episodeId, jsonInput, speakerMap);
        router.refresh();
        setJsonInput("");
        setPreview(null);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to import");
      }
    });
  };

  const handleDelete = () => {
    if (!existingTranscript) return;
    if (!confirm("Are you sure you want to delete this transcript?")) return;

    startDeleting(async () => {
      try {
        await deleteTranscript(existingTranscript.id);
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to delete");
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Existing Transcript */}
      {existingTranscript && (
        <section className="p-6 bg-[var(--background)] rounded-lg border border-[var(--border)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium">Current Transcript</h2>
              <p className="text-sm text-[var(--muted)]">
                Source: {existingTranscript.source || "unknown"} ·{" "}
                {existingTranscript.speaker_segments?.length || 0} segments
              </p>
            </div>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>

          {/* Preview existing */}
          <div className="max-h-[400px] overflow-y-auto border border-[var(--border)] rounded-lg p-4 bg-[var(--surface)]">
            {existingTranscript.speaker_segments?.slice(0, 20).map((seg, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-[var(--accent)]">
                    {seg.speaker}
                  </span>
                  <span className="text-xs text-[var(--muted)] font-mono">
                    {formatTime(seg.start)}
                  </span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed">{seg.text}</p>
              </div>
            ))}
            {(existingTranscript.speaker_segments?.length || 0) > 20 && (
              <p className="text-sm text-[var(--muted)] mt-4 text-center">
                ... and {existingTranscript.speaker_segments!.length - 20} more segments
              </p>
            )}
          </div>
        </section>
      )}

      {/* Import Section */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">
          {existingTranscript ? "Replace Transcript" : "Import Transcript"}
        </h2>

        {/* JSON Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Paste Riverside JSON
          </label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows={8}
            placeholder='{"words": [{"word": "Hello", "start": 0.5, "end": 0.8, "speaker": "Speaker 1"}, ...]}'
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] font-mono text-sm resize-y"
          />
          <p className="text-xs text-[var(--muted)] mt-1">
            Export from Riverside: Project → Transcript → Export as JSON
          </p>
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        {!preview && (
          <button
            onClick={handleParse}
            disabled={isParsing || !jsonInput.trim()}
            className="px-4 py-2 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-warm)] disabled:opacity-50 transition-colors"
          >
            {isParsing ? "Parsing..." : "Parse JSON"}
          </button>
        )}

        {/* Preview */}
        {preview && (
          <div className="space-y-4">
            {/* Speaker Mapping */}
            <div className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <h3 className="text-sm font-medium mb-3">Speaker Mapping</h3>
              <div className="space-y-2">
                {preview.detectedSpeakers.map((speaker) => (
                  <div key={speaker} className="flex items-center gap-3">
                    <span className="text-sm text-[var(--muted)] w-24">
                      {speaker}
                    </span>
                    <span className="text-[var(--muted)]">→</span>
                    <input
                      type="text"
                      value={speakerMap[speaker] || speaker}
                      onChange={(e) => {
                        setSpeakerMap((prev) => ({
                          ...prev,
                          [speaker]: e.target.value,
                        }));
                      }}
                      className="px-3 py-1.5 rounded border border-[var(--border)] bg-[var(--surface)] text-sm"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleReparse}
                disabled={isParsing}
                className="mt-3 text-sm text-[var(--accent)] hover:underline disabled:opacity-50"
              >
                Re-parse with new names
              </button>
            </div>

            {/* Preview Segments */}
            <div className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <h3 className="text-sm font-medium mb-3">
                Preview ({preview.segments.length} segments)
              </h3>
              <div className="max-h-[300px] overflow-y-auto space-y-3">
                {preview.segments.slice(0, 10).map((seg, i) => (
                  <div key={i}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-medium text-[var(--accent)]">
                        {seg.speaker}
                      </span>
                      <span className="text-xs text-[var(--muted)] font-mono">
                        {formatTime(seg.start)} - {formatTime(seg.end)}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted)]">{seg.text}</p>
                  </div>
                ))}
                {preview.segments.length > 10 && (
                  <p className="text-sm text-[var(--muted)] text-center">
                    ... and {preview.segments.length - 10} more segments
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleImport}
                disabled={isImporting}
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition-colors"
              >
                {isImporting ? "Importing..." : "Import Transcript"}
              </button>
              <button
                onClick={() => {
                  setPreview(null);
                  setSpeakerMap({});
                }}
                className="px-4 py-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
