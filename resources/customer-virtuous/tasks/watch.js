/*
 * gulp watch : will compile SASS/SCSS and JavaScript, then watch all files for changes
*/

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function () {
    return gulp.watch('./assets/src/**/*', ['sass', 'uglify']);
};