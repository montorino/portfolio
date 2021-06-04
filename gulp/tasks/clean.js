/**
 * Created by User on 022 22.05.21.
 */

import del from 'del';
import config from '../config';


const clean = ()=> del(config.dest.root);
export default clean;


