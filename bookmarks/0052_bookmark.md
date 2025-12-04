---
title: The tools we use to develop our physics game in Unreal Engine 5
url: https://blog.thomaspoulet.fr/posts/the-tools-we-use-to-develop-our-physics-game-in-unreal-engine-5/
tags: [ue5, tool, favorite]
---

- Presents the different tools/frameworks available in UE5 to implement Visual debugging features (e.g. logging, etc.) for a complex system (Physics driven character controller)
- The goal is to make their Phyisics easy to understand, debug and tweak
- On-screen log messages can be modified in-place to avoid spamming/scrolling and make them easier to read but it requires to specify a unique 'module key'
- Tried to use native ImGui but it was not productive since Designers needed Engineers for each change
- Mentions Network Imgui plugin as a good integration of ImGui in UE5
- Explains the vision for a 'historical' debugging tool looging all members from tagged actors to a server
- Finishes with the pros/cons and usability context for each solution

