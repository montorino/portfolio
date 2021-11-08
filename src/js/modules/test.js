/**
 * Created by User on 012 12.09.21.
 */



export default () => {

    //------------------ navigation menu ---------------//
    (() => {
        const hamburgerBtn = document.querySelector(".hamburger-btn"),
            navMenu = document.querySelector(".nav-menu"),
            closeNavBtn = navMenu.querySelector(".close-nav-menu");
        const fadeOutEffect = () => {
            setTimeout(() => {
                document.querySelector(".fade-out-effect").classList.remove("active");
            }, 300);
        }

        hamburgerBtn.addEventListener("click", () => {
            navMenu.classList.add("open");
            document.querySelector(".fade-out-effect").classList.add("active");
            bodyScrollingToggle();
        });

        closeNavBtn.addEventListener("click", () => {
            navMenu.classList.remove("open");
            bodyScrollingToggle();
        });

        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("link-item")) {
                if (e.target.hash !== "") {
                    e.preventDefault();
                    const hash = e.target.hash;
                    document.querySelector(".section.active").classList.add("hide");
                    document.querySelector(".section.active").classList.remove("active");
                    document.querySelector(hash).classList.add("active");
                    document.querySelector(hash).classList.remove("hide");
                    navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                    navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                    if (navMenu.classList.contains("open")) {
                        e.target.classList.add("active", "inner-shadow");
                        e.target.classList.remove("outer-shadow", "hover-in-shadow");
                        navMenu.classList.remove("open");
                        bodyScrollingToggle();
                    }
                    else {
                        let navItems = navMenu.querySelectorAll(".link-item");
                        navItems.forEach((item) => {
                            if (hash === item.hash) {
                                item.classList.add("active", "inner-shadow");
                                item.classList.remove("outer-shadow", "hover-in-shadow");
                            }
                        });
                        fadeOutEffect();
                    }

                }
            }
        })

    })();

//-------------------- set Active class ------------------//
    (() => {
        const aboutSection = document.querySelector('.about-section'),
            tabsContainer = document.querySelector('.about-tabs')


        tabsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
                const target = e.target.getAttribute("data-target");
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                e.target.classList.add("active", "outer-shadow");
                aboutSection.querySelector(".tab-content.active").classList.remove('active');
                aboutSection.querySelector(target).classList.add("active");
            }
        })
    })();


    ///-------------portfolio---------------------////

    const bodyScrollingToggle = () => {
        document.body.classList.toggle("stop-scrolling");
    }


    (() => {
        let filterContainer = document.querySelector('.filter-portfolio');
        let portfolioItemsContainer = document.querySelector('.portfolio-items'),
            portfolioItems = document.querySelectorAll('.portfolio-item'),
            popup = document.querySelector('.portfolio-popup');
        let itemIndex, slideIndex, screenshots;


        //---------filter portfolio-----------//

        filterContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-item") && !e.target.classList.contains("active")) {
                filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                e.target.classList.add("active", "outer-shadow");
                const target = e.target.getAttribute("data-target");
                portfolioItems.forEach((item) => {
                    if (target === item.getAttribute("data-category") || target === "all") {
                        item.classList.remove("hide");
                        item.classList.add("show");
                    }
                    else {
                        item.classList.remove("show");
                        item.classList.add("hide");
                    }
                })
            }

        })


    })();


    //-----------hide all sections except active-----------------//

    (() => {
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
            if (!section.classList.contains("active")) {
                section.classList.add("hide");
            }
        });
    })();
};

    