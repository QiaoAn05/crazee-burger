import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  // const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      {/* correction */}
      {/* {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />} */}
      <EmptyBasket />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.aside`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.basket};
`;
