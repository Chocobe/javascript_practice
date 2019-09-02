let funds = 50;
console.log(`기본급 : ${funds}`);

while(funds > 1 && funds < 100) {
    funds = funds + 10;
    console.log(`+10 : ${funds}`);

    funds = funds - 1
    console.log(`-1 : ${funds}`);
}

console.log("프로그램 종료");