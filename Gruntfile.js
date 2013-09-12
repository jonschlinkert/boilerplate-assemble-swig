/*
 * assemble-swig-example
 * https://github.com/assemble/assemble-swig-example
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

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
      options: {
        engine: 'swig',
        flatten: true,
        assets: 'docs/assets',
        partials: ['src/includes/**/*.swig'],
        helpers: ['src/filters/*.js'],
        layout: 'src/layouts/default.swig',
        data: ['src/data/*.{json,yml}', 'package.json']
      },
      pages: {
        src: 'src/*.swig',
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
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'assemble']);
};
