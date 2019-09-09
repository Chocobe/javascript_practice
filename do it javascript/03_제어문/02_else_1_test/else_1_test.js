// 좋아하는 숫자 입력
// 짝수, 홀수 출력하기

var num = prompt("당신이 좋아하는 숫자는?", 0);

if(num % 2 == 0) {
    document.write(`당신이 좋아하는 숫자 ${num} 은 짝수 입니다`);

} else {
    document.write(`당신이 좋아하는 숫자 ${num} 은 홀수 입니다`);
}