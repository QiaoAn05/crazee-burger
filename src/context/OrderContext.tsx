import { createContext, PropsWithChildren, useContext, useRef, useState } from "react";
import { useMenu } from "../hooks/useMenu";
import { useBasket } from "../hooks/useBasket";
import { EMPTY_PRODUCT } from "../constants/product";
import { find } from "../utils/array";
import { BasketProductQuantity, MenuProduct } from "../types/Product";
//@TODO : Check later if it works with ADMIN_TAB_LABEL
import { ADMIN_TAB_LABEL } from "../constants/tabs";

type OrderContextType = {
  isAdminMode: boolean,
  setIsAdminMode: React.Dispatch<React.SetStateAction<boolean>>,
  isCollapsed: boolean,
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>,
  currentTabSelected: string,
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>,

  menu: MenuProduct[] | undefined,
  setMenu: React.Dispatch<React.SetStateAction<MenuProduct[] | undefined>>,
  handleAdd: (newProduct: MenuProduct, username: string) => void,
  handleDelete: (idOfProductToDelete: string, username: string) => void,
  handleEdit: (productBeingEdited: MenuProduct, username: string) => void,
  resetMenu: (username: string) => void,
  newProduct: Readonly<MenuProduct>,
  setNewProduct: React.Dispatch<React.SetStateAction<Readonly<MenuProduct>>>,

  productSelected: MenuProduct,
  setProductSelected: React.Dispatch<React.SetStateAction<MenuProduct>>,

  titleEditRef: React.RefObject<HTMLInputElement>,

  basket: BasketProductQuantity[],
  setBasket: React.Dispatch<React.SetStateAction<BasketProductQuantity[]>>,
  handleAddToBasket: (idProductToAdd: string, username: string) => void,
  handleDeleteBasketProduct: (idBasketProduct: string, username: string) => void,
  handleSubstractToBasket: (idProductToSubstract: string, username: string) => void,

  handleProductSelected: (idProductClicked: string) => Promise<void>,
}

//1. Création du context
const OrderContext = createContext<OrderContextType | undefined>(undefined); // pas la peine de mettre null, undefined suffit amplement mais faut l'écrire explicitmeent car createContext attend forcément un argument.


//2. Installation du context
export const OrderContextProvider = ({ children }: PropsWithChildren) => {
  //state
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState<string>("add");
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
    await setCurrentTabSelected("edit");
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
