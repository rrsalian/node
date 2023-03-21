const isAdult = require("./age");

describe('test isAdult', () => {
    test("Verify age is >= 18 is a success", () => {
        expect(isAdult(19)).toEqual(true);
    });

    test("Verify age is >= 18 is a Fail", () => {
        expect(isAdult(16)).toEqual(false);
    });
  });

