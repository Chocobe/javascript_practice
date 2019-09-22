const from = document.querySelector(".js-from"),
    input = from.querySelector("input");

const greeting = document.querySelector(".js-greeting");

const USER = "currentUser";
    
const SHOWING_CLASS = "showing";

function init() {
    loadUser();
}
init();

function loadUser() {
    const currentUser = localStorage.getItem(USER);
    
    if(currentUser !== null) {
        greeting.classList.add(SHOWING_CLASS);
        from.classList.remove(SHOWING_CLASS);

    } else {
        from.classList.add(SHOWING_CLASS);
        greeting.classList.remove(SHOWING_CLASS);
    }
}