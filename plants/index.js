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
    /*let checkerG = false;
    servicesButtonFirst.onclick = () => checkerG = true;
    if (checkerG === true){
        console.log('check');
    } else {*/
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

//accordion
(function () {
    const AccordionItem = document.querySelectorAll(".accordion_header")
    const AccordionItem2 = document.querySelectorAll(".accordion_header2")
    const AccordionItem3 = document.querySelectorAll(".accordion_header3")
    const AccordionBody = document.querySelector(".price_item1")
    const AccordionBody2 = document.querySelector(".price_item2")
    const AccordionBody3 = document.querySelector(".price_item3")
    AccordionItem.forEach((el) => {
        el.addEventListener("click", (event) => {
    

    AccordionBody.classList.toggle("accordion_item_show")
    AccordionBody2.classList.remove("accordion_item_show")
    AccordionBody3.classList.remove("accordion_item_show")
    })
    })

    AccordionItem2.forEach((el) => {
        el.addEventListener("click", (event) => {
    

    AccordionBody2.classList.toggle("accordion_item_show")
    AccordionBody.classList.remove("accordion_item_show")
    AccordionBody3.classList.remove("accordion_item_show")
    })
    })

    AccordionItem3.forEach((el) => {
        el.addEventListener("click", (event) => {
    

    AccordionBody3.classList.toggle("accordion_item_show")
    AccordionBody.classList.remove("accordion_item_show")
    AccordionBody2.classList.remove("accordion_item_show")
    })
    })

}());

/*(function () {
    document.querySelector(".price_item1").classList.add("accordion_item_show")
    document.querySelectorAll(".price_item1").forEach((sec) =>{
        sec.addEventListener("click", (event) => {
            console.log(1)
                document.querySelectorAll(".price_item1").forEach((el) => {
                    el.classList.removed("accordion_item_show")
                })
        })
    })
})*/
