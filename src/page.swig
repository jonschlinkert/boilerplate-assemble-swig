---
layout: none
content: <%= _.read("markdown.md") %>
---
{% extends 'src/layouts/site.swig' %}
{% block body %}
  {% markdown %}
  {{ content|raw }}
  {% endmarkdown %}
{% endblock %}