import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket/> */}
      <div className="menu-and-admin">
        <Menu/>
        <div className="admin">Admin</div>
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
      .admin {
        background-color: red;
        height: 250px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
`;