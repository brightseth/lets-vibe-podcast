import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { episodeTools, handleEpisodeTool } from "./tools/episodes.js";
import { transcriptTools, handleTranscriptTool } from "./tools/transcripts.js";
import { showNotesTools, handleShowNotesTool } from "./tools/show-notes.js";
import { clipTools, handleClipTool } from "./tools/clips.js";
import { socialTools, handleSocialTool } from "./tools/social.js";
import { guestTools, handleGuestTool } from "./tools/guests.js";

const server = new McpServer({
  name: "letsvibe-studio",
  version: "0.1.0",
});

// Collect all tools and their handlers
const allTools = [
  ...episodeTools,
  ...transcriptTools,
  ...showNotesTools,
  ...clipTools,
  ...socialTools,
  ...guestTools,
];

const handlers: Record<string, (name: string, args: Record<string, unknown>) => Promise<unknown>> = {};

for (const tool of episodeTools) handlers[tool.name] = handleEpisodeTool;
for (const tool of transcriptTools) handlers[tool.name] = handleTranscriptTool;
for (const tool of showNotesTools) handlers[tool.name] = handleShowNotesTool;
for (const tool of clipTools) handlers[tool.name] = handleClipTool;
for (const tool of socialTools) handlers[tool.name] = handleSocialTool;
for (const tool of guestTools) handlers[tool.name] = handleGuestTool;

// Register all tools
for (const tool of allTools) {
  server.tool(
    tool.name,
    tool.description,
    tool.inputSchema.properties as Record<string, unknown>,
    async (args: Record<string, unknown>) => {
      try {
        const handler = handlers[tool.name];
        if (!handler) throw new Error(`No handler for tool: ${tool.name}`);
        const result = await handler(tool.name, args);
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ error: message }),
            },
          ],
          isError: true,
        };
      }
    }
  );
}

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`Let's Vibe! Studio MCP server running (${allTools.length} tools registered)`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
