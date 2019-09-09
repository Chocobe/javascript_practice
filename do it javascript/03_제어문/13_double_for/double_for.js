const row = 5;

for(var i = 1; i <= row; i++) {
    var currentString = "";
    
    for(var j = 1; j <= i; j++) {
        currentString = currentString + "* ";
    }

    document.write("<p>" + currentString + "</p>");
}