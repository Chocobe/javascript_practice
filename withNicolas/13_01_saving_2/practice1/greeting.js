const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const greeting = document.querySelector(".js-greeting");
    
const USER = "currentUser";

const SHOWING_CLASS = "showing";

function saveName(val) {
    localStorage.setItem(USER, val);
}

function handleEvent(event) {
    event.preventDefault();
    const inputValue = input.value;
    saveName(inputValue);
    paintGreeting(inputValue);
}
    
function askForName() {    
    form.classList.add(SHOWING_CLASS);
    form.addEventListener("submit", handleEvent);
}

function paintGreeting(val) {
    greeting.innerText = `Hello ${val}`;
    greeting.classList.add(SHOWING_CLASS);
    form.classList.remove(SHOWING_CLASS);
}

function loadName() {
    const currentUser = localStorage.getItem(USER);

    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();