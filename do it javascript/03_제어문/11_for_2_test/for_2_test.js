for(var i = 1; i <= 100; i++) {
    if(i % 5 === 0 && i % 7 === 0) {
        document.write(`<p class="aqua">${i}</p>`);

    } else if(i % 5 === 0) {
        document.write(`<p class="red">${i}</p>`);

    } else if(i % 7 === 0) {
        document.write(`<p class="blue">${i}</p>`);
    }
}