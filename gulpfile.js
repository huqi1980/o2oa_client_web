var gulp = require('gulp');
var deleted = require('gulp-deleted');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('clean', function(cb) {
    deleted(['build']);
    cb();
});
gulp.task('uglify', function(cb) {
    gulp.src(['source/**/*.js'])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(['build/']));
    cb();
});
gulp.task('move', function(cb) {
    gulp.src(['source/**/*']).pipe(gulp.dest(['build/']));
    cb();
});

gulp.task('default', gulp.series('clean', 'move', 'uglify'));