import { createContext, PropsWithChildren, useContext, useRef, useState } from "react";
import { useMenu } from "../hooks/useMenu";
import { useBasket } from "../hooks/useBasket";
import { EMPTY_PRODUCT } from "../constants/product";
import { find } from "../utils/array";
import { MenuProduct } from "../types/Product";
import { ADMIN_TAB_LABEL } from "../constants/tabs";

//1. Création du context
const OrderContext = createContext({
  username: "",
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
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
  handleSubstractToBasket: () => {},

  handleProductSelected: () => {},
});

//2. Installation du context
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  //state
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState<ADMIN_TAB_LABEL>(ADMIN_TAB_LABEL.ADD);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState<MenuProduct>(EMPTY_PRODUCT);
  const titleEditRef = useRef<HTMLInputElement>(null);
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleSubstractToBasket,
  } = useBasket();

  const handleProductSelected = async (idProductClicked: string) => {
    if(!menu) return
    const productClickedOn = find(idProductClicked, menu);
    if(productClickedOn === undefined) return
    await setIsCollapsed(false);
    await setCurrentTabSelected(ADMIN_TAB_LABEL.EDIT);
    await setProductSelected(productClickedOn);
    titleEditRef.current?.focus();
  };

  const orderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
    handleSubstractToBasket,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      {children}
    </OrderContext.Provider>
  );
};

//3. Consommation du context
export const useOrderContext = () => useContext(OrderContext);
