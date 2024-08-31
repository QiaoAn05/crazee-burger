import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setIsAdminMode: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},
  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: {},

  basket: [],
});
