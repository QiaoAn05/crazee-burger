import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";
import { MenuProduct } from "../types/Product";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>(undefined);

  //comportements

  const handleAdd = (newProduct: MenuProduct, username: string) => {
    if(menu) {
      //copie du state
      const menuCopy = deepClone(menu);
      //manipulation de la copie
      const menuUpdated = [newProduct, ...menuCopy];
      //update du state avec le setter
      setMenu(menuUpdated);
      syncBothMenus(username, menuUpdated);
    }
  };

  const handleDelete = (idOfProductToDelete: string, username: string) => {
      if(menu) {
      //copie du state
      const menuCopy = deepClone(menu);
      //modification de la copie du state
      const menuUpdated = menuCopy.filter(
        (product) => product.id !== idOfProductToDelete
      );
      //update du state avec le setter
      setMenu(menuUpdated);
      syncBothMenus(username, menuUpdated);
    }
  };

  const handleEdit = (productBeingEdited: MenuProduct, username: string) => {
    if(menu) {
      //Copie du state(deep clone)
      const menuCopy = deepClone(menu);
      //Manipulation de la copie du state
      const indexOfProductToEdit = menu.findIndex(
        (product) => product.id === productBeingEdited.id
      );
      menuCopy[indexOfProductToEdit] = productBeingEdited;

      //Update du state avec le setter
      setMenu(menuCopy);
      syncBothMenus(username, menuCopy);
    }
  };

  const resetMenu = (username: string) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
