const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHOW_CN = "showing";

function init() {
    loadUser();
}
init();

function loadUser() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser !== null) {
        paintGreeting(currentUser);

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
    form.addEventListener("submit", handleInput);
}

function handleInput(event) {
    event.preventDefault();
    const inputValue = input.value;
    paintGreeting(inputValue);
    saveUser(inputValue);
}

function saveUser(text) {
    localStorage.setItem(USER_LS, text);
}