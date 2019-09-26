const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
let js_toDoList = [];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleInputToDoList);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach(function(toDo) {
            addToDoList(toDo.text);
            paintToDo(toDo);
        });
    }
}

function handleInputToDoList(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    const currentToDo = addToDoList(inputValue);
    paintToDo(currentToDo);
    toDoInput.value = "";
}

function addToDoList(text) {
    const currentId = js_toDoList.length + 1;
    const currentToDo = {
        id: currentId,
        text: text
    };

    js_toDoList.push(currentToDo);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));

    return currentToDo;
}

function paintToDo(toDo) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "☁️";
    button.addEventListener("click", handleDelete);
    span.innerText = toDo.text;

    li.id = JSON.stringify(toDo.id);
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleDelete(event) {
    const button = event.target;
    const li = button.parentNode;

    const fixedToDoList = js_toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    js_toDoList = fixedToDoList;
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
    toDoList.removeChild(li);
}