import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, filter, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = find(idProductToAdd, basketCopy);

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity++;
    setBasket(basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    //copie du state(optionnal because filter create a new array)
    const basketCopy = deepClone(basket);
    //modification de la copie du state
    const basketUpdated = filter(idBasketProduct, basketCopy);
    //update du state avec le setter
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
