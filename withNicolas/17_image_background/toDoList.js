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
        });
    }
}

function paintToDo(text) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "❌";
    button.addEventListener("click", handleDelete);
    span.innerText = text;

    const currentId = js_toDoList.length + 1;
    li.id = currentId;
    li.appendChild(button);
    li.appendChild(span);

    const currentToDo = {
        id: currentId,
        text: text
    };
    js_toDoList.push(currentToDo);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));    
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

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    paintToDo(inputValue);
    toDoInput.value = "";
}