var ID = "chocobe",
    PW = "123";

var inputId = prompt("ID를 입력하세요");
var inputPw = prompt("비밀번호를 입력하세요");

logIn(inputId, inputPw);
    
function logIn(id, pw) {
    if(id === ID) {
        if(pw === PW) {
            document.write(`${id} 님 방문을 환영합니다.`, "<br>");

        } else {
            document.write(`잘못된 비밀번호 입니다.`, "<br>");
        }

    } else {
        document.write(`존재하지 않는 아이디입니다.`, "<br>");
    }
}