let gulp = require('gulp'),
  babel = require('gulp-babel'),
  print = require('gulp-print'),
  stripCode = require('gulp-strip-code'),
  stripComments = require('gulp-strip-comments'),
  webserver = require('gulp-webserver'),
  del = require('del');

const DIST_PATH = 'dist';
const DEPLOY_PATH = 'deploy';

/** 개발용 */
gulp.task('js:dist', function () {
  return gulp.src('app/**/*.js')
    .pipe(print())
    .pipe(babel())
    .pipe(gulp.dest(DIST_PATH));
});

/** 개발용 */
gulp.task('libs:dist', function () {
  return gulp.src([
      'node_modules/systemjs/dist/system.js',
      'node_modules/babel-polyfill/dist/polyfill.js'
    ])
    .pipe(print())
    .pipe(gulp.dest(DIST_PATH + '/libs'));
});

/** 개발용 */
gulp.task('clean:dist', function () {
  return del.sync(DIST_PATH);
});

/** 개발용 */
gulp.task('build', ['clean:dist', 'js:dist', 'libs:dist'], function () {
  return gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(print())
    .pipe(gulp.dest(DIST_PATH));
});

/** 개발용 */
gulp.task('serve', ['build'], function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

/** 개발용 */
gulp.task('watch', function () {
  gulp.watch('app/**/*.*', ['build']);
});

/** 배포용 */
gulp.task('js:deploy', function () {
  return gulp.src('app/**/*.js')
    .pipe(stripCode())
    .pipe(stripComments())
    .pipe(print())
    .pipe(babel())
    .pipe(gulp.dest(DEPLOY_PATH));
});

/** 배포용 */
gulp.task('libs:deploy', function () {
  return gulp.src([
      'node_modules/systemjs/dist/system.js',
      'node_modules/babel-polyfill/dist/polyfill.js'
    ])
    .pipe(stripCode())
    .pipe(stripComments())
    .pipe(print())
    .pipe(gulp.dest(DEPLOY_PATH + '/libs'));
});

/** 배포용 */
gulp.task('clean:deploy', function () {
  return del.sync(DEPLOY_PATH);
});

/** 배포용 */
gulp.task('deploy', ['clean:deploy', 'js:deploy', 'libs:deploy'], function () {
  return gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(print())
    .pipe(gulp.dest(DEPLOY_PATH));
});

gulp.task('default', ['build']);
