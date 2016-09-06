'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var del = require('del');
var sequence = require('run-sequence');

gulp.task('default', function() {

});

gulp.task('sass', function() {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('build', function (callback) {
  sequence(
    'sass'
  )
});
