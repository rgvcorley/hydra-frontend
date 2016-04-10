/*
 * gulp sass : will compile SASS/SCSS into single file, compressed
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function () {
    return gulp.src('./assets/src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./assets/build/css'));
};
