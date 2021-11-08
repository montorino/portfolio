/**
 * Created by User on 010 10.06.21.
 */

export default (fn) => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fn)
    }
    else{
        fn();
    }
}