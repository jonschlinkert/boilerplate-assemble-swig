---
layout: none
---
{% extends 'src/layouts/site.swig' %}
{% block body %}
  <h1>Blog</h1>
  {{ content|raw }}
{% endblock %}