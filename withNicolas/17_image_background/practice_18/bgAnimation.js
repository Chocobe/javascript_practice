const body = document.querySelector("body");

let image = null;
const BG_DIR = "../images/";
const BG_ANIMATION_ID = "bgAnimation";

function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
    }, 2000);
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.src = `${BG_DIR}${randomNumber}.jpg`;
    image.id = BG_ANIMATION_ID;

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}