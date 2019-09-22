const wrap = document.querySelector(".wrap"),
    button = wrap.querySelector(".button");

const CLICKED = "js-clicked",
    NONE_CLICKED = "js-none_clicked";

function init() {
    button.addEventListener("click", initButton);
}
init();

function initButton() {
    const isClicked = button.classList.contains(CLICKED);

    if(isClicked) {
        button.classList.remove(CLICKED);
        button.classList.add(NONE_CLICKED);

    } else {
        button.classList.remove(NONE_CLICKED);
        button.classList.add(CLICKED);
    }
}