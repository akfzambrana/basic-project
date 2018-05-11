'use strict';

let config = require('./gulp.config.js');
let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('browsersync', browserSyncTask);

function browserSyncTask() {
  return browserSync({
    port: config.server.port,
    startPath: 'index.html',
    server: {
      baseDir: config.server.baseUrl
    }
  })
}
