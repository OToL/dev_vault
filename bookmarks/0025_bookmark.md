---
title: Multi-Core By Default
url: https://substack.com/home/post/p-172146732
tags: [system, performance, favorite]
---

- Go through common CPU parallel programming patterns (job system, parallel for, etc.) and challenges/pitfalls (uniform distribution, data flow, etc.)
- Compare GPU & CPU multithreading models
- Present an approach for CPU, closer to GPU threading model, based on the conscept of Lanes supported by constructs to sync and share data between them
- Stress the fact that this approach automatically automatically scales up and down to single core
