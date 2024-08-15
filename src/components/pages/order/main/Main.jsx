import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  const { isAdminMode } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <Basket/> */}
      <div className="menu-and-admin">
        <Menu />
        {isAdminMode && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  flex: 1;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
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
