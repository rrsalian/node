const { add, subtract, multiply, divide} = require("./math.js");

describe('add', () => {
    test("Verify add function returns success", () => {
        expect(add(2, 3)).toEqual(5);
    })
  });

describe('subtract', () => {
    test("Verify subtract function returns success", () => {
        expect(subtract(2, 3)).toEqual(-1);
    })
  });

describe('multiply', () => {
    test("Verify multiply function returns success", () => {
        expect(multiply(2, 3)).toEqual(6);
    })
  });

describe('divide', () => {
    test("Verify divide function returns success", () => {
        expect(divide(2, 3)).toEqual(1);
    })
  }); 
