var page = 1;

var BEFORE = 0,
    NEXT = 1;

function gallery(direct) {
    if(direct === NEXT) {
        page++;
        
        if(page >= 10) {
            page = 9;
        }

    } else {
        page--;

        if(page <= 0) {
            page = 1;
        }
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", `image/pic_${page}.jpg`);
}