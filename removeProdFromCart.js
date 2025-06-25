import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

export const removeProdFromCart = (id) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    //update the localStorage after removing the item
    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    // to remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv) {
        removeDiv.remove();

        //show toast when product added to the cart
        showToast("delete", id);
    }
    updateCartValue(cartProducts);
}