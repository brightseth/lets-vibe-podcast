# Episode 2: Agents Propose, Humans Sign

## Tutorial: OpenClaw + Ledger Agent Intents

**Recording:** Wednesday Feb 5, 2026
**Hosts:** Seth Goldstein + Ian Rogers
**Hackathon Deadline:** Feb 8 (Circle USDC OpenClaw Hackathon)

---

## Episode Structure (45 min)

### 1. THE OPENER (5 min)
**"The Agent Wallet Problem"**

- Why agents + private keys = disaster
- OpenClaw context: 100K GitHub stars, CNBC coverage, mainstream moment
- The malware angle: 386 malicious plugins found in ClawHub stealing crypto
- Set up the thesis: we need a security model for agent spending

### 2. THE VIBE CHECK (15 min)
**Seth & Ian shoot the shit**

**Ian's week:**
- Gave Alexandre Arnault his first Claude Code prompt
- Walking Tony Fadell through OpenClaw on Friday
- Deep in hackathon mode with ledger-agent-intents
- "Agents propose, humans sign with hardware"

**Seth's week:**
- Proof of Corn tutorial with Farmer Fred (tease the clip)
- Solienne's response to rentahuman.ai ("The Rented Gaze")
- Paris hackathon idea for late March
- Spirit Protocol conversations
- "The use cases of ETH are exploding"

**Topics to riff on:**
- The LVMH/luxury meets crypto builder pipeline
- How non-technical executives (Arnault) are entering the space
- Why hardware wallets matter more in an agent world

### 3. THE TUTORIAL (25 min)
**"Agents Propose, Humans Sign" - Building ledger-agent-intents**

Ian walks through the full stack:

**Architecture (explain first):**
```
OpenClaw Agent → submits intent via REST API
     ↓
Intent Queue Backend → stores proposals, audit trail
     ↓
Ledger Signer → human reviews on hardware device, approves/rejects
```

**Live walkthrough:**
1. Setting up the OpenClaw CLI skill (`ledger-intent`)
2. The intent service (Node.js REST API)
3. How intents get queued and displayed
4. Ledger Connect Kit + wagmi integration
5. ERC-7730 Clear Signing - human-readable transaction display
6. Demo: "Send 100 USDC for podcast editing" → Ledger approval
7. The hackathon submission itself

**Key concepts to explain:**
- What is an "intent" vs a "transaction"
- Why Clear Signing matters (you see what you're signing, not hex)
- The audit trail - every agent proposal is logged
- Multi-agent approval patterns
- Spending limits and suspicious transaction detection

**Use cases to mention:**
- Agent-to-agent economy (agents hiring agents)
- Creator payments (guest fees, commissions)
- DeFi operations (yield, DCA, limit orders)
- Business ops (invoices, expenses, payroll)

---

## Tech Stack Reference

| Layer | Tech | Notes |
|-------|------|-------|
| Frontend | React + Vite | Web app for reviewing intents |
| Wallet | Ledger Connect Kit + wagmi | Hardware signing |
| Clear Signing | ERC-7730 | Human-readable tx display |
| Backend | Node.js Intent Service | REST API, audit logs |
| Agent | OpenClaw CLI skill | `ledger-intent` command |
| Deploy | Vercel | Monorepo with Turborepo |
| Repo | github.com/fistfulayen/ledger-agent-intents | Ian's hackathon submission |

---

## Teaser/Promo Strategy

**Pre-recording (today/tomorrow):**
- Seth posts Proof of Corn clip from @seth (bridges Ep1 tutorial → Ep2)
- Tease: "Recording Episode 2 tomorrow. Topic: what happens when AI agents need to spend money?"

**Post-recording (Wed evening / Thu):**
- Drop tutorial clip: Ian explaining "agents propose, humans sign"
- Behind-the-scenes: the hackathon grind
- Name drops: "We're walking Tony Fadell through this on Friday"

**Post-hackathon (after Feb 8):**
- Results/submission post
- Full episode release

---

## Open Questions

- [ ] Does Ian want to screen-share the live coding?
- [ ] Do we submit the hackathon live on the episode?
- [ ] How much Ledger product detail vs. general concepts?
- [ ] Should we invite a Circle person for a quick segment?
- [ ] Episode title: "Agents Propose, Humans Sign" or something else?

---

## Links & Resources

- [Ian's repo: ledger-agent-intents](https://github.com/fistfulayen/ledger-agent-intents/blob/main/PROJECT.md)
- [OpenClaw (Wikipedia)](https://en.wikipedia.org/wiki/OpenClaw)
- [CNBC: OpenClaw Rise](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html)
- [ClawHub Malware Warning](https://www.opensourceforu.com/2026/02/ai-assistant-openclaw-hosts-hundreds-of-crypto-stealing-malicious-plugins/)
- [Circle USDC Hackathon](https://moltbook.com)
- [Solienne: The Rented Gaze](https://www.solienne.ai/rented-gaze)

---

*Last updated: Feb 4, 2026*
*letsvibe.fm/plan/ep2*
