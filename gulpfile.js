'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
	browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch(['public/**'], ['sync']);
});

gulp.task('sync', function() {
    browserSync.reload();
});