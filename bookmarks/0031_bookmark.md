---
title: LLVM Dev Mtg - Towards Useful Fast-Math
url: https://youtu.be/3Uf_3Su1NEc
tags: [c, c++, system]
---

- Qualifies fast math (-ffast-math) as very dangerous: "It is as if you give a shotgun to the compiler which chooses when to shoot you to the feet"
- Presents couple of examples where fast math can create issues e.g. completely discard impossilbe/invalid code, change operations order, etc.
- Compares fast with unsafe (-funsafe-math-optimizations) optimizations and concluding that the latter is actual more safe
- Lists several compiler options related to math optimizations & behavior e.g. -fmath-errno, -fassociative-math, etc.
- Mentions the different floating point models (precise, fast, aggressive, etc.) which can be set via -ffp-model parameter
- Concludes with an ongoing LLVM intiative to give more control to the developer but I did not find this convincing nor usable
