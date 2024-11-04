export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteLocalStorage = (username, productToDelete) => {
  const currentBasket = getLocalStorage(username) || [];

  // Filtrer le panier pour supprimer l'élément avec l'ID correspondant
  const updatedBasket = currentBasket.filter(
    (product) => product.id !== productToDelete.id
  );

  // Mettre à jour le localStorage avec le panier modifié
  setLocalStorage(username, updatedBasket);
};
