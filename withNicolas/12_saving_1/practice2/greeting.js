const inputContainer = document.querySelector(".js-inputContainer"),
    input = inputContainer.querySelector(".js-input");

const greeting = document.querySelector(".js-greeting");

const USER_NAME = "chocobe";
    
const SHOWING_CLASS = "showing";

function init() {
    loadName();
}
init();

function paintGreeting(name) {
    inputContainer.classList.remove(SHOWING_CLASS);
    greeting.classList.add(SHOWING_CLASS);
    greeting.innerText = `Hello ${name}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_NAME);

    if(currentUser !== null) {
        paintGreeting(currentUser);

    } else {
        inputContainer.classList.add(SHOWING_CLASS);
        greeting.classList.remove(SHOWING_CLASS);
    }
}

