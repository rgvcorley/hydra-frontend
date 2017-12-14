'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var pkg = require('./package');
var browserSync = require('browser-sync');
var notify = require("gulp-notify");
var sassInlineSvg = require('gulp-sass-inline-svg');
var reload = browserSync.reload;

gulp.task('inline-svg', function() {
    return gulp.src("./assets/img/icon/**/*.svg")
        .pipe(sassInlineSvg({
            destDir: './assets/scss/base'
        }));
});

gulp.task('sass',['inline-svg'], function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    notify: false,
    logPrefix: pkg.name,
    proxy: "customer.dev"
  });
  gulp.watch('views/**/*.html.twig', reload);
  gulp.watch('assets/scss/**/*.scss', ['sass', reload]);
  gulp.watch('assets/js/**/*.js', reload);
  gulp.watch('assets/assets/img/**', reload);
});

gulp.task('default', ['serve']);