// 질의응답 창으로 4분기 판매량 입력받기
// 1,2,3 분기 판매량의 평균과 비교하여,
// 크거나 같을 때 : 판매량이 평균 이상입니다.
// 작을 때 : 판매량이 평균 미달입니다
// 출력하기

const first = 1200;
const second = 1300;
const third = 1000;
var fourth = 0;

const avg = (first + second + third) / 3;

fourth = prompt("4분기 판매량 : ", 0);
var result = fourth >= avg ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";

document.write(result);