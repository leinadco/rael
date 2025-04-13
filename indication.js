import { oriImages } from "./images.js";
import { displayImages } from "./main_2_DisplayImages.js";
import { sunriseSunset } from "./dayNight.js";
import { displayIndication, updateSelect } from "./main_1_Indication.js";

//defining the function to convert the original images to arrays
export function objToArr(object, category = "all") {
    //takes object, the image array, and category to filter, as parameters
    const categories = []; //creating an empty array to store the categories
    const urls = []; //creating an empty array to store the urls

    //iterating through the original images
    Object.values(object).forEach((value) => {
        if (category === "all") {
            //if the category is "all", all the array is converted in arrays
            categories.push(value["category"]);
            urls.push(value["url"]);
        } else if (value["category"].includes(category)) {
            //if the category is not "all", only the filtered category is converted in arrays
            categories.push(value["category"]);
            urls.push(value["url"]);
        }
    });
    return [categories, urls]; //returning the categories and urls arrays
}

//defining the function to catch the visualized images in an object
function cathcVis() {
    const visualizedImg = document.querySelectorAll(".image");
    const visualizedImgLen = Number(Object.keys(visualizedImg).length);
    return [visualizedImg, visualizedImgLen];
}
//defining the function to get the min and max step, adapted for evry situation:
function getMinStep(event, visualizedImgLen) {
    let max = 0;
    let step = 0;
    let min = 0;
    let label = document.querySelector(".indication label").textContent; //getting the text content of the label
    let indexSlash = label.indexOf("/"); //getting the index of the slash for taking the left indication, min
    let indexBar = label.indexOf("-"); //getting the index of the bar for taking the right indication, max

    //defining step depending on the event or first load

    if (event !== "undefined" && event.target.tagName === "SELECT") {
        step = Number(event.target.value);
    } else {
        const select = document.querySelector(".indication select");
        step = Number(select.options[select.options.selectedIndex].value);
    }

    if (event !== "undefined" && event.target.tagName === "BUTTON") {
        //defining the min and max values from actual indications
        min = Number(label.slice(0, indexSlash));
        max = Number(label.slice(indexSlash + 1, indexBar));
        if (event.target.value === "+") {
            //changing the min and max values for the "more" button
            if (
                min == max ||
                max == visualizedImgLen ||
                min == visualizedImgLen
            ) {
                return;
            } else {
                min = Number(label.slice(0, indexSlash)) + step;
                max += step;
            }
        } else if (event.target.value === "-") {
            //changning the min and max values for the "less" button
            if ((max == visualizedImgLen && min < max) || min >= step) {
                min = min - step;
                max = step + min - 1;
            } else if (
                max == visualizedImgLen ||
                step >= visualizedImgLen ||
                (min <= 1 && min == visualizedImgLen) ||
                min == max
            ) {
                return;
            } else if (max > min && min > 1) {
                min = min - step;
                max -= step;
            } else {
                return;
            }
        }
    } else {
        //defining the min and max values for the first load and on step change
        min = 0;
        max = step;
    }
    displayIndication(min, max, visualizedImgLen, event); //calling the function to display the indication
    return [min, max]; //returning the min and max values
}
//defining the function to activate the images after first load/filtration/step change/more/less
function activateImg(visualizedImg, visualizedImgLen, min, max) {
    //iterating through the images to display only the images that are in the min-max range
    for (let i = 0; i < visualizedImgLen; i++) {
        if (i >= min - 1 && i < max) {
            visualizedImg[i].style.display = "inline-block";
        } else {
            visualizedImg[i].style.display = "none";
        }
    }
}

//defining the function that calls the function needed to activate the images, to call entire block when needed
export function activImg(event = "undefined") {
    //console.log(event.target.tagName);
    const [visualizedImg, visualizedImgLen] = cathcVis(); //calling the function to catch the visualized images
    const [min, max] = getMinStep(event, visualizedImgLen); //calling the function to get the min and max indexes from indication
    activateImg(visualizedImg, visualizedImgLen, min, max); //calling the function to activate the images with the min and max indexes
    updateSelect(event); //calling the function to update the selected option in both selects
}
//defining the function to filter the images
export function filterImages(event) {
    const activeElements = document.querySelector(".active");
    if (activeElements) {
        activeElements.classList.remove("active"); //removing the active class from the header
    }
    let category = "";
    if (event.target.tagName === "SPAN") {
        const parentElement = event.target.parentElement; //getting the parent element of the span
        parentElement.classList.add("active"); //removing the active class from the header
        category = parentElement.children[1].textContent.toLowerCase();
    } else if (event.target.tagName === "LI"){
        event.target.classList.add("active"); //removing the active class from the header
        category = event.target.children[1].textContent.toLowerCase();
    }
    const [categories, urls] = objToArr(oriImages, category); //converting the original immaeges to filtered arrays
    displayImages(categories, urls, 0); //displaying the filtered images
    activImg("undefined"); //activating the filtered images

    //deactivating the paragraphs if the category is not "all", just for design
    if (category !== "all") {
        const images = document.querySelectorAll(".image");
        images.forEach((element) => {
            element.removeChild(element.children[1]);
        });
    }
    sunriseSunset();
}

export function renderCategories(oriImages, header) {
    let nav = "<div><h1>Categories</h1>";
    nav += "<ul>"; //creating an empty string to store the categories
    //creating an empty array to store the categories
    const categories = []; //iterating through the original images
    const categoriesO = {};
    Object.values(oriImages).forEach((value) => {
        const oriCategories = value.category; //getting the categories from the original images
        // iterating through the categories
        for (let i = 0; i < oriCategories.length; i++) {
            //for loop for multiple categorie per image
            if (!Object.keys(categoriesO).includes(oriCategories[i])) {
                categoriesO[oriCategories[i]] = ["number:"];
                categoriesO[oriCategories[i]].push(1);
            } else {
                categoriesO[oriCategories[i]][1] = categoriesO[oriCategories[i]][1] + 1;
            }
            if (!categories.includes(oriCategories[i])) {
                categories.push(oriCategories[i]);
            }
        }
    });
    categories.sort(); //sorting categories
    categories.unshift("all"); //adding "all" to the categories
    for (let i = 0; i < categories.length; i++) {
        if (categories[i] === "all") {
            nav += `<li><span style="text-align:left;">${Object.keys(oriImages).length}</span><span style="text-align:right;">${categories[i].toUpperCase()}</span></li>`; //adding the categories to the unordered list
        } else {
            nav += `<li><span style="text-align:left;">${categoriesO[categories[i]][1]}</span><span style="text-align:right;">${categories[i].toUpperCase()}</span></li>`; //adding the categories to the unordered list
        }//adding the categories to the unordered list
    }
    nav += "</ul></div>"; //closing the unordered list
    header.innerHTML = nav; //adding the unordered list to the navigation
}
