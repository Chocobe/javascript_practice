const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleInputToDo);
}
init();

function loadToDo() {
    const loadedToDo = localStorage.getItem(TODOS_LS);

    if(loadedToDo !== null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li"),
        span = document.createElement("span"),
        button = document.createElement("button"),
        id = toDos.length + 1;

    span.innerText = text;
    button.innerText = "❌";
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);

    const currentToDo = {
        text: text,
        id: id
    };

    toDos.push(currentToDo);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleInputToDo(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}