import { sunriseSunset } from "./dayNight.js";

export function createIFrame(event){
    
    if (event.target.src !== "undefined") {
        const biggerElement = document.querySelector("#biggerImage");
        biggerElement.style.display = "";
        biggerElement.innerHTML = "";

        const imageSource = event.target.src;
        const imageCategory = event.target.alt;

        let biggerContent = "";
        //biggerContent += "<div>";
        biggerContent += "<button>Exit</button>";
        biggerContent += `<img src="${imageSource}" alt="${imageCategory.toLowerCase()}">`;
        //biggerContent += "</div>";
        biggerContent += `<p>Category = ${imageCategory}</p>`
        /*const divElement = document.createElement("div");
        const imgElement = document.createElement("img");
        imgElement.src = imageSource;
        imgElement.alt = imageCategory;
        divElement.appendChild(imgElement);

        const parCategory = document.createElement("p");
        parCategory.innerHTML = "Category: " + imageCategory.toUpperCase();

        biggerElement.appendChild(divElement);
        biggerElement.appendChild(parCategory);*/
        biggerElement.innerHTML = biggerContent;
        biggerElement.className = "biggerImage";
        const biggerButton = document.querySelector("#biggerImage button");
        biggerButton.addEventListener("click", exitBigger);
        console.log("YES");
        console.log(imageSource);
    } else {
        //console.log("NO");
        //divElement.classList.toggle = "biggerImage";
    }
    
    //const iFrame = document.createElement(iframe);
    sunriseSunset();
}

function exitBigger(){
    const biggerElement = document.querySelector("#biggerImage");
    biggerElement.style.display = "none";
}