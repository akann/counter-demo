const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const del = require('del');
const eslint = require('gulp-eslint');
const fontAwesome = require('node-font-awesome');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('js-client', () => {
    browserify('./src/index.js')
    .add(require.resolve('babel-polyfill'))
    .transform(babelify, {presets: ['es2015', 'react', 'stage-2']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('js-server', () => {
  gulp.src('src/server/**/*.js')
        .pipe(babel({ presets: ['es2015', 'react', 'stage-2'] }))
        .pipe(gulp.dest('./build/server'));

  gulp.src('src/react/**/*.js')
        .pipe(babel({ presets: ['es2015', 'react', 'stage-2'] }))
        .pipe(gulp.dest('./build/react'));

  gulp.src('src/server/*.json')
        .pipe(gulp.dest('./build/server'));
});

gulp.task('js', ['js-client', 'js-server']);

gulp.task('fonts', () => {
  return gulp.src(['./node_modules/bootstrap-sass/assets/fonts/**/*', fontAwesome.fonts])
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('templates', () => {
  return gulp.src(['./src/templates/**/*.mustache', fontAwesome.fonts])
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('lint', () => {
  return gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});

gulp.task('css', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precison: 3,
      errLogToConsole: true,
      includePaths: [
        './src/sass',
        './node_modules/bootstrap-sass/assets/stylesheets',
        fontAwesome.scssPath
      ]
    })
    .on('error', error => {
      /* eslint-disable no-console */
      console.log('Error: ' + error.message);
      /* eslint-enable no-console */
      return error.message;
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/sass/**/*.scss', ['css']);
});

gulp.task('nodemon', ['build', 'watch'], (cb) => {
  let called = false;
  return nodemon({
    script: 'build/server/app.js',
    watch: ['src/**/*'],
    task: ['build']
  })
  .on('start', function onStart() {
    // ensure start only got called once
    if (!called) {
      cb();
    }
    called = true;
  });
});

gulp.task('clean', () => {
  return del(['build/**/*']);
});

gulp.task('build', ['js', 'fonts', 'css', 'templates']);
gulp.task('server', ['build', 'nodemon']);
gulp.task('default', ['server']);
