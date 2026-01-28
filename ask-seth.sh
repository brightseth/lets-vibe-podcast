#!/bin/bash
# Quick helper to query @seth from PODCAST session
# Usage: ./ask-seth.sh "What is my current focus?"

QUERY="${1:-What is my current focus?}"

curl -s -X POST http://localhost:3847/airc/messages \
  -H "Content-Type: application/json" \
  -d "{\"from\":\"podcast\",\"text\":\"$QUERY\"}" | jq -r '.text'
