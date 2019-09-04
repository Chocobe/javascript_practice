const clockContainer = document.querySelector(".js-clockContainer"),
    clock = clockContainer.querySelector(".js-clock");
    
const CLICKED_STEP_1 = "clicked_step_1";
const CLICKED_STEP_2 = "clicked_step_2";
    
function init() {
    clock.addEventListener("click", clickedClock);
    getTime();
    setInterval(getTime, 1000);
    console.dir(clock);
}
init();

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:` +
                      `${minutes < 10 ? `0${minutes}` : minutes}:` +
                      `${seconds < 10 ? `0${seconds}` : seconds}`;
}

function clickedClock() {    
    if(clock.classList.contains(CLICKED_STEP_1)) {
        clock.classList.remove(CLICKED_STEP_1);
        clock.classList.add(CLICKED_STEP_2);

    } else {
        clock.classList.remove(CLICKED_STEP_2);
        clock.classList.add(CLICKED_STEP_1);
    }
}