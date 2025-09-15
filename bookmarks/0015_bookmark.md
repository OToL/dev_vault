---
title: The perfect Sleep() function
url: https://blog.bearcats.nl/perfect-sleep-function/
tags: [system]
---

- OS thread schedulers are waking up threads on a fix time window
- Windows timeBeginPeriod API allows reducing the scheduler period to 1ms but it applies this to all applications i.e. system-wise
- Presents 3 implementations of a more precise sleep implementation based on normal distrution, scheduler precision awareness and Windows 10+ high resolution timer
- At their core all implementation are similar (i.e. sleep and then spin until requested time has passed) and differ on the way they actual sleep is done/calculated
- Evaluate all 3 implementations based on their deviation to sleep time request and amount spinning 
