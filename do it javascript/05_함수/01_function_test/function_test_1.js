var count = 0;

myFunc();

function myFunc() {
    count++;
    document.write(`Hello ${count}`, "<br>");
}

myFunc();

var theFunc = function() {
    count++;
    document.write(`bye ${count}`, "<br>");
}

theFunc();