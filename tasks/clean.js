'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');
let del = require('del');

gulp.task('clean', cleanBuildTask);

function cleanBuildTask() {
  return del.sync(config.buildDir);
}
