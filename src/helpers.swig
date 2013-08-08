---
title: "Helpers & Mixins"

path: ONE Two three
slug: <%= _.slugify(path) %>
---
<div class="page-header">
  <h1>{{ title }}</h1>
</div>

<h2>Example "track" helper</h2>
<p>View the HTML to see the tracking code that was added by the "track" helper. This helper was included to demonstrate how helpers work.</p>


<hr>

<h2>assemble-swig-example helper</h2>
<p>Example for using swig templates in Assemble.</p>


<hr>

<h2>Example Lo-Dash Mixin</h2>
<p>The "<code>slugifier</code>" mixin was included by default, you can find it in <code>./src/helpers/mixins.js</code> </p>

<strong>{{ slug }}</strong>
