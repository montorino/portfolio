/**
 * Created by User on 004 04.06.21.
 */

import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
    gulp.src(`${config.src.fonts}/**/*`)
        .pipe(gulp.dest(config.dest.fonts))
)

const videoBuild = () => (
    gulp.src('src/assets/video/**/*')
        .pipe(gulp.dest('build/video'))
)

export const assetsBuild = gulp.parallel(fontsBuild, videoBuild);

export const assetsWatch = () => {
    gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
    gulp.watch('src/assets/video/**/*', videoBuild);
};