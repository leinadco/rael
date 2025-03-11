export function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19

    const all = document.querySelectorAll("*");

    const bodyElement = document.querySelector("body");

    const headerElement = document.querySelector("header");
    const navElement = document.querySelector("nav");
    const ulElement = document.querySelector("ul");
    const liElements = document.querySelectorAll("ul > li");

    const indicationElement = document.querySelectorAll(".indication");
    const indiChildrenElements = document.querySelectorAll(".indiChild");

    const mainElement = document.querySelector("main");
    const imagesElements = document.querySelectorAll(".image");

    const footerElement = document.querySelector("footer");
    const h1Element = document.querySelector("h1");
    

    if (isDay) {
        all.forEach(element => (element.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

        headerElement.classList.remove("headerNight");
        headerElement.classList.add("headerDay");

        navElement.classList.remove("navNight");
        navElement.classList.add("navDay");

        ulElement.classList.remove("ulNight");
        ulElement.classList.add("ulDay");

        liElements.forEach(element => {
            element.classList.remove("liNight");
            element.classList.add("liDay");
        });

        indicationElement.forEach(element => {
            element.classList.remove("indicationNight");
            element.classList.add("indicationDay");
        })

        indiChildrenElements.forEach(element => {
            element.classList.remove("indiChildNight");
            element.classList.add("indiChildDay");
        });

        mainElement.classList.remove("mainNight");
        mainElement.classList.add("mainDay");

        imagesElements.forEach(element => {
            element.classList.remove("imageNight");
            element.classList.add("imageDay");
        });

        footerElement.classList.remove("footerNight");
        footerElement.classList.add("footerDay");

        h1Element.classList.remove("h1Night");
        h1Element.classList.add("h1Day");
    } else {
        all.forEach(element => (element.style.color = "white"));

        bodyElement.classList.remove("bodyDay");
        bodyElement.classList.add("bodyNight");

        headerElement.classList.remove("headerDay");
        headerElement.classList.add("headerNight");

        navElement.classList.remove("navDay");
        navElement.classList.add("navNight");

        ulElement.classList.remove("ulDay");
        ulElement.classList.add("ulNight");

        liElements.forEach(element => {
            element.classList.remove("liDay");
            element.classList.add("liNight");
        });

        indicationElement.forEach(element => {
            element.classList.remove("indicationDay");
            element.classList.add("indicationNight");
        })

        indiChildrenElements.forEach(element => {
            element.classList.remove("imageDay");
            element.classList.add("indiChildNight");
        });

        mainElement.classList.remove("mainDay");
        mainElement.classList.add("mainNight");

        imagesElements.forEach(element => {
            element.classList.remove("lightImage");
            element.classList.add("imageNight");
        });

        footerElement.classList.remove("footerDay");
        footerElement.classList.add("footerNight");

        h1Element.classList.remove("h1Day");
        h1Element.classList.add("h1Night");
    }
}
export default sunriseSunset;