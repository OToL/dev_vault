---
title: Around The World, Part 28- Scaling up
url: https://frozenfractal.com/blog/2025/12/12/around-the-world-28-scaling-up/ 
tags: [performance, graphics]
---

- Indie game, using Godot, rendering large terrain (512km wide) 
- Divide the world in 2x2km chunks
- Implement world wrapping by translocating world chunks
- Simply offset along Y axis to fake horizon effect
- Horizon effect cannot be achieved by skewing the objects/chunks because it would impact some features e.g. collisions
- When world chunks neighbor have different LOD, it creates seams solved/hidden thanks to skirt mesh using similar normals as the LODs
- 8-sides impostor system is used for vegetation
