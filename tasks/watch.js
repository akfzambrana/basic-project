"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('watch', ['styles', 'copy'], watchTask);

function watchTask() {
  gulp.watch('**/*.scss', {cwd: config.sourceDir}, ['styles']);
  gulp.watch(['**/*', '!**/*.scss'], {cwd: config.sourceDir}, ['copy']);
}
