/**
 * Created by User on 010 10.06.21.
 */

export default () => {
    const elem = document.createElement('canvas');
    if(elem.getContext && elem.getContext('2d')){
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
}