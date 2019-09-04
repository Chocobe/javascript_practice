const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function init() {
    title.addEventListener("click", changeColor);
}
init();

function changeColor() {
    title.classList.toggle(CLICKED_CLASS);
}