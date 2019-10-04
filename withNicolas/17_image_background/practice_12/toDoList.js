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
            const currentToDo = createToDo(toDo.text);
            addToDo(currentToDo);
            paintToDo(currentToDo);
        });
    }
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";

    const currentToDo = createToDo(inputValue);
    addToDo(currentToDo);
    paintToDo(currentToDo);
}

function createToDo(text) {
    const currentToDo = {
        id: js_toDoList.length + 1,
        text: text
    };

    return currentToDo;
}

function addToDo(toDo) {
    js_toDoList.push(toDo);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}

function paintToDo(toDo) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "🐪";
    button.addEventListener("click", handleDelete);
    
    span.innerText = toDo.text;

    li.id = toDo.id;
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