"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let merge = require('merge-stream');
let browserSync = require('browser-sync');

gulp.task('copy:all', ['copy:html', 'copy:js', 'copy:resources']);

gulp.task('copy:html', copyHtmlTask);

function copyHtmlTask() {
  return gulp
    .src('**/*.html', {cwd: config.sourceDir + '/html'})
    .pipe(gulp.dest(config.buildDir + config.htmlDestDir))
    .pipe(browserSync.reload({stream:true}));
}

gulp.task('copy:js', copyJsTask);

function copyJsTask() {
  return gulp
    .src('**/*.js', {cwd: config.sourceDir})
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.reload({stream:true}));
}

gulp.task('copy:resources', copyResourcesTask);

function copyResourcesTask() {
  return gulp
    .src(['**/*', '!**/{' + config.excludeResourcesCopy + '}{,/**}'], {cwd: config.sourceDir + '/'})
    .pipe(gulp.dest(config.buildDir + config.resourcesDestDir))
    .pipe(browserSync.reload({stream:true}));
}
