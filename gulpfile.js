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

// 기본 경로
const DIST_PATH = 'dist/';
const DEPLOY_PATH = 'deploy/';
const MAPS_PATH = './';
const APP_PATH = 'app/';

// 속성에 맞는 파일리스트
const APP_ALL_FILES = APP_PATH + '**/*';
const APP_JS_FILES = APP_PATH + '**/*.js';
const APP_HTTP_FILES = APP_PATH + '**/*.html';
const APP_CSS_FILES = APP_PATH + '**/*.css';
const APP_SPEC_FILES = APP_PATH + '**/*.spec.js';
const APP_DEBUG_FILE = APP_PATH + 'config/debug-flag.js';
const DIST_SPEC_FILES = DIST_PATH + '**/*.spec.js';

// 배포를 위한 파일 목록
const DEPLOY_SRC_LIST = [
  APP_JS_FILES,
  '!' + APP_SPEC_FILES,
  '!' + APP_DEBUG_FILE,
];

/** 개발용 */
gulp.task('js:dist', function () {
  return gulp.src(APP_JS_FILES)
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
  return gulp.src([APP_HTTP_FILES, APP_CSS_FILES])
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
  gulp.src(DIST_SPEC_FILES)
    .pipe(gPrint())
    .pipe(jasmine());
});

/** 개발용 */
gulp.task('watch', function () {
  gulp.watch(APP_ALL_FILES, ['build']);
});

/** 배포용 */
gulp.task('js:deploy', function () {
  return gulp.src(DEPLOY_SRC_LIST)
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
  return gulp.src([APP_HTTP_FILES, APP_CSS_FILES])
    .pipe(gPrint())
    .pipe(gulp.dest(DEPLOY_PATH));
});

/** 정리용 */
gulp.task('clean', ['clean:dist', 'clean:deploy'], function () {
  console.log('clean done.');
});

gulp.task('default', ['build']);
