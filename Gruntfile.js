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
    read: grunt.file.read
  });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'src/helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Build HTML from templates and data
    assemble: {
      options: grunt.util._.extend({
        engine: 'swig',
        // example options for markdown tag/filter
        marked: {
          gfm: true
        },
        // prettify tag/filter
        prettify: {
          condense: true,
          padcomments: true
        },
        flatten: true,
        helpers: ['src/extensions/*.js', 'src/extensions/filters/*.js'],
        assets: 'docs/assets',
        partials: ['src/includes/**/*.swig'],
        layoutdir: 'src/layouts',
        layout: 'default.swig',
        data: ['src/data/**/*.{json,yml}', 'package.json']
      }),
      pages: {
        src: [
          'src/*.swig'
        ],
        dest: 'docs/'
      }
    },

    // Before generating any new files,
    // remove files from previous build.
    clean: {
      example: ['docs/*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble']);
};
