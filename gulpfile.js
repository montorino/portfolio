let gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache'),
    autoprefixer       = require('gulp-autoprefixer');

gulp.task('sass', function () {
   return gulp.src('app/sass/**/*.+(sass|scss)')
       .pipe(sass())    //{outputStyle: 'compressed'}
       .pipe(autoprefixer(['last 15 versions', '>1%', 'ie > 7'], {cascade: true}))
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/bootstrap4/js/bootstrap.min.js',
        'app/libs/easing/easing.min.js',
        'app/libs/isotope/isotope.pkgd.js',
        'app/libs/lightbox/js/lightbox.min.js',
        'app/libs/slick/slick.js',
        'app/libs/mail/contact.js',
        'app/libs/mail/jqBootstrapValidation.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});


gulp.task('clear', function() {
    return cache.clearAll()
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins:[{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        notify: false
    });
});

gulp.task('clean', function() {
    return del.sync('dist')
});


gulp.task('build', function() {

    let buildCSS = gulp.src([
        'app/css/style.min.css',
        'app/css/libs.min.css',
        'app/css/fonts.css',
    ]).pipe(gulp.dest('dist/css'))

    let buildFonts = gulp.src(
        'app/fonts/**/*').pipe(gulp.dest('dist/fonts'))
    let buildJS = gulp.src(
        'app/js/**/*').pipe(gulp.dest('dist/js'))

    let buildHTML = gulp.src(
        'app/*.html').pipe(gulp.dest('dist'))
});



gulp.task ('watch', function () {
    gulp.watch('app/sass/**/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js').on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('sass', 'js', 'clean', 'build', 'img', 'browser-sync','watch'));
