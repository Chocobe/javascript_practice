var currentNum = 0;

function recursive() {
    currentNum++;
    document.write(currentNum, "<br>");

    if(currentNum >= 10) {
        return;
    }

    recursive();
}
recursive();