const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector("input"),
    greetingTitle = document.querySelector(".js-greetingTitle");

const SHOW_CN = "showing";
const USER_LS = "currentUser";

function init() {
    loadUser();
}
init();

function loadUser() {
    const loadedUser = localStorage.getItem(USER_LS);

    if(loadedUser !== null) {
        printGreeting(loadedUser);
        
    } else {
        askUser();
    }
}

function printGreeting(text) {
    greetingForm.classList.remove(SHOW_CN);
    greetingTitle.classList.add(SHOW_CN);
    greetingTitle.innerText = `Hello, ${text}. What will you do today?`;
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
    printGreeting(inputValue);
}