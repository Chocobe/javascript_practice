document.write("<h1>컴퓨터 가위, 바위, 보 맞추기</h1>");

var game = prompt("가위, 바위, 보  중 선택하세요");
var gameNum = 0;

switch(game) {
    case "가위":
        gameNum = 1;
        break;

    case "바위":
        gameNum = 2;
        break;

    case "보":
        gameNum = 3;
        break;

    default:
        document.write("잘못 작성하였습니다");
        break;
}

var com = Math.ceil(Math.random() * 3);

document.write(`<img src="image/math_img_${com}.jpg">`);

if(gameNum === com) {
    document.write(`<img src="image/game_1.jpg">`);

} else {
    document.write(`<img src="image/game_2.jpg">`);
}