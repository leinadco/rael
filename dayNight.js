export function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19

    const all = document.querySelectorAll("*");

    const bodyElement = document.querySelector("body");

    const indicationElement = document.querySelectorAll(".indication");
    const indiChildrenElements = document.querySelectorAll(".indiChild");

    const biggerElement = document.querySelector("#biggerImage");

    const imagesElements = document.querySelectorAll(".image");

    const footerElement = document.querySelector("footer");
    const divElement = document.querySelector("footer div");
    

    if (isDay) {
        all.forEach(element => (element.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

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
