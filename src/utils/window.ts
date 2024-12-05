export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T = any>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const deleteLocalStorage = <T extends { id: string }>(
  username: string,
  productToDelete: T
): void => {
  const currentBasket: T[] = getLocalStorage<T[]>(username) || [];

  // Filtrer le panier pour supprimer l'élément avec l'ID correspondant
  const updatedBasket = currentBasket.filter(
    (product) => product.id !== productToDelete.id
  );

  // Mettre à jour le localStorage avec le panier modifié
  setLocalStorage(username, updatedBasket);
};

