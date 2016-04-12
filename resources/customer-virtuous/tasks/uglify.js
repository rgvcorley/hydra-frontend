/*
 * gulp uglify : will uglify/compress bundled JavaScript file. It will run browserify task as a dependency
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function () {
    return gulp.src('./assets/build/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./assets/build/js/'));
};