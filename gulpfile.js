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

gulp.task('moveStaticFiles', function(){
    var moveStatic = gulp.src('src/**/*.{html,json}').pipe(gulp.dest('public/'));
    
    return moveStatic;
});

gulp.task('default', ['compileTypescriptFiles', 'moveStaticFiles'], function () {
});

gulp.task('watch', ['compileTypescriptFiles', 'moveStaticFiles'], function() {
    gulp.watch('src/**/*.ts', ['compileTypescriptFiles']);
    gulp.watch('src/**/*.html', ['moveStaticFiles']);
});
