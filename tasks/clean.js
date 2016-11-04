"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let del = require('del');

gulp.task('clean', cleanTask);

function cleanTask() {
  return del.sync(config.buildDir);
}
