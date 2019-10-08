const body = document.querySelector("body");

let image;
const BG_ANIMATION_ID = "bgAnimation";
const BG_DIR = "../images/";
const DELAY_TIME = 2000;

function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
    }, DELAY_TIME);
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.id = BG_ANIMATION_ID;
    image.src = `${BG_DIR}${randomNumber}.jpg`;

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}