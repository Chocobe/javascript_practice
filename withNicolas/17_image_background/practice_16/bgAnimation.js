const body = document.querySelector("body");
let image = null;

const IMG_DIR = "../images/";
const IMG_ID = "bgAnimation";

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
    image.src = `${IMG_DIR}${randomNumber}.jpg`;
    image.id = IMG_ID;

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}