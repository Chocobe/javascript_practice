const startTable = `<table border="1">`,
    endTable = "</table>"
    startTr = "<tr>",
    endTr = "</tr>";

var row = 0;
    
var result = "";

function printTable() {
    document.write(startTable);
    result = "";

    for(var i = 0; i < 5; i++) {
        result = startTr;

        for(var j = 1; j <= 5; j++) {
            row = i * 5 + j;
            result += `<td>${row}</td>`;
        }

        result += endTr;
        document.write(result);
    }

    document.write(endTable);
}
printTable();