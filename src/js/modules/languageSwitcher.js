/**
 * Created by User on 018 18.06.21.
 */

export default () => {
    let lang = document.querySelector('.header__language')
    let additionalLang = document.querySelector('.header__language-body')

    lang.addEventListener('mouseover', ()=>{
        additionalLang.style.display = 'block';
        });

    lang.addEventListener('mouseleave', ()=>{
        additionalLang.style.display = 'none';
        })


}