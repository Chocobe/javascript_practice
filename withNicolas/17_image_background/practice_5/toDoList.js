const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
const currentToDoList = [];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    if(loadedToDoList !== null) {
        console.log(loadedToDoList);

    } else {
        console.log("no data in toDoList");
    }
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    
    const currentToDo = createToDo(inputValue);
    addToDo(currentToDo);
    paintToDo(currentToDo);

    console.log(currentToDo);
}

function createToDo(text) {
    const currentToDo = {
        id: currentToDoList.length + 1,
        text: text
    };

    return currentToDo;
}

function addToDo(toDo) {
    currentToDoList.push(toDo);
    localStorage.setItem(TODO_LS, JSON.stringify(currentToDoList));
}

function paintToDo(toDo) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "🐪";
    button.addEventListener("click", handleDelete);
    span.innerText = 
}

function handleDelete(event) {

}