export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// export const getLocalStorage = (key: string): unknown | null => {
//   const item = localStorage.getItem(key);
//   if(item) return JSON.parse(item);
// };

export const deleteLocalStorage = <T extends { id: string }>(
  username: string,
  productToDelete: T
) => {
  const currentBasket: T[] = getLocalStorage<T[]>(username) || [];

  // Filtrer le panier pour supprimer l'élément avec l'ID correspondant
  const updatedBasket = currentBasket.filter(
    (product) => product.id !== productToDelete.id
  );

  // Mettre à jour le localStorage avec le panier modifié
  setLocalStorage(username, updatedBasket);
};

