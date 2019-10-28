const greetingForm = document.querySelector(".js-greetingForm"),
    greetingInput = greetingForm.querySelector(".js-greetingInput");

const greetingTitle = document.querySelector(".js-greetingTitle"),
    greetingSpan = greetingTitle.querySelector(".greeting"),
    greetingDelete = greetingTitle.querySelector(".js-greetingDelete");

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
        askUser();
    }
}

function paintGreeting(text) {
    greetingForm.classList.remove(SHOW_CN);
    greetingTitle.classList.add(SHOW_CN);
    greetingSpan.innerText = `🎸Hello, ${text} 🎻`;
    greetingDelete.addEventListener("click", handleDelete);
}

function handleDelete(event) {
    localStorage.removeItem(USER_LS);
    greetingSpan.innerText = "no User";
    askUser();
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