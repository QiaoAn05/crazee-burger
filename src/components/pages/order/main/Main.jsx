import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";
import Admin from "./admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket/> */}
      <div className="menu-and-admin">
        <Menu/>
        <Admin/>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-rows: 1fr;
    /* grid-template-columns: 25% 1fr; */
    grid-template-columns: 1fr;
    overflow: auto;

    .menu-and-admin {
      position: relative;
      
    }
`;