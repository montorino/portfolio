/**
 * Created by User on 010 10.06.21.
 */

import LazyLoad from 'vanilla-lazyload';
import canUseWebp from '../helpers/canUseWebp';

export default () => {

    if (canUseWebp() === false) {
        const lazyBgItems = document.querySelectorAll('.lazy[data-bg-fallback]');

        lazyBgItems.forEach((item) => {
            const srcBgFallback = item.getAttribute('data-bg-fallback');
            item.setAttribute('data-bg', srcBgFallback)
            console.log(srcBgFallback);
        });
    }

    const LazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
    })
};