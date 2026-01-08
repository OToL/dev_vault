---
title: Optimizing mannequin
url: https://real-mrbeam.github.io/2025/12/11/Optimizing-Mannequin.html 
tags: [ue5, performance, graphics]
---

- Go through basic graphics optimizations for a VR game using UE5
- VR means weaker GPU e.g. no GPU occlusion possible
- Split lightmass volumes and decrease density/detail where not needed
- Ported CPU occlusion from UE4 to UE5 with some small enhancements e.g. use custom meshes as occluders instead of only LODs
- Possibility to tag objects to selectively hide/cull them at distance depending on platform specs
- Use LOD Bias
- Selectively enabled instancing because it has a CPU cost
