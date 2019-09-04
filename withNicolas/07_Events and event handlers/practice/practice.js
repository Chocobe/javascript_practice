const title = document.querySelector("#title");
function titleFunction() {
    if(title.style.color === "red") {
        title.style.color = "white";

    } else {
        title.style.color = "red";
    }
}
title.addEventListener("click", titleFunction);