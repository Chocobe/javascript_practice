const clock = document.querySelector(".js-clock");

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();

function getTime() {
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    clock.innerText = `(${hours < 10 ? `0${hours}` : hours}:` +
                      `${minutes < 10 ? `0${minutes}` : minutes}:` +
                      `${seconds < 10 ? `0${seconds}` : seconds})`;
}