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
    const [menu, setMenu] = useState(fakeMenu.SMALL)
 
    //comportements

    const orderContextValue = {
      isAdminMode,
      setIsAdminMode,
      isCollapsed,
      setIsCollapsed,
      currentTabSelected, 
      setCurrentTabSelected,
      menu,
      setMenu,
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
