const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
let toDos = [/* id: __ , text: __ */];

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
        });
    }
}

function paintToDo(text) {    
    const currentId = toDos.length + 1;

    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.id = currentId;
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);

    const currentToDo = {
        id: currentId,
        text: text
    };

    toDos.push(currentToDo);
    saveToDoList();
}

function saveToDoList() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const button = event.target;
    const li = button.parentNode;

    const fixedToDoList = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = fixedToDoList;
    toDoList.removeChild(li);
    saveToDoList();
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}