var page = 1;
var NEXT = 1,
    BEFORE = 0;

function gallery(direct) {
    if(direct == NEXT) {
        if(page >= 8) {
            return;
        }

        page++;

    } else {
        if(page <= 1) {
            return;
        }

        page--;
    }

    console.log(page);

    var imageTag = document.getElementById("photo");
    imageTag.setAttribute("src", `../image/pic_${page}.jpg`);
}