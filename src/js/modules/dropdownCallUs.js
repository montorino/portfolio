/**
 * Created by User on 025 25.06.21.
 */

export default () => {
    let callBtnHeader = document.querySelector('.header__phone')
    let departments = document.querySelector('.header__phone-dropdown')

    callBtnHeader.addEventListener('click', ()=>{

        console.log(window.getComputedStyle(departments).display);

        if(window.getComputedStyle(departments).display == 'block'){
            departments.style.display = 'none';
        }
        else{
            departments.style.display = 'block';
        }
    });

}