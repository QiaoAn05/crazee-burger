import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  //state
  const [isAdminMode, setIsAdminMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //comportements

  const handleAdd = (newProduct) => {
    //copie du state
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //manipulation de la copie
    const menuUpdated = [newProduct, ...menuCopy];
    //update du state avec le setter
    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    //copie du state
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //modification de la copie du state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    //update du state avec le setter
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    //Copie du state(deep clone)
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //Manipulation de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    console.log("indexOfProductToEdit: ", indexOfProductToEdit);
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    //Update du state avec le setter
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  const orderContextValue = {
    isAdminMode,
    setIsAdminMode,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
  };

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
