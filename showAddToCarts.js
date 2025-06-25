
import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProducts";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curprod) => {
  //     console.log(curprod.id);
  return cartProducts.some((curElem) => curElem.id === curprod.id);
});

console.log(filterProducts);

// to update the addtocart page

const cardElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curprod) => {
    const { category, id, image, name, stock, price } = curprod;

    let productClone = document.importNode(templateContainer.content, true);


    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productPrice").textContent = lSActualData.price;
    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;

    //handle increment and decrement button
    productClone.querySelector(".stockElement").addEventListener("click" ,(event) => {
      incrementDecrement(event, id, stock, price);
    });

    productClone.querySelector(".remove-to-cart-button").addEventListener("click",() => removeProdFromCart(id));

    cardElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal();
