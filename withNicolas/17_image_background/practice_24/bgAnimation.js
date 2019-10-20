const body = document.querySelector("body");

let image = null;
const BG_DIR = "../images/";
const BG_ANIMATION_ID = "bgAnimation";

function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
    }, 6000);
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