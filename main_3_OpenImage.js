export function createIFrame(event){
    
    if (event.target.src !== "undefined") {
        const biggerElement = document.querySelector("#biggerImage");
        biggerElement.innerHTML = "";
        biggerElement.className = "biggerImage";
        //divElement.style.display = "inline-block";

        const imageSource = event.target.src;
        const imageCategory = event.target.alt;

        const divElement = document.createElement("div");
        const imgElement = document.createElement("img");
        imgElement.src = imageSource;
        imgElement.alt = imageCategory;
        divElement.appendChild(imgElement);

        const parCategory = document.createElement("p");
        parCategory.innerHTML = "Category: " + imageCategory.toUpperCase();

        biggerElement.appendChild(divElement);
        biggerElement.appendChild(parCategory);

        console.log(event.target.src);
        console.log("YES");
    } else {
        //console.log("NO");
        //divElement.classList.toggle = "biggerImage";
    }
    
    //const iFrame = document.createElement(iframe);
}