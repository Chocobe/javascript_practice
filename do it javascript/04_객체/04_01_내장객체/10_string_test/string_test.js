var userEmail = prompt("당신의 이메일 주소는?");
var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

var check1 = false,
    check2 = false;

if(userEmail.indexOf("@") > 0) {
    check1 = true;
}

for(var i = 0; i < arrUrl.length; i++) {
    if(userEmail.indexOf(arrUrl[i]) > 0) {
        check2 = true;
    }
}

if(check1 && check2) {
    document.write(userEmail);

} else {
    document.write("이메일 형식이 잘못 되었습니다.");
}