const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";
let currentToDoList = [];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    if(loadedToDoList !== null) {
        console.log(loadedToDoList);
        const parsedToDoList = JSON.parse(loadedToDoList);
        let currentId = 0;
        
        parsedToDoList.forEach(function(toDo) {
            currentId++;
            toDo.id = currentId;
            
            updateToDoList(toDo);
            paintToDo(toDo);
        });

    } else {
        console.log("no data in toDoList");
    }
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";

    const currentToDo = {
        id: currentToDoList.length + 1,
        text: inputValue
    };
    
    updateToDoList(currentToDo);
    paintToDo(currentToDo);
}

function updateToDoList(toDo) {
    currentToDoList.push(toDo);
    localStorage.setItem(TODO_LS, JSON.stringify(currentToDoList));
}

function paintToDo(toDo) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "🌦";
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
    
    const fixedToDoList = currentToDoList.filter(function(toDo) {
        return parseInt(li.id) !== toDo.id;
    });

    currentToDoList = fixedToDoList;
    localStorage.setItem(TODO_LS, JSON.stringify(currentToDoList));
    toDoList.removeChild(li);   
}