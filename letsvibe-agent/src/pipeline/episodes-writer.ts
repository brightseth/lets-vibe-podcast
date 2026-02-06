/**
 * Episodes Writer — Reads/modifies/writes website/src/data/episodes.ts
 *
 * - Creates .bak backup before writing
 * - Serializes EpisodeDataOutput to TypeScript
 * - Updates existing episodes or inserts new ones
 */

import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import type { EpisodeDataOutput } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Resolve path relative to letsvibe-agent root → ../website/src/data/episodes.ts
const EPISODES_PATH = resolve(__dirname, '..', '..', '..', 'website', 'src', 'data', 'episodes.ts');

/**
 * Update episodes.ts with new episode data
 */
export function writeEpisode(episode: EpisodeDataOutput): { success: boolean; error?: string } {
  try {
    // Read current file
    const current = readFileSync(EPISODES_PATH, 'utf-8');

    // Create backup
    const backupPath = EPISODES_PATH + '.bak';
    copyFileSync(EPISODES_PATH, backupPath);
    console.log(`  Backup created: ${backupPath}`);

    // Serialize the episode to TypeScript
    const episodeTs = serializeEpisode(episode);

    let updated: string;

    // Check if episode already exists
    const existingRegex = new RegExp(
      `(\\{[\\s\\S]*?number:\\s*${episode.number}\\b[\\s\\S]*?\\})\\s*,`,
      'g'
    );

    if (existingRegex.test(current)) {
      // Replace existing episode block
      updated = current.replace(existingRegex, `${episodeTs},`);
      console.log(`  Replaced existing episode ${episode.number}`);
    } else {
      // Insert before the closing ];
      const insertPoint = current.lastIndexOf('];');
      if (insertPoint === -1) {
        return { success: false, error: 'Could not find closing ]; in episodes.ts' };
      }
      updated = current.slice(0, insertPoint) + `  ${episodeTs},\n` + current.slice(insertPoint);
      console.log(`  Inserted new episode ${episode.number}`);
    }

    // Write updated file
    writeFileSync(EPISODES_PATH, updated, 'utf-8');

    // Validate TypeScript compiles
    const valid = validateTypeScript();
    if (!valid.success) {
      // Restore backup
      copyFileSync(backupPath, EPISODES_PATH);
      console.error('  TypeScript validation failed, backup restored');
      return { success: false, error: `TypeScript error: ${valid.error}` };
    }

    console.log(`  episodes.ts updated successfully`);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, error: message };
  }
}

/**
 * Serialize an episode object to TypeScript literal
 */
function serializeEpisode(ep: EpisodeDataOutput): string {
  const indent = '    ';
  const lines: string[] = [];

  lines.push(`  {`);
  lines.push(`${indent}number: ${ep.number},`);
  lines.push(`${indent}slug: ${quote(ep.slug)},`);
  lines.push(`${indent}title: ${quote(ep.title)},`);
  lines.push(`${indent}guest: ${quote(ep.guest)},`);
  lines.push(`${indent}guestHandle: ${quote(ep.guestHandle)},`);
  lines.push(`${indent}guestBio:`);
  lines.push(`${indent}  ${quote(ep.guestBio)},`);
  lines.push(`${indent}description:`);
  lines.push(`${indent}  ${quote(ep.description)},`);
  lines.push(`${indent}duration: ${quote(ep.duration)},`);
  lines.push(`${indent}date: ${quote(ep.date)},`);
  lines.push(`${indent}status: ${quote(ep.status)},`);

  // Topics array
  lines.push(`${indent}topics: [${ep.topics.map(quote).join(', ')}],`);

  // Show notes (template literal for multiline)
  lines.push(`${indent}showNotes: ${templateLiteral(ep.showNotes)},`);

  // Chapters
  if (ep.chapters.length > 0) {
    lines.push(`${indent}chapters: [`);
    for (const ch of ep.chapters) {
      lines.push(`${indent}  { time: ${quote(ch.time)}, title: ${quote(ch.title)} },`);
    }
    lines.push(`${indent}],`);
  }

  // Links
  if (ep.links.length > 0) {
    lines.push(`${indent}links: [`);
    for (const link of ep.links) {
      lines.push(`${indent}  { label: ${quote(link.label)}, url: ${quote(link.url)} },`);
    }
    lines.push(`${indent}],`);
  }

  lines.push(`  }`);

  return lines.join('\n');
}

function quote(s: string): string {
  // Use single quotes, escape internal single quotes and backslashes
  const escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
  return `'${escaped}'`;
}

function templateLiteral(s: string): string {
  // Use backtick template literal for multiline strings
  const escaped = s.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return '`' + escaped + '`';
}

/**
 * Validate the website TypeScript compiles after our edit
 */
function validateTypeScript(): { success: boolean; error?: string } {
  const websiteDir = resolve(__dirname, '..', '..', '..', 'website');

  try {
    execSync('npx tsc --noEmit 2>&1', {
      cwd: websiteDir,
      timeout: 30000,
      encoding: 'utf-8',
    });
    console.log('  TypeScript validation passed');
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? (err as any).stdout || err.message : String(err);
    return { success: false, error: message };
  }
}

/**
 * Get the path to episodes.ts (for external reference)
 */
export function getEpisodesPath(): string {
  return EPISODES_PATH;
}
