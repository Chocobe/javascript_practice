var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function() {
    addNum++;
    console.log(`addNum : ${addNum}`);
}, 3000);

var auto_2 = setInterval(function() {
    subNum--;
    console.log(`subNum : ${subNum}`);
}, 3000);