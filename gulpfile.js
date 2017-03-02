'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');

gulp.task('compile', function() {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './app/js/index.js',
        debug: true
            // defining transforms here will avoid crashing your stream
    });

    return b.transform("babelify", { presets: ["es2015"] }).bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/dist/'));
});
