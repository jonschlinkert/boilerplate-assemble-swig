---
title: Swig Tags
description: Your new assemble/swig project!
foo: "a"
bar: 'HEY'
here: true
obj:
  one: "Test"
  two: "Test"
replaced: '\\.'
by: "!"
people: [{ age: 23, name: 'Paul' }, { age: 26, name: 'Jane' }, { age: 23, name: 'Jim' }]
---

<div class="page-header">
  <h1>{{ title }}</h1>
</div>



{{ obj|isEmpty }}


{% markdown %}
# {{ title }}
This is a markdown block.
{{description}}
{% endmarkdown %}


{% switch foo %}
  {% case "a" %}This is A
  {% case "b" %}This is B
{% endswitch %}


{% for agegroup in people|groupby('age') %}
  <h2>{{ loop.key }}</h2>
  <ul>
    {% for person in agegroup %}
    <li>{{ person.name }}</li>
    {% endfor %}
  </ul>
{% endfor %}


<h2>Filter</h2>
<p>Accepts a filter as an argument</p>
{% filter capitalize %}oh HEY there{% endfilter %}

<p>Works across complex content.</p>
{% filter capitalize %}oh {{ bar }} {% if here %}here{% else %}there{% endif %}{% endfilter %}

