const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

const SHOW_CN = "showing";

function init() {
    loadName();
}
init();

function loadName() {
    const currentName = localStorage.getItem(USER_LS);

    if(currentName === null) {
        askForName();

    } else {
        paintGreeting(currentName);
    }
}

function askForName() {
    greeting.classList.remove(SHOW_CN);
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleEvent);
}

function handleEvent(event) {
    event.preventDefault();
    const inputValue = input.value;
    saveUser(inputValue);
    paintGreeting(inputValue);
}

function saveUser(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello ${text}`;
}