const form = document.querySelector(".js-form"),
    input = form.querySelector("input");

const greeting = document.querySelector(".js-greeting");

const SHOWING_CLASS = "showing";
const USER = "chocobe";

function init() {
    console.log(input);
    loadUser();
}
init();

function loadUser() {
    const currentUser = localStorage.getItem(USER);
    
    if(currentUser === null) {
        input.classList.add(SHOWING_CLASS);
        greeting.classList.remove(SHOWING_CLASS);

    } else {
        input.classList.remove(SHOWING_CLASS);
        greeting.classList.add(SHOWING_CLASS);
        greeting.innerText = `Hello ${USER}`;        
    }
}