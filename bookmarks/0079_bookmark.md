---
title: The unlikely story of Teardown Multiplayer 
url: https://blog.voxagon.se/2026/03/13/teardown-multiplayer.html 
tags: [system, network]
---

- Teardown has not been designed to be multiplayer
- Initial brute force approach (sync the whole game state) was far too expensive in terms of bandwith
- It was not possible to make the game fully deterministic
- They went with an hybrid approach i.e. state synchronization for things not impacting the scene structure/layout (e.g. objects' transform) and deterministic commands for the rest (e.g. break object, create joint, etc.)
- The development has been done on a regular merged separated branch which was very painful
- They have used a reliable UDP protocole (i.e. possibility to accumulate older data in one packet)
- Interesting UI synchronization by sending render commands i.e. probably similar to remote imgui
- Join in progress game has been implemented by replaying commands and it was not possible to join if the game was up for too long i.e. too many commands to store/replay
- Management of multiplayer in scripts was explicit
