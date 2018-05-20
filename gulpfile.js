const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpMerge = require('gulp-merge');

gulp.task('es6', () => {

    /*
     * Getting Streams from any es6 js file or testing file
     * converting them and saving the output to destination called dist
     * then running the test file.
     */
    return gulpMerge(gulp.src('./*.test.js'),gulp.src('./*.es6.js'))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

// The default task is to convert es6 to es5/basic JS.
gulp.task("default", ["es6"]);
