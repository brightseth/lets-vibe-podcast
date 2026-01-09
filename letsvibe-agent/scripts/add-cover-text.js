#!/usr/bin/env node
/**
 * Add "LET'S VIBE!" text to cover art
 * Uses sharp for image compositing (no Figma needed)
 *
 * Usage:
 *   node scripts/add-cover-text.js
 *   node scripts/add-cover-text.js --input path/to/image.png
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COVER_DIR = path.join(__dirname, '..', 'data', 'cover-art');
const DEFAULT_INPUT = path.join(COVER_DIR, 'COVER-ART-FINAL-refined-v2.png');

// We'll use NanoBanana to generate a text overlay version
// Since image models struggle with text, we generate a clean text-on-dark design
// and then composite it (or generate fresh with text instruction)

const FAL_API_KEY = process.env.FAL_API_KEY;

async function generateWithText() {
  console.log('🎨 Generating cover art with text using NanoBanana Pro...\n');

  // Generate a version with text baked in
  // Note: Most models struggle with text, so we use explicit instructions
  const prompt = `Premium podcast cover art with text "LET'S VIBE!" prominently displayed.

Design: Sculptural flowing form on dark background - warm copper and magenta flowing ribbons intertwining, like a sophisticated 3D knot
Text: "LET'S VIBE!" in bold, modern sans-serif typography (like Helvetica Bold or Inter Bold), white or light cream color
Text placement: Centered in the upper third, large and confident
Background: Deep charcoal black (#0A0A0A)
Style: TED talks meets Art Blocks - premium, sophisticated, grown-up

The text must be clearly readable and perfectly spelled: LET'S VIBE!
High quality, 3000x3000 square podcast cover
Professional podcast branding`;

  const response = await fetch('https://fal.run/fal-ai/nano-banana-pro', {
    method: 'POST',
    headers: {
      'Authorization': `Key ${FAL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio: '1:1',
      num_images: 1
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`FAL API error: ${response.status} - ${error}`);
  }

  return response.json();
}

// Alternative: Use Flux which is better at text
async function generateWithFlux() {
  console.log('🎨 Generating cover art with text using Flux Pro...\n');

  const prompt = `Podcast cover art for "LET'S VIBE!" podcast.

The text "LET'S VIBE!" must appear clearly in bold white sans-serif typography in the upper portion.

Background: Deep black with a sculptural flowing form made of warm copper and magenta ribbons, intertwining like a sophisticated 3D knot or torus shape.

Style: Premium, sophisticated, like TED talks branding meets generative art.
Square format podcast cover, professional quality.`;

  const response = await fetch('https://fal.run/fal-ai/flux-pro/v1.1', {
    method: 'POST',
    headers: {
      'Authorization': `Key ${FAL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt,
      image_size: 'square_hd',
      num_images: 1
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`FAL API error: ${response.status} - ${error}`);
  }

  return response.json();
}

async function downloadImage(url, filename) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status}`);
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`✅ Saved: ${filename}`);
}

async function main() {
  const args = process.argv.slice(2);
  const useFlux = args.includes('--flux');

  if (!FAL_API_KEY) {
    console.error('Missing FAL_API_KEY in .env');
    process.exit(1);
  }

  console.log('🎙️ Let\'s Vibe! Cover Art + Text Generator');
  console.log('==========================================\n');

  try {
    // Try multiple models for best text rendering
    let result;

    if (useFlux) {
      result = await generateWithFlux();
    } else {
      result = await generateWithText();
    }

    const timestamp = new Date().toISOString().slice(0, 16).replace(':', '-');
    const model = useFlux ? 'flux' : 'nanobanana';

    if (result.images && result.images[0]) {
      const filename = path.join(COVER_DIR, `COVER-WITH-TEXT-${model}-${timestamp}.png`);
      console.log(`\nURL: ${result.images[0].url}`);
      await downloadImage(result.images[0].url, filename);
    } else if (result.image) {
      const filename = path.join(COVER_DIR, `COVER-WITH-TEXT-${model}-${timestamp}.png`);
      console.log(`\nURL: ${result.image.url}`);
      await downloadImage(result.image.url, filename);
    }

    console.log('\n📝 Note: AI text rendering can be imperfect.');
    console.log('   If text is garbled, try: node scripts/add-cover-text.js --flux');
    console.log('   Or use the SVG overlay method below.\n');

    // Also provide SVG overlay option
    console.log('💡 Alternative: Generate SVG text overlay');
    console.log('   This creates a clean text layer you can composite:\n');

    const svgContent = `<svg width="3000" height="3000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&amp;display=swap');
    </style>
  </defs>
  <text x="1500" y="600"
        font-family="Inter, Helvetica Neue, Arial, sans-serif"
        font-size="280"
        font-weight="800"
        fill="white"
        text-anchor="middle"
        letter-spacing="8">LET'S VIBE!</text>
</svg>`;

    const svgPath = path.join(COVER_DIR, 'text-overlay.svg');
    fs.writeFileSync(svgPath, svgContent);
    console.log(`   SVG saved: ${svgPath}`);
    console.log('   Composite with: sharp or ImageMagick\n');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
