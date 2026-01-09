#!/usr/bin/env node
/**
 * Let's Vibe! Cover Art Generator
 * Uses NanoBanana Pro (Gemini 3 Image via FAL)
 *
 * Usage:
 *   node scripts/generate-cover-art.js
 *   node scripts/generate-cover-art.js --variations 3
 *   node scripts/generate-cover-art.js --style minimal
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'cover-art');

const FAL_API_KEY = process.env.FAL_API_KEY;

if (!FAL_API_KEY) {
  console.error('Missing FAL_API_KEY in .env');
  process.exit(1);
}

// Cover art style presets
const STYLE_PRESETS = {
  warm: {
    name: 'Warm Abstract',
    prompt: `Abstract podcast cover art for "Let's Vibe!" - a podcast about creative coding and vibecoding.

Visual style: Warm, inviting, abstract generative art aesthetic
Color palette: Gradient from warm orange (#FF6B35) to deep purple (#7B2D8E), with pops of cyan (#00D4FF)
Elements: Abstract flowing shapes suggesting creativity and connection, soft gradients, organic curves that feel like sound waves or data streams merging with artistic expression
Composition: Centered focal point with radiating energy, balanced and harmonious
Mood: Creative, welcoming, optimistic, the feeling of flow state

NO TEXT - just the visual design
Clean, professional podcast cover art style
High quality, 3000x3000 square format
NOT: cyberpunk, neon grids, tech-bro aesthetic, stock photo, clip art, busy cluttered design`
  },

  minimal: {
    name: 'Minimal Gradient',
    prompt: `Minimal podcast cover art for "Let's Vibe!" - a creative coding podcast.

Visual style: Clean, minimal, sophisticated
Color palette: Sunset gradient from warm coral to soft purple, single accent color
Elements: Simple geometric shapes - perhaps a single flowing curve or circle, lots of negative space
Composition: Off-center minimal element, breathing room
Mood: Calm, focused, Rick Rubin studio energy

NO TEXT - just the visual design
Swiss design influence, gallery-quality aesthetic
High quality, 3000x3000 square format
NOT: busy, cluttered, corporate, stock imagery`
  },

  generative: {
    name: 'Generative Art',
    prompt: `Generative art podcast cover for "Let's Vibe!" - exploring AI-assisted creativity.

Visual style: Algorithmic generative art, like Tyler Hobbs or Casey Reas work
Color palette: Rich warm tones - oranges, magentas, deep blues - with emergent patterns
Elements: Mathematical curves that feel organic, particle flows, emergent complexity from simple rules
Composition: Fills the frame with intricate detail that rewards closer inspection
Mood: The beauty of code becoming art, emergence, creative collaboration

NO TEXT - just the generative visual
Art Blocks / generative art aesthetic
High quality, 3000x3000 square format
NOT: pixelated, low-res, glitchy in a bad way, neon cyberpunk`
  },

  ted: {
    name: 'TED Sophisticate',
    prompt: `Sophisticated podcast cover art for a TED-style show about creative coding.

Visual style: Refined generative art - elegant flowing lines on dark background, like premium conference branding
Color palette: Deep charcoal black background (#0A0A0A), warm amber/copper (#D4A574) and magenta (#C24B8C) flowing lines, subtle depth
Elements: Flowing algorithmic curves suggesting conversation and ideas merging - NOT chaotic, but composed and intentional. Like two streams of thought interweaving.
Composition: Balanced, centered energy with breathing room. Premium feel like TED, Acquired podcast, or high-end conference materials.
Mood: Sophisticated creators having meaningful conversations. Grown-up. Polished. The feeling of insight and connection.

NO TEXT - just the visual design
Think: TED talks branding meets generative art meets Acquired podcast aesthetic
High quality, square format
NOT: too busy, art-school experimental, chaotic, neon, cheap, clip-art, stock photo`
  },

  refined: {
    name: 'Refined Flow',
    prompt: `Premium podcast cover for "Let's Vibe!" - sophisticated conversations about AI-assisted creativity.

Visual style: Elegant flowing lines - generative but refined, like luxury brand design meets algorithmic art
Color palette: Rich dark background, warm copper/amber and deep magenta accent lines, subtle gradients
Elements: Two or three flowing forms that suggest dialogue, connection, ideas interweaving - minimal but striking
Composition: Generous negative space, not filling every inch. Confident. Premium.
Mood: Tim Ferriss meets TED meets Oprah - warm but substantial. For grown-up creators who ship real things.

NO TEXT - just the visual
Think: If Acquired podcast and Art Blocks had a baby
High quality, square format
NOT: busy, chaotic, art-school, neon cyberpunk, cheap, generic`
  },

  studio: {
    name: 'Studio Vibes',
    prompt: `Abstract podcast cover art for "Let's Vibe!" - creative conversations about coding.

Visual style: Recording studio meets digital art - warm, intimate, creative space feeling
Color palette: Warm amber, deep purple, soft white - like sunset through studio windows
Elements: Abstract shapes suggesting sound waves, creative energy, two forms in conversation
Composition: Balanced duality, suggesting host and guest connection
Mood: Intimate creative conversation, late night studio session, flow state

NO TEXT - just the visual design
Professional podcast aesthetic, gallery quality
High quality, 3000x3000 square format
NOT: literal microphones or equipment, corporate, cold, tech-bro`
  }
};

/**
 * Generate cover art with NanoBanana Pro
 */
