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

//services plus blur
(function () {
    const servicesButtonFirst = document.querySelector('.services-button.garden');
    const blurItemPlants = document.querySelectorAll(".plants");
    const blurItemSecondPlants = document.querySelectorAll("service-item-second.plants");
    //const blurItemPlants = document.querySelector("services-button.plants");
    const blurItemLawn = document.querySelectorAll(".lawn");

    if (servicesButtonFirst.classList.contains('services-button_activ')) {
        servicesButtonFirst.classList.remove('services-button_activ');
    } else {
     servicesButtonFirst.addEventListener("click", (event) => {
        servicesButtonFirst.classList.add("services-button_activ");
        blurItemPlants.forEach((el) => {
            el.classList.add("service-item_blur");
        })
        blurItemSecondPlants.forEach((el) => {
            el.classList.add("service-item-second_blur");
        })
        blurItemLawn.forEach((el) => {
            el.classList.add("service-item_blur")
        })

        console.log(event)
    })
}

}());