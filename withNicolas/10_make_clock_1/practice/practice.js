const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector("h1");

function init() {
    getTime();
}
init();

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}