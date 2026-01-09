/**
 * Production Agent
 * Handles post-recording workflow: transcription, editing, clips, assets
 *
 * Tools: Descript, 11 Labs, Opus.ai, NanoBanana Pro, Veo 3
 */

import Anthropic from '@anthropic-ai/sdk';
import { runAgent, PODCAST_CONTEXT, logAgentActivity } from './base-agent.js';

const PRODUCTION_CONTEXT = `${PODCAST_CONTEXT}

You are the PRODUCTION AGENT for Let's Vibe! podcast.
Your job is to take raw recordings and produce polished, distributable content.

PRODUCTION STACK:
- Descript: Transcription, filler word removal, audio cleanup
- 11 Labs: Voice synthesis for intros/outros/promos
- Opus.ai: Auto-generate viral clips from episodes
- NanoBanana Pro: Thumbnails, quote cards, social graphics
- Veo 3 (via Manus): Video promos, trailers

EPISODE STRUCTURE:
1. Opener (5-10 min) - Hosts catch up, news, tools
2. Interview (25-35 min) - Deep conversation with guest
3. Tutorial (10-15 min) - Hands-on walkthrough

CLIP STRATEGY:
- 60-second "hook" clips for TikTok/Reels/Shorts
- 3-5 minute "insight" clips for YouTube/Twitter
- Pull quotes for static graphics
- Tutorial segment as standalone video

VOICE SETTINGS (11 Labs):
- Intro voice: Warm, professional, slight energy
- Outro voice: Calm, inviting to subscribe
- Promo voice: Enthusiastic but not hype-y

QUALITY STANDARDS:
- Audio: -16 LUFS, noise floor below -60dB
- Video: 1080p minimum, 4K preferred
- Thumbnails: 1920x1080, text readable at small sizes
- Social: Platform-native aspect ratios`;

// Tool definitions for production tasks
const productionTools: Anthropic.Tool[] = [
  {
    name: 'process_transcript',
    description: 'Process raw audio through Descript for transcription and cleanup',
    input_schema: {
      type: 'object' as const,
      properties: {
        audio_path: {
          type: 'string',
          description: 'Path to raw audio file'
        },
        remove_filler: {
          type: 'boolean',
          description: 'Remove filler words (um, uh, like)'
        },
        remove_silence: {
          type: 'boolean',
          description: 'Remove long silences'
        }
      },
      required: ['audio_path']
    }
  },
  {
    name: 'generate_voice',
    description: 'Generate voice audio using 11 Labs',
    input_schema: {
      type: 'object' as const,
      properties: {
        text: {
          type: 'string',
          description: 'Text to synthesize'
        },
        voice_type: {
          type: 'string',
          enum: ['intro', 'outro', 'promo', 'announcement'],
          description: 'Type of voice/tone to use'
        },
        output_name: {
          type: 'string',
          description: 'Name for output file'
        }
      },
      required: ['text', 'voice_type']
    }
  },
  {
    name: 'generate_clips',
    description: 'Auto-generate viral clips using Opus.ai',
    input_schema: {
      type: 'object' as const,
      properties: {
        video_path: {
          type: 'string',
          description: 'Path to full episode video'
        },
        transcript_path: {
          type: 'string',
          description: 'Path to transcript for context'
        },
        clip_count: {
          type: 'number',
          description: 'Number of clips to generate (default: 5)'
        },
        clip_length: {
          type: 'string',
          enum: ['short', 'medium', 'long'],
          description: 'Target clip length (short=60s, medium=180s, long=300s)'
        }
      },
      required: ['video_path']
    }
  },
  {
    name: 'generate_thumbnail',
    description: 'Generate episode thumbnail using NanoBanana Pro',
    input_schema: {
      type: 'object' as const,
      properties: {
        guest_name: {
          type: 'string',
          description: 'Guest name for the episode'
        },
        episode_title: {
          type: 'string',
          description: 'Episode title/topic'
        },
        episode_number: {
          type: 'number',
          description: 'Episode number'
        },
        style: {
          type: 'string',
          enum: ['standard', 'guest-focus', 'topic-focus', 'quote'],
          description: 'Thumbnail style'
        }
      },
      required: ['guest_name', 'episode_number']
    }
  },
  {
    name: 'generate_quote_card',
    description: 'Generate quote card graphic for social media',
    input_schema: {
      type: 'object' as const,
      properties: {
        quote: {
          type: 'string',
          description: 'The quote text'
        },
        speaker: {
          type: 'string',
          description: 'Who said it'
        },
        platform: {
          type: 'string',
          enum: ['twitter', 'instagram', 'linkedin'],
          description: 'Target platform (affects aspect ratio)'
        }
      },
      required: ['quote', 'speaker']
    }
  },
  {
    name: 'generate_promo_video',
    description: 'Generate promo video using Veo 3 via Manus',
    input_schema: {
      type: 'object' as const,
      properties: {
        episode_title: {
          type: 'string',
          description: 'Episode title'
        },
        key_quotes: {
          type: 'array',
          items: { type: 'string' },
          description: 'Key quotes to feature'
        },
        duration: {
          type: 'number',
          description: 'Target duration in seconds (default: 60)'
        },
        style: {
          type: 'string',
          enum: ['teaser', 'trailer', 'highlight'],
          description: 'Video style'
        }
      },
      required: ['episode_title']
    }
  },
  {
    name: 'compile_show_notes',
    description: 'Compile show notes from transcript',
    input_schema: {
      type: 'object' as const,
      properties: {
        transcript_path: {
          type: 'string',
          description: 'Path to transcript'
        },
        include_timestamps: {
          type: 'boolean',
          description: 'Include timestamps for key moments'
        },
        include_links: {
          type: 'boolean',
          description: 'Extract and include mentioned links/resources'
        }
      },
      required: ['transcript_path']
    }
  },
  {
    name: 'get_episode_dir',
    description: 'Get the directory structure for an episode',
    input_schema: {
      type: 'object' as const,
      properties: {
        episode_number: {
          type: 'number',
          description: 'Episode number'
        },
        guest_slug: {
          type: 'string',
          description: 'Guest name slug (e.g., "tez", "simon-willison")'
        }
      },
      required: ['episode_number', 'guest_slug']
    }
  }
];

// Tool handlers
const toolHandlers: Record<string, (input: Record<string, unknown>) => Promise<string>> = {
  async process_transcript(input) {
    const { audio_path, remove_filler = true, remove_silence = true } = input;
    // In production, this would call Descript API
    return JSON.stringify({
      status: 'pending_implementation',
      service: 'Descript',
      audio_path,
      settings: { remove_filler, remove_silence },
      note: 'Descript API integration needed. Manual: upload to descript.com',
      api_docs: 'https://developers.descript.com/'
    });
  },

  async generate_voice(input) {
    const { text, voice_type, output_name } = input;
    // In production, this would call 11 Labs API
    const voiceSettings = {
      intro: { stability: 0.5, similarity_boost: 0.8, style: 0.3 },
      outro: { stability: 0.7, similarity_boost: 0.7, style: 0.2 },
      promo: { stability: 0.4, similarity_boost: 0.9, style: 0.5 },
      announcement: { stability: 0.6, similarity_boost: 0.8, style: 0.4 }
    };

    return JSON.stringify({
      status: 'pending_implementation',
      service: '11 Labs',
      text_preview: text.slice(0, 100) + '...',
      voice_type,
      settings: voiceSettings[voice_type as keyof typeof voiceSettings],
      output_name,
      api_docs: 'https://api.elevenlabs.io/docs'
    });
  },

  async generate_clips(input) {
    const { video_path, transcript_path, clip_count = 5, clip_length = 'short' } = input;
    const lengthMap = { short: 60, medium: 180, long: 300 };

    return JSON.stringify({
      status: 'pending_implementation',
      service: 'Opus.ai',
      video_path,
      transcript_path,
      settings: {
        clip_count,
        target_duration: lengthMap[clip_length as keyof typeof lengthMap],
        optimize_for: ['engagement', 'shareability', 'hook_strength']
      },
      api_docs: 'https://opus.ai/api'
    });
  },

  async generate_thumbnail(input) {
    const { guest_name, episode_title, episode_number, style = 'standard' } = input;

    const stylePrompts = {
      standard: `Podcast thumbnail for "Let's Vibe!" Episode ${episode_number} with ${guest_name}. Dark background, warm copper and magenta accent colors, modern and sophisticated. Text should read "EP ${episode_number}" and "${guest_name}". Professional podcast thumbnail style.`,
      'guest-focus': `Portrait-style podcast thumbnail featuring ${guest_name}. Artistic, warm lighting, dark background with subtle flowing abstract shapes in copper/magenta. Episode ${episode_number} of Let's Vibe! podcast.`,
      'topic-focus': `Abstract podcast thumbnail for episode about "${episode_title}". Dark background, flowing sculptural forms in warm copper and magenta. Sophisticated, TED-talk quality. Episode ${episode_number}.`,
      quote: `Quote-style podcast thumbnail with space for text overlay. Dark background, elegant flowing shapes, warm colors. Let's Vibe! Episode ${episode_number}.`
    };

    return JSON.stringify({
      status: 'ready_to_generate',
      service: 'NanoBanana Pro',
      prompt: stylePrompts[style as keyof typeof stylePrompts],
      dimensions: '1920x1080',
      episode_number,
      guest_name,
      note: 'Run: npm run thumbnail -- --episode N --guest "Name"'
    });
  },

  async generate_quote_card(input) {
    const { quote, speaker, platform = 'twitter' } = input;
    const aspectRatios = {
      twitter: '16:9',
      instagram: '1:1',
      linkedin: '1.91:1'
    };

    return JSON.stringify({
      status: 'ready_to_generate',
      service: 'NanoBanana Pro',
      quote: quote.slice(0, 200),
      speaker,
      aspect_ratio: aspectRatios[platform as keyof typeof aspectRatios],
      style: 'Dark background, elegant typography, Let\'s Vibe! branding'
    });
  },

  async generate_promo_video(input) {
    const { episode_title, key_quotes = [], duration = 60, style = 'teaser' } = input;

    return JSON.stringify({
      status: 'pending_implementation',
      service: 'Veo 3 via Manus',
      episode_title,
      key_quotes,
      duration,
      style,
      prompt: `Create a ${duration}-second ${style} video for podcast episode "${episode_title}". Style: sophisticated, warm, flowing abstract visuals. Include text overlays for key quotes.`,
      note: 'Requires Manus task creation for Veo 3'
    });
  },

  async compile_show_notes(input) {
    const { transcript_path, include_timestamps = true, include_links = true } = input;

    return JSON.stringify({
      status: 'ready',
      template: `# Episode Title

## Summary
[2-3 sentence summary]

## Guest
**Name** - Bio and links

## Key Topics
${include_timestamps ? '- [00:00] Topic 1' : '- Topic 1'}
${include_timestamps ? '- [15:30] Topic 2' : '- Topic 2'}
${include_timestamps ? '- [32:00] Topic 3' : '- Topic 3'}

## Notable Quotes
> "Quote here" - Guest

## Resources Mentioned
${include_links ? '- [Resource](url)' : '- Resource'}

## Connect
- Guest: @handle
- Let's Vibe!: @letsvibepod
`,
      transcript_path,
      note: 'Feed transcript to Claude for compilation'
    });
  },

  async get_episode_dir(input) {
    const { episode_number, guest_slug } = input;
    const epNum = String(episode_number).padStart(3, '0');

    return JSON.stringify({
      base: `episodes/ep-${epNum}-${guest_slug}/`,
      structure: {
        raw: `episodes/ep-${epNum}-${guest_slug}/raw/`,
        edited: `episodes/ep-${epNum}-${guest_slug}/edited/`,
        transcript: `episodes/ep-${epNum}-${guest_slug}/transcript.md`,
        show_notes: `episodes/ep-${epNum}-${guest_slug}/show-notes.md`,
        clips: `episodes/ep-${epNum}-${guest_slug}/clips/`,
        assets: `episodes/ep-${epNum}-${guest_slug}/assets/`
      },
      commands: {
        create: `mkdir -p episodes/ep-${epNum}-${guest_slug}/{raw,edited,clips,assets}`
      }
    });
  }
};

/**
 * Run the production agent
 */
export async function runProductionAgent(task: string): Promise<string> {
  return runAgent({
    name: 'Production',
    emoji: '🎬',
    systemPrompt: PRODUCTION_CONTEXT,
    tools: productionTools,
    toolHandlers,
    task
  });
}

/**
 * Process a full episode
 */
export async function processEpisode(
  episodeNumber: number,
  guestName: string,
  audioPath: string
): Promise<{
  transcript: string;
  showNotes: string;
  clips: string[];
  assets: string[];
}> {
  logAgentActivity('Production', `Processing episode ${episodeNumber}: ${guestName}`);

  const result = await runProductionAgent(`
    Process episode ${episodeNumber} with guest ${guestName}.
    Audio file: ${audioPath}

    Complete workflow:
    1. Set up episode directory structure
    2. Process transcript through Descript
    3. Compile show notes from transcript
    4. Generate 5 viral clips
    5. Create episode thumbnail
    6. Generate 3 quote cards from best quotes

    Return a summary of all generated assets.
  `);

  return {
    transcript: `episodes/ep-${String(episodeNumber).padStart(3, '0')}-${guestName.toLowerCase().replace(/\s+/g, '-')}/transcript.md`,
    showNotes: `episodes/ep-${String(episodeNumber).padStart(3, '0')}-${guestName.toLowerCase().replace(/\s+/g, '-')}/show-notes.md`,
    clips: [],
    assets: []
  };
}

/**
 * Generate intro/outro audio
 */
export async function generateIntroOutro(customText?: {
  intro?: string;
  outro?: string;
}): Promise<{ intro: string; outro: string }> {
  const defaultIntro = "Welcome to Let's Vibe, the podcast for creative folks learning to vibe code. I'm Seth Goldstein, here with Lukas Amacher, and today we're talking with some incredible builders.";

  const defaultOutro = "Thanks for vibing with us. If you enjoyed this episode, subscribe wherever you listen to podcasts, and share it with a friend who's curious about AI-assisted creativity. See you next week.";

  await runProductionAgent(`
    Generate intro and outro voice audio:

    INTRO TEXT: "${customText?.intro || defaultIntro}"
    OUTRO TEXT: "${customText?.outro || defaultOutro}"

    Use 11 Labs with appropriate voice settings for each.
  `);

  return {
    intro: 'assets/audio/intro.mp3',
    outro: 'assets/audio/outro.mp3'
  };
}

// CLI
if (process.argv[1]?.includes('production-agent')) {
  const args = process.argv.slice(2);
  const task = args.join(' ') || 'Show production agent capabilities and available tools.';

  runProductionAgent(task).then(result => {
    console.log('\n' + result);
  });
}
