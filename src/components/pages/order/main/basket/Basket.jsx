import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./basketBody/BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.aside`
  background-color: pink;
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.basket};
`;
