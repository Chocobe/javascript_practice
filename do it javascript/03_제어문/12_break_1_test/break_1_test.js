function testFunction() {
    for(var i = 1; i <= 10; i++) {
        if(i === 6) {
            break;
        }

        document.write(`<p>${i}</p>`);
    }

    document.write("<p>----- END -----</p>");
}
testFunction();