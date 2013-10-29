---
layout: default
content: <%= _.read("markdown.md") %>
description: the "_.read()" lodash mixin is defined near the top of the Gruntfile
slug: extend
---
{% extends 'src/layouts/site.swig' %}
{% block body %}
  {{ content|markdown }}
{% endblock %}