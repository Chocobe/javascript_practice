const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const SHOW_CN = "showing";
const USER_LS = "currentUser";

function init() {
    loadUser();
}
init();

function loadUser() {
    const loadedUser = localStorage.getItem(USER_LS);

    if(loadedUser !== null) {
        paintGreeting(loadedUser);

    } else {
        askForName();
    }
}

function paintGreeting(text) {
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello, ${text}`;
}

function askForName() {
    greeting.classList.remove(SHOW_CN);
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleEvent);
}

function handleEvent(event) {
    event.preventDefault();
    const inputValue = input.value;
    paintGreeting(inputValue);
    saveUser(inputValue);
}

function saveUser(text) {
    localStorage.setItem(USER_LS, text);
}