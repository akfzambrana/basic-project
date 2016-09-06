"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let merge = require('merge-stream');
// let browserSync = require('browser-sync');

gulp.task('copy', copyTask);

function copyTask() {
  let copyHTML = gulp
        .src('**/*.html', {cwd: config.sourceDir + '/html'})
        .pipe(gulp.dest(config.buildDir + '/'))

  let copyResources = gulp
        .src('**/*.js', {cwd: config.sourceDir + '/'})
        .pipe(gulp.dest(config.buildDir + '/'))

  return merge(
      copyHTML,
      copyResources
    )
    .pipe(gulp.dest(config.buildDir + '/'));
}
