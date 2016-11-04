'use strict';

let gulp = require('gulp');
let argv = require('yargs').argv;
let runSequence = require('run-sequence');

let devTasks = [
  'watch'
];

let prodTasks = [
  'clean'
];

gulp.task('default', ['clean'], defaultTask);

function defaultTask() {
  argv.prod ? runSequence(prodTasks) : runSequence(devTasks);
}
