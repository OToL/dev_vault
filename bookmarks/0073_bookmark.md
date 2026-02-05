---
title: Why I Always End Up Going Back to C
url: https://deplet.ing/why-i-always-end-up-using-c/ 
tags: [c, design]
---

- Go through the reasons why he is going back to C
- It is mainly because of the simplicity and expressiveness
- He has completely ditched C standard library in favor of a custom implementation (string, containers, etc.)
- Sees the Heap as a service providing memory and not has an allocator i.e. he creates "arenas" from the Heap and rarely use malloc/new
- Makes allocation explicity by providing Arena where necessary
