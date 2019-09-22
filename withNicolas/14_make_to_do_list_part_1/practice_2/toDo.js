const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();

function loadToDoList() {
    const toDos = localStorage.getItem(TODOS);

    if(toDos !== null) {
        
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintTodo(inputValue);
    toDoInput.value = "";
}

function paintTodo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "🐫";
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}