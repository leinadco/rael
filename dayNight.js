export function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19

    const all = document.querySelectorAll("*");

    const bodyElement = document.querySelector("body");

    const headerElement = document.querySelector("header");

    const indicationElement = document.querySelectorAll(".indication");
    const indiChildrenElements = document.querySelectorAll(".indiChild");

    const biggerElement = document.querySelector("#biggerImage");

    const mainElement = document.querySelector("main");
    const imagesElements = document.querySelectorAll(".image");

    const footerElement = document.querySelector("footer");
    const divElement = document.querySelector("footer div");
    

    if (isDay) {
        all.forEach(element => (element.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

        headerElement.classList.remove("headerNight");
        headerElement.classList.add("headerDay");

        indicationElement.forEach(element => {
            element.classList.remove("indicationNight");
            element.classList.add("indicationDay");
        })

        indiChildrenElements.forEach(element => {
            element.classList.remove("indiChildNight");
            element.classList.add("indiChildDay");
        });

        biggerElement.classList.remove("biggerImageNight");
        biggerElement.classList.add("biggerImageDay");

        mainElement.classList.remove("mainNight");
        mainElement.classList.add("mainDay");

        imagesElements.forEach(element => {
            element.classList.remove("imageNight");
            element.classList.add("imageDay");
        });

        footerElement.classList.remove("footerNight");
        footerElement.classList.add("footerDay");

        divElement.classList.remove("divNight");
        divElement.classList.add("divDay");
    } else {
        all.forEach(element => (element.style.color = "white"));

        bodyElement.classList.remove("bodyDay");
        bodyElement.classList.add("bodyNight");

        headerElement.classList.remove("headerDay");
        headerElement.classList.add("headerNight");

        indicationElement.forEach(element => {
            element.classList.remove("indicationDay");
            element.classList.add("indicationNight");
        })

        indiChildrenElements.forEach(element => {
            element.classList.remove("imageDay");
            element.classList.add("indiChildNight");
        });

        biggerElement.classList.remove("biggerImageDay");
        biggerElement.classList.add("biggerImageNight");

        mainElement.classList.remove("mainDay");
        mainElement.classList.add("mainNight");

        imagesElements.forEach(element => {
            element.classList.remove("lightImage");
            element.classList.add("imageNight");
        });

        footerElement.classList.remove("footerDay");
        footerElement.classList.add("footerNight");

        divElement.classList.remove("divDay");
        divElement.classList.add("divNight");
    }
}
