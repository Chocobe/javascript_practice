const myFunction = {
    plus: function(lhs, rhs) {
        return lhs + rhs;
    },

    minus: function(lhs, rhs) {
        return lhs - rhs;
    },

    mul: function(lhs, rhs) {
        return lhs * rhs;
    },

    div: function(lhs, rhs) {
        return lhs / rhs;
    },

    pow: function(lhs, rhs) {
        return lhs ** rhs;
    },

    calcOperators: function(lhs, rhs) {
        return `lhs:${lhs}, ` +
               `rhs:${rhs}, ` + 
               `plus:${this.plus(lhs, rhs)}, ` +
               `minus:${this.minus(lhs, rhs)}, ` +
               `mul:${this.mul(lhs, rhs)}, ` +
               `div:${this.div(lhs, rhs)}, ` + 
               `pow:${this.pow(lhs, rhs)}`;
    }
};

console.log(myFunction.calcOperators(2, 3));

// thank you for your awesome lecture
// I felt to be a programmer because I have my FUNCTIONs ; )