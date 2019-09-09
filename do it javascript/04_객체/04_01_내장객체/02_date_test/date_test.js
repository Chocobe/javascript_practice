var today = new Date(),
    nowYear = today.getFullYear();

var theDate = new Date(nowYear, 8, 30);
var diffDate = theDate - today;

var result = Math.ceil(diffDate / (1000 * 60 * 60 * 24));

document.write("<h1>오늘부터 이번달 말 깢기 남은 날짜</h1>");
document.write(`남은 날짜 : ${result}`);