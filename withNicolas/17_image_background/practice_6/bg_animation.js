const body = document.querySelector("body");

const BG_IMG_CN = "bgImage";
const DIRECTORY = "../images/";

function init() {
    loadImage();
}
init();

function loadImage() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    const image = new Image();
    image.src = `${DIRECTORY}${randomNumber}.jpg`;
    image.classList.add(BG_IMG_CN);
    
    body.prepend(image);
}