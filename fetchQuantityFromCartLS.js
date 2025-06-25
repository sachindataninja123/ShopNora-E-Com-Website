import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id, defaultPrice) => {
    let cartProducts = getCartProductFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    if (existingProduct) {
        return {
            quantity: existingProduct.quantity,
            price: existingProduct.price,
        };
    }

    // If not found in cart, return default values
    return {
        quantity: 1,
        price: defaultPrice,
    };
};
