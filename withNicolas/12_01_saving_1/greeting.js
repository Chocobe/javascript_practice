const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");

const SHOWING_CN = "showing";
const USER_LS = "chocobe";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        form.classList.add(SHOWING_CN);
        greeting.classList.remove(SHOWING_CN);

    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();