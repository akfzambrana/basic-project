'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('copy:all', ['copy:html', 'copy:assets', 'copy:js']);
gulp.task('copy:html', copyHtmlTask);
gulp.task('copy:assets', copyAssetsTask);
gulp.task('copy:js', copyJsTask);

function copyHtmlTask() {
  return gulp
    .src('**/*.html', { cwd: config.sourceDir })
    .pipe(gulp.dest( config.buildDir ))
    .pipe(browserSync.reload({ stream: true }));
}

function copyAssetsTask() {
  return gulp
    .src(`{${config.assets}}/**/*`, { cwd: config.sourceDir })
    .pipe(gulp.dest( config.buildDir ))
    .pipe(browserSync.reload({ stream: true }));
}

function copyJsTask() {
  return gulp
    .src('**/*.js', { cwd: config.sourceDir })
    .pipe(gulp.dest( config.buildDir ))
    .pipe(browserSync.reload({ stream: true }));
}
