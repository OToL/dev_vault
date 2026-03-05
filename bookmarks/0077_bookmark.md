---
title: Shipping Neural Texture Compression in Assassin’s Creed Mirage 
url: https://www.ubisoft.com/en-us/news/ignt.58488/shipping-neural-texture-compression-in-assassin-s-creed-mirage 
tags: [ml, graphics]
---

- Delta encode multi-layers textures using neural network (see also https://research.nvidia.com/person/bart-wronski)
- A single layer Neural network is used on GPU when sampling the texture
- Use BC format to store the new data (aka latent space) in order to not break existing system (e.g. streaming) 
- The Neural network is trained using actual filtering (bi or tri-linear) and compression (BC) used by the GPU to not biaised results i.e. it does not evaluate raw textures
- High resolution textures are used for the training which could be upscaled via ML when data is missing
- This tech was only used on specific assets (highly instanced materials) because of its overhead 
