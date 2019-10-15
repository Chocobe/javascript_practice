const body = document.querySelector("body");

let image = null;
const BG_ANI_ID = "bgAnimation";
const BG_DIR = "../images/";

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
    image.id = BG_ANI_ID;
    image.src = `${BG_DIR}${randomNumber}.jpg`;

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}