const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODOS_LS);

    if(loadedToDoList !== null) {
        const parsedDatas = JSON.parse(loadedToDoList);
        parsedDatas.forEach(function(data) {
            paintToDo(data.text); // data = { id:xxx , text:xxx }
            toDos.push(data);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "✖️";
    span.innerText = text;
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
<<<<<<< HEAD
}

function handleToDoInput(event) {
    event.preventDefault();

    const currentId = toDos.length + 1;
    const inputValue = toDoInput.value;

    const currentToDo = {
        id : currentId,
        text: inputValue
    };

    toDos.push(currentToDo);
    saveLocalStorage();
    paintToDo(currentToDo.text);
    toDoInput.value = "";
}

function saveLocalStorage() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}