function sum() {
    var sum = 0;
    
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    document.write(`총 합 : ${sum}`, "<br>");
}

sum(1, 2, 10);