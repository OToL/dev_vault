---
title: Spatial Hashing for raytraced ambient occlusion
url: https://interplayoflight.wordpress.com/2025/11/23/spatial-hashing-for-raytraced-ambient-occlusion/
tags: [grahpics, data-structure, favorite]
---

- Traditional Ambient Occlusion is often noisy (i.e. requires filtering) and requires inefficient memory accesses (e.g. 3D textures)
- Uses Spatial Hashing (hash map with linear probing) to store/cache sparse AO data
- Explains how to produce a hash map index from positions and normals
- Uses a checksum (i.e. another stronger hash) to verify actual hash map collisions instead of storing & comparing original inputs
- Quantizing AO data this way produces a visible blocky result and the author suggests 2 improvements: adapt the cell size based on screen's space and jitter the input data
- When moving through a complex level/environment the Spatial Hash can quickly fill up producing black areas (i.e. no space found in the hash map). To overcome this issue, it is evicting old entries (extra buffer containing frame time)
- This spatial data structure is also used as an optimization to skip ray casting when a hit threshold (data from the cache) is breached
- Extra resource: https://history.siggraph.org/wp-content/uploads/2022/08/2020-Talks-Gautron_Real-Time-Ray-Traced-Ambient-Occlusion-of-Complex-Scenes.pdf
