const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDoList";
let js_toDoList = [/* id: , text: */];
    
function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleInputToDo);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODOS_LS);

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
        currentId = js_toDoList.length + 1;

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
    }

    js_toDoList.push(currentToDo);
    saveLocalStorage();
}

function handleInputToDo(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}

function saveLocalStorage() {
    localStorage.setItem(TODOS_LS, JSON.stringify(js_toDoList));
}

function deleteToDo(event) {
    const target = event.target;
    const li = target.parentNode;
    
    toDoList.removeChild(li);
    
    const clearToDoList = js_toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    js_toDoList = clearToDoList;
    saveLocalStorage();
}