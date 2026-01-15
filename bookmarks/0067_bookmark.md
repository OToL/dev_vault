---
title: An Experimental Approach to `printf` in HLSL
url: https://www.abolishcrlf.org//2025/12/31/Printf.html 
tags: [graphics]
---

- Explains how he modified the DXC compiler to support printf
- It requires extending the usage of 'string' and enable variadic template
- Interestingly, DXC compiler is using the Clang backend i.e. shared with C/C++
- Enabling variadic template was a matter of unlocking the feature which was already there
- When implementing a new C/C++ feature, Clang developers always make it available to former standard if there is no breaking change and emit a warning to let the user know it is not supposed to be present
