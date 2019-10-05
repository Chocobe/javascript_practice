const body = document.querySelector("body");
let image = null;

const BG_IMG_DIR = "../images/";
const BG_ANIMATION_ID = "bgAnimation";

function init() {
    loadBgAnimation();
    setInterval(function() {
        deleteBgAnimation();
        loadBgAnimation();
    }, 2000);
}
init();

function loadBgAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.src = `${BG_IMG_DIR}${randomNumber}.jpg`;
    image.id = BG_ANIMATION_ID;

    body.prepend(image);
}

function deleteBgAnimation() {
    body.removeChild(image);
}