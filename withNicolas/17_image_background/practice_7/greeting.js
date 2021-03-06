const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input"),
    greetingTitle = document.querySelector(".js-greetingTitle");

const USER_LS = "currentUser";
const SHOW_CN = "showing";

function init() {
    loadUser();
}
init();

function loadUser() {
    const loadedUser = localStorage.getItem(USER_LS);

    if(loadedUser !== null) {
        paintGreeting(loadedUser);

    } else {
        askUser();
    }
}

function askUser() {
    greetingTitle.classList.remove(SHOW_CN);
    greetingForm.classList.add(SHOW_CN);
    greetingForm.addEventListener("submit", handleGreetingInput);
}

function handleGreetingInput(event) {
    event.preventDefault();
    const inputValue = greetingInput.value;
    greetingInput.value = "";

    localStorage.setItem(USER_LS, inputValue);
    paintGreeting(inputValue);
}

function paintGreeting(text) {
    greetingForm.classList.remove(SHOW_CN);
    greetingTitle.classList.add(SHOW_CN);
    greetingTitle.innerText = `Hello, ${text}`;
}