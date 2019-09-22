const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleToDoForm);
}
init();

function handleToDoForm(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    saveToDo(inputValue);
    paintToDo(inputValue);
    toDoInput.value = "";
}

function saveToDo(text) {

}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "🚀";
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function loadToDo() {
    const toDos = localStorage.getItem(TODOS);

    if(toDos !== null) {
        
    }
}