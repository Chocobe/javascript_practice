const body = document.querySelector("body");
<<<<<<< HEAD
let image = null;

const IMG_DIR = "../images/";
const IMG_ID = "bgAnimation";
=======

let image;
const BG_ANIMATION_ID = "bgAnimation";
const BG_DIR = "../images/";
const DELAY_TIME = 2000;
>>>>>>> origin/master

function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
<<<<<<< HEAD
    }, 2000);
=======
    }, DELAY_TIME);
>>>>>>> origin/master
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
<<<<<<< HEAD
    image.src = `${IMG_DIR}${randomNumber}.jpg`;
    image.id = IMG_ID;
=======
    image.id = BG_ANIMATION_ID;
    image.src = `${BG_DIR}${randomNumber}.jpg`;
>>>>>>> origin/master

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}