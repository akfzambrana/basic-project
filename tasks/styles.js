'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let gutil = require('gulp-util');
let browserSync = require('browser-sync');

let autoprefixerOptions = {
  browsers: config.browsersSupport
};

let sassOptions = {
  errLogToConsole: true,
  sourceComments: true,
  outputStyle: 'expanded'
};

gulp.task('styles', stylesTask);

function stylesTask() {
  return gulp
    .src(config.stylesFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', onError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.reload({ stream: true }));
}

function onError(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString();

  process.stderr.write(message + '\n');

  this.emit('end');
}