async function generateCoverArt(styleKey = 'warm') {
  const style = STYLE_PRESETS[styleKey];
  if (!style) {
    console.error(`Unknown style: ${styleKey}. Available: ${Object.keys(STYLE_PRESETS).join(', ')}`);
    process.exit(1);
  }

  console.log(`\n🎨 Generating: ${style.name}`);
  console.log('Using: NanoBanana Pro (Gemini 3 Image via FAL)\n');

  const response = await fetch('https://fal.run/fal-ai/nano-banana-pro', {
    method: 'POST',
    headers: {
      'Authorization': `Key ${FAL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: style.prompt,
      aspect_ratio: '1:1',
      num_images: 1
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`FAL API error: ${response.status} - ${error}`);
  }

  const result = await response.json();
  return result;
}

/**
 * Download image from URL
 */
async function downloadImage(url, filename) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.status}`);
  }

  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Saved: ${filename}`);
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);

  const getArg = (flag) => {
    const idx = args.indexOf(flag);
    return idx !== -1 ? args[idx + 1] : null;
  };

  if (args.includes('--help')) {
    console.log(`
Let's Vibe! Cover Art Generator
================================

Generate podcast cover art using NanoBanana Pro.

USAGE:
  node scripts/generate-cover-art.js [options]

OPTIONS:
  --style <name>       Style preset (default: warm)
  --variations <n>     Generate n variations (default: 1)
  --all               Generate all style presets
  --help              Show this help

STYLE PRESETS:
  warm       - Warm Abstract (orange to purple gradient)
  minimal    - Minimal Gradient (Swiss design)
  generative - Generative Art (algorithmic patterns)
  studio     - Studio Vibes (intimate creative energy)

EXAMPLES:
  node scripts/generate-cover-art.js
  node scripts/generate-cover-art.js --style minimal
  node scripts/generate-cover-art.js --all
  node scripts/generate-cover-art.js --style warm --variations 3
`);
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const generateAll = args.includes('--all');
  const styleKey = getArg('--style') || 'warm';
  const variations = parseInt(getArg('--variations') || '1');

  const timestamp = new Date().toISOString().slice(0, 10);
  const styles = generateAll ? Object.keys(STYLE_PRESETS) : [styleKey];

  console.log('🎙️ Let\'s Vibe! Cover Art Generator');
  console.log('===================================\n');

  for (const style of styles) {
    for (let i = 0; i < variations; i++) {
      try {
        const result = await generateCoverArt(style);

        if (result.images && result.images[0]) {
          const suffix = variations > 1 ? `-v${i + 1}` : '';
          const filename = path.join(OUTPUT_DIR, `cover-${style}${suffix}-${timestamp}.png`);

          console.log(`\n✅ Generated: ${STYLE_PRESETS[style].name}`);
          console.log(`URL: ${result.images[0].url}`);

          await downloadImage(result.images[0].url, filename);
        } else {
          console.log('\nResult:', JSON.stringify(result, null, 2));
        }
      } catch (error) {
        console.error(`\n❌ Error generating ${style}:`, error.message);
      }

      // Small delay between requests
      if (styles.length > 1 || variations > 1) {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  }

  console.log(`\n📁 Cover art saved to: ${OUTPUT_DIR}`);
  console.log('\nNext steps:');
  console.log('1. Review generated options');
  console.log('2. Add "LET\'S VIBE!" text in Figma/Canva');
  console.log('3. Export final 3000x3000 PNG for Spotify');
}

main().catch(console.error);
