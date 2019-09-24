const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleToDo);
}

function loadToDo() {
    const loadedDatas = localStorage.getItem(TODOS_LS);

    if(loadedDatas !== null) {
        // 리스트 전체 출력
    }
}

function handleToDo(event) {
    event.preventDefault();
}