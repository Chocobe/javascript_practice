const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleToDo);
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

function handleToDo(event) {
    event.preventDefault();

    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const newId = toDos.length + 1;

    span.innerText = text;
    button.innerText = "❌";
    li.appendChild(button);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}