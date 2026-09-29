---
title: Why I Wrote a Game Boy Advance Game in Zig
url: https://jonot.me/posts/zig-gba/ 
tags: [zig, retro]
---

- Zig toolchaing makes targetting different platforms (e.g. gba) very easy
- Zig std is stripped according to usage
- Passing allocators makes the code much clearer and explicit
- Possibility to define non-power of 2 size integers (e.g. u7) which is similar to C `int var : x` but can be done outside struct declaration
- Zig `comptime` can be used to parse data and include the result in the code/binary at compile time e.g. sprites
- Covers some Zig pitfalls such as limited inline assembly support and memory access optimizations
