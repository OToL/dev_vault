---
title: Billions of triangles in minutes
url: https://zeux.io/2025/09/30/billions-of-triangles-in-minutes/
tags: [algorithm, graphics, favorite]
---

- Profile meshoptimizer cluster generation on a large dataset from NVIDIA Zorah demo demonstrating Nanite performance
- Use memory map files to avoid loading the whole dataset in memory (160+ GB)
- Present several optimizations to speed up the process e.g. sparse array using bitfield, order meshes by size to improve core occupancy, use a memory limit to avoid swapping to disk and make allocations thread local.
