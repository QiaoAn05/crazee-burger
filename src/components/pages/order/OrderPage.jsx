import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
    //state
    const [isAdminMode, setIsAdminMode] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
 
    //comportements

    const orderContextValue = {
      isAdminMode,
      setIsAdminMode,
      isCollapsed,
      setIsCollapsed,
      isAddSelected,
      setIsAddSelected,
      isEditSelected,
      setIsEditSelected,
      currentTabSelected, 
      setCurrentTabSelected,
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
