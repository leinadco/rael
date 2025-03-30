export function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19

    const all = document.querySelectorAll("*");

    const bodyElement = document.querySelector("body");

    if (isDay) {
        all.forEach(element => (element.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

    } else {
        all.forEach(element => (element.style.color = "white"));

        bodyElement.classList.remove("bodyDay");
        bodyElement.classList.add("bodyNight");

    }
}
