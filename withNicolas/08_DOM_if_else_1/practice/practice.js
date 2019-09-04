const title = document.querySelector("#title");

// 색상값 형식 :
// 1. rgb()
// 2. "color name"
// 3. "#------"

// 3번의 "#------"의 형식이 시작값일 경우, 동작 안됨 !
// 스위칭 되는 두 색깔의 형식이 같으면, 동작 안됨 !
const BASE_COLOR = "rgb(39, 174, 96)";
const OTHER_COLOR = "#8e44ad";

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", clickEvent);
}
init();

function clickEvent() {
    const currentColor = title.style.color;

    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;

    } else {
        title.style.color = BASE_COLOR;
    }

    console.log(currentColor);
}

