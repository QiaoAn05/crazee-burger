import React from "react";
import { formatPrice } from "../../../../../../utils/maths";
import styled from "styled-components";

export default function Order({ imageSource, title, price, quantity }) {
  return (
    <OrderStyled>
      <img src={imageSource} alt={title} />
      <div>{title}</div>
      <div>{formatPrice(price)}</div>
      <div>{quantity}</div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  img {
    height: 100px;
    width: 100px;
  }
`;
