---
title: stackless coroutines for gamedev in ~200 lines of C++
url: https://vittorioromeo.com/index/blog/sfex_coroutine.html 
tags: [system, c++]
---

- Go through the limitations of C++20 corountines which make them not suitable for gamedev e.g. hidden allocations, serialization, etc.
- Present a single header library emulating coroutines behaviour via switch/case
- It is interesting that `case` can be anywhere (e.g. in the middle of a for loop) as far as it does not contain a `switch` i.e. `case` is just a label
- Explains `__COUNT__` supiority over `__LINE__` for this use-case because of its stability i.e. it is invalidated only if a YIELD is added/removed in the same compilation unit
- Overall it is interesting but as many pitfull e.g. does not work with RAII, local variables cannot be used to persist coroutine state, requires some version management, etc.
