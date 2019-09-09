const id = "chocobe";
const password = "111";

var idCheck = prompt("ID를 입력하세요");
var passwordCheck = prompt("Password를 입력하세요");

if(id == idCheck) {
    if(password == passwordCheck) {
        document.write(`${id}님 반갑습니다`);

    } else {
        document.write("비밀번호가 틀렸습니다");
    }

} else {
    document.write("아이디가 틀렸습니다");
}