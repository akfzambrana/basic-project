"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let gutil = require('gulp-util');
let argv = require('yargs').argv;

let sassOptions = {
  errLogToConsole: true,
  sourceComments: argv.prod ? '' : true,
  outputStyle: argv.prod ? 'compressed' : 'expanded'
};

let autoprefixerOptions = {
  browsers: config.browsersSupport
};

gulp.task('styles', stylesTask);

function stylesTask() {
  return gulp
    .src('**/*.scss', {cwd: config.sourceDir})
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', onError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.buildDir))
}

function onError(err) {
  let message = new gutil.PluginError(err.plugin, err.message).toString();

  process.stderr.write(message + '\n');
  gutil.beep();
}
