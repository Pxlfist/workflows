// This file tells Gulp what to do when it runs

var gulp = require('gulp'),
	gutil = require('gulp-util');

// create a task using the task method

gulp.task('log', function(){

	gutil.log('Workflows are awesome');

});
