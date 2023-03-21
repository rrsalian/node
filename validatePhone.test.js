const phone = require("./validatePhone");

describe('Test Phone Number', () => {
    test("Validate Phone number is correct", () => {
        expect(phone("(102)-122-9999")).toEqual(true);
    });

    test("Validate Phone number is incorect", () => {
        expect(phone("A02-122-9999")).toEqual(false);
    });
  });

 
 