/**
 * Created by User on 012 12.09.21.
 */



export default () => {

    const accordion = document.querySelectorAll('.content-box');

    accordion.forEach(function (item) {
        item.addEventListener('click', (e) =>{
            item.classList.toggle('active');
    })
    })



};


    