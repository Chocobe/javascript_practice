const body = document.querySelector("body");
let image = null;

const BG_ANIMATION_ID = "bgAnimation";
const BG_DIR = "../images/";

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
    image.id = BG_ANIMATION_ID;
    image.src = `${BG_DIR}${randomNumber}.jpg`;

    body.prepend(image);
}

function deleteBgAnimation() {
    body.removeChild(image);
}