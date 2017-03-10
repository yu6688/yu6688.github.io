var gulp = require('gulp');            //加载gulp模块
var less = require('gulp-less');         //加载less编译模块
//var browserSync = require("browser-sync");
//1. less -> css   编译
gulp.task('style',function(){           //定义一个名为style的任务
    gulp.src('src/css/*.less')          //入口文件  要处理哪里的文件
        .pipe(less())               //编译
        .pipe(gulp.dest('css'))    //通过pipe管道  指定出口文件  处理完的文件放到哪儿
});
