"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('copy', copyTask);

function copyTask() {
  return gulp
    .src('**/*.html', {cwd: config.sourceDir + '/html'})
    .pipe(gulp.dest(config.buildDir + '/'));
}
