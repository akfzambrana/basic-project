"use strict";

let config = require('./gulp.config.js');
let gulp = require('gulp');
let async = require('async');
let iconfont = require('gulp-iconfont');
let consolidate = require('gulp-consolidate');


gulp.task('build:icons', buildIconTask);

function buildIconTask(done){
  let iconStream = gulp
    .src('*.svg', {cwd: config.sourceDir + config.iconsSrcSvgDir})
    .pipe(iconfont({ fontName: 'myfont' }));

  async.parallel([
    function handleGlyphs (cb) {
      iconStream.on('glyphs', function(glyphs, options) {
        gulp
          .src(config.sourceDir + config.iconsTemplatePath)
          .pipe(consolidate('lodash', {
            glyphs: glyphs,
            fontName: 'myfont',
            fontPath: '../' + config.iconFontDestDir,
            className: 's',
            normalize: true,
            fontHeight: 1001
          }))
          .pipe(gulp.dest(config.buildDir + config.iconsPartialDestDir))
          .on('finish', cb);
      });
    },
    function handleFonts (cb) {
      iconStream
        .pipe(gulp.dest(config.buildDir + config.iconFontDestDir))
        .on('finish', cb);
    }
  ], done);
}
