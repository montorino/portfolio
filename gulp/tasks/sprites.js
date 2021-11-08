/**
 * Created by User on 007 07.06.21.
 */

import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config';


const spriteMono = () =>(
    gulp.src(`${config.src.iconsMono}/**/*.svg`)
        .pipe(svgSprite(
            {
                mode: {
                    symbol: {
                        sprite: '../sprites/sprite-mono.svg'
                    }
                }
            }
        ))
        .pipe(gulp.dest(config.dest.images))
);

const spriteMulti = () =>(
    gulp.src(`${config.src.iconsMulti}/**/*.svg`)
        .pipe(svgSprite(
            {
                mode: {
                    symbol: {
                        sprite: '../sprites/sprite-multi.svg'
                    }
                }
            }
        ))
        .pipe(gulp.dest(config.dest.images))
);



export const spritesBuild = gulp.parallel(spriteMono, spriteMulti);

export const spritesWatch = () => {
    gulp.watch(`${config.src.iconsMono}/**/*.svg`, spriteMono);
    gulp.watch(`${config.src.iconsMulti}/**/*.svg`, spriteMulti);
};