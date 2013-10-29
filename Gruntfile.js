/*
 * assemble-swig-example
 * https://github.com/assemble/assemble-swig-example
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.util._.mixin({
    read: function(src) {
      grunt.file.read(require('path').join('src/content', src));
    }
  });

  var pretty = require('pretty');

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'src/helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        engine: 'swig',

        // Register Swig extensions
        helpers: ['src/extensions/*.js', 'src/extensions/filters/*.js'],

        // Templates and data
        data: ['src/data/*.{json,yml}'],
        partials: ['src/includes/*.swig'],
        layoutdir: 'src/layouts',
        layoutext: '.swig',
        layout: 'default',

        flatten: true,
        site: '<%= site %>',
        assets: '<%= site.dest %>/assets',
        postprocess: pretty
      },
      pages: {
        src: ['src/*.swig'],
        dest: '<%= site.dest %>/'
      }
    },

    // Before generating any new files,
    // remove files from previous build.
    clean: {
      example: ['<%= site.dest %>/*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble']);
};
