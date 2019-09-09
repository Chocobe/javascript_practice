var info = navigator.userAgent.toLowerCase();
var osImg = null;

if(info.indexOf("windows") >= 0) {
    osImg = "image/windows.png";

} else if(info.indexOf("macintosh") >= 0) {
    osImg = "image/macintosh.png";

} else if(info.indexOf("iphone") >= 0) {
    osImg = "image/iphone.png";

} else if(info.indexOf("android") >= 0) {
    osImg = "image/android.png";
}

document.write(`<img src="${osImg}">`, "<br>");
var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

document.write(`모니터 해상도 너비 : ${sc_w}`);
document.write(`모니터 해상도 높이 : ${sc_h}`);