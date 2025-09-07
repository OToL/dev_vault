---
layout: base.njk
title: Run Books
---

# Run Books

<ul class="runbooks-list">
{% for runbook in collections.runbooks %}
    <li><a href="{{ runbook.url }}">{{ runbook.data.title }}</a> <span class="date">({{ runbook.data.date | date: "%B %d, %Y" }})</span></li>
{% endfor %}
</ul>
