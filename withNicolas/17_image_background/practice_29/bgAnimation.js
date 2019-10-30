const bg = document.querySelector(".bgAnimation");

const BG_ANIMATION_CN = "js-bgAnimation";
const BG_DIR = "../images/";

let image = null;

function init() {
    createAnimation();
    setInterval(function() {
        deleteAnimation();
        createAnimation();
    }, 30000);
}
init();

function createAnimation() {
    bg.classList.add(BG_ANIMATION_CN);

    const randomNumber = Math.floor(Math.random() * 5) + 1;
    image = new Image();
    image.classList.add(BG_ANIMATION_CN);
    image.src = `${BG_DIR}${randomNumber}.jpg`;

    bg.appendChild(image);
}

function deleteAnimation() {
    bg.removeChild(image);
}