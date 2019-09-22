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
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForName();

    } else {
        paintGreeting(currentUser);
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

function saveUser(user) {
    localStorage.setItem(USER_LS, user);
}

function paintGreeting(text) {
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello ${text}`;
}