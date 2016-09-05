"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('watch', ['clean'], watchTask);

function watchTask() {
  gulp.watch('**/*.scss', {cwd: config.sourceDir}, ['styles']);
}
