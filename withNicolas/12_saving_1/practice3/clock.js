const clockContainer = document.querySelector(".js-clockContainer"),
    clock = clockContainer.querySelector(".js-clock")
    clickedStep_1 = "clickedStep_1",
    clickedStep_2 = "clickedStep_2";
    
function init() {
    clock.addEventListener("click", clickAction);
    getTime();
    setInterval(getTime, 1000);
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

function clickAction() {
    const isStep_1 = clock.classList.contains(clickedStep_1);

    if(isStep_1) {
        clock.classList.remove(clickedStep_1);
        clock.classList.add(clickedStep_2);

    } else {
        clock.classList.remove(clickedStep_2);
        clock.classList.add(clickedStep_1);
    }
}