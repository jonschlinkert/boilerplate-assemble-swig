---
layout: none
content: <%= grunt.file.read("src/content/markdown.md") %>
---
{% extends 'src/layouts/site.swig' %}
{% block body %}

  {{ content|raw }}
{% endblock %}