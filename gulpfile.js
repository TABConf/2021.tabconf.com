var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    csscomb      = require('gulp-csscomb'),
    csso         = require('gulp-csso'),
    header       = require('gulp-header'),
    inject       = require('gulp-inject'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    series       = require('stream-series'),
    uglify       = require('gulp-uglify'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

var pkg = require('./package.json');
var banner = ['/**',
              ' * Tevent v<%= pkg.version %> - <%= pkg.description %>',
              ' * @link <%= pkg.homepage %>',
              ' * @copyright 2016-<%= new Date().getFullYear() %> <%= pkg.author %>',
              ' * @license <%= pkg.license %>',
              ' */',
              ''].join('\n');

var bannerPlugins = ['/**',
                     ' * Tevent v<%= pkg.version %> - <%= pkg.description %>',
                     ' * All plugins into one roof',
                     ' * @link <%= pkg.homepage %>',
                     ' * @copyright 2016-<%= new Date().getFullYear() %> <%= pkg.author %>',
                     ' * @license <%= pkg.license %>',
                     ' */',
                     ''].join('\n');

// plugins
var pluginsJS  = ['assets/vendor/jquery/jquery-1.12.0.min.js',
                  'assets/vendor/bootstrap/js/bootstrap.min.js',
                  'assets/vendor/bootsnav/js/bootsnav.js',
                  'assets/vendor/waypoints/jquery.waypoints.min.js',
                  'assets/vendor/waypoints/sticky.min.js',
                  'assets/vendor/headroom/headroom.min.js',
                  'assets/vendor/jquery.countTo/jquery.countTo.min.js',
                  'assets/vendor/owl.carousel2/owl.carousel.min.js',
                  'assets/vendor/jquery.appear/jquery.appear.js',
                  'assets/vendor/isotope/isotope.pkgd.min.js',
                  'assets/vendor/imagesloaded/imagesloaded.js',
                  'assets/vendor/magnific-popup/jquery.magnific-popup.min.js',
                  'assets/vendor/switchery/switchery.min.js',
                  'assets/vendor/jquery.countdown.min.js',
                  'assets/vendor/swiper/js/swiper.min.js'];

var pluginsCSS = ['assets/vendor/bootstrap/css/bootstrap.min.css',
                  'assets/vendor/bootsnav/css/bootsnav.css',
                  'assets/vendor/font-awesome/css/font-awesome.min.css',
                  'assets/vendor/custom-icon/css/style.css',
                  'assets/vendor/owl.carousel2/owl.carousel.min.css',
                  'assets/vendor/magnific-popup/magnific-popup.css',
                  'assets/vendor/switchery/switchery.min.css',
                  'assets/vendor/animate.css/animate.min.css',
                  'assets/vendor/swiper/css/swiper.min.css'];

gulp.task('pjs', function(){
    gulp.src(pluginsJS)
        .pipe(plumber())
        .pipe(concat('plugins.js'))
        .pipe(header(bannerPlugins, { pkg : pkg } ))
        .pipe(gulp.dest('assets/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(header(bannerPlugins, { pkg : pkg } ))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('pcss', function(){
    gulp.src(pluginsCSS)
        .pipe(concat('plugins.css'))
        .pipe(header(bannerPlugins, { pkg : pkg } ))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// js
var helpers    = ['assets/build/js/script.js',
                  'assets/build/js/initSwiper.js'];

gulp.task('js', function(){
    gulp.src(helpers)
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('assets/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.stream());
});

// sass
gulp.task('sass', function(){
    return gulp.src('assets/build/sass/main.sass')
        .pipe(sass())
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['Android >= 2.1',
                       'Chrome >= 21',
                       'Edge >= 12',
                       'Explorer >= 7',
                       'Firefox >= 17',
                       'Opera >= 12.1',
                       'Safari >= 6.0'],
                       cascade: false}))
        .pipe(csscomb())
        //.pipe(rename({basename: pkg.name}))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream())
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});


// gulp inject
gulp.task('inject', function(){
    var vendorStreamCSS = gulp.src(pluginsCSS, {read: false});
    var vendorStreamJS = gulp.src(pluginsJS, {read: false});
    var appStream = gulp.src(['assets/css/main.min.css', 'assets/js/main.js'], {read: false});
    gulp.src('*.html')
        .pipe(inject(series(vendorStreamCSS, vendorStreamJS, appStream), {relative: true}))
        .pipe(gulp.dest('./'))
});

// gulp inject - prodcution
gulp.task('injectPro', function(){
    var source = gulp.src(['assets/css/plugins.css', 'assets/css/main.min.css', 'assets/js/plugins.min.js', 'assets/js/main.min.js'], {read: false});
    gulp.src('*.html')
        .pipe(inject(source, {relative: true}))
        .pipe(gulp.dest('./'))
});

// serve
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "."
        },
        notify: false
    });
});

// Watch
gulp.task('watch', function(){
    gulp.watch('assets/build/js/*.js', ['js']);
    gulp.watch('assets/build/sass/**/*', ['sass']);
    gulp.watch("*.html").on("change", reload);
});


gulp.task('build', ['sass', 'js']);
gulp.task('plugins', ['pjs', 'pcss']);
gulp.task('default', ['serve', 'watch']);
