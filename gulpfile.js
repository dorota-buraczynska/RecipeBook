var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

function onError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass({errLogToConsole: true}))
        .on('error', onError)
        .pipe(gulp.dest('css'))
        .pipe(livereload())
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']);
});
