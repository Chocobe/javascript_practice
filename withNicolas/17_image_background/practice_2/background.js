const body = document.querySelector("body");

const imageNumber = 5;
const IMG_DIRECTORY = "../images/";

function init() {
    loadBackground();
}
init();

function loadBackground() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const imageName = IMG_DIRECTORY + `${randomNumber}.jpg`;

    const img = new Image();
    img.src = imageName;

    body.prepend(img);
}