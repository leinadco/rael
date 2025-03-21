import { activImg } from "./indication.js";
//defining the function to render the navigation indication
export function renderIndication() {
    const indicationCont = document.querySelectorAll(".indication"); //selecting the indication divs
    const options = [5, 10, 20, 40, 80, 160, 320]; //defining the options for the select
    const slectedOption = 20; //defining the selected option
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
    indication +=
        '</select><button class="more indiChild" value="+">More</button>';

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
        select.addEventListener("change", activImg);
    });
}

//defining the function to display the indications
export function displayIndication(min, max, total) {
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

//defining the function to update the selected option in both selects, after a change of the selecte option in the dropdown list
export function updateSelect(event) {
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