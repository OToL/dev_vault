---
title: Time-based Universally Unique Identifiers (UUIDs v7)
url: https://mariusbancila.ro/blog/2025/10/24/time-based-universally-unique-identifiers-uuids-v7/
tags: [algorithm, system, favorite]
---

- Presents the base UUID string format and where key metadata (version & variant) is located
- Focus on variant 7 which has the benefit of being ordered (good for database) and fast to generate (date + random number)
- There is also a special UUID variant (8) which allows specifying a custom format
- Provides code snippets in various languages (C++, C#, etc.) to generate UUID variant 7 because stock APIs (e.g. UuidCreate Win32) do not support it yet 
