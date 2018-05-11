'use strict';

let gulp = require('gulp');
let gulpSequence = require('gulp-sequence');

gulp.task('build', ['clean'], gulpSequence('styles', 'copy:all'));
