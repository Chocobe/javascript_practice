const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
const js_toDoList = [ /* {id: __ , text: __ } */ ];

function init() {
    loadToDoList();
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    if(loadedToDoList !== null) {
        const paredToDoList = JSON.parse(loadedToDoList);
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

    const currentId = js_toDoList.length;
    li.id = currentId;
    li.appendChild(button);
    li.appendChild(span);

    const currentToDo = {
        id: currentId,
        text: text
    };

    // js_toDoList.push(currentToDo);
    // localStorage.push(js_toDoList);
}

function handleDelete(event) {
    
}