import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    //copie du state
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined;
    //manip de la copie du state
    //Le produit n'est pas dans le basket
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      //update du state
      setBasket(basketUpdated);
    }
    //Le produit est déjà dans le basket
    if (isProductAlreadyInBasket) {
      const indexOfBasketProductToIncrement = basketCopy.findIndex(
        (basketProduct) => basketProduct.id === productToAdd.id
      );

      basketCopy[indexOfBasketProductToIncrement].quantity++;
      //update du state
      setBasket(basketCopy);
    }
  };

  return { basket, handleAddToBasket };
};
