var gulp = require("gulp");
gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\kids-king"));
});
   gulp.task('copyallfile',function(){
	gulp.src('*/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\kids-king'));
});
  

