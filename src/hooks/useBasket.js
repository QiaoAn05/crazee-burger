import { useState } from "react";
import { deepClone, filter, find, findIndex } from "../utils/array";
import { deleteLocalStorage, setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = find(idProductToAdd, basketCopy);

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
  };

  const incrementProductAlreadyInBasket = (
    idProductToAdd,
    basketCopy,
    username
  ) => {
    const indexOfBasketProductToIncrement = findIndex(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity++;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const handleSubstractToBasket = (idProductToSubstract, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = find(idProductToSubstract, basketCopy);

    if (productAlreadyInBasket) {
      decrementProductAlreadyInBasket(
        idProductToSubstract,
        basketCopy,
        username
      );
      return;
    }
  };

  const decrementProductAlreadyInBasket = (
    idProductToSubstract,
    basketCopy,
    username
  ) => {
    const indexOfBasketProductToDecrement = findIndex(
      idProductToSubstract,
      basketCopy
    );
    basketCopy[indexOfBasketProductToDecrement].quantity--;
    if (basketCopy[indexOfBasketProductToDecrement].quantity <= 0) {
      const productToDelete = basketCopy[indexOfBasketProductToDecrement];
      // Retirer l'élément du panier
      basketCopy.splice(indexOfBasketProductToDecrement, 1);
      setBasket(basketCopy);

      // Supprimer uniquement ce produit du localStorage
      deleteLocalStorage(username, productToDelete);
      return;
    }
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const createNewBasketProduct = (
    idProductToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = filter(idBasketProduct, basket);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleSubstractToBasket,
  };
};
