var gulp = require('gulp');

/*
 * Gulp task definitions
 *
 * CLI usage:
 * gulp browserify : will bundle JavaScript modules into single file, uncompressed
 * gulp sass : will compile SASS/SCSS into single file, compressed
 * gulp uglify : will uglify/compress bundled JavaScript file. It will run browserify task as a dependency
 * gulp watch : will compile SASS/SCSS and JavaScript, then watch all files for changes
 * gulp : default task will compile both SASS/SCSS into production ready build files
*/
gulp.task('browserify', require('./tasks/browserify.js'));
gulp.task('sass', require('./tasks/sass.js'));
gulp.task('uglify', ['browserify'], require('./tasks/uglify.js'));
gulp.task('watch', ['sass', 'uglify'], require('./tasks/watch.js'));
gulp.task('default', ['sass', 'uglify']);