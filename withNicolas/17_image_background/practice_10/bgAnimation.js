const body = document.querySelector("body");
let image = null;

const BG_CN = "bgAnimation";
const IMG_DIRECTORY = "../images/";
    
function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
    }, 3000);
}
init();

function createAnimation() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.src = `${IMG_DIRECTORY}${randomNumber}.jpg`;
    image.id = BG_CN;   

    body.prepend(image);
}

function deleteAnimation() {
    body.removeChild(image);
}