import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
    //state
    const [isAdminMode, setIsAdminMode] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    
    //comportements
    
    const handleAdd = (newProduct) => {
      //copie du state
      const menuCopy = [...menu]
      //manipulation de la copie
      const menuUpdated = [newProduct,...menuCopy]
      //update du state avec le setter
      setMenu(menuUpdated)
    }
    
    const orderContextValue = {
      isAdminMode,
      setIsAdminMode,
      isCollapsed,
      setIsCollapsed,
      currentTabSelected, 
      setCurrentTabSelected,
      menu,
      handleAdd,
    }


    //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>  
      <OrderPageStyled>
          <div className="container">
            <Navbar />
            <Main/>
          </div>   
      </OrderPageStyled>
    </OrderContext.Provider>
  )
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
