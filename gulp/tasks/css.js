require("../commonRequire");


var cssDevFunc = function (options) {
      var run = function () {
        console.log(arguments);
        var start = new Date();
        console.log('Building CSS bundle');
        gulp.src(options.src)
          .pipe(concat('main.css'))
          .pipe(gulp.dest(options.dest))
          .pipe(notify(function () {
            console.log('CSS bundle built in ' + (Date.now() - start) + 'ms');
          }));
      };
      run();
      gulp.watch(options.src, run);
}


var cssProdFunc = function (options) {
      gulp.src(options.src)
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(options.dest));
}


var cssSrc = './src/public/styles/**/*.css';

gulp.task('cssDev', function(){
    cssDevFunc({
      src: cssSrc,
      dest: './build/public/css'
    });
});


gulp.task('cssProd', function(){
    cssProdFunc({
      src: cssSrc,
      dest: './dist/public/css'
    });
});