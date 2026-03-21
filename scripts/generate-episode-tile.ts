#!/usr/bin/env npx tsx
/**
 * Episode Tile Generator — Let's Vibe! Podcast
 *
 * Takes a guest photo, normalizes it via fal.ai NanoBanana2 to consistent
 * B&W high-contrast portrait style, generates episode tile HTML.
 *
 * Usage:
 *   npx tsx scripts/generate-episode-tile.ts \
 *     --photo /path/to/guest-photo.jpg \
 *     --name "Trevor McFedries" \
 *     --episode 5 \
 *     --output social/tiles/
 *
 * Requires: FAL_KEY environment variable
 */

import fs from 'fs';
import path from 'path';
import { fal } from '@fal-ai/client';

const FAL_KEY = process.env.FAL_KEY || 'aa7f99f0-2d91-4bb0-ae39-bd363be9b356:c16dd1a51de2da7b550cfaf9a6811dd8';

fal.config({ credentials: FAL_KEY });

interface TileConfig {
  photo: string;
  name: string;
  episode: number;
  output: string;
}

function parseArgs(): TileConfig {
  const args = process.argv.slice(2);
  const config: Partial<TileConfig> = { output: 'social/tiles/' };

  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i];
    const val = args[i + 1];
    if (flag === '--photo') config.photo = val;
    if (flag === '--name') config.name = val;
    if (flag === '--episode') config.episode = parseInt(val);
    if (flag === '--output') config.output = val;
  }

  if (!config.photo || !config.name || !config.episode) {
    console.error('Usage: npx tsx scripts/generate-episode-tile.ts --photo <path> --name <name> --episode <num>');
    process.exit(1);
  }

  return config as TileConfig;
}

// ─── Upload image to fal.ai and get a URL ──────────────────────────

async function uploadToFal(filePath: string): Promise<string> {
  console.log(`[tile] Uploading ${path.basename(filePath)} to fal.ai...`);
  const fileBuffer = fs.readFileSync(filePath);
  const file = new File([fileBuffer], path.basename(filePath), {
    type: path.extname(filePath) === '.png' ? 'image/png' : 'image/jpeg',
  });
  const url = await fal.storage.upload(file);
  console.log(`[tile] Uploaded: ${url}`);
  return url;
}

// ─── Generate B&W portrait via NanoBanana2 ──────────────────────────

async function generatePortrait(imageUrl: string, guestName: string): Promise<string> {
  console.log(`[tile] Generating B&W portrait for ${guestName}...`);

  const result = await fal.subscribe('fal-ai/nano-banana-2/edit', {
    input: {
      prompt: `High contrast black and white portrait photograph. Professional headshot, dramatic lighting from one side, deep shadows, bright highlights. Clean dark background. Editorial magazine style. Sharp focus on face. Grainy film texture, classic portraiture.`,
      image_urls: [imageUrl],
      num_images: 1,
      resolution: '1K',
      aspect_ratio: '1:1',
      output_format: 'png',
      safety_tolerance: 5,
    },
  }) as any;

  const outputUrl = result.data?.images?.[0]?.url || result.images?.[0]?.url;

  if (!outputUrl) {
    console.error('[tile] Response:', JSON.stringify(result, null, 2));
    throw new Error('No output image URL in response');
  }

  console.log(`[tile] Portrait generated: ${outputUrl}`);
  return outputUrl;
}

// ─── Download image from URL ────────────────────────────────────────

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  console.log(`[tile] Saved portrait: ${outputPath}`);
}

// ─── Generate HTML tile ─────────────────────────────────────────────

function generateTileHTML(portraitPath: string, name: string, episode: number): string {
  const nameParts = name.toUpperCase().split(' ');
  const nameHTML = nameParts.join('<br>');
  const epNum = String(episode).padStart(2, '0');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #1a1a1a; display: flex; justify-content: center; align-items: center; min-height: 100vh; }

  .tile {
    width: 1080px;
    height: 1080px;
    background: #0a0a0a;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;
  }

  .photo-side {
    position: relative;
    overflow: hidden;
  }

  .photo-side img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-side::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 120px;
    background: linear-gradient(90deg, transparent, #0a0a0a);
  }

  .text-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 56px 60px 20px;
  }

  .guest-name {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    font-size: 72px;
    line-height: 0.95;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: -2px;
  }

  .ep-badge {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 24px;
  }

  .show-mark {
    position: absolute;
    bottom: 40px;
    right: 48px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 22px;
    letter-spacing: 3px;
    color: #ffffff;
    opacity: 0.85;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="tile">
    <div class="photo-side">
      <img src="${portraitPath}" alt="${name}">
    </div>
    <div class="text-side">
      <div class="ep-badge">Episode ${epNum}</div>
      <div class="guest-name">${nameHTML}</div>
    </div>
    <div class="show-mark">letsvibe.fm</div>
  </div>
</body>
</html>`;
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  const config = parseArgs();
  const outputDir = config.output;

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  const slug = config.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const portraitFilename = `ep${config.episode}-${slug}-portrait.png`;
  const portraitPath = path.join(outputDir, portraitFilename);
  const tileHTMLPath = path.join(outputDir, `ep${config.episode}-${slug}-tile.html`);

  try {
    // Step 1: Check if photo is a URL or local file
    let imageUrl: string;
    if (config.photo.startsWith('http')) {
      imageUrl = config.photo;
    } else {
      // Upload local file to get a URL
      imageUrl = await uploadToFal(config.photo);
    }

    // Step 2: Generate B&W portrait via NanoBanana2
    const portraitUrl = await generatePortrait(imageUrl, config.name);

    // Step 3: Download the generated portrait
    await downloadImage(portraitUrl, portraitPath);

    // Step 4: Generate HTML tile
    const tileHTML = generateTileHTML(portraitFilename, config.name, config.episode);
    fs.writeFileSync(tileHTMLPath, tileHTML);
    console.log(`[tile] Saved tile HTML: ${tileHTMLPath}`);

    console.log(`\n[tile] Done! Open ${tileHTMLPath} in Chrome and screenshot at 1080x1080.`);
    console.log(`[tile] Portrait: ${portraitPath}`);

  } catch (err) {
    console.error('[tile] Error:', err);
    process.exit(1);
  }
}

main();
