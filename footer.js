export function renderFooter(div) {
    let presentation =
        "<h1 class='footer'>All rights reserved &copy; 2022</h1>";
    presentation += "<a href='addImages.html'>Add Images</a>";
    div.innerHTML = presentation;
    return div;
}
