var t = "Hello Thank you good luck to you";

document.write(t.charAt(16), "<br>");
document.write(t.indexOf("you"), "<br>");

document.write(t.indexOf("you", 16), "<br>");

document.write(t.lastIndexOf("you"), "<br>");

document.write(t.lastIndexOf("you", 25), "<br>");

document.write(t.match("luck"), "<br>");

document.write(t.search("you"), "<br>");

document.write(t.substr(21, 4), "<br>");

document.write(t.replace("you", "me"), "<br>");

document.write(t.toLowerCase(), "<br>");

document.write(t.toUpperCase(), "<br>");

document.write(t.length, "<br>");


var s = t.split(" ");

document.write(s[0], "<br>");
document.write(s[4], "<br>");


var str = "A";
var x = str.charCodeAt(0);
document.write(x, "<br>");


document.write(String.fromCharCode(65));