---
title: The perfect Sleep() function
url: https://blog.bearcats.nl/perfect-sleep-function/
tags: [system, favorite]
---

- OS thread schedulers are waking up threads on a fix time window
- Windows timeBeginPeriod API allows reducing the scheduler period to 1ms but it applies this to all processes i.e. system-wise
- Presents 3 implementations of a more precise sleep function bsed on normal distrution, scheduler precision awareness and Windows 10+ high resolution timer
- At their core all implementations are similar (i.e. sleep and then spin until requested time has passed) but differ on the way actual sleep is done/calculated
- Evaluates implementations based on their deviation from the requested sleep time and amount of spinning 
