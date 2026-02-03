---
title: Nanite Tessellation
url: https://graphicrants.blogspot.com/2026/02/nanite-tessellation.html 
tags: [graphics]
---

- Explains the basics of Nanite and suggest a different approach working the other way around
- This approach is starting with a base optimized mesh and tessalates it automatically
- Displacement seem to be driven by textures but it is not explained in details
- Tessalation factors are determined per edge in a way it does not create seams between triangles
- Remeshing is used (via precomputed tables) to produce uniform tessalation
- There are couple of follow up blog posts ...
    - [Possible approaches for tessellation](https://graphicrants.blogspot.com/2026/02/possible-approaches-for-tessellation.html)
    - [How to tessellate](https://graphicrants.blogspot.com/2026/02/how-to-tessellate.html)
