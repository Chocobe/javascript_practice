function sayHello(name, age) {
    return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("Nicolas", 15);
console.log(greetNicolas);


const calculateor = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculateor.plus(5, 5);
console.log(plus);