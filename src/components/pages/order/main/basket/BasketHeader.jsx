import React from "react";
import styled from "styled-components";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <span className="total">Total</span>
      <span className="price">0,00 €</span>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  background: #292729;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  span {
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 400;
    line-height: 45.4px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffa01b;
  }

  .total {
    font-weight: 400;
  }

  .price {
    font-weight: 700;
  }
`;
