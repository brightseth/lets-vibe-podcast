# GPU Server Options for Sovereign AI Agent Hosting
## Spirit Protocol -- Self-Hosted Inference Research

**Date**: March 16, 2026
**Prepared by**: LEVI (Research Agent)
**For**: Seth Goldstein / Spirit Protocol
**Use case**: Always-on inference for AI artist agent running fine-tuned LLMs + image generation (FLUX)

---

## Table of Contents

1. [RTX 4000 SFF Ada Deep Dive](#1-rtx-4000-sff-ada-deep-dive)
2. [Hetzner GPU Server Lineup](#2-hetzner-gpu-server-lineup-2026)
3. [Cloud GPU Provider Comparison](#3-cloud-gpu-provider-comparison)
4. [Alternative Providers Under $250/mo](#4-alternative-providers)
5. [Multi-Agent Scaling Architecture](#5-multi-agent-scaling-architecture)
6. [Apple Silicon as Inference Server](#6-apple-silicon-as-inference-server)
7. [20GB VRAM Split Architecture](#7-the-7b--flux-on-20gb-split-architecture)
8. [Comparison Matrix](#8-comparison-matrix)
9. [Recommendation](#9-recommendation)

---

## 1. RTX 4000 SFF Ada Deep Dive

### Specifications

| Spec | RTX 4000 SFF Ada | RTX 4090 | RTX A5000 |
|------|------------------|----------|-----------|
| Architecture | Ada Lovelace | Ada Lovelace | Ampere |
| VRAM | 20 GB GDDR6 ECC | 24 GB GDDR6X | 24 GB GDDR6 |
| Memory Bandwidth | 280 GB/s | 1,008 GB/s | 768 GB/s |
| CUDA Cores | 6,144 | 16,384 | 8,192 |
| TDP | 70W | 450W | 230W |
| ECC Memory | Yes | No | Yes |
| Form Factor | SFF (PCIe slot powered) | Triple-slot, 16-pin | Dual-slot |
| Server Qualified | Yes | No | Yes |

### LLM Inference Performance (tokens/sec)

| Model | RTX 4000 SFF Ada | RTX 4090 (est.) | RTX A5000 (est.) |
|-------|------------------|-----------------|------------------|
| Llama 3.1 8B Q4_K_M | 58.59 t/s | ~128 t/s | ~85 t/s |
| Llama 3.1 8B FP16 | 20.85 t/s | ~45 t/s | ~30 t/s |
| Qwen2.5 32B IQ4_XS | 16.43 t/s | Won't fit (24GB) | Won't fit (24GB) |

Source: [Hardware Corner RTX 4000 SFF Ada Guide](https://www.hardware-corner.net/guides/rtx-4000-sff-ada-for-llm/), [Puget Systems Professional GPU Benchmarks](https://www.pugetsystems.com/labs/articles/llm-inference-professional-gpu-performance/)

### Key Analysis

**Performance relative to competitors**: The RTX 4000 SFF Ada achieves 46-52% of RTX 3090 performance across model sizes. The bottleneck is memory bandwidth (280 GB/s vs 1,008 GB/s on 4090) -- LLM token generation is memory-bandwidth-bound, not compute-bound. This is the card's fundamental limitation.

**ECC memory advantage for 24/7**: ECC corrects single-bit memory errors that accumulate over continuous operation. For an always-on agent, this matters -- a bit flip in model weights during inference could cause subtle output corruption that's hard to detect. Consumer GPUs (4090) lack ECC entirely.

**Thermal performance**: Maintains under 70C under sustained load. The 70W TDP means no additional power connectors needed -- the card draws all power from the PCIe slot. This is ideal for 1U/2U rackmount servers where power delivery and cooling are constrained. No thermal throttling reported even in compact enclosures.

**The honest verdict**: At 58 t/s on 8B Q4 models, the RTX 4000 SFF Ada is adequate for single-user interactive inference. It is not fast. For an AI artist agent that might need to run inference intermittently (not serving hundreds of concurrent requests), this is fine. For batch generation or multi-user serving, it would be a bottleneck.

---

## 2. Hetzner GPU Server Lineup 2026

### Current Offerings

| Server | GPU | VRAM | CPU | RAM | Storage | Price/mo |
|--------|-----|------|-----|-----|---------|----------|
| **GEX44** | RTX 4000 SFF Ada | 20 GB GDDR6 ECC | Intel i5-13500 (14C) | 64 GB DDR4 | 2x 512GB NVMe | **EUR 184/mo** (~$200) |
| **GEX130** | RTX 6000 Ada | 48 GB GDDR6 ECC | Xeon Gold 5412U (24C) | 128 GB DDR5 ECC | 2x 1.92TB NVMe | **EUR 838/mo** (~$910) |
| **GEX131** | RTX PRO 6000 Blackwell Max-Q | 96 GB GDDR7 ECC | Xeon Gold 5412U | 128 GB DDR5 ECC | 2x 1.92TB NVMe | **EUR 889/mo** (~$965) |

Sources: [Hetzner GEX44](https://www.hetzner.com/dedicated-rootserver/gex44/), [Hetzner GEX130](https://www.hetzner.com/dedicated-rootserver/gex130/), [Hetzner GEX131](https://www.hetzner.com/dedicated-rootserver/gex131/)

### Gap Analysis

The gap between GEX44 (20GB, EUR 184) and GEX130 (48GB, EUR 838) is significant -- there is no mid-tier offering with 24-48GB VRAM in the EUR 300-600 range. This is the "Hetzner gap" that forces a hard choice between constrained-but-cheap and powerful-but-expensive.

### Server Auction

Hetzner's [Server Auction](https://www.hetzner.com/sb/) sells refurbished servers at reduced prices with zero setup fees. However, GPU servers rarely appear in the auction -- the inventory is predominantly CPU-only servers. GPU auctions are opportunistic, not reliable for planning.

### Price Adjustment April 2026

Hetzner has announced [price adjustments effective April 1, 2026](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/). Orders placed before April 1 but delivered after will be charged at adjusted prices. If you intend to use Hetzner, ordering before April 1 may lock in current pricing.

### Availability

- GEX44: Falkenstein datacenter
- GEX130: Nuremberg, Falkenstein
- GEX131: Nuremberg, Falkenstein

All EU-only. Latency from US will be 80-120ms. For an autonomous agent that does not need real-time interactive latency, this is acceptable. For an agent serving end-users interactively, consider carefully.

---

## 3. Cloud GPU Provider Comparison

### Dedicated (On-Demand) Pricing -- Monthly Estimates (730 hrs/mo)

| Provider | A6000 (48GB) | RTX 6000 Ada (48GB) | A100 80GB | H100 80GB |
|----------|-------------|---------------------|-----------|-----------|
| **RunPod Community** | $0.33/hr = **$241/mo** | $0.74/hr = $540/mo | $1.39/hr = $1,015/mo | $1.50/hr = $1,095/mo |
| **RunPod Secure** | ~$0.49/hr = $358/mo | Higher | $1.89/hr = $1,380/mo | $2.69/hr = $1,964/mo |
| **Vast.ai Marketplace** | ~$0.40/hr = **$288/mo** | -- | ~$1.40/hr = $1,022/mo | ~$1.87/hr = $1,365/mo |
| **Lambda Labs** | $0.92/hr = $672/mo | -- | $1.48/hr = $1,080/mo | $2.86-3.78/hr = $2,088-2,759/mo |
| **TensorDock** | $0.45/hr = **$329/mo** | $0.75/hr = $548/mo | $1.50-1.80/hr = $1,095-1,314/mo | $2.25/hr = $1,643/mo |
| **Latitude.sh** | Not listed | -- | -- | $1.68/hr = $1,230/mo |
| **Latitude.sh (L40S 48GB)** | -- | -- | -- | $0.61/hr = **$445/mo** |
| **Scaleway (L40S)** | -- | -- | -- | EUR 1.4/hr = ~$1,110/mo |
| **OVHcloud (L40S bare metal)** | -- | -- | -- | **$3,505/mo** (full server) |

Sources: [RunPod Pricing](https://www.runpod.io/pricing), [ComputePrices RunPod](https://computeprices.com/providers/runpod), [Lambda Pricing](https://lambda.ai/pricing), [TensorDock Cloud GPUs](https://www.tensordock.com/cloud-gpus.html), [Latitude.sh Pricing](https://www.latitude.sh/pricing), [Vast.ai Pricing](https://vast.ai/pricing)

### Uptime & Reliability

| Provider | SLA | Reliability Notes |
|----------|-----|-------------------|
| **RunPod Secure** | Enterprise-grade | Tier 3+ datacenters, dedicated infra |
| **RunPod Community** | None | Third-party hosts, cheaper but less reliable |
| **Vast.ai** | None | Marketplace model, hosts can go offline |
| **Lambda Labs** | 99.9% | Professional datacenter, good reputation |
| **TensorDock** | 99.99% (claimed) | Distributed network, varies by location |
| **Latitude.sh** | Enterprise | Bare metal, 20 global locations |
| **Hetzner** | 99.9% | Own datacenters, excellent track record |

**For sovereignty and reliability, Hetzner and Lambda Labs stand out.** Vast.ai is cheapest but offers zero uptime guarantees -- hosts are individuals renting their hardware. RunPod Community has similar risks. For an always-on agent, community/marketplace providers are inappropriate unless you build redundancy.

---

## 4. Alternative Providers

### The Sub-$250/mo Question: Can You Get 48GB for Under $250?

**Short answer: No.** The cheapest reliable 48GB GPU hosting is RunPod Community A6000 at ~$241/mo, and that comes with no uptime SLA.

Here is what you CAN get under $250/mo:

| Provider | GPU | VRAM | Price/mo | Caveat |
|----------|-----|------|----------|--------|
| **Hetzner GEX44** | RTX 4000 SFF Ada | 20 GB | ~$200/mo | Only 20GB VRAM |
| **RunPod Community A6000** | RTX A6000 | 48 GB | ~$241/mo | No SLA, community hosts |
| **TensorDock RTX 4090** | RTX 4090 | 24 GB | ~$256/mo | No ECC, consumer GPU |
| **TensorDock RTX 3090** | RTX 3090 | 24 GB | ~$146/mo | Previous gen, no ECC |
| **Vast.ai A6000** | RTX A6000 | 48 GB | ~$288/mo | Zero guarantees |

### Provider-by-Provider Notes

**TensorDock**: Offers the cheapest hourly GPU rates broadly. A6000 at $0.45/hr. Good for experimentation. Claims 99.99% uptime but it's a distributed network -- actual reliability varies by host location. Root access with full OS control. No published reserved/monthly pricing -- contact sales.

**Paperspace (by DigitalOcean)**: Has GPU instances but pricing is at the higher end ($5.95/hr for H100). Not competitive for always-on hosting. Better suited for burst compute.

**CoreWeave**: Enterprise-focused. H100 at $6.16/hr. Minimum commitments required. Overkill and overpriced for this use case.

**Latitude.sh**: Bare metal focus. No A6000 listed currently. Cheapest GPU option is L40S VM at $445/mo (48GB VRAM). H100 bare metal at $1,230/mo. Good infrastructure but expensive for the budget tier.

**OVHcloud**: EU sovereign cloud with 99.99% SLA. GPU bare metal starts at $3,505/mo (L40S full server with dual EPYC, 384GB RAM). Way over budget. Cloud instances with A100 at EUR 2.75/hr = ~$2,190/mo. Not competitive at the budget tier.

**Scaleway**: EU cloud. L40S at EUR 1.4/hr = ~$1,110/mo. Good for EU sovereignty but expensive.

**Cherry Servers**: Published a useful [comparison guide](https://www.cherryservers.com/blog/top-dedicated-server-providers-with-gpu) but their own GPU offerings are limited. Better as an information source than a provider.

---

## 5. Multi-Agent Scaling Architecture

### The Question: One Big Box vs. Many Small Boxes

For eventually hosting 10+ agents each with fine-tuned models, there are three architectural patterns:

### Pattern A: One Multi-GPU Server + vLLM Model Multiplexing

**Architecture**: Single server with 2x or 4x A6000 (96-192GB total VRAM). vLLM serves all models with continuous batching. Each agent's fine-tuned model loaded as a LoRA adapter on a shared base model.

**How it works**: vLLM's [Multi-LoRA serving](https://docs.vllm.ai/en/latest/features/lora/) keeps the base model (e.g., Llama 3 70B) loaded once, then hot-swaps LoRA adapters per request. Each agent's fine-tune is a small adapter (50-500MB) rather than a full model copy. The base model uses the bulk of VRAM; adapters share the remaining space.

**Pros**:
- Most VRAM-efficient -- 10 LoRA adapters add perhaps 2-5GB total vs. loading 10 separate models
- Single point of management (one server, one vLLM instance)
- vLLM's continuous batching maximizes GPU utilization across agents
- Adapter swap is near-instant (no model reloading)

**Cons**:
- Single point of failure (one server down = all agents down)
- Requires all agents share the same base model architecture
- Does not work if agents need fundamentally different model architectures (e.g., one needs a vision model, another needs a code model)
- Initial hardware cost is high ($8K-15K for a multi-GPU workstation)

**Cost**: 2x A6000 on RunPod = ~$482/mo. 4x A6000 = ~$964/mo. Self-hosted 2x A6000 workstation = ~$5K-7K one-time.

### Pattern B: One Small GPU Per Agent

**Architecture**: Each agent gets its own dedicated GPU instance (e.g., RTX 3090 or 4090 with 24GB). Each runs its own model independently.

**Pros**:
- Complete isolation -- one agent crashing doesn't affect others
- Each agent can run different model architectures
- Easy to scale by adding instances
- Sovereignty per agent (each agent's model is truly independent)

**Cons**:
- Extremely expensive at scale: 10x RTX 4090 at TensorDock = ~$2,560/mo
- Massive VRAM waste if agents are idle most of the time
- More infrastructure to manage (10 servers vs. 1)
- 24GB per agent limits model size to ~13B quantized

**Cost**: 10x RTX 4090 on TensorDock = ~$2,560/mo. 10x RTX 3090 = ~$1,460/mo.

### Pattern C: MIG (Multi-Instance GPU) on A100/H100

**Architecture**: Single A100 (80GB) or H100 (80GB) partitioned via NVIDIA MIG into isolated GPU instances. Each partition gets dedicated compute, memory, and bandwidth.

**MIG partition options on A100 80GB**:
- 7x 1g.10gb (7 instances, 10GB each)
- 3x 2g.20gb (3 instances, 20GB each)
- 2x 3g.40gb (2 instances, 40GB each)
- 1x 7g.80gb (full GPU)

**Pros**:
- Hardware-level isolation (not just software) -- each partition has its own memory controllers
- Predictable performance with QoS guarantees
- Dynamic reconfiguration -- can shift from 7 small instances during day to 1 large instance at night
- Single GPU to manage

**Cons**:
- Only available on A100 and H100 (datacenter GPUs)
- A100 80GB on RunPod = ~$1,015/mo; H100 = ~$1,095/mo
- 7x 10GB partitions are too small for most LLMs
- 3x 20GB partitions can each run a quantized 7B model but nothing larger
- MIG management adds operational complexity

**Cost**: 1x A100 80GB = ~$1,015/mo. 1x H100 80GB = ~$1,095/mo.

Sources: [NVIDIA MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/), [vLLM Parallelism and Scaling](https://docs.vllm.ai/en/stable/serving/parallelism_scaling/), [vLLM Multi-LoRA Blog](https://huggingface.co/blog/multi-lora-serving), [AWS Multi-LoRA with vLLM](https://aws.amazon.com/blogs/machine-learning/efficiently-serve-dozens-of-fine-tuned-models-with-vllm-on-amazon-sagemaker-ai-and-amazon-bedrock/)

### Recommendation for Multi-Agent

**Start with Pattern A (Multi-LoRA on shared base model).** If all Spirit Protocol agents are built on the same base model (likely -- you would fine-tune a single base like Llama 3 or Mistral), Multi-LoRA on a single 48GB GPU is the most efficient path. One A6000 can serve multiple LoRA-adapted agents simultaneously with near-zero swap overhead.

**Important note on TGI**: Hugging Face's Text Generation Inference (TGI) entered maintenance mode in December 2025. For new production deployments, use **vLLM** or **SGLang** instead. vLLM is the community standard for multi-model inference serving in 2026.

---

## 6. Apple Silicon as Inference Server

### Current Hardware Options

| Config | Memory | Memory Bandwidth | Price | Power |
|--------|--------|-------------------|-------|-------|
| Mac Studio M4 Max (128GB) | 128 GB unified | 546 GB/s | ~$3,999 | ~120W |
| Mac Studio M3 Ultra (192GB) | 192 GB unified | 819 GB/s | ~$5,499 | ~215W |
| Mac Studio M3 Ultra (512GB) | 512 GB unified | 819 GB/s | ~$14,999 | ~215W |

**Note**: The M4 Ultra does not exist yet. Current Mac Studio ships with M4 Max or M3 Ultra. An M4 Ultra is expected mid-2026 and would likely offer 192-512GB unified memory with higher bandwidth.

### LLM Inference Performance

| Model | Mac (M3 Ultra) | RTX A6000 (48GB) | Ratio |
|-------|-----------------|------------------|-------|
| Llama 3 8B Q4_K_M | ~76 t/s | ~120 t/s | 0.63x |
| 32B Q4 model | 15-22 t/s | ~40 t/s | 0.5x |
| 70B Q4 model | ~10 t/s (fits in memory) | Won't fit (48GB) | Mac wins on capability |

Sources: [Mac Studio Clusters Article](https://awesomeagents.ai/news/mac-studio-clusters-local-llm-inference-rdma/), [llama.cpp Apple Silicon Discussion](https://github.com/ggml-org/llama.cpp/discussions/4167), [Production-Grade LLM Inference on Apple Silicon (Paper)](https://arxiv.org/abs/2511.05502)

### FLUX Image Generation on Mac

FLUX requires ~24GB VRAM for FP16 inference, or ~13GB with FP8/NF4 quantization. A Mac Studio with 128-192GB unified memory can absolutely run FLUX -- the model fits with room to spare.

**Performance penalty**: Image generation on Mac is roughly 3.8x slower than an RTX 4090. A FLUX image that takes 11 seconds on a 4090 takes ~42 seconds on an M4 Max.

For an AI artist agent generating images intermittently (not real-time), 42 seconds per image is acceptable.

### Can It Run 32B LLM + FLUX Simultaneously?

**On Mac Studio M3 Ultra (192GB)**: Yes. A 32B Q4 model needs ~20GB. FLUX FP16 needs ~24GB. Combined: ~44GB. With 192GB unified memory, both models fit easily with 148GB to spare for KV cache, system overhead, and other processes.

**On Mac Studio M4 Max (128GB)**: Also yes, with the same math. 44GB combined leaves 84GB headroom.

The constraint is not memory but bandwidth. When both models are active simultaneously, they share the 819 GB/s (M3 Ultra) or 546 GB/s (M4 Max) memory bandwidth. In practice, an agent would rarely run LLM inference and image generation at the exact same moment -- they would be sequential steps in a workflow.

### Cost Comparison: Buy vs. Rent

| Path | Cost | 18-month cost | Notes |
|------|------|---------------|-------|
| Mac Studio M3 Ultra 192GB | $5,499 one-time | $5,499 + ~$432 electricity | Full sovereignty, yours forever |
| Mac Studio M4 Max 128GB | $3,999 one-time | $3,999 + ~$288 electricity | Enough for 32B + FLUX |
| RunPod A6000 (community) | $241/mo | $4,338 | No sovereignty, no SLA |
| Hetzner GEX44 (20GB) | ~$200/mo | $3,600 | Sovereignty in EU, but only 20GB |
| Hetzner GEX130 (48GB) | ~$910/mo | $16,380 | Overkill cost |

**Breakeven analysis**:
- Mac Studio M4 Max ($3,999) vs. RunPod A6000 ($241/mo): breakeven at ~17 months
- Mac Studio M4 Max ($3,999) vs. Hetzner GEX44 ($200/mo): breakeven at ~20 months
- Mac Studio M3 Ultra ($5,499) vs. RunPod A6000 ($241/mo): breakeven at ~23 months

After breakeven, the Mac costs ~$16-24/mo in electricity vs. $200-241/mo ongoing cloud cost.

### Production Mac Inference Servers

Several organizations are running Mac Studios as production inference servers:

- **Mac Studio clusters with RDMA** can run trillion-parameter models for ~$40K total hardware cost
- **MLX** is the recommended framework (outperforms llama.cpp on Apple Silicon) per the [Production-Grade Study](https://arxiv.org/abs/2511.05502)
- **Ollama** (built on llama.cpp) is the simplest path for deployment
- Power draw of 120-215W total (vs. 450W for a single RTX 4090, or 700W for an H100)

### Honest Assessment

The Mac Studio is a legitimate production inference server for single-user or small-team workloads. It excels at:
- Running large models (70B+) that don't fit on 24-48GB GPUs
- 24/7 low-power operation
- Complete sovereignty (no cloud dependency)
- Silent operation (important if colocated in an office)

It struggles at:
- Raw throughput vs. NVIDIA (50-65% of equivalent NVIDIA performance)
- Batched multi-user serving (no CUDA, limited inference framework support)
- Image generation speed (3-4x slower than RTX 4090)
- No datacenter ecosystem (no MIG, no NVLink, limited monitoring tools)

---

## 7. The 7B + FLUX on 20GB Split Architecture

### The Question

Can you time-share a 20GB GPU (like the Hetzner GEX44's RTX 4000 SFF Ada) between a 7B LLM and FLUX image generation?

### Memory Requirements

| Model | Precision | VRAM Required |
|-------|-----------|---------------|
| Llama 3 8B | Q4_K_M | ~5.5 GB |
| Llama 3 8B | FP16 | ~16 GB |
| FLUX.1 Schnell | FP16 | ~24 GB (won't fit) |
| FLUX.1 Schnell | FP8/NF4 | ~13 GB |
| FLUX.1 Schnell | NF4v2/Q4 | ~8 GB |

Sources: [FLUX VRAM Requirements](https://huggingface.co/black-forest-labs/FLUX.1-schnell/discussions/5), [Hardware Corner FLUX GPU Guide](https://www.hardware-corner.net/guides/gpu-for-flux-1-image-model/)

### Scenario Analysis

**Scenario 1: Both models quantized, sequential loading**
- 7B Q4 = 5.5 GB. FLUX NF4 = 8 GB. Total if both loaded: 13.5 GB. Fits in 20GB.
- Both models could theoretically stay loaded simultaneously, leaving ~6.5GB for KV cache and overhead.
- This is the ideal case.

**Scenario 2: Time-sharing with model swapping**
- Load 7B Q4 (5.5 GB), run LLM inference
- Unload 7B, load FLUX FP8 (13 GB), generate image
- Unload FLUX, reload 7B
- Swap time from NVMe Gen4: ~1-3 seconds for the 7B model, ~5-10 seconds for FLUX

**Scenario 3: Larger LLM (32B) + FLUX**
- 32B Q4 = ~20 GB. Won't fit alongside anything else.
- 32B IQ4_XS = ~18 GB. Leaves only 2GB for FLUX. Impossible.
- Must swap: unload 32B, load FLUX, generate, swap back. Swap time: ~15-30 seconds each way.

### CPU Offloading as Alternative

Instead of swapping models entirely, you can offload inactive model layers to CPU RAM:

- Keep 7B Q4 fully on GPU (5.5 GB). Keep FLUX partially on GPU (8GB on GPU, 5GB offloaded to CPU).
- Performance penalty: offloaded layers cross the PCIe bus at ~32 GB/s (PCIe 4.0 x8 on the 4000 SFF). Each offloaded layer adds latency per inference step.
- A 70B model with half its layers offloaded runs at 3-5 t/s vs. 15+ t/s fully on GPU.
- For FLUX with partial offload, image generation time roughly doubles.

Source: [NVIDIA CPU-GPU Memory Sharing Blog](https://developer.nvidia.com/blog/accelerate-large-scale-llm-inference-and-kv-cache-offload-with-cpu-gpu-memory-sharing/)

### Verdict on 20GB Split

**Practical for 7B + quantized FLUX**: Yes. Both fit simultaneously at low quantization. The 7B Q4 model generates at ~59 t/s. FLUX at NF4 will generate images slower than full precision but still functional.

**Practical for 32B + FLUX**: No. The 32B model alone saturates 20GB. You would need to swap models entirely, with 15-30 second swap penalties each direction. For an autonomous agent that generates images infrequently, this might be tolerable. For any interactive use case, it's unacceptable.

**Practical for production**: Marginal. The 7B + quantized FLUX scenario works but leaves little headroom. Any VRAM leak, KV cache growth, or additional overhead could cause OOM errors. Production systems need margin, and 20GB provides very little.

---

## 8. Comparison Matrix

### Summary Decision Matrix

| Option | VRAM | LLM Perf (8B Q4) | Can run FLUX? | Can run 32B? | Monthly Cost | Sovereignty | Reliability | Best For |
|--------|------|-------------------|---------------|--------------|--------------|-------------|-------------|----------|
| **Hetzner GEX44** | 20 GB | 59 t/s | Quantized only | Barely (IQ4) | $200/mo | EU dedicated | High (99.9%) | Budget entry point |
| **Hetzner GEX130** | 48 GB | ~120 t/s | Yes, FP16 | Yes, comfortably | $910/mo | EU dedicated | High (99.9%) | Production workhorse |
| **Hetzner GEX131** | 96 GB | ~150+ t/s | Yes, FP16 | Yes, 70B too | $965/mo | EU dedicated | High (99.9%) | Multi-agent hub |
| **RunPod A6000** | 48 GB | ~120 t/s | Yes, FP16 | Yes | $241/mo | None | Low (community) | Cheap 48GB experiments |
| **TensorDock A6000** | 48 GB | ~120 t/s | Yes, FP16 | Yes | $329/mo | None | Medium | Budget cloud 48GB |
| **Lambda A6000** | 48 GB | ~120 t/s | Yes, FP16 | Yes | $672/mo | None | High (99.9%) | Reliable cloud 48GB |
| **Latitude L40S** | 48 GB | ~140 t/s | Yes, FP16 | Yes | $445/mo | Bare metal | High | Mid-tier reliable |
| **Mac Studio M4 Max** | 128 GB | ~50 t/s | Yes | Yes, 70B too | $3,999 once | Full | Self-managed | Sovereign, large models |
| **Mac Studio M3 Ultra** | 192+ GB | ~76 t/s | Yes | Yes, 70B too | $5,499 once | Full | Self-managed | Maximum sovereignty |

### Cost Over Time (Cumulative)

| Option | Month 1 | Month 6 | Month 12 | Month 24 | Month 36 |
|--------|---------|---------|----------|----------|----------|
| Hetzner GEX44 | $279 (setup) | $1,279 | $2,479 | $4,879 | $7,279 |
| RunPod A6000 | $241 | $1,446 | $2,892 | $5,784 | $8,676 |
| Mac Studio M4 Max | $3,999 | $4,095 | $4,191 | $4,383 | $4,575 |
| Mac Studio M3 Ultra 192GB | $5,499 | $5,595 | $5,691 | $5,883 | $6,075 |
| Hetzner GEX130 | $989 (setup) | $5,539 | $10,909 | $21,829 | $32,749 |

(Mac Studio monthly costs = ~$16/mo electricity at 150W average, $0.15/kWh)

---

## 9. Recommendation

### For Spirit Protocol: Bootstrapped, Sovereignty-First

Given the constraints -- bootstrapped protocol, sovereignty as core value, reliability over raw performance, AI artist agent with fine-tuned LLM + image generation -- here is the recommended path:

### Phase 1: Now (MVP, validate the agent)

**Buy a Mac Studio M4 Max 128GB ($3,999)**

Rationale:
- 128GB unified memory runs 32B quantized LLM + FLUX simultaneously without swapping
- Complete sovereignty -- no cloud dependency, no provider going offline, no data leaving your hardware
- Breaks even vs. RunPod A6000 ($241/mo) in 17 months; vs. Hetzner GEX44 ($200/mo) in 20 months
- After breakeven, costs ~$16/mo in electricity
- MLX framework provides solid inference performance (76 t/s on 8B, 15-22 t/s on 32B)
- Can run from home/studio on residential internet
- Can run 70B models that don't fit on any 24-48GB GPU
- Silent, compact, low power (120W vs 450W+ for GPU workstation)
- Perfect for a single AI artist agent that generates intermittently

**If budget is truly tight**: Hetzner GEX44 at $200/mo is the minimum viable cloud option. But you're limited to 7B models + quantized FLUX, and you don't own anything. After 20 months you've spent $4,000 and still own nothing.

### Phase 2: Growth (3-5 agents, validated product-market fit)

**Add a Hetzner GEX130 (RTX 6000 Ada, 48GB) at EUR 838/mo**

Rationale:
- Use vLLM with Multi-LoRA to serve multiple agent fine-tunes from one base model
- 48GB VRAM comfortably runs a 32B base model + multiple LoRA adapters + FLUX
- EU dedicated server provides sovereignty + reliability
- Keep the Mac Studio as backup/development server
- Total infrastructure: $910/mo cloud + Mac Studio (paid off)

### Phase 3: Scale (10+ agents, protocol revenue)

**Evaluate at this point**:
- If agents share a base model: Single multi-GPU server (2x A6000 or 1x A100 80GB) with vLLM Multi-LoRA. Cost: $1,000-1,500/mo.
- If agents need different architectures: MIG on H100 (7 hardware-isolated partitions) at ~$1,100/mo.
- If budget allows ownership: Self-hosted multi-GPU workstation ($10-15K one-time, amortizes quickly).

### What NOT to Do

1. **Do not use Vast.ai or RunPod Community for always-on agents.** Zero SLA, hosts can disappear, your agent goes down with no recourse. Sovereignty means nothing if your infra is on someone's gaming rig.

2. **Do not start with H100/A100.** Massive overkill for a single agent. The throughput of an H100 (3,350 GB/s bandwidth) is designed for serving thousands of concurrent users. A single artist agent needs maybe 1% of that capacity.

3. **Do not use TGI.** It entered maintenance mode December 2025. Use vLLM or SGLang for new deployments.

4. **Do not optimize for training.** You specified inference. Training fine-tunes is a separate (burst) workload that can use spot/preemptible instances. Don't buy always-on hardware for a periodic task.

5. **Do not put the always-on agent on a consumer GPU (RTX 4090).** No ECC memory. No server qualification. Fan-based cooling designed for gaming sessions, not 24/7 operation. It will work until it doesn't, and debugging silent memory corruption is miserable.

### The TL;DR

**Mac Studio M4 Max 128GB for $3,999 is the sovereign choice.** It runs everything Spirit Protocol needs today (32B LLM + FLUX), costs $16/mo after purchase, provides complete sovereignty, and breaks even against cloud in under 18 months. When you need to scale beyond one agent, add a Hetzner GEX130 for multi-agent LoRA serving.

---

## Sources Index

### GPU Hardware
- [NVIDIA RTX 4000 SFF Ada Datasheet (PDF)](https://www.nvidia.com/content/dam/en-zz/Solutions/rtx-4000-sff/proviz-rtx-4000-sff-ada-datasheet-2616456-web.pdf)
- [Hardware Corner: RTX 4000 SFF Ada for LLMs](https://www.hardware-corner.net/guides/rtx-4000-sff-ada-for-llm/)
- [Puget Systems: LLM Inference Professional GPU Performance](https://www.pugetsystems.com/labs/articles/llm-inference-professional-gpu-performance/)
- [Hardware Corner: GPU for FLUX.1](https://www.hardware-corner.net/guides/gpu-for-flux-1-image-model/)

### Hosting Providers
- [Hetzner GEX44](https://www.hetzner.com/dedicated-rootserver/gex44/)
- [Hetzner GEX130](https://www.hetzner.com/dedicated-rootserver/gex130/)
- [Hetzner GEX131](https://www.hetzner.com/dedicated-rootserver/gex131/)
- [Hetzner Server Auction](https://www.hetzner.com/sb/)
- [RunPod Pricing](https://www.runpod.io/pricing)
- [Lambda Labs Pricing](https://lambda.ai/pricing)
- [TensorDock Cloud GPUs](https://www.tensordock.com/cloud-gpus.html)
- [Latitude.sh Pricing](https://www.latitude.sh/pricing)
- [OVHcloud GPU Servers](https://www.ovhcloud.com/en/bare-metal/gpu-dedicated-server/)
- [Scaleway GPU Pricing](https://www.scaleway.com/en/pricing/gpu/)
- [Vast.ai Pricing](https://vast.ai/pricing)
- [ComputePrices.com](https://computeprices.com/providers/runpod)
- [GetDeploying GPU Price Comparison 2026](https://getdeploying.com/gpus)

### Architecture & Frameworks
- [NVIDIA MIG User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/)
- [vLLM Parallelism and Scaling](https://docs.vllm.ai/en/stable/serving/parallelism_scaling/)
- [vLLM LoRA Adapters](https://docs.vllm.ai/en/latest/features/lora/)
- [HuggingFace Multi-LoRA Serving Blog](https://huggingface.co/blog/multi-lora-serving)
- [HuggingFace TGI Maintenance Notice](https://huggingface.co/docs/text-generation-inference/en/index)
- [NVIDIA CPU-GPU Memory Sharing](https://developer.nvidia.com/blog/accelerate-large-scale-llm-inference-and-kv-cache-offload-with-cpu-gpu-memory-sharing/)

### Apple Silicon
- [Production-Grade LLM Inference on Apple Silicon (arxiv)](https://arxiv.org/abs/2511.05502)
- [llama.cpp Apple Silicon Performance Discussion](https://github.com/ggml-org/llama.cpp/discussions/4167)
- [Mac Studio Clusters for LLM Inference](https://awesomeagents.ai/news/mac-studio-clusters-local-llm-inference-rdma/)
- [MacRumors: FLUX on M4M and M3U](https://forums.macrumors.com/threads/m4m-and-m3u-for-image-generation-speed-sd-flux-etc.2454524/)

### Market Intelligence
- [Northflank: 7 Cheapest Cloud GPU Providers 2026](https://northflank.com/blog/cheapest-cloud-gpu-providers)
- [IntuitionLabs: H100 Rental Prices Compared 2026](https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison)
- [Cherry Servers: Top 5 Dedicated GPU Server Providers 2026](https://www.cherryservers.com/blog/top-dedicated-server-providers-with-gpu)
- [ThunderCompute: A6000 Pricing February 2026](https://www.thundercompute.com/blog/nvidia-rtx-a6000-pricing)
