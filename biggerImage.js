import { sunriseSunset } from "./dayNight.js";

export function createIFrame(event){
    
    if (event.target.src !== "undefined") {
        const biggerElement = document.querySelector("#biggerImage");

        /*const indicationElement = document.querySelector(".indication");
        console.log(divElement.innerHTML);
        const divElement = document.createElement("div");
        divElement.className = "biggerImage";*/

        biggerElement.style.display = "";
        biggerElement.innerHTML = "";

        const imageSource = event.target.src;
        const imageCategory = event.target.alt;

        let biggerContent = "";
        biggerContent += "<button>Exit</button>";
        biggerContent += `<img src="${imageSource}" alt="${imageCategory.toLowerCase()}">`;
        biggerContent += `<p>Category = ${imageCategory}</p>`;
        
        /*divElement.innerHTML = biggerContent;
        indicationElement.nextElementSibling.appendChild(divElement);
        console.log(divElement.innerHTML);*/

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