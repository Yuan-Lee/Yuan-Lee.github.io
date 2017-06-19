var gulp=require('gulp');
var del=require('del');var browserSync=require('browser-sync');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var postcss=require('gulp-postcss');
var autoprefixer=require('gulp-autoprefixer');
var cssnano=require('cssnano');
var cssnext=require('cssnext');

var paths={
	srcCSS:'src/css/*.css',
	srcHtml:'html-desktop/*.html',
	srcJs:'src/js/*.js',
	srcFont:'src/fonts/*.{eot,woff,ttf,woff2,svg}',
	srcImages:'src/images/**/**/*.{png,jpg,jpeg,gif,ico}',
	distCSS:'dist/css/',
	distJs:'dist/js/',
	distFont:'dist/fonts/',
	distImages:'dist/images/'
}

gulp.task('clean',function(){
	del([paths.distCSS,paths.distImages,paths.distJs,paths.distFont]);
})

gulp.task('watch', function(){
	gulp.watch(paths.srcCSS,['dealCss']);
	gulp.watch(paths.srcImages,['dealImages']);
	gulp.watch(paths.srcJs,['dealJs']);
	gulp.watch(paths.srcFont,['dealFont']);
	gulp.watch(paths.srcHtml,['dealHtml']);
})

gulp.task('main',['clean','dealCss','dealImages','dealJs','dealFont'], function(){
	console.log('It done!')
})

gulp.task('dealHtml', function(){
	return gulp.src(paths.srcHtml)
			.pipe(browserSync.reload({stream:true}));
})

gulp.task('dealCss', function(){

	var processers=[
			autoprefixer/*({browses:['last 4 version']})*/,
			cssnext
		];
	return gulp.src(paths.srcCSS)
				.pipe(postcss(processers))
				.pipe(rename({suffix:'.min'}))
				.pipe(gulp.dest(paths.distCSS))
            	.pipe(browserSync.reload({stream:true}));
})

gulp.task('dealImages', function(){
	return gulp.src(paths.srcImages)
			.pipe(gulp.dest(paths.distImages))
            .pipe(browserSync.reload({stream:true}));
})

gulp.task('dealJs', function(){
	return gulp.src(paths.srcJs)
			.pipe(uglify())
			.pipe(rename({suffix:'.min'}))
			.pipe(gulp.dest(paths.distJs))
            .pipe(browserSync.reload({stream:true}));
})

gulp.task('dealFont', function(){
	return gulp.src(paths.srcFont)
			.pipe(gulp.dest(paths.distFont))
            .pipe(browserSync.reload({stream:true}));
})

gulp.task('browser-sync', function(){
  browserSync.init({
  	  port:4001,
  	  browser: ["chrome"],
      server: {
          baseDir: "./",
          index:"./html/index.html"
      }
  });
})

gulp.task('default',['main','browser-sync','watch'])