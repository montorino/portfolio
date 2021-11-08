/**
 * Created by User on 012 12.10.21.
 */


export default () => {
    window.addEventListener("load", () => {
        document.querySelector(".preloader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none";
        }, 1500);
    });

}