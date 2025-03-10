export function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19
    const all = document.querySelectorAll("*");
    const bodyElement = document.querySelector("body");
    const navElement = document.querySelector("nav");
    const ulElement = document.querySelector("ul");
    const liElements = document.querySelectorAll("ul > li");
    const indiChildrenElements = document.querySelectorAll(".indiChild");
    const mainElement = document.querySelector("main");
    const imagesElements = document.querySelectorAll(".image");
    const footerElement = document.querySelector("footer");
    const h1Element = document.querySelector("footer");
    console.log(h1Element);

    if (isDay) {
        all.forEach((el) => (el.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

        navElement.classList.remove("navNight");
        navElement.classList.add("navDay");

        ulElement.classList.remove("ulNight");
        ulElement.classList.add("ulDay");

        liElements.forEach((element) => {
            element.classList.remove("liNight");
            element.classList.add("liDay");
        });

        indiChildrenElements.forEach((element) => {
            element.classList.remove("indiChildNight");
            element.classList.add("indiChildDay");
        });

        mainElement.classList.remove("mainNight");
        mainElement.classList.add("mainDay");

        imagesElements.forEach((element) => {
            element.classList.remove("imageNight");
            element.classList.add("imageDay");
        });

        footerElement.classList.remove("footerNight");
        footerElement.classList.add("footerDay");

        h1Element.classList.remove("h1Night");
        h1Element.classList.add("h1Day");
    } else {
        all.forEach((el) => (el.style.color = "white"));

        bodyElement.classList.remove("bodyDay");
        bodyElement.classList.add("bodyNight");

        navElement.classList.remove("navDay");
        navElement.classList.add("navNight");

        ulElement.classList.remove("ulDay");
        ulElement.classList.add("ulNight");

        liElements.forEach((element) => {
            element.classList.remove("liDay");
            element.classList.add("liNight");
        });

        indiChildrenElements.forEach((element) => {
            element.classList.remove("imageDay");
            element.classList.add("indiChildNight");
        });

        mainElement.classList.remove("mainDay");
        mainElement.classList.add("mainNight");

        imagesElements.forEach((element) => {
            element.classList.remove("lightImage");
            element.classList.add("imageNight");
        });

        footerElement.classList.remove("footerDay");
        footerElement.classList.add("footerNight");

        //h1Element.classList.remove("h1Day");
        h1Element.classList.add("h1Night");
    }
}
export default sunriseSunset;