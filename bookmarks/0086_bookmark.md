---
title: Curvature Beziers
url: https://acko.net/blog/curvature-beziers/ 
tags: [algorithm, math]
---

- Brief Bezier introduction
- Very nice interactive graphs with curvature visualization
- Enumerate most common control-point modes when connecting segments: symmetric, asymetric, cusp an corner
- Explain how curve's end-points and control-points movements affect its shape and continuity
- Show hacky ways to keep similar curvature after moving points (e.g. scale the tangeante according to the proximity to the neighbor)
- Use cuvature handles instead of control-points because their influence to the curve is more consistent
- Curvature handles can be easily converted to control-points and vis-versa
- Explain how to use curvature to maintain curve's shape when moving curve's points
