console.clear();
//defining the original images
/*const oriImages = {
    1: {
        category: ["moon"],
        url: "Images/20221109_215055.jpg",
    },
    2: {
        category: ["special light"],
        url: "Images/20221122_155501.jpg",
    },
    3: {
        category: ["lamp"],
        url: "Images/20221124_202624.jpg",
    },
    4: {
        category: ["traffic"],
        url: "Images/20230214_084410.jpg",
    },
    5: {
        category: ["sunset"],
        url: "Images/20230220_181153.jpg",
    },
    6: {
        category: ["sunset"],
        url: "Images/20230307_064012.jpg",
    },
    7: {
        category: ["casual"],
        url: "Images/20230307_070157.jpg",
    },
    8: {
        category: ["moon"],
        url: "Images/20230307_215043.jpg",
    },
    9: {
        category: ["monument"],
        url: "Images/20230309_143234.jpg",
    },
    10: {
        category: ["lamp"],
        url: "Images/20230325_223427.jpg",
    },
    11: {
        category: ["traffic", "rain"],
        url: "Images/20230404_185950.jpg",
    },
    12: {
        category: ["sky"],
        url: "Images/20230406_174623.jpg",
    },
    13: {
        category: ["monument"],
        url: "Images/20230409_121303.jpg",
    },
    14: {
        category: ["monument"],
        url: "Images/20230409_123016.jpg",
    },
    15: {
        category: ["sky"],
        url: "Images/20230413_140553.jpg",
    },
    16: {
        category: ["sky"],
        url: "Images/20230413_142036.jpg",
    },
    17: {
        category: ["nature"],
        url: "Images/20230505_212349.jpg",
    },
    18: {
        category: ["nature"],
        url: "Images/20230506_204859.jpg",
    },
    19: {
        category: ["good view"],
        url: "Images/20230506_205601.jpg",
    },
    20: {
        category: ["sky"],
        url: "Images/20230514_154134.jpg",
    },
    21: {
        category: ["nature"],
        url: "Images/20230514_205309.jpg",
    },
    22: {
        category: ["nature"],
        url: "Images/20230515_202543.jpg",
    },
    23: {
        category: ["sky"],
        url: "Images/20230526_204219.jpg",
    },
    24: {
        category: ["nature"],
        url: "Images/20230527_151438.jpg",
    },
    25: {
        category: ["colorful"],
        url: "Images/20230601_150558.jpg",
    },
    26: {
        category: ["nature"],
        url: "Images/20230601_153745.jpg",
    },
    27: {
        category: ["love"],
        url: "Images/20230603_101411.jpg",
    },
    28: {
        category: ["love"],
        url: "Images/20230603_101437.jpg",
    },
    29: {
        category: ["sunrise"],
        url: "Images/20230622_064034.jpg",
    },
    30: {
        category: ["nature", "colorful"],
        url: "Images/20230628_202232.jpg",
    },
    31: {
        category: ["casual"],
        url: "Images/20230727_201136.jpg",
    },
    32: {
        category: ["good view"],
        url: "Images/20230730_200544.jpg",
    },
    33: {
        category: ["night light"],
        url: "Images/20230730_203124.jpg",
    },
    34: {
        category: ["night light"],
        url: "Images/20230730_203124_remastered.jpg",
    },
    35: {
        category: ["night light"],
        url: "Images/20230730_214605.jpg",
    },
    36: {
        category: ["sky"],
        url: "Images/20230731_112052.jpg",
    },
    37: {
        category: ["moon"],
        url: "Images/20230801_214152.jpg",
    },
    38: {
        category: ["sky"],
        url: "Images/20230810_113149.jpg",
    },
    39: {
        category: ["monument"],
        url: "Images/20230811_140302.jpg",
    },
    40: {
        category: ["sunset"],
        url: "Images/20230812_193938.jpg",
    },
    41: {
        category: ["traffic", "city"],
        url: "Images/20230907_193721.jpg",
    },
    42: {
        category: ["monument"],
        url: "Images/20230907_195802.jpg",
    },
    43: {
        category: ["monument"],
        url: "Images/20230907_195852.jpg",
    },
    44: {
        category: ["night light", "nature"],
        url: "Images/20230907_200928.jpg",
    },
    45: {
        category: ["monument", "sky"],
        url: "Images/20230921_125618.jpg",
    },
    46: {
        category: ["nature"],
        url: "Images/20231011_133040.jpg",
    },
    47: {
        category: ["traffic", "sunset"],
        url: "Images/20231019_172705.jpg",
    },
    48: {
        category: ["sky"],
        url: "Images/20231120_105258.jpg",
    },
    49: {
        category: ["sky", "traffic", "sunset"],
        url: "Images/20231123_155639.jpg",
    },
    50: {
        category: ["nature", "fall"],
        url: "Images/20231126_114316.jpg",
    },
    51: {
        category: ["nature"],
        url: "Images/20231126_114333.jpg",
    },
    52: {
        category: ["nature"],
        url: "Images/20231201_163458.jpg",
    },
    53: {
        category: ["traffic"],
        url: "Images/20231201_204914.jpg",
    },
    54: {
        category: ["monument", "snow"],
        url: "Images/20231207_125214.jpg",
    },
    55: {
        category: ["sky"],
        url: "Images/20231207_155657.jpg",
    },
    56: {
        category: ["sky", "city"],
        url: "Images/20231207_170734.jpg",
    },
    57: {
        category: ["traffic", "rain"],
        url: "Images/20231210_131242.jpg",
    },
    58: {
        category: ["sky", "sunset"],
        url: "Images/20240206_071427.jpg",
    },
    59: {
        category: ["city", "sky"],
        url: "Images/20240219_181213.jpg",
    },
    60: {
        category: ["coffee"],
        url: "Images/20240301_072329.jpg",
    },
};*/
import { oriImages } from './images.js'; // sau numele fișierului unde ai definit oriImages

