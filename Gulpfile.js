const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const { series } = require('gulp');

// define a JSHint task
function lint() {
    // only testing goodCode.js so the build passes.
    // badCode.Js is the "what not to do" version of this
    return gulp.src('./src/goodCode.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
}

// export it as a module
exports.lint = lint;
exports.default = series(lint);