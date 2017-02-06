/* --------------------------------
 |
 | Project Gulpfile
 |
 | USING GULP:
 | 1. Open the command line from this directory and run 'npm install' to install all dependancies.
 | 2. Run 'gulp watch' to watch and compile all SCSS and JS files.
 |
 | NOTE: To use BrowserSync (live reload), set the dev url in the settings area.
 |
 --------------------------------*/

// Dependencies
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    streamify = require('gulp-streamify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')
    mmq = require('gulp-merge-media-queries'),
    csso = require('gulp-csso'),
    browsersync = require('browser-sync'),
    gulpif = require('gulp-if');

// Settings
var USE_BROWSERSYNC = true;
    DEV_URL = null; // Your local dev url
    MINIFY = false;

// CSS
gulp.task('css', function() {
    gulp.src('scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            sourcemap: false
        })
        .on('error', sass.logError))
        .pipe(mmq({
            log: true
        }))
        .pipe(autoprefixer({
            browsers: ['>1%', 'ie 9']
        }))
        // Only minify if turned on
        .pipe(
            gulpif( MINIFY, csso({
                    restructure: false
                })
            )
        )
        .pipe(gulp.dest('css'));
});

// JS
gulp.task('js', function() {
    browserify('js/src/bundle.js')
        .transform(require('browserify-shim'), {global: true})
        .bundle()
        .on('error', function(err){
            gutil.log("Browserify Error", gutil.colors.red(err.message));
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        // Only minify if turned on
        .pipe(
            gulpif(MINIFY,
                streamify( uglify() )
            )
        )
        .pipe(gulp.dest('js/dist'));
});

// Bundle Everything
gulp.task('bundle', ['css','js']);

// Watch Everything
gulp.task('watch', ['bundle'], function() {

    // Watch JS & SCSS files
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch('js/src/**/*.js', ['js']);

    // Only run BrowserSync if specified
    if (!USE_BROWSERSYNC) return;

    var serverSettings = {};

    // Run server from provided URL or fallback to static server
    switch(typeof DEV_URL) {
        case 'string':
            serverSettings = {
                proxy: DEV_URL
            };
            break;
        default:
            serverSettings = {
                server: {
                    baseDir: "./"
                }
            };
    }

    browsersync.init(serverSettings);

    // Reload BrowserSync server when files change
    gulp.watch('css/master.css').on('change', browsersync.reload);
    gulp.watch('js/dist/bundle.js').on('change', browsersync.reload);
    gulp.watch("*.php").on('change', browsersync.reload);

});

// Default task
gulp.task('default', ['bundle']);
