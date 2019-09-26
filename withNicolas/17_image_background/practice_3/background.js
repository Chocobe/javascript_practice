const body = document.querySelector("body");

const IMG_DIRECTORY = "../images/";
const BACKGROUND_ID = "bgImage";

function init() {
    loadBackground();

    setInterval(function() {
        deleteBeforeBackground();
        loadBackground();
    }, 2000);
}
init();

function loadBackground() {
    const img = new Image();
    img.id = BACKGROUND_ID;
    
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    img.src = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    img.classList.add("fadeInBackground");

    body.prepend(img);
}

function deleteBeforeBackground() {
    const image = body.querySelector(`#${BACKGROUND_ID}`);

    if(image !== null) {
        body.removeChild(image);
    }
}