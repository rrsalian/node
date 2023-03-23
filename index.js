let cart = [];

function addToCart( name, price, quantity) {
    const newCartItem = { name, price, quantity };
    cart.push(newCartItem);
}

function emptyCart() {    
    cart.length = 0;    
}

module.exports = {
    addToCart,
    emptyCart,
    cart
};

/*
addToCart('milk',1,2);
addToCart('oil',2,3);
console.log(cart);
emptyCart();
console.log(cart);
*/