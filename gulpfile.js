'use strict';

let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  gPrint = require('gulp-print'),
  stripCode = require('gulp-strip-code'),
  stripComments = require('gulp-strip-comments'),
  webserver = require('gulp-webserver'),
  jasmine = require('gulp-jasmine'),
  del = require('del');

const DIST_PATH = 'dist';
const DEPLOY_PATH = 'deploy';
const MAPS_PATH = '.';

/** 개발용 */
gulp.task('js:dist', function () {
  return gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(gPrint())
    .pipe(babel())
    .pipe(sourcemaps.write(MAPS_PATH))
    .pipe(gulp.dest(DIST_PATH));
});

/** 개발용 */
gulp.task('clean:dist', function () {
  return del.sync(DIST_PATH);
});

/** 개발용 */
gulp.task('build', ['clean:dist', 'js:dist'], function () {
  return gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(gPrint())
    .pipe(gulp.dest(DIST_PATH));
});

/** 개발용 */
gulp.task('serve', ['build'], function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

/** 테스트 */
gulp.task('tdd', ['build'], () => {
  console.log('');
  console.log('#######################');
  console.log('# TDD');
  console.log('#######################');
  console.log('');
  gulp.src('dist/**/*.spec.js')
    .pipe(gPrint())
    .pipe(jasmine());
});

/** 개발용 */
gulp.task('watch', function () {
  gulp.watch('app/**/*.*', ['build']);
});

/** 배포용 */
gulp.task('js:deploy', function () {
  return gulp.src(['app/**/*.js', '!app/**/*.spec.js', '!app/config/debug.js'])
    .pipe(sourcemaps.init())
    .pipe(gPrint())
    .pipe(stripCode())
    .pipe(stripComments())
    .pipe(babel())
    .pipe(sourcemaps.write(MAPS_PATH))
    .pipe(gulp.dest(DEPLOY_PATH));
});

/** 배포용 */
gulp.task('clean:deploy', function () {
  return del.sync(DEPLOY_PATH);
});

/** 배포용 */
gulp.task('deploy', ['clean:deploy', 'js:deploy'], function () {
  return gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(gPrint())
    .pipe(gulp.dest(DEPLOY_PATH));
});

/** 정리용 */
gulp.task('clean', ['clean:dist', 'clean:deploy'], function () {
  console.log('clean done.');
});

gulp.task('default', ['build']);
