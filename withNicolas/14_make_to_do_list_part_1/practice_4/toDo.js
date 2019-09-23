const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO = "toDos";
    
function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleToDoForm);
}
init();

function loadToDo() {
    const toDos = localStorage.getItem(TODO);

    if(toDos !== null) {

    }
}

function handleToDoForm(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDos(inputValue);
    toDoInput.value = "";
}

function paintToDos(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "🚀";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}