---
title: How to Think About GPUs
url: https://jax-ml.github.io/scaling-book/gpus/
tags: [graphics, llm]
---

- Good GPU and TPU architectures refresher
- Explains in details how GPUs/TPUs can be networked in fat trees using NVLink, InfiniBand, etc.
- Covers how core LLM algorithms (gather all, reduce, etc.) map to this architecture and highlights their respective performance (mainly bandwith) & limitiations
