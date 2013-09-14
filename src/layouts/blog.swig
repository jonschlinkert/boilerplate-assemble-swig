---
layout: default.swig
---
{% extends 'src/site.swig' %}
{% block body %}
  <h1>Blog</h1>
  <ul>
    {# {% for child in pages|matches('prettyUrl',path)|reject('hideInList',true) %}
      <li><a href="{{ page|linkTo(child) }}">{{ child.templateData.title }}</a></li>
    {% endfor %} #}
  </ul>
{% endblock %}