import React from "react";
import styled from "styled-components";

export default function BasketOrder() {
  return (
    <BasketOrderStyled>
      <p className="basket-empty">Votre commande est vide.</p>
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div`
  background: #f5f5f7;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .basket-empty {
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    color: #747b91;
  }
`;
