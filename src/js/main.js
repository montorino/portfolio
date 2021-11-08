/**
 * Created by User on 022 22.05.21.
 */

import 'focus-visible';
import test from './modules/test';
import popupVideo from './modules/popupVideo';
import styleSwitcher from './modules/style-switcher';
import preloader from './modules/preloader';
import ajaxQuery from './modules/ajaxQuery';
import documentReady from './helpers/documentReady';

documentReady(()=>{

    test();
    ajaxQuery()
    popupVideo();
    styleSwitcher();
    preloader();
})





