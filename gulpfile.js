/* --------------------------------------------------------------------------
 * PROJECT GULPFILE
 * ------------------------------------------------------------------------*/

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cmq = require('gulp-combine-media-queries'),
    cssNano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

// Compile Styles
gulp.task('styles', function() {
    gulp.src('library/sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cmq({
      log: true
    }))
    .pipe(cssNano())
    .pipe(gulp.dest('library/css'));
});

// Compile JS
gulp.task('scripts', function() {
    return gulp.src([
      // Add JS to concat here...
      'library/js/min/main.min.js',
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('library/js'));
});

// Minify JS
gulp.task('minify-js', function() {
    gulp.src('library/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('library/js/min'));
});

// Watch Everything
gulp.task('watch', function() {

    // Start BrowserSync Server
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watch Files
    gulp.watch('library/sass/**/*.sass', ['styles']);
    gulp.watch('library/js/main.js', ['minify-js']);
    gulp.watch('library/js/min/main.min.js', ['scripts']);
    gulp.watch('library/css/master.css').on('change', browserSync.reload);
    gulp.watch('library/js/app.js').on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);


});
