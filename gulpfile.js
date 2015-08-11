var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compileTypescriptFiles', function(){
    var typescript = gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        declarationFiles: true,
        module: 'commonjs',
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: 'es5'
      }));

  return typescript.js.pipe(sourcemaps.write()).pipe(gulp.dest('public/'));
});

gulp.task('moveHtmlFiles', function(){
    var moveHtml = gulp.src('src/**/*.html').pipe(gulp.dest('public/'));
    
    return moveHtml;
});

gulp.task('default', ['compileTypescriptFiles', 'moveHtmlFiles'], function () {
});

gulp.task('watch', ['compileTypescriptFiles', 'moveHtmlFiles'], function() {
    gulp.watch('src/**/*.ts', ['compileTypescriptFiles']);
    gulp.watch('src/**/*.html', ['moveHtmlFiles']);
});
