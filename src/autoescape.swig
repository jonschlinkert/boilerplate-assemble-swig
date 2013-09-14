---
title: |
  <p>This is a title</p>
---
{% autoescape true %}
  <h1>{{ title }}</h1>
  <h1>{{ title|raw }}</h1> {# title won't be escaped #}
  <h1>{{ title|escape }}</h1> {# title won't be doubled-escaped #}
{% endautoescape %}
