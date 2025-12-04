---
title: Validating Blueprints' Content in Unreal
url: https://blog.thomaspoulet.fr/posts/validating-blueprints-content-in-unreal/
tags: [ue5, tool]
---

- UE5 has an assets validation framework available from C++ & Blueprint
- It is usually used for Art assets (e.g. meshes, textures, etc.) but could work for any other type of asset e.g. Blueprint
- Validating custom Blueprints using C++ seems to be straightforward but, doing the same from the Blueprint system is non trivial
- The author explains how to prepare the data (casting, etc.) to get access to the underlying Blueprint's components and validting them
- Looks a bit cumbursome but I guess the boilerplate Blueprint could be re-used without duplication
