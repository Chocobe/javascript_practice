const clockWrap = document.querySelector(".clock-wrap"),
    clock = clockWrap.querySelector(".clock");

function init() {
    myClock();
    setInterval(myClock, 1000);
}
init();

function myClock() {
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:` +
                    `${minutes < 10 ? `0${minutes}` : minutes}:` +
                    `${seconds < 10 ? `0${seconds}` : seconds}`;
}