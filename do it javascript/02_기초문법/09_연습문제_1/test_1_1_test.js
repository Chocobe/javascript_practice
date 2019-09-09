// 적정 지출 비용의 초과여부 출력하기
//
// 1. 교통비 : 3000
// 2. 식비 : 6000
// 3. 음료 : 3000
// 하루 적정 지출 금액 : 10000
//
// 초과 : "000원 초과"
// 이하 : "돈 관리 잘 했어요!"

var target = 10000;

var price1 = 3000;
var price2 = 6000;
var price3 = 3000;
var total = price1 + price2 + price3;

var result = target >= total ? "돈 관리 잘 했어요!" : `${total - target}원 초과`;
document.write(result);