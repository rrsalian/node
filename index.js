const cart = [];

function addToCart( name, price, quantity) {
    const newCartItem = { name, price, quantity };
    cart.push(newCartItem);
}

function emptyCart() {
    cart = [];
}

module.exports = {
    addToCart,
    emptyCart,
    cart
};