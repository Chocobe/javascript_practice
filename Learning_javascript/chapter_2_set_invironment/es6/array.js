const array1 = [1, 2, 3, 4];
const array2 = [1, 'two', 3, null];
const array3 = [
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?"
];
const array4 = [
    {name : "Ruby", hardness : 9},
    {name : "Diamond", hardness : 10},
    {name : "Topaz", hardness : 8}
];
const array5 = [
    [1, 3, 5],
    [2, 4, 6]
];

const testFunction = function(array) {
    console.log("배열[0] : " + array[0]);
    console.log(`배열[1] : ${array[1]}`);
    console.log("배열길이 : " + array.length + "\n");
};
testFunction(array3);

const array2Function = function() {
    console.log(`array2[0] : ${array2[0]}, ` +
                `array2[1] : ${array2[1]}, ` +
                `array2[2] : ${array2[2]}, ` +
                `array2[3] : ${array2[3]}\nHello World`);
};
array2Function();

const array3Function = function() {
    console.log(array3.toString());
}
array3Function();