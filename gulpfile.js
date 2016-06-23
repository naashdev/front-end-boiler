/* --------------------------------
 | Project Gulpfile
 * ------------------------------*/

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    mmq = require('gulp-merge-media-queries'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browsersync = require('browser-sync');

// Compile Styles
gulp.task('compile-css', function() {
    gulp.src('library/sass/*.sass')
    .pipe(sass({outputStyle: 'expanded', sourcemap: false})
      .on('error', sass.logError))
    .pipe(mmq({
      log: true
    }))
    .pipe(autoprefixer({
      browsers: ['>1%', 'ie 9']
    }))
    .pipe(csso())
    .pipe(gulp.dest('library/css'));
});

// Compile JS
gulp.task('compile-js', function() {
    return gulp.src([
      // Add JS plugins to concat here...
      //'library/js/plugins/viewportSize-min.js',
      //'library/js/plugins/jquery.cycle2.min.js',
      //'library/js/plugins/jquery.placeholder.min.js',
      //'library/js/plugins/jquery.customSelect.min.js',
      // Main JS
      'library/js/min/main.min.js',
    ])
    .pipe(concat('compiled.js'))
    .pipe(gulp.dest('library/js'));
});

// Minify Main JS
gulp.task('main-js', function() {
    gulp.src('library/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('library/js/min'));
});

// Watch Everything
gulp.task('watch', function() {

    // Start BrowserSync Server
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });

    // Watch Files
    gulp.watch('library/sass/**/*.sass', ['compile-css']);
    gulp.watch('library/js/main.js', ['main-js']);
    gulp.watch('library/js/min/main.min.js', ['compile-js']);
    gulp.watch('library/css/master.css').on('change', browsersync.reload);
    gulp.watch('library/js/compiled.js').on('change', browsersync.reload);
    gulp.watch("index.html").on('change', browsersync.reload);


});
