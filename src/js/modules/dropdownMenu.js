/**
 * Created by User on 017 17.06.21.
 */

export default () => {
    let menus = document.querySelectorAll('.header__menu-item')

    menus.forEach((item)=>{

        if(item.children[1]) {

            item.addEventListener('mouseover', () => {
                item.children[1].style.display = 'block';
            });

            item.addEventListener('mouseleave', () => {
                item.children[1].style.display = 'none';
            })
        }

    })
}
