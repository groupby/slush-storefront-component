/*
 * slush-storefront-component
 * https://github.com/groupby/slush-storefront-component
 *
 * Copyright (c) 2017, GroupBy Inc.
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var rename = require('gulp-rename');
var install = require('gulp-install');
var _string = require('underscore.string');
var inquirer = require('inquirer');
var path = require('path');

var scaffold = function(source, target, answers) {
  return
};

gulp.task('default', function(done) {
  var prompts = [{
    name: 'componentName',
    type: 'input',
    message: 'What is the name of your component?'
  }, {
    type: 'confirm',
    name: 'official',
    message: 'Is this an official GroupBy component?',
    default: false
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];

  // Ask
  inquirer.prompt(prompts)
    .then(function(answers) {
      if (!answers.moveon) {
        return done();
      }
      answers.component = _string.slugify(answers.componentName);
      answers.componentClass = _string.classify(answers.component);
      answers.pkgName = (answers.official ? '@storefront/' : 'storefront-') + answers.component;
      answers.prefix = answers.official ? 'gb-' : 'my-';
      answers.repository = answers.official ?
        ('groupby/storefront-' + answers.component) :
        '< repository >';

      gulp.src(path.join(__dirname, 'templates', '**', '*'))
        .pipe(template(answers, { interpolate: /<%=([\s\S]+?)%>/g }))
        .pipe(rename(function(file) {
          if (file.dirname.match(/%component/)) {
            file.dirname = file.dirname.replace('%component', answers.component);
          } else if (file.basename === '%component') {
            file.basename = answers.component;
          }
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1);
          }
          if (file.basename[0] === '$') {
            file.basename = file.basename.slice(1);
          }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
          done();
        });
    });
});
