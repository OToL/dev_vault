---
title: Event-driven flows
url: https://akrzemi1.wordpress.com/2025/11/16/event-driven-flows/
tags: [c++, performance]
---

- Explains how standard event-driven code, based on callbacks/signals, works and associated pitfals e.g. state management and ownership
- Presents coroutines as a better and safer way to express asynchronous function calls
- Coroutines can be error-prone because it is not obvious from the caller that the function may return before completion (even before hitting co_wait)
