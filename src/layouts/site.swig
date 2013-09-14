{% prettify %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{% block title %}{{ title }}{% endblock %}</title>
  </head>
  <body>
    {% block body %}{% endblock %}
  </body>
</html>
{% endprettify %}