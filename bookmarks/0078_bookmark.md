---
title: The gold standard of optimization- A look under the hood of RollerCoaster Tycoon 
url: https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/ 
tags: [code-review]
---

- Presents major optimizations from RollerCoaster Tycoon
- Actually most of the listed optimizations are basic e.g. bit shifting, cancellation based on limit, etc.
- What is interesting though is how code limitations are translated to game design decisions (e.g. limit to the path finding algorithm --> visitor complaining about not finding the exit)
- This shows how tight collaboration between programmers and other disciplines is key to find elegant and optimal solutions
