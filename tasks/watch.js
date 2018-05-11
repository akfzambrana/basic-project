'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('watch', ['styles', 'copy:all', 'browsersync'], watchTask);

function watchTask() {
  gulp.watch(config.stylesFiles, ['styles']);
  gulp.watch('**/*.html', { cwd: config.sourceDir }, ['copy:html']);
  gulp.watch('**/*.js', { cwd: config.sourceDir }, ['copy:js']);
  gulp.watch(`{${config.assetsDir}}/**/*`, { cwd: config.sourceDir }, ['copy:assets']);
}
