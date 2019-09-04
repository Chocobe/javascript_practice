function handleResize(event) {
    console.log(event);
}
window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");
function clickHandler() {
    title.style.color = "blue";
    title.innerHTML = "You clicked me";
}
title.addEventListener("click", clickHandler);