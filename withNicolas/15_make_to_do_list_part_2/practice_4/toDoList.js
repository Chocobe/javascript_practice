const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TO_DO_LIST_LS = "toDoList";
const currentToDoList = [];
    
function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TO_DO_LIST_LS);

    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach(loadData);
        parsedToDoList.forEach(paintToDo);
    }
}

function paintToDo(toDo) {
    const li = document.createElement("li"),
        button = document.createElement("button"),
        span = document.createElement("span");

    button.innerText = "❌";
    span.innerText = toDo.text;
    li.appendChild(button);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function loadData(toDo) {
    currentToDoList.push(toDo);
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    const currentId = currentToDoList.length + 1;

    const newToDo = {
        id: currentId,
        text: inputValue
    };

    loadData(newToDo);
    paintToDo(newToDo);
    saveLocalStorage();
    toDoInput.innerText = "";
}

function saveLocalStorage() {
    localStorage.setItem(TO_DO_LIST_LS, JSON.stringify(currentToDoList));
}