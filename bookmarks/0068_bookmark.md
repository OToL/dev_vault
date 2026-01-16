---
title: Bindless Oriented Graphics Programming
url: https://alextardif.com/BindlessProgramming.html 
tags: [graphics]
---

- Good list of resources regarding GPU driven and Bindless rendering 
- Explains how those techniques make Renderer architecture simpler and more CPU-efficient
- GPU driven rendering requires resources to be available on GPU which is usually done from CPU when issueing draw calls
- Couple of approaches to solve this ...
    - have everything in memory
    - virtualized technologies (e.g. mega mesh, virtual textures, etc.)
    - bindless resources
- Covers 2 different approaches to access/address Bindless objects: Resource descriptor & simple IDs
- Provides a list of topics to make the transition to Bindless rendering "simpler"
