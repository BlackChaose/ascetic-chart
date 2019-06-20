var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
var gutil = require('gulp-util');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var concat = require('gulp-concat');
var onlyProductionJS = [
   // 'js/jquery-3.3.1.min.js',
   'public/js/ascetic-charts.min.js',
];
var onlyProductionCSS = [
  'public/css/ascetic-chart.min.css',
];
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss').pipe(sass()) //using gulp-sass
      .pipe(gulp.dest('src/css'));
});
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});
gulp.task('imagemin', function() {
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)').pipe(cache(imagemin({
    interlaced: true,
  }))).pipe(gulp.dest('public/images'));
});
gulp.task('fonts', function() {
  return gulp.src('fonts/**/*').pipe(gulp.dest('dist/fonts'));
});
gulp.task('clean:dest', function() {
  return del.sync('public/*');
});
gulp.task('jsmin', function() {
  return gulp.src('src/js/*.js').
      pipe(gulpIf('*.js', uglify())).
      on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      }).
      pipe(gulp.dest('public/js'));
});
gulp.task('cssmin', function() {
  return gulp.src('src/css/*.css').
      pipe(gulpIf('*.css', cssnano({zindex: false}))).
      on('error', function(err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      }).
      pipe(gulp.dest('public/css'));
});
gulp.task('assemblyJS', function() {
  return gulp.src(onlyProductionJS).
      pipe(concat('main.assm.min.js')).
      pipe(gulp.dest('prod_assembly/js'));
});
gulp.task('assemblyCSS', function() {
  return gulp.src(onlyProductionCSS).
      pipe(concat('main.assm.min.css')).
      pipe(gulp.dest('prod_assembly/css'));
});