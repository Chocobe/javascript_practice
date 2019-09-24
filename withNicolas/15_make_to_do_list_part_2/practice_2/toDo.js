const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleInputToDo);
}
init();

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li"),
        span = document.createElement("span"),
        button = document.createElement("button"),
        newId = toDos.length + 1;

    span.innerText = text;
    button.innerText = "🐸";
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);

    const toDo = {
        text: text,
        id: newId
    };

    toDos.push(toDo);
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleInputToDo(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}