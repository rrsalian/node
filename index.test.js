const arrayFunctions = require("./index.js");

describe('Our array functions', () => {
    
    describe('addToCart Function', () => {
        test('An item is added to cart', () => {
            arrayFunctions.addToCart('milk', 3, 1);
            expect(arrayFunctions.cart.length).toEqual(1);
            expect(arrayFunctions.cart[0].name).toEqual('milk');
            expect(arrayFunctions.cart[0].price).toEqual(3);
            expect(arrayFunctions.cart[0].quantity).toEqual(1);
        });

        test('Calling addToCart is many times', () => {
            arrayFunctions.emptyCart;
            arrayFunctions.addToCart('abc', 3, 1);
            arrayFunctions.addToCart('pop tarts', 5, 4);
            expect(arrayFunctions.cart.length).toEqual(2);
        });
    });        

});