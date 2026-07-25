---
title: A Deep Dive Into Vectorfield Pathfinding
url: https://nnnawi.github.io/A-Deep-Dive-Into-Vectorfield-Pathfinding/ 
tags: [algorithm, ai]
---

- Start by explaining the AI basics (e.g. Djikstra algorithm)
- Vectorfield pathfiding is a second pass after having computed the distance of each cell to the target
- Covers different methods to compute the motion vectors e.g. kernels, min distance, etc.
- Stress the fact that VFP is not about the optimal path (as opposed to pure Djikstra algorithm) but rather generating a smooth motion along a `short` path
- Mentions how to address some edge cases e.g. use min distance for cells next an obstacle/border
