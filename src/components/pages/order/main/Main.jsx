import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  const { isAdminMode, setIsAdminMode } = useContext(OrderContext)

  return (
    <MainStyled>
      {/* <Basket/> */}
      <div className="menu-and-admin">
        <Menu/>
        {isAdminMode && <Admin/>}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};
    
    display: grid;
    grid-template-rows: 1fr;
    /* grid-template-columns: 25% 1fr; */
    grid-template-columns: 1fr;
    overflow: auto;

    .menu-and-admin {
      position: relative;
      
    }
`;