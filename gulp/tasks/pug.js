/**
 * Created by User on 028 28.05.21.
 */

import gulp from 'gulp';
import config from '../config';

export const pugBuild = () => (
  gulp.src(`${config.src.root}/*.+(html|php)`)
    .pipe(gulp.dest(config.dest.html))
)


export const pugWatch = () => (
  gulp.watch(`${config.src.root}/*.+(html|php)`, pugBuild)
)

