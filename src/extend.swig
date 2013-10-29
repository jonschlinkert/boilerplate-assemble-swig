---
layout: none
content: <%= _.read("src/content/markdown.md") %>
description: the "_.read()" lodash mixin is defined near the top of the Gruntfile
---
{% extends 'src/layouts/site.swig' %}
{% block body %}
  {{ content|markdown }}
{% endblock %}