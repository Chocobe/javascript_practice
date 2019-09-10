const containerTag = document.querySelector(".container"),
    changeColorBtnTag = containerTag.querySelector(".js-changeColorBtn");

const colors = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];

function changeColor() {
    const randomVal = Math.floor(Math.random() * 5);

    containerTag.style.backgroundColor = colors[randomVal];
}