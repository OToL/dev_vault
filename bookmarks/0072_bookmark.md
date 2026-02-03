---
title: Singleton done right in C++
url: https://andreasfertig.com/blog/2026/01/singleton-done-right-in-cpp/ 
tags: [c++, design]
---

- Basic presentation of the Singleton pattern in C++ based on a static instance defined in an accessor e.g. MySingleton::GetInstance()->Foo() 
- The only addition is the 'deletion' of copy/move operations to avoid issues when client code is caching the instance as an optimization

