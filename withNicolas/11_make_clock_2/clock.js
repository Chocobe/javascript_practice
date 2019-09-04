const clockContainer = document.querySelector(".js-clockContainer");
const myClock = clockContainer.querySelector("h1");

function init() {
    getTime();
}
init();

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const Minutes = date.getMinutes();
    const seconds = date.getSeconds();

    myClock.innerText = `${hours}:${minutes}:${seconds}`;
}