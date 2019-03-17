var gulp = require('gulp'),
    modenizr = require('gulp-modernizr');


gulp.task('modernizr', function() {
    return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
        .pipe(modenizr({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest('./app/temp/scripts/'));
});