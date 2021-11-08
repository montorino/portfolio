/**
 * Created by User on 025 25.06.21.
 */




export default () => {
    let position = document.documentElement;

    position.addEventListener('mousemove', e => {
        position.style.setProperty('--x', e.clientX + 'px');
})


}



