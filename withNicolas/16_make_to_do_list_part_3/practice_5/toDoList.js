const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
let js_toDoList = [ /* {id: __ , text: __ } */ ];

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
            addToDoList(toDo.text);
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
}

function addToDoList(text) {
    const currentId = js_toDoList.length + 1;
    const currentToDo = {
        id: currentId,
        text: text
    };

    js_toDoList.push(currentToDo);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}

function deleteToDo(event) {
    const button = event.target;
    const li = button.parentNode;

    const fixedJsToDoList = js_toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    console.log(js_toDoList);
    console.log(fixedJsToDoList);

    js_toDoList = fixedJsToDoList;
    toDoList.removeChild(li);
    updateToDoList(js_toDoList);
}

function updateToDoList(fixedToDoList) {
    localStorage.setItem(TODO_LS, JSON.stringify(fixedToDoList));
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;

    paintToDo(inputValue);
    addToDoList(inputValue);
    toDoInput.value = "";
}