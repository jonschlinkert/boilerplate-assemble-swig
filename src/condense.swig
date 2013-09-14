---
layout: none
title: "{{foo|condense}}"
foo: |
  # Condense Filter
  > The {{foo|condense}} filter should remove the extra newlines.

  one


  two





  three
---
<h1>Not condensed</h1>
{{foo}}


<h1>Condensed</h1>
{{foo|condense}}


<h1>Condensed</h1>
{{foo|condense|safe}}

