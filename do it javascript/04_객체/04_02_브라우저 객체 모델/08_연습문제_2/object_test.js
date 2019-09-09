var menu = ["짜장면", "돈까스", "된장국", "김치찌개", "회덮밥"];
var menuNum = Math.floor(Math.random() * 5);
var result = menu[menuNum];

document.write(`선택된 메뉴 : ${result}`);