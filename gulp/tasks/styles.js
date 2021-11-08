/**
 * Created by User on 004 04.06.21.
 */

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import config from '../config';


export const sassBuild = () => (
gulp.src(`${config.src.sass}/main.scss`, {sourceMaps: config.isDev})
    .pipe(sass({
        includePaths: ['./node_modules']
    }))
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer()))
    .pipe(gulpif(config.isProd, cleanCSS({level: 2})))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(config.dest.css), {sourceMaps: config.isDev})
);

export const sassWatch = () => (
gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild)
);