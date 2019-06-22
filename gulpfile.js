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
var babel = require('gulp-babel');
var onlyProductionJS = [
   'src/ascetic-chart.js',
];
var onlyProductionCSS = [
  'src/ascetic-chart.css',
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

gulp.task('buildjs',function(){
 return gulp.src(onlyProductionJS)
 .pipe(babel())
 .pipe(concat('ascetic-chart.min.js'))
 .pipe(gulp.dest('public/js'));
});
gulp.task ('bmjs',function(){
  return gulp.src(onlyProductionJS)
    .pipe(babel())
    .pipe(gulpIf('*.js', uglify()))
    .on('error', function(err){
      gutil.log(gutil.colors.ed('[Error!]'). err.toString());
    })
    .pipe(concat('ascetic-chart.min.js'))
    .pipe(gulp.dest('public/js'));
});
gulp.task('watchbmjs', function() {
  gulp.watch('src/ascetic-chart.js', gulp.series('bmjs'));
});

gulp.task('buildJS', function() {
  return gulp.src(o).
      pipe(concat('ascetic-chart.min.js')).
      pipe(gulp.dest('public/js'));
});

