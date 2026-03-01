/**
 * PM2 ecosystem config for LEVI — Let's Vibe! AI Producer.
 *
 * levi-core:
 *   - Main agent daemon
 *   - Production pipeline orchestration
 *   - Guest pipeline monitoring
 *   - Episode lifecycle management
 *   - @seth inbox processing
 *
 * levi-heartbeat:
 *   - Lightweight /vibe presence ping (every 5 min)
 *   - No Claude calls, pure HTTP
 *
 * Usage:
 *   pm2 start ecosystem.config.cjs
 *   pm2 logs levi-core
 *   pm2 stop levi-core levi-heartbeat
 */

module.exports = {
  apps: [
    {
      name: "levi-core",
      script: "npx",
      args: "tsx src/core/main.ts",
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      kill_timeout: 10000,
      env: {
        NODE_ENV: "production",
      },
      out_file: "./state/logs/levi-core-out.log",
      error_file: "./state/logs/levi-core-err.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
    {
      name: "levi-heartbeat",
      script: "npx",
      args: "tsx src/skills/vibe-presence.ts",
      cwd: __dirname,
      watch: false,
      autorestart: false,
      // Run every 5 minutes to maintain presence in /vibe buddy list
      cron_restart: "*/5 * * * *",
      env: {
        NODE_ENV: "production",
      },
      out_file: "./state/logs/vibe-heartbeat-out.log",
      error_file: "./state/logs/vibe-heartbeat-err.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
