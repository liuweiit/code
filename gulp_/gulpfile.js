'use strict';

let gulp   = require('gulp'),
    cssMin = require('gulp-css'),
    jsMin  = require('gulp-uglify'),
    imgMin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    gutil = require('gulp-util'),
    cache = require('gulp-cache'),
    server = require('gulp-connect'),
    runSequence = require('run-sequence'),
    watch  = require('gulp-watch'),
    sass   = require('gulp-sass'),

    mainSrc = 'content/src/',
    //源文件
    srcPath = {
        html:mainSrc+'html/**/*.html',
        js:mainSrc+'js/**/*.js',
        css:mainSrc+'css/**/*.css',
        img:mainSrc+'img/**/*.{jpg,png,gif}',
        sass:mainSrc+'css/**/*.scss',
    },
    mainPack = 'content/store/',
    //打包文件路径
    packPath = {
        html:mainPack+'html',
        js:mainPack+'js',
        css:mainPack+'css',
        img:mainPack+'img',
    };
    //资源文件跨域配置
    var cors = function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    };
    gulp.task('js-min',function(){
        return gulp.src(srcPath.js).pipe(changed(srcPath.js)).pipe(cache(jsMin())).pipe(gulp.dest(packPath.js));
    });

    gulp.task('css-min',function(){
        return gulp.src(srcPath.css).pipe(changed(srcPath.css)).pipe(cache(cssMin())).pipe(gulp.dest(packPath.css));
    });

    gulp.task('img-min',function(){
        return gulp.src(srcPath.img).pipe(changed(srcPath.img)).pipe(cache(imgMin())).pipe(gulp.dest(packPath.img));
    });

    gulp.task('copy-demo', function() {
        return gulp.src(srcPath.html).pipe((gulp.dest(packPath.html))).pipe(server.reload());
    });

    gulp.task('sass',function(){ // sass 直接编译 压缩至store文件夹内
        return gulp.src(srcPath.sass).pipe(sass()).pipe(cache(cssMin())).pipe(gulp.dest(packPath.css));
    });

    gulp.task('server', function() {
        server.server({
            //root: 'content',
            port: 80,
            //port: 443,
            //https: true,
            host: 'r.uzaicdn.com',
            livereload: false,
            middleware: function() {
                return [cors];
            }
        });
    });
    gulp.task('server-watch', ['server'], function() {
        gutil.log(gutil.colors.green('－－－－－－－开启监听模式－－－－－－－'));
        watch(srcPath.css,function(){
            runSequence('css-min');
        });
        watch(srcPath.sass,function(){
            runSequence('sass');
        });
        watch(srcPath.html,function(){
            runSequence('copy-demo');
        });
        watch(srcPath.js,function(){
            runSequence('js-min');
        });
        watch(srcPath.img,function(){
            runSequence('img-min');
        });
     });

    gulp.task('default',function(){
        runSequence('copy-demo','js-min','sass','css-min','img-min','server-watch');
    })