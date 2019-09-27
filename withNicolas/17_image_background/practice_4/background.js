const body = document.querySelector("body");

const IMG_DIRECTORY = "../images/";
const BG_IMG_ID = "bgImgId";

function init() {
    loadBackground();
    setInterval(function() {
        deleteBg();
        loadBackground();
    }, 3000);
}
init();

function loadBackground() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const image = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    const img = new Image();
    img.src = image;
    img.id = BG_IMG_ID;

    body.prepend(img);
}

function deleteBg() {
    const img = body.querySelector(`#${BG_IMG_ID}`);
    body.removeChild(img);
}