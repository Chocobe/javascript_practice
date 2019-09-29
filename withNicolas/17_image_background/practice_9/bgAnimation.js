const body = document.querySelector("body");

const IMG_DIRECTORY = "../images/";
const FADE_IN_ID = "bgFadeIn";
const FADE_OUT_ID = "bgFadeOut";
const ANIMATION_INTERVAL = 1;

function init() {
    createBgAnimation();
    setInterval(function() {
        deleteBg();
        createBgAnimation();
    }, 3000);
}
init();

function createBgAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    const image = new Image();
    image.src = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    image.id = FADE_IN_ID;

    body.prepend(image);
}

function deleteBg() {
    const currentBg = body.querySelector(`#${FADE_IN_ID}`);
    body.removeChild(currentBg);
}