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
    const servicesButtonSecond = document.querySelector('.services-button.lawng');
    const servicesButtonThird = document.querySelector('.services-button.planting');
    const blurItemPlants = document.querySelectorAll(".plants");
    const blurItemSecondPlants = document.querySelectorAll("service-item-second.plants");
    const blurItemGarden = document.querySelectorAll(".gardens");
    const blurItemSecondGarden = document.querySelectorAll("service-item-second.gardens");
    const blurItemLawn = document.querySelectorAll(".lawn");

    
     servicesButtonFirst.addEventListener("click", (event) => {
        servicesButtonFirst.classList.toggle("services-button_activ");
        blurItemPlants.forEach((el) => {
            el.classList.toggle("service-item_blur");
        })
        blurItemSecondPlants.forEach((el) => {
            el.classList.toggle("service-item-second_blur");
        })
        blurItemLawn.forEach((el) => {
            el.classList.toggle("service-item_blur")
        })
    })

    servicesButtonSecond.addEventListener("click", (event) => {
        servicesButtonSecond.classList.toggle("services-button_activ");
        blurItemPlants.forEach((el) => {
            el.classList.toggle("service-item_blur");
        })
        blurItemSecondPlants.forEach((el) => {
            el.classList.toggle("service-item-second_blur");
        })
        blurItemGarden.forEach((el) => {
            el.classList.toggle("service-item_blur")
        })
        blurItemSecondGarden.forEach((el) => {
            el.classList.toggle("service-item-second_blur");
        })
    })

    servicesButtonThird.addEventListener("click", (event) => {
        servicesButtonThird.classList.toggle("services-button_activ");
        blurItemGarden.forEach((el) => {
            el.classList.toggle("service-item_blur");
        })
        blurItemSecondGarden.forEach((el) => {
            el.classList.toggle("service-item-second_blur");
        })
        blurItemLawn.forEach((el) => {
            el.classList.toggle("service-item_blur")
        })
    })

}());