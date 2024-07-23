import styled from "styled-components";
import { theme } from "../../../../theme";
import Basket from "./Basket";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket/> */}
      <Menu/>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    /* box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset; */
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.background_white};
    display: grid;
    grid-template-rows: 1fr;
    /* grid-template-columns: 1fr 6fr; basket + menu */
    grid-template-columns: 1fr;
`;