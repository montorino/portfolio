/**
 * Created by User on 010 10.10.21.
 */

export default () => {
    let color;
    let links = document.querySelectorAll(".link-item");

    const styleToggler = document.querySelector(".style-toggler");

    const colorButtons = document.querySelectorAll(".colors span");

    const changeColor = (e) => {

        links.forEach((link) => {
            if (link.className.match(/color-\d?/)) {
                link.className = link.className.replace(/color-\d?/g, '')
            }
            link.classList.add(e.target.className);

            color = link.className.match(/color-\d?/)[0];

        });
    }

    const setColor = (color)=>{
        links.forEach((link) => {
            link.classList.add(color);

        });
    }

    window.addEventListener("load", () => {
        if (localStorage.getItem("color")){
            setColor(localStorage.getItem("color"));
        }
    });

    colorButtons.forEach((item) => {
        item.addEventListener("click", (e) => {
            changeColor(e);
            localStorage.setItem("color", color);
            document.querySelector(".style-switcher").classList.remove("open");
        })
    });


    styleToggler.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    })
    window.addEventListener("scroll", () => {
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    });

    const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener("click", () => {
        dayNight.querySelector(("i")).classList.toggle("fa-sun");
        dayNight.querySelector(("i")).classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    });

    window.addEventListener("load", () => {
        if (document.body.classList.contains("dark")) {
            dayNight.querySelector(("i")).classList.add("fa-sun");
        }
        else {
            dayNight.querySelector(("i")).classList.add("fa-moon");
        }
    });


}