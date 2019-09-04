function handleResize(event) {
    console.log(event);
}
window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");
function handleClick() {
    title.style.color = "cyan";
}
title.addEventListener("click", handleClick);

console.dir(title);