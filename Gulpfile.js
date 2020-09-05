const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const { series } = require('gulp');

// define a JSHint task
function lint() {
    return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
}

// export it as a module
exports.lint = lint;
exports.default = series(lint);