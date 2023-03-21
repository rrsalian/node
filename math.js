function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return Math.round(a / b);
}

//console.log(divide(2,3));

module.exports = {
    add,
    subtract,
    multiply,
    divide
}
