var pageNumTag = document.querySelector(".pageNum"),
    imageTag = document.querySelector(".photo");

var page = 1;

var BEGIN = 1,
    LAST = 8;

function flowPage() {
    if(page < LAST) {
        page++;

    } else {
        page = 1;
    }

    pageNumTag.innerText = page;
    imageTag.setAttribute("src", `../image/pic_${page}.jpg`);
}

function init() {
    setInterval(flowPage, 1000);
}
init();