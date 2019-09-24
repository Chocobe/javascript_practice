const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS = "toDos";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    
    toDos = cleanToDos;
    saveToDos();
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODOS);

    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span"),
        currentId = toDos.length + 1;

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(button);
    li.appendChild(span);
    li.id = currentId;

    toDoList.appendChild(li);

    const currentToDo = {
        id: currentId,
        text: text
    }

    toDos.push(currentToDo);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function handleInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}