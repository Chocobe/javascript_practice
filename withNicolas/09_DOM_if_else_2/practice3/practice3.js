const wrap = document.querySelector(".wrap"),
    content = wrap.querySelector(".content");

const CLICKED = "js-click",
    NONE_CLICKED = "js-nonClick";
    
function init() {
    content.addEventListener("click", toggleColor);
}
init();

function toggleColor() {
    const isClicked = content.classList.contains(CLICKED);

    if(isClicked) {
        content.classList.remove(CLICKED);
        content.classList.add(NONE_CLICKED);

    } else {
        content.classList.remove(NONE_CLICKED);
        content.classList.add(CLICKED);
    }
}