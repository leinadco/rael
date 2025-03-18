import { createIFrame } from "./main_3_OpenImage.js";
/*
--Use DOM (document.createElement)
-Faster fo dynamic content
-Safer (less security problems, ex. innerHTML can introduce XSS)
-Allows adding event listeners direct on elements
-More efficient with a lot of images
-avoid the reconstruction of the entire DOM like it is with inner HTML

--Use innerHTML
-If you want to write faster and easier code
-Easier to implement
-More efficient for big content changes
-Less performant
*/
//defining the function to create the image tag
function createImg(url, category) {
    const img = document.createElement("img"); //creating the image tag
    img.addEventListener("click", createIFrame);
    img.src = url; //setting the source of the image
    img.alt = category; //setting the alt of the image
    img.loading = "lazy"; //setting the loading of the image, to load faster

    return img; //returning the image
}
//defining the function to create the paragraph tag
function createPar(categories) {
    const p = document.createElement("p"); //creating the paragraph tag
    p.classList.add("category"); //adding the class "category" to the paragraph

    //checking if the category has more than one element
    if (categories.length >= 2) {
        p.textContent = categories.map((c) => c.toUpperCase()).join(", "); //if the category has more than one element, the categories are joined by a comma
    } else {
        p.textContent = categories[0].toUpperCase(); //if the category has only one element, the category is displayed
    }

    return p; //returning the paragraph
}
//defining the function to create the div with image and paragraph
function createDivImg(url, category) {
    const div = document.createElement("div"); //creating the div in wich the image and paragraph will be added
    div.classList.add("image"); //adding the class "image" to the div

    const img = createImg(url, category); //creating the image calling the function
    const p = createPar(category); //creating the paragraph calling the function

    div.appendChild(img); //adding the image to the div
    div.appendChild(p); //adding the paragraph to the div

    return div; //returning the div to be added to the container
}
//defining the function to add images to div container
export function displayImages(categories, urls) {
    const containerImg = document.querySelector(".container"); //selecting the container div
    containerImg.innerHTML = ""; //Deleting the inner HTML of the container, avoid double images

    //iterating through the categories and urls to add the images to the container
    if (categories.length === urls.length) {
        //this if is a verification
        for (let i = 0; i < categories.length; i++) {
            containerImg.appendChild(createDivImg(urls[i], categories[i])); //adding the images to the container
        }
    }
}