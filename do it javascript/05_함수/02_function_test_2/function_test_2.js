var bodyTag = document.getElementById("theBody");
var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor() {
    i++;
    if(i >= color.length) {
        i = 0;
    }

    bodyTag.style.backgroundColor = color[i];
}