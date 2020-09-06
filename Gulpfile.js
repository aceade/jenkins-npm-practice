const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const { series } = require('gulp');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

// define a JSHint task
function lint() {
    // only testing goodCode.js so the build passes.
    // badCode.Js is the "what not to do" version of this
    return gulp.src('./src/goodCode.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }))
    .pipe(jshint.reporter('fail'));
}

function compress() {
    return pipeline(
        gulp.src('src/goodCode.js'),
        uglify(),
        gulp.dest('dist'));
}

// export it as a module
exports.lint = lint;
exports.compress = compress;
exports.default = series(lint, compress);