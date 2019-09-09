var array = [30, "따르릉", true];

document.write("<h3>배열값 가져오기-1</h3>");

document.write(array[0], "<br>");
document.write(array[1], "<br>");
document.write(array[2], "<br>");

document.write("<br>");

for(var i = 0; i < 3; i++) {
    document.write(array[i], "<br>");
}
document.write("<br>");

for(var i in array) {
    document.write(array[i], "<br>");
}