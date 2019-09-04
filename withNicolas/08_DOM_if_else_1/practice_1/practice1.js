const title = document.querySelector("#title");
const BASE_COLOR = "rgb(34, 166, 179)"
const OTHER_COLOR = "#eb4d4b";

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleClick() {
    const currentColor = title.style.color;

    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;

    } else {
        title.style.color = BASE_COLOR;
    }

    console.log(title.style.color);
}