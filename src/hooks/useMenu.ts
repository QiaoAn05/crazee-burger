import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

type ProductType = {
  id: string;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isPublicised: boolean;
};

type MenuType = ProductType[]

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuType>();

  //comportements

  const handleAdd = (newProduct: ProductType, username: string) => {
    //copie du state
    const menuCopy = deepClone(menu);
    //manipulation de la copie
    const menuUpdated = [newProduct, ...menuCopy];
    //update du state avec le setter
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (idOfProductToDelete: string, username: string) => {
    //copie du state
    const menuCopy = deepClone(menu);
    //modification de la copie du state
    const menuUpdated = menuCopy.filter(
      (product: ProductType) => product.id !== idOfProductToDelete
    );
    //update du state avec le setter
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEdit = (productBeingEdited: ProductType, username: string) => {
    //Copie du state(deep clone)
    const menuCopy = deepClone(menu);
    //Manipulation de la copie du state
    if(menu) {
      const indexOfProductToEdit = menu.findIndex(
        (product: ProductType) => product.id === productBeingEdited.id
      );
      menuCopy[indexOfProductToEdit] = productBeingEdited;
    }//check if menu exist then apply the code

    //Update du state avec le setter
    setMenu(menuCopy);
    syncBothMenus(username, menuCopy);
  };

  const resetMenu = (username: string) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
