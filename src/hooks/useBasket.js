import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);
    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined;
    //1er cas : Le produit n'est pas dans le basket
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    //2eme cas : Le produit est déjà dans le basket
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity++;
    setBasket(basketCopy);
  };

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket };
};
