const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");

const toDoList = document.querySelector(".js-toDoList");

const CHECK_CN = "checker";
const SYMBOL_CN = "preSymbol";
const TODO_LS = "toDoList";
let js_toDoList = [ /* { id: __ , text: __ , checker: __ } */ ];

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleToDoInput);
}
init();

function loadToDoList() {
    const loadedToDoList = localStorage.getItem(TODO_LS);

    console.log(loadedToDoList.length);

    if(loadedToDoList !== null) {
        const parsedToDoList = JSON.parse(loadedToDoList);
        parsedToDoList.forEach(function(toDo) {
            const currentToDo = createToDo(toDo.text, toDo.checker);
            addToDo(currentToDo);
            printToDo(currentToDo);
        });
    }
}

function handleToDoInput(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";

    const currentToDo = createToDo(inputValue, false);
    addToDo(currentToDo);
    printToDo(currentToDo);
}

function createToDo(text, checker) {
    const currentToDo = {
        id: js_toDoList.length + 1,
        text: text,
        checker: checker
    };

    return currentToDo;
}

function addToDo(toDo) {
    js_toDoList.push(toDo);
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}

function printToDo(toDo) {
    const deleteButton = document.createElement("button"),
        checkButton = document.createElement("button"),
        span = document.createElement("span"),
        li = document.createElement("li");
        preSymbol = document.createElement("span");

    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", handleDelete);

    checkButton.innerText = "✔";
    checkButton.addEventListener("click", handleCheck);

    span.innerText = toDo.text;
    if(toDo.checker) {
        span.classList.add(CHECK_CN);
    }

    preSymbol.innerText = "🐪";
    preSymbol.classList.add(SYMBOL_CN);

    li.id = toDo.id;
    li.appendChild(preSymbol);
    li.appendChild(deleteButton);
    li.appendChild(checkButton);
    li.appendChild(span);

    toDoList.appendChild(li);
}

function handleDelete(event) {
    const button = event.target,
        li = button.parentNode;

    const fixedToDoList = js_toDoList.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    js_toDoList = fixedToDoList;
    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
    toDoList.removeChild(li);
}

function handleCheck(event) {
    const button = event.target,
        li = button.parentNode,
        span = button.nextElementSibling;
        

    let checker = false;

    if(span.classList.contains(CHECK_CN)) {
        span.classList.remove(CHECK_CN);

    } else {
        span.classList.add(CHECK_CN);
        checker = true;
    }

    for(let i = 0; i < js_toDoList.length; i++) {
        if(js_toDoList[i].id === parseInt(li.id)) {
            js_toDoList[i].checker = checker;
        }
    }

    localStorage.setItem(TODO_LS, JSON.stringify(js_toDoList));
}