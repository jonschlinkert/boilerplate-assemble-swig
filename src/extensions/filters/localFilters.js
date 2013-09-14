/*
 * assemble-swig-examples
 * https://github.com/assemble/assemble-swig-examples
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

var path = require('path');
var _ = require('lodash');

'use strict';

// The module to be exported
var filters = module.exports = {};

filters.isEmpty = function (obj) {
  return _.isEmpty(obj);
};

filters.in = function (obj, arg) {
  return (obj in arg) || ((arg instanceof Array) && arg.indexOf(obj) != -1);
};

filters.daysFromToday = function (obj, arg) {
  return Math.round((new Date() - new Date(obj)) / (1000 * 60 * 60 * 24));
};

filters.linkTo = function (fromfile, tofile) {
  var relativeLink = path.relative(fromfile.path, tofile.url);
  if (tofile.filename === 'index.html') {
    relativeLink = path.dirname(relativeLink) + path.sep;
  }
  return relativeLink;
};

filters.relativePath = function (fromfile, tofile) {
  var relativeLink = path.relative(fromfile.path, tofile.url);
  return path.dirname(relativeLink) + path.sep;
};

filters.basePath = function (file) {
  return path.relative(file.path, '/') + path.sep;
};

filters.where = function (files, prop, value) {
  return _(files).filter(function (file) {
    return file[prop] === value;
  });
};

filters.reject = function (files, prop, value) {
  return _(files).reject(function (file) {
    return file[prop] === value;
  });
};

filters.matches = function (files, prop, value) {
  return _(files).filter(function (file) {
    var reg = new RegExp(value);
    if (!file[prop].match(reg)) {
      return false;
    }
    return true;
  });
};

// Sorts passed items by key.
// key can be a path to the key in dot notation (e.g. 'templateData.date')
filters.sort = function (files, key) {
  if (key.indexOf('.') === -1) {
    return _(files).sortBy(key);
  }
  var keyParts = key.split('.');
  return _(files).sortBy(function (file) {
    var val = file;
    _(keyParts).each(function (part) {
      val = val[part];
    });
    if (_.isDate(val)) {
      val = val.getTime();
    }
    return val;
  });
};

filters.isEmpty = function (obj) {
  return _.isEmpty(obj);
};

filters.in = function (obj, arg) {
  return (obj in arg) || ((arg instanceof Array) && arg.indexOf(obj) != -1);
};

filters.daysFromToday = function (obj, arg) {
  return Math.round((new Date() - new Date(obj)) / (1000 * 60 * 60 * 24));
};

module.exports.register = function (swig, opts) {
  opts = opts || {};

  // filters.useFilter(swig, filters);
  for (var filter in filters) {
    if (filters.hasOwnProperty(filter)) {
      swig.setFilter(filter, filters[filter]);
    }
  }
};