const zip = require("./validateZip");

describe('Test Zip Code', () => {
    test("Validate Zip Code is correct", () => {
        expect(zip("08820-1234")).toEqual(true);
    });

    test("Validate Zip code is incorect", () => {
        expect(zip("08820-13123")).toEqual(false);
    });
  });