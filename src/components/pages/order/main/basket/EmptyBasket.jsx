import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span>Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.span`
  display: flex;
  height: calc(95vh - 10vh - 70px - 70px);
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 2;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.sizes.P4};
  color: ${theme.colors.greyBlue};
`;
