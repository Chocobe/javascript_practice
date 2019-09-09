const clockContainer = document.querySelector(".js-clockContainer"),
    clock = clockContainer.querySelector(".js-clock");

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();

function getTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${hours < 10 ? `0${clock}` : hours}:` +
                      `${minutes < 10 ? `0${minutes}` : minutes}:` +
                      `${seconds < 10 ? `0${seconds}` : seconds}`;
}