"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('browserSync', browserSyncTask);

function browserSyncTask() {
  return browserSync({
    port: 3000,
    server: {
      baseDir: config.buildDir
    }
  })
}
