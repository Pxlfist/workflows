// This file tells Gulp what to do when it runs

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

// create a task using the task method

gulp.task('coffee', function() {
	gulp.src('components/coffee/tagline.coffee')
		// Doesn't put the out-going JavaScript in a safety wrapper
		.pipe(coffee({ bare: true})
			.on('error', gutil.log))

		// New method where we're sending the file to once it's done
		.pipe(gulp.dest('components/scripts'))

});
