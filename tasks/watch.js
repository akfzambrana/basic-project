"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('watch', ['styles', 'copy:all', 'browserSync'], watchTask);

function watchTask() {
  gulp.watch('**/*.scss', {cwd: config.sourceDir}, ['styles']);
  gulp.watch('**/*.html', {cwd: config.sourceDir}, ['copy:html']);
  gulp.watch('**/*.js', {cwd: config.sourceDir}, ['copy:js']);
  gulp.watch(['**/*', '!**/{' + config.excludeResourcesCopy + '}{,/**}'], {cwd: config.sourceDir}, ['copy:resources']);
}
