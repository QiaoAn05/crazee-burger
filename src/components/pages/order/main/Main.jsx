import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}

const MainStyled = styled.div`
    width: 100%;
    flex: 1;
    box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    /* background-color: ${theme.colors.background_white}; */
    background-color: purple;
`;