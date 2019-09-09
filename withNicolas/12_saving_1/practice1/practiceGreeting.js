const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    
const greeting = document.querySelector(".js-greeting");

const USER_NAME = "chocobe";
    
const SHOWING_CLASS_NAME = "showing";

function paintGreeting(name) {
    console.log(greeting);
    form.classList.remove(SHOWING_CLASS_NAME);
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerText = `Hello, ${name}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_NAME);

    if(currentUser === null) {
        form.classList.add(SHOWING_CLASS_NAME);
        greeting.classList.remove(SHOWING_CLASS_NAME);        

    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();