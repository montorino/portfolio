/**
 * Created by User on 001 01.07.21.
 */



export default () => {

    let menuItems = document.querySelectorAll('.header__menu-item');

   menuItems.forEach(item =>{

       item.addEventListener('click', (e) =>{
           e.preventDefault();
           let items = document.querySelectorAll('.header__menu-item');
           items.forEach(it => {
               it.classList.remove('active');
           })

           e.target.parentNode.classList.add('active');
       });
   })


}

