for(let i = 0; i < 3; i++) {
    console.log(`${i} 번째 루프`);
}

console.log("");

const player = {name:"kim", age:123, addr:"부산"};
for(const val in player) {
    console.log(val);
}