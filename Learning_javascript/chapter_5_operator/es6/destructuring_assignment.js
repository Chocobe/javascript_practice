const obj = {b:2, c:3, d:4};

const {a, b, c, d} = obj;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


const obj2 = {x:10, y:20, z:30};
let x, y, z;
({x, y, z} = obj2);
console.log(x);
console.log(y);
console.log(z);


const arr = [1, 2, 3];
let [a1, b1, c1] = arr;
console.log(a1);
console.log(b1);
console.log(c1);