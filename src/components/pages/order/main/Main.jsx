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
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    /* background-color: ${theme.colors.background_white}; */
    display: grid;
    grid-template-rows: 1fr;
    /* grid-template-columns: 1fr 3fr; */
    grid-template-columns: 1fr;
    overflow: auto;
`;