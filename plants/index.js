(function () {
    const burgerItem = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav");
    const menuClose = document.querySelector(".header_nav_close");
    const menuLinks = document.querySelectorAll(".nav-link");
    burgerItem.addEventListener("click", () => {
        menu.classList.add("nav_activ");
        })
    menuClose.addEventListener("click", () => {
        menu.classList.remove("nav_activ");
    });
    if (window.innerWidth <= 780) {
        for (i=0; i<=menuLinks.length; i ++) {
            menuLinks[i].addEventListener("click", () => {
                menu.classList.remove("nav_activ");
            })
        }
    }
}());