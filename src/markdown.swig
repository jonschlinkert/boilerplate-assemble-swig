---
layout: default
title: Example title from YFM
description: |
  # Markdown Filter
  > The markdown filter should convert this to HTML.
---
{{description|markdown}}

<h1>markdown tag</h1>
{% markdown %}
  {% include "src/content/markdown.md" %}
{% endmarkdown %}


{% markdown %}
This is a markdown block.

## {{ title }}
{{description}}

A code example:

```js
'use strict';

var path = require('path');
var matchdep = require('matchdep');
var _ = require('lodash');

// Export this module.
var resolve = module.exports = {};

// Resolve path to a specific file
resolve.path = function (filepath) {
  return path.relative(process.cwd(), require.resolve(filepath)).replace(/\\/g, '/');
};

// Resolve paths to dependencies
resolve.load = function (patterns, config) {
  return matchdep.filter(patterns, config).map(function (pattern) {
    return resolve.path(pattern);
  });
};

// Resolve paths to devDependencies
resolve.loadDev = function (patterns, config) {
  return matchdep.filterDev(patterns, config).map(function (pattern) {
    return resolve.path(pattern);
  });
};

// Resolve paths to both dependencies and devDependencies
resolve.loadAll = function (patterns, config) {
  return matchdep.filterAll(patterns, config).map(function (pattern) {
    return resolve.path(pattern);
  });
};
```
{% endmarkdown %}
