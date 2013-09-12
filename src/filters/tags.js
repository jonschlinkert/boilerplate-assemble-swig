/*
 * assemble-swig-examples
 * https://github.com/assemble/assemble-swig-examples
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

var swig   = require('swig');
var extras = require('swig-extras');
var assembleSwig = new swig.Swig();

var tags = [
 "markdown",
 "switch",
 "case"
];

tags.map(function(tag){
  return extras.useTag(assembleSwig, tag);
});