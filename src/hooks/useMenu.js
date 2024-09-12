import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState();

  //comportements

  const handleAdd = (newProduct, username) => {
    //copie du state
    const menuCopy = deepClone(menu);
    //manipulation de la copie
    const menuUpdated = [newProduct, ...menuCopy];
    //update du state avec le setter
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (idOfProductToDelete, username) => {
    //copie du state
    const menuCopy = deepClone(menu);
    //modification de la copie du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    //update du state avec le setter
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    //Copie du state(deep clone)
    const menuCopy = deepClone(menu);
    //Manipulation de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //Update du state avec le setter
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
