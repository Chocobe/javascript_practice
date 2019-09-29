const body = document.querySelector("body");

const IMG_DIRECTORY = "../images/";
const IMG_ID = "bgImage";
let image = null;

function init() {
    createAnimation();
    setInterval(function() {
        deleteBeforeBg();
        createAnimation();
    }, 3000);
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    image = new Image();
    image.src = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    image.id = IMG_ID;

    body.prepend(image);
}

function deleteBeforeBg() {
    body.removeChild(image);
}