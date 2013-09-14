/*
 * assemble-swig-examples
 * https://github.com/assemble/assemble-swig-examples
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

var extras = require('swig-extras');
var extensions = require('swig-extensions');


module.exports.register = function(swig, opts) {
  opts = opts || {};

  // Register tags from swig-extras
  var extrasTags = [
   // "markdown"
   "switch",
   "case"
  ];
  extrasTags.map(function(tag){
    return extras.useTag(swig, tag);
  });

  // Register tags from swig-extensions. We can use the
  // same format as above, we're just using a different format
  // here for purposes of instruction.
  extensions.useTag(swig, 'prettify');
  extensions.useTag(swig, 'markdown');
};

