/*
 * gulp browserify : will bundle JavaScript modules into single file, uncompressed
*/

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function () {
    return browserify('./assets/src/js/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./assets/build/js/'));
};