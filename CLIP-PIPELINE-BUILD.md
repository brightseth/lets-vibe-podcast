# Clip Pipeline Build Plan

**Date**: Saturday Mar 15, 2026 — 9:30am
**Goal**: Each episode generates 10-15 clips for social distribution
**Time budget**: 3 hours
**Prereq**: Download Ep 4 video (MP4) + transcript (JSON or TXT) from Riverside dashboard before starting

---

## Stack

Claude (clip detection) + FFmpeg 8.0.1 (video cutting) + existing pipeline code

No new subscriptions. Fallback: Vizard API ($15/mo) if FFmpeg aspect ratio math gets fiddly.

### Why not SaaS?

| Tool | API Access | Cost | Verdict |
|------|-----------|------|---------|
| Riverside API | Business plan only | $5,400/yr | Too expensive |
| OpusClip API | Business plan only | Custom | Can use $29/mo UI manually as supplement |
| Descript API | Enterprise only | Custom | Inaccessible |
| Vizard API | All paid plans | $15-20/mo | Best fallback — affordable, scriptable |

---

## Existing Infrastructure (70% done)

| Component | File | Status |
|-----------|------|--------|
| Transcript parser | `letsvibe-agent/src/pipeline/transcript-parser.ts` | Working. Handles Riverside JSON with word-level timestamps. |
| Quote extractor | `letsvibe-agent/src/pipeline/prompts.ts` (`quotesPrompt`) | Working. Extracts 5-8 shareable moments. |
| Content generator | `letsvibe-agent/src/pipeline/ai-generate.ts` | Working. Parallel Claude API calls. |
| Type system | `letsvibe-agent/src/pipeline/types.ts` | Has `EditSegment` with `startTime`/`endTime` already. |
| Social calendar | `letsvibe-agent/src/pipeline/post-recording.ts` | Working. 7-day social calendar with quote card slots. |
| FFmpeg | `/opt/homebrew/bin/ffmpeg` | 8.0.1 installed. x264, x265, libass (burned captions). |
| API key | `letsvibe-agent/.env` | ANTHROPIC_API_KEY set. |

---

## Hour 1 — Clip Detection (the brain)

### 1.1 Add ClipCandidate type (10 min)

**File**: `letsvibe-agent/src/pipeline/types.ts`

```typescript
export interface ClipCandidate {
  id: string;                    // slugified title
  title: string;                 // punchy, 3-8 words
  hook: string;                  // first sentence — why someone stops scrolling
  startTime: number;             // seconds
  endTime: number;               // seconds
  duration: string;              // formatted "1:30"
  speaker: string;
  transcriptExcerpt: string;     // the key quote or passage
  clipType: 'hot-take' | 'story' | 'insight' | 'funny' | 'quotable';
  platform: 'reels' | 'shorts' | 'x-clip' | 'linkedin' | 'all';
  viralityScore: number;         // 1-10
  suggestedCaption: string;      // platform-appropriate caption
  tags: string[];                // 3-5 tags
}
```

Add `clips: ClipCandidate[]` to `GeneratedContent` and `PipelineOutput`.

### 1.2 Write clipDetectionPrompt() (20 min)

**File**: `letsvibe-agent/src/pipeline/prompts.ts`

Prompt architecture:

```
You are a podcast clip curator for "Let's Vibe!" — a weekly podcast about
creativity in the age of AI.

Identify 10-15 best standalone moments from this episode.

WHAT MAKES A GREAT CLIP:
- Self-contained: makes sense without full episode context
- Hook in first 3 seconds (surprising statement, bold claim, laugh)
- 30-90 seconds long (sweet spot: 45-60s)
- ONE clear idea or story beat
- Ends on a landing — not mid-thought

CLIP TYPES TO FIND:
1. HOT TAKES (2-3): Bold opinions that provoke reaction
2. STORIES (2-3): Personal anecdotes with setup -> punchline
3. INSIGHTS (2-3): "Aha moment" explanations
4. FUNNY (1-2): Genuine laughs, banter
5. QUOTABLE (2-3): Single sentences for text overlays

Return JSON array of ClipCandidate objects with timestamps from transcript.
```

### 1.3 Write detectClips() (30 min)

**File**: `letsvibe-agent/src/pipeline/clip-detector.ts` (new)

Single Claude API call following the pattern in `ai-generate.ts`. Returns `ClipCandidate[]`.

---

## Hour 2 — FFmpeg Cutting (the muscle)

### 2.1 Write clip-cutter.ts (45 min)

**File**: `letsvibe-agent/src/pipeline/clip-cutter.ts` (new)

Takes `ClipCandidate[]` + video file path, outputs cut clips.

**Vertical (9:16) with burned captions:**
```bash
ffmpeg -i input.mp4 -ss {start} -to {end} \
  -vf "crop=ih*9/16:ih,scale=1080:1920,subtitles=clip.srt:force_style='FontSize=24,PrimaryColour=&Hffffff,OutlineColour=&H000000,Outline=2,MarginV=80'" \
  -c:v libx264 -preset fast -crf 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  output-vertical.mp4
```

**Square (1:1) with burned captions:**
```bash
ffmpeg -i input.mp4 -ss {start} -to {end} \
  -vf "crop=min(iw\,ih):min(iw\,ih),scale=1080:1080,subtitles=clip.srt:force_style='FontSize=20,PrimaryColour=&Hffffff,OutlineColour=&H000000,Outline=2,MarginV=40'" \
  -c:v libx264 -preset fast -crf 23 \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  output-square.mp4
```

**Fade in/out:** Add to filter chain:
```
fade=t=in:st=0:d=0.5,fade=t=out:st={duration-0.5}:d=0.5
afade=t=in:st=0:d=0.5,afade=t=out:st={duration-0.5}:d=0.5
```

### 2.2 Generate per-clip SRT files (15 min)

Extract word-level timestamps from transcript segments for each clip's time range. Write to temporary `.srt` files for caption burning.

---

## Hour 3 — Integration + Test

### 3.1 Add clips subcommand to CLI (15 min)

**File**: `letsvibe-agent/src/pipeline/post-recording.ts`

```bash
npx tsx src/pipeline/post-recording.ts clips \
  --transcript ../transcripts/ep4.json \
  --video ../recordings/ep4.mp4 \
  --episode 4 --guest "Lukas Amacher"
```

### 3.2 Generate clip-manifest.json (10 min)

Output metadata for all generated clips:
```
output/
  ep4-clips.json          # machine-readable ClipCandidate[]
  ep4-clips.md            # human-readable table sorted by virality
  clips/
    ep4-01-hot-take-vertical.mp4
    ep4-01-hot-take-square.mp4
    ep4-02-insight-vertical.mp4
    ...
```

### 3.3 Website clips data migration (15 min)

**Create**: `website/src/data/clips.ts` — migrate 6 hardcoded clips from `clips/page.tsx`
**Refactor**: `website/src/app/clips/page.tsx` — import from data file, add episode filter

### 3.4 End-to-end test with Ep 4 (20 min)

1. Run pipeline against Ep 4 transcript + video
2. Verify 10+ clip candidates with timestamps
3. Verify FFmpeg cuts play correctly
4. Verify clips page renders from data file

---

## Output Per Episode (After Build)

```
1. Download video + transcript from Riverside (2 min)
2. Run CLI command (3-5 min processing)
3. Review 10-15 clip candidates in Finder (5 min)
4. Post to social (manual until X API creds are set up)
```

---

## Deferred

- Riverside API integration (not worth $5,400/yr for a 2-min manual download)
- Social posting automation (X API creds still blank)
- LEVI auto-triggering clips via agent-worker initiative
- Individual clip pages on website
- Headless browser PNG rendering for quote cards
- OpusClip as supplementary clip source (use UI manually if needed)
