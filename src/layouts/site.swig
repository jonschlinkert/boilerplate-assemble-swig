<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{% block title %}{{ title }}{% endblock %}</title>
    <link rel="stylesheet" href="http://getbootstrap.com/dist/css/bootstrap.css">
  </head>
  <body style="padding-top: 80px;">
    {% block body %}{% endblock %}
  </body>
</html>