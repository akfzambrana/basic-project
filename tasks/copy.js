'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');

gulp.task('copy:all', ['copy:html', 'copy:assets', 'copy:js', 'copy:css']);
gulp.task('copy:html', copyHtmlTask);
gulp.task('copy:assets', copyAssetsTask);
gulp.task('copy:js', copyJsTask);
gulp.task('copy:css', copyCssTask);

function copyHtmlTask() {
  return gulp
    .src('**/*.html', { cwd: config.sourceDir })
    .pipe(gulp.dest( config.buildDir ));
}

function copyAssetsTask() {
  return gulp
    .src(`{${config.assets}}/**/*`, { cwd: config.sourceDir })
    .pipe(gulp.dest( config.buildDir ));
}

function copyJsTask() {
  return gulp
    .src('**/*.js', { cwd: config.sourceDir })
    .pipe(gulp.dest( `${config.buildDir}/${config.filesDestNameDir.js}` ));
}

function copyCssTask() {
  return gulp
    .src('**/*.css', { cwd: config.sourceDir })
    .pipe(gulp.dest( `${config.buildDir}/${config.filesDestNameDir.css}` ));
}
