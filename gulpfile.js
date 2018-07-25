/* Gulpfile.js */
let gulp = require('gulp');
let gutil =  require('gulp-util');
let sass = require('gulp-sass');
let webserver = require('gulp-webserver');
let path = require('path');

/* tasks */
// gulp.task(
//   name : String,
//   deps : [] :: optional,
//   cb : fn
// )

/* Styles task */
gulp.task('styles', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({includePaths: [
                path.join(__dirname, 'node_modules/bootstrap/scss/'),
                path.join(__dirname, 'src/scss')]
            , outputStyle: 'compressed'}))
        .pipe(gulp.dest('build/css/'))
});

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build/'))
});

gulp.task('assets', () => {
    return gulp.src('assets/**/*.png')
        .pipe(gulp.dest('build/assets/'))
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['styles'],cb => cb);
    gulp.watch('src/**/*.html', ['html'],cb => cb);
    gulp.watch('assets/**/*.png', ['assets'],cb => cb);
});

gulp.task('server', () => {
    gulp.src('build/')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
});

gulp.task('start', [
    'html',
    'styles',
    'assets',
    'server',
    'watch'
], cb => cb);