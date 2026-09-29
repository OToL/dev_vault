---
title: Why I Wrote a Game Boy Advance Game in Zig
url: https://jonot.me/posts/zig-gba/ 
tags: [zig, retro]
---

- Zig toolchaing makes targetting different platforms (e.g. gba) very easy which makes it a perfect candidate for gba dev
- Zig is automatically stripping part of its std which is not used
- Passing allocators makes the code much clearer and explicit
- Possibility to define non-power of 2 size integers (e.g. u7) which is similar to C `int var : x` but can be done outside struct declaration
- Zig `comptime` can be used to parse data and include the result in the code/binary at compile time e.g. sprites
- Covers some Zig pitfalls such as limited inline assembly support and memory access optimizations