//defining the function to render the navigation indication
function renderIndication() {
    const indicationCont = document.querySelectorAll(".indication"); //selecting the indication divs
    const options = [5, 10, 20, 40, 80, 160, 320]; //defining the options for the select
    const slectedOption = 10; //defining the selected option
    //defining the indication buttons and select like strings

    let indication =
        '<button class="less indiChild" value="-">Less</button>' +
        '<label class="indiChild"></label>' +
        '<select id="selection" class="indiChild">'; //creating the select with the onchange event

    //iterating through the options to render
    options.forEach((option) => {
        if (option === slectedOption) {
            indication += `<option value="${option}" selected>${option}</option>`;
        } else {
            indication += `<option value="${option}">${option}</option>`;
        }
    });
    //closing the select and adding the "more" button
    indication += '</select><button class="more indiChild" value="+">More</button>';

    //adding the indication to the divs
    indicationCont.forEach((element) => {
        element.innerHTML = indication;
    });

    //adding event listeners to the buttons elements, this because the events are ignored with the innerHTML
    const buttons = document.querySelectorAll(".indication button");
    buttons.forEach((button) => {
        button.addEventListener("click", activImg);
    });
    //adding event listeners to the selects Elements, this because the events are ignored with the innerHTML
    const selects = document.querySelectorAll(".indication select");
    selects.forEach((select) => {
        select.addEventListener("click", activImg);
    });
}
//defining the function to convert the original images to arrays
function objToArr(object, category = "all") {
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
function displayImages(categories, urls) {
    const containerImg = document.querySelector(".container"); //selecting the container div
    containerImg.innerHTML = ""; //Deleting the inner HTML of the container, avoid double images

    //iterating through the categories and urls to add the images to the container
    if (categories.length === urls.length) {
        //this if is a verification
        for (let i = 0; i < categories.length; i++) {
            containerImg.appendChild(createDivImg(urls[i], categories[i])); //adding the images to the container
        }
    }
    sunriseSunset(); //calling the function to change day/night mode, "needed" after every image change
}
//defining the function to display the indications
function displayIndication(min, max, total) {
    //a lot of if-else to display the indication in the right way, depending on the min, max and total
    //after thinking all the combinations that could occure and could bring the wrong indication
    document.querySelectorAll(".indication label").forEach((element) => {
        if (min == 0 && max == total) {
            element.textContent = `${total}/${total}`;
        } else if (min == total && max == total) {
            element.textContent = `${total}/${total}`;
        } else if (total < max && min == 0) {
            element.textContent = `${total}/${total}`;
        } else if (total < max) {
            element.textContent = `${min}/${total} - ${total}`;
        } else if (min == 0) {
            element.textContent = `${min + 1}/${max} - ${total}`;
        } else {
            element.textContent = `${min}/${max} - ${total}`;
        }
    });
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
//defining the function to update the selected option in both selects, after a change of the selecte option in the dropdown list
function updateSelect(event) {
    //verififing if the event is not undefined and the target is the select, to avoid errors
    if (event !== "undefined" && event.target.id === "selection") {
        let step = Number(event.target.value); //obtaining the selected value from the event
        const selects = document.querySelectorAll(".indication select"); //selecting the selects

        //using try-catch to catch errors
        try {
            selects.forEach((element) => {
                element.value = step; //setting the value of both selects to the selected option
            });
        } catch (error) {
            console.log("Select catch: " + error);
        }
    }
}
//defining the function that calls the function needed to activate the images, to call entire block when needed
function activImg(event = "undefined") {
    
    //console.log(event.target.tagName);
    const [visualizedImg, visualizedImgLen] = cathcVis(); //calling the function to catch the visualized images
    const [min, max] = getMinStep(event, visualizedImgLen); //calling the function to get the min and max indexes from indication
    activateImg(visualizedImg, visualizedImgLen, min, max); //calling the function to activate the images with the min and max indexes
    updateSelect(event); //calling the function to update the selected option in both selects
}
//defining the function to filter the images
function filterImages(event) {
    //takes event paramenter
    const category = event.target.textContent.toLowerCase(); //getting the category clicked
    const [categories, urls] = objToArr(oriImages, category); //converting the original immaeges to filtered arrays
    displayImages(categories, urls); //displaying the filtered images
    activImg("undefined"); //activating the filtered images

    //deactivating the paragraphs if the category is not "all", just for design
    if (category !== "all") {
        const images = document.querySelectorAll(".image");
        images.forEach((element) => {
            element.removeChild(element.children[1]);
        });
    }
}
function sunriseSunset() {
    const hour = new Date().getHours(); //getting the current hour
    const isDay = hour >= 7 && hour < 19; //setting day to true if the hour is between 7 and 19
    const all = document.querySelectorAll("*");
    const bodyElement = document.querySelector("body");
    const navElement = document.querySelector("nav");
    const liElements = document.querySelectorAll("ul > li");
    const indiChildrenElements = document.querySelectorAll(".indiChild");
    const imagesElements = document.querySelectorAll(".image");
    
    if (isDay) {
        all.forEach((el) => (el.style.color = "black"));

        bodyElement.classList.remove("bodyNight");
        bodyElement.classList.add("bodyDay");

        navElement.classList.remove("navNight");
        navElement.classList.add("navDay");

        liElements.forEach((element) => {
            element.classList.remove("liNight");
            element.classList.add("liDay");
        });

        indiChildrenElements.forEach((element) => {
            element.classList.remove("indiChildNight");
            element.classList.add("indiChildDay");
        });

        imagesElements.forEach((element) => {
            element.classList.remove("imageNight");
            element.classList.add("imageDay");
        });
    } else {
        all.forEach((el) => (el.style.color = "white"));

        bodyElement.classList.remove("bodyDay");
        bodyElement.classList.add("bodyNight");
        
        navElement.classList.remove("navDay");
        navElement.classList.add("navNight");

        liElements.forEach((element) => {
            element.classList.remove("liDay");
            element.classList.add("liNight");
        });

        indiChildrenElements.forEach((element) => {
            element.classList.remove("imageDay");
            element.classList.add("indiChildNight");
        });

        imagesElements.forEach((element) => {
            element.classList.remove("lightImage");
            element.classList.add("imageNight");
        });
    }
}
//defining function to display the navigation categories
function displayNavCategories(oriImages) {
    //takes original images ai parameter
    //using try-catch-finally to catch errors
    const header = document.querySelector("header"); //selecting the navigation element
    try {
        let nav = "<nav><ul>"; //creating an empty string to store the categories
        //creating an empty array to store the categories
        const categories = []; //iterating through the original images
            Object.values(oriImages).forEach((value) => {
            const oriCategories = value.category; //getting the categories from the original images
            // iterating through the categories
            for (let i = 0; i < oriCategories.length; i++) {
                if (!categories.includes(oriCategories[i])) {
                    categories.push(oriCategories[i]);
                }
            }
        });
        categories.sort(); //sorting categories
        categories.unshift("all"); //adding "all" to the categories
        for (let i = 0; i < categories.length; i++) {
            nav += `<li>${categories[i].toUpperCase()}</li>`; //adding the categories to the unordered list
        }
        nav += "</ul></nav><hr />"; //closing the unordered list
        header.innerHTML = nav; //adding the unordered list to the navigation
        // adding event listener to the list items
        const li = document.querySelectorAll("li");
        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener("click", filterImages);
        }
    } catch (error) {
        navigation.innerHTML = `<h1 style="padding:10px;">Navigation add error: ${error}</h1>`; //displaying the error
    } finally {
        // finally block to display the indications / images / footer / day-night mode
        try {
            renderIndication(); //calling the function to display navigation indication
        } catch (error) {
            const indication = document.querySelectorAll(".indication"); //selecting the indication div
            indication.forEach((element) => {
                element.innerHTML = `<h1 style="padding:10px;">Indication add error: ${error}</h1>`; //displaying the error
            });
        } finally {
            // finally block to display the images / footer / day-night mode
            try {
                const [categories, urls] = objToArr(oriImages); //converting the original images to array
                displayImages(categories, urls); //displaying the images with function
                activImg("undefined"); //activating all the images at first load
            } catch (error) {
                const container = document.querySelector(".container"); //selecting the container div
                container.innerHTML = `<h1 style="padding:10px;">Images add error: ${error}</h1>`; //displaying the error
            } finally {
                // finally block footer / day-night mode
                try {
                    const footer = document.querySelector("footer"); //selecting the footer element
                    let presentation =
                        "<hr><h1>All rights reserved &copy; 2022</h1>";
                    footer.innerHTML = presentation;
                } catch (error) {
                    const footer = document.querySelector("footer"); //selecting the footer element
                    footer.innerHTML = `<h1 style="padding:10px;">Footer add error: ${error}</h1>`; //displaying the error
                } finally {
                    // finally block day-night mode
                    try {
                        sunriseSunset(); //calling the function to chang day/night mode
                    } catch (error) {
                        footer.innerHTML = `<h1 style="padding:10px;">Footer add error: ${error}</h1>`; //displaying the error
                    }
                }
            }
        }
    }
}

//calling the function to display the navigation categories, that will call all the other functions, at first load of the page
displayNavCategories(oriImages); //first load of the page

