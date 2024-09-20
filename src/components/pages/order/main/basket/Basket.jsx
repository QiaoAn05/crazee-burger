import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import BasketBody from "./basketBody/BasketBody";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
