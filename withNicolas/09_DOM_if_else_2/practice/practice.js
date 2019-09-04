const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function init() {
    title.addEventListener("click", handleClick);
}
init();

function handleClick() {
    const hasClicked = title.classList.contains(CLICKED_CLASS);

    if(hasClicked) {
        title.classList.remove(CLICKED_CLASS);
        console.log(title.classList.contains(CLICKED_CLASS));

    } else {
        title.classList.add(CLICKED_CLASS);
        console.log(title.classList.contains(CLICKED_CLASS));
    }
}