console.clear();
import { oriImages } from "./images.js";
import { sunriseSunset } from "./dayNight.js";
import { filterImages, activImg, objToArr, renderCategories } from "./indication.js";
import { renderIndication } from "./main_1_Indication.js";
import { displayImages } from "./main_2_DisplayImages.js";
import { renderFooter } from "./footer.js";

//defining function to display the navigation categories
function start(oriImages) {
    //takes original images as parameter
    //using try-catch to catch errors

    //header
    const header = document.querySelector("nav"); //selecting the navigation element
    try {
        renderCategories(oriImages, header);
        const allActive = document.querySelector("nav li"); //selecting the indication div
        allActive.classList.add("active"); //adding the active class to the first element
    } catch (error) {
        header.innerHTML = `<h1 style="padding:10px;">Navigation add error: ${error}</h1>`; //displaying the error
    }
    // adding event listener to the list items
    const li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", filterImages);
    }

    //main
    try {
        renderIndication(); //calling the function to display navigation indication
    } catch (error) {
        const indication = document.querySelectorAll(".indication"); //selecting the indication div
        indication.forEach((element) => {
            element.innerHTML = `<h1 style="padding:10px;">Indication add error: ${error}</h1>`; //displaying the error
        });
    }
    try {
        const [categories, urls] = objToArr(oriImages); //converting the original images to array
        displayImages(categories, urls); //displaying the images with function
        activImg("undefined"); //activating all the images at first load
    } catch (error) {
        const container = document.querySelector(".container"); //selecting the container div
        container.innerHTML = `<h1 style="padding:10px;">Images add error: ${error}</h1>`; //displaying the error
    }

    //footer
    const footer = document.querySelector("footer"); //selecting the footer element
    let div = document.createElement("div");
    try {
        div = renderFooter(div);
        footer.appendChild(div);
        sunriseSunset(); //for first load
    } catch (error) {
        footer.innerHTML = `<h1 style="padding:10px;">Footer add error: ${error}</h1>`; //displaying the error
    }
}

//calling the function to display the navigation categories, that will call all the other functions, at first load of the page
start(oriImages); //first load of the page
//calling the function to change day/night mode, "needed" after every xs)
//setInterval(sunriseSunset,0);
