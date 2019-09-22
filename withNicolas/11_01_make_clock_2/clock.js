const clockContainer = document.querySelector(".js-clockContainer");
const myClock = clockContainer.querySelector("h1");

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

    myClock.innerText = `${hours < 10 ? `0${hours}` : hours}:` + 
                        `${minutes < 10 ? `0${minutes}` : minutes}:` + 
                        `${seconds < 10 ? `0${seconds}` : seconds}`;
}