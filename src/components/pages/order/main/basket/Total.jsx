import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { find } from "../../../../../utils/array";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

export default function Total() {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} className={"amount"} />
        {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.sizes.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = find(basketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);
};
