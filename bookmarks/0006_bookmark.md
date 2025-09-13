---
title: Architecting large software projects in C
url: https://www.youtube.com/watch?v=sSpULGNHyoI
tags: [design, c, system]
---

- When starting a project, it is important to identify/evaluate what can break/change i.e. this is where you will need adaptability
- Separate features using modules + API
- API design is the most important compared to underlying implementation because this is what must be future proof
- Modules must be small i.e. 1 person could write it
- Use plugins to separate responsibility further
- Never reference/use 3rd party code directly in your codebase (e.g. havok, wwise, etc.) but always wrap them with your own API
- External code you reference becomes your code which means you must understand it
