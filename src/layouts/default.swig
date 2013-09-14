{% prettify %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
    <link rel="stylesheet" href="{{assets}}/assemble.css">
  </head>
  <body>
    <div class="container">
      {%> "navbar" %}
      {{body}}
      {%> "footer" %}
    </div>
  </body>
</html>
{% prettify %}