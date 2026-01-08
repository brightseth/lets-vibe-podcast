/**
 * Base Agent - Shared infrastructure for all Let's Vibe! sub-agents
 *
 * Uses the Claude Agent SDK pattern:
 * - Tool definitions
 * - Agentic loop with tool handling
 * - Structured output
 */

import Anthropic from '@anthropic-ai/sdk';

// Types
export interface AgentConfig {
  name: string;
  description: string;
  systemPrompt: string;
  tools: Anthropic.Tool[];
  model?: string;
  maxTokens?: number;
}

export interface AgentResult {
  success: boolean;
  output: string;
  toolsUsed: string[];
  error?: string;
}

export interface ToolHandler {
  (toolName: string, toolInput: Record<string, unknown>): Promise<string>;
}

// Shared podcast context for all agents
export const PODCAST_CONTEXT = `
You are a sub-agent for Let's Vibe! podcast production.

Context:
- Podcast: Let's Vibe! - Weekly podcast for creative folks learning to vibe code
- Hosts: Seth Goldstein + Lukas Amacher
- Positioning: NOT for developers/enterprises - for artists, collectors, creatives
- Tone: Conversational, curious, accessible. Rick Rubin energy meets tech optimism.
- Current status: Planning phase, first guest (tez) confirmed

Voice guidelines:
- Never: "excited to announce", "revolutionary", "game-changing", engagement bait
- Always: Direct statements, genuine curiosity, respect for audience intelligence
- Accessible to non-technical creatives

Guest database location: ~/Projects/lets-vibe-podcast/letsvibe-agent/src/data/guests.ts
`;

/**
 * Run an agent with the given configuration and task
 */
export async function runAgent(
  config: AgentConfig,
  task: string,
  handleToolCall: ToolHandler
): Promise<AgentResult> {
  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      success: false,
      output: '',
      toolsUsed: [],
      error: 'ANTHROPIC_API_KEY not set. Add it to .env file.'
    };
  }

  const anthropic = new Anthropic();
  const toolsUsed: string[] = [];

  const messages: Anthropic.MessageParam[] = [
    {
      role: 'user',
      content: task
    }
  ];

  const systemPrompt = `${config.systemPrompt}\n\n${PODCAST_CONTEXT}`;

  let continueLoop = true;
  let finalOutput = '';

  while (continueLoop) {
    try {
      const response = await anthropic.messages.create({
        model: config.model || 'claude-sonnet-4-20250514',
        max_tokens: config.maxTokens || 4096,
        system: systemPrompt,
        tools: config.tools,
        messages
      });

      // Handle end of turn
      if (response.stop_reason === 'end_turn') {
        for (const block of response.content) {
          if (block.type === 'text') {
            finalOutput = block.text;
          }
        }
        continueLoop = false;
        continue;
      }

      // Handle tool use
      if (response.stop_reason === 'tool_use') {
        messages.push({
          role: 'assistant',
          content: response.content
        });

        const toolResults: Anthropic.ToolResultBlockParam[] = [];

        for (const block of response.content) {
          if (block.type === 'tool_use') {
            toolsUsed.push(block.name);

            try {
              const result = await handleToolCall(
                block.name,
                block.input as Record<string, unknown>
              );

              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: result
              });
            } catch (error) {
              const message = error instanceof Error ? error.message : String(error);
              toolResults.push({
                type: 'tool_result',
                tool_use_id: block.id,
                content: JSON.stringify({ error: message }),
                is_error: true
              });
            }
          }
        }

        messages.push({
          role: 'user',
          content: toolResults
        });
      }
    } catch (error) {
      return {
        success: false,
        output: '',
        toolsUsed,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }

  return {
    success: true,
    output: finalOutput,
    toolsUsed
  };
}

/**
 * Create a simple agent that just responds without tools
 */
export async function runSimpleAgent(
  systemPrompt: string,
  task: string
): Promise<AgentResult> {
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      success: false,
      output: '',
      toolsUsed: [],
      error: 'ANTHROPIC_API_KEY not set'
    };
  }

  const anthropic = new Anthropic();

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: `${systemPrompt}\n\n${PODCAST_CONTEXT}`,
      messages: [{ role: 'user', content: task }]
    });

    let output = '';
    for (const block of response.content) {
      if (block.type === 'text') {
        output = block.text;
      }
    }

    return { success: true, output, toolsUsed: [] };
  } catch (error) {
    return {
      success: false,
      output: '',
      toolsUsed: [],
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

/**
 * Log agent activity
 */
export function logAgentActivity(agentName: string, action: string, details?: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${agentName}] ${action}${details ? `: ${details}` : ''}`);
}
