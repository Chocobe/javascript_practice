const form = document.querySelector(".form"),
    greeting = document.querySelector(".greeting");

const SHOWING_CLASS = "showing";

const KEY = "currentUser";

function init() {
    const currentUser = localStorage.getItem(KEY);

    if(currentUser != null) {
        form.classList.remove(SHOWING_CLASS);
        greeting.classList.add(SHOWING_CLASS);
        
        greeting.innerText = `Hello ${currentUser}`;

    } else {
        form.classList.add(SHOWING_CLASS);
        greeting.classList.remove(SHOWING_CLASS);
    }
}
init();
