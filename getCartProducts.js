import { updateCartValue } from "./updateCartValue";


export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductsLS");
    if(!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    //update the cart value button
    updateCartValue(cartProducts);

    return cartProducts;
}