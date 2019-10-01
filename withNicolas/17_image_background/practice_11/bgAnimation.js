const body = document.querySelector("body");
let image = null;

const IMG_DIR = "../images/";
const ANIMATION_ID = "bgAnimation";

function init() {
    createBgAnimation();
    setInterval(function() {
        deleteBgAnimation();
        createBgAnimation();
    }, 2000);
}
init();

function createBgAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.src = `${IMG_DIR}${randomNumber}.jpg`;
    image.id = ANIMATION_ID;

    body.prepend(image);
}

function deleteBgAnimation() {
    body.removeChild(image);
}