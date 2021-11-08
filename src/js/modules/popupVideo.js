/**
 * Created by User on 014 14.10.21.
 */

export default () => {

    let portfolioItemsContainer = document.querySelector('.portfolio-items'),
        portfolioItems = document.querySelectorAll('.portfolio-item');
    let itemIndex, videoWindow, openPopup, closePopup;
    let html = document.querySelector('html');
    let srcIFrame;
    let srcVideo, video;


    portfolioItemsContainer.addEventListener('mouseover', (e) => {
        if (e.target.closest(".portfolio-item-inner")) {
            const portfolioItem = e.target.closest(".portfolio-item-inner").parentElement;
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            videoWindow = portfolioItems[itemIndex].querySelector(".popup-bg");
            openPopup = portfolioItems[itemIndex].querySelector(".popup-open");
            closePopup = portfolioItems[itemIndex].querySelector(".popup-close");
            video = portfolioItems[itemIndex].querySelector("video");

        }

        openPopup.addEventListener('click', (e) => {
            e.preventDefault();
            videoWindow.classList.remove('hide');
            html.classList.add('no-scroll');
        });

        closePopup.addEventListener('click', (e) => {
            e.preventDefault();
            video = e.target.closest(".portfolio-item").querySelector("video");
            videoWindow.classList.add('hide');
            html.classList.remove('no-scroll');
            if (video != null) {
                video.pause();
                video.currentTime = 0;
            }

        });

    })

}