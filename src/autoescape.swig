---
layout: default
title: autoescape
paragraph: |
  <p>This is a paragraph</p>
slug: autoescape
---
{% autoescape true %}
  <h1>{{ paragraph }}</h1>
  <h1>{{ paragraph|raw }}</h1> {# paragraph won't be escaped #}
  <h1>{{ paragraph|escape }}</h1> {# paragraph won't be doubled-escaped #}
{% endautoescape %}


<h1>{{ paragraph }}</h1>
<h1>{{ paragraph|raw }}</h1> {# paragraph won't be escaped #}
<h1>{{ paragraph|escape }}</h1> {# paragraph won't be doubled-escaped #}
