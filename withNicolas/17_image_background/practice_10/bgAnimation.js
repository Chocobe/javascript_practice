const body = document.querySelector("body");

const IMG_DIRECTORY = "../images/";
const IMG_CN = "bgAnimation";

let image = null;

function init() {
    createAnimation();
    setInterval(function() {
        deleteCurrentBg();
        createAnimation();
    }, 2000);
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    image = new Image();
    image.src = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    image.id = IMG_CN;

    body.prepend(image);
}

function deleteCurrentBg() {
    body.removeChild(image);
}