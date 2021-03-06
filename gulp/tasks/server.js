/**
 * Created by User on 022 22.05.21.
 */

import browserSync from 'browser-sync';
import config from '../config';

const server = (callback) => {
  browserSync.create().init({
      proxy: "Portfolio",
    files: [
      `${config.dest.html}/*.html`,
      `${config.dest.css}/*.css`,
      `${config.dest.js}/*.js`,
      {
        match: `${config.dest.images}/**/*`,
        fn() {
          this.reload();
        },
      },
    ],
    open: true,
    notify: false
  });

  callback();
};

export default server;





