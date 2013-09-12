/*
 * assemble-swig-examples
 * https://github.com/assemble/assemble-swig-examples
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

var swig   = require('swig');
var extras = require('swig-extras');
var _      = require('lodash');

var filters = [
  "batch",
  "groupby",
  "markdown",
  "nl2br",
  "pluck",
  "split",
  "trim",
  "truncate"
];

filters.map(function(filter){
  return extras.useFilter(swig, filter);
});