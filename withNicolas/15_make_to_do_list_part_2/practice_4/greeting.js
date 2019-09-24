const askUserForm = document.querySelector(".js-askUserForm"),
    askUserInput = askUserForm.querySelector("input"),
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
        askUserName();
    }
}

function paintGreeting(text) {
    askUserForm.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hello, ${text}`;
}

function askUserName() {
    greeting.classList.remove(SHOW_CN);
    askUserForm.classList.add(SHOW_CN);
    askUserForm.addEventListener("submit", handleAskUserForm);
}

function handleAskUserForm(event) {
    event.preventDefault();
    const inputValue = askUserInput.value;
    paintGreeting(inputValue);
    saveUser(inputValue);
}

function saveUser(text) {
    localStorage.setItem(USER_LS, text);
}