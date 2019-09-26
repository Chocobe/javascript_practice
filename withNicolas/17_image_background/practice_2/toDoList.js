const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
let js_toDoList = [];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach(function(toDo) {
            paintToDo(toDo.text);
            addToDo(toDo.text);
        });

    } else {
        console.log("ToDoList is null");
    }
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    addToDo(inputValue);
    toDoInput.value = "";
}

function paintToDo(text) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "❌";
    button.addEventListener("click", handleDelete);
    span.innerText = text;

    li.id = js_toDoList.length + 1;
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);   
}

function handleDelete(event) {
    const button = event.target;
    const li = button.parentNode;

    const FixedJsToDoList = js_toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    js_toDoList = FixedJsToDoList;
    toDoList.removeChild(li);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}

function addToDo(text) {
    const currentId = js_toDoList.length + 1;
    const currentToDo = {
        id: currentId,
        text: text
    };
    js_toDoList.push(currentToDo);

    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}