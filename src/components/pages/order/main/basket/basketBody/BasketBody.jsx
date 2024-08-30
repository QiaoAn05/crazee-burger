import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EmptyOrder from "./EmptyOrder";
import { fakeBasket } from "../../../../../../fakeData/fakeBasket";
import Order from "./Order";

export default function BasketBody() {
  const [basket, setBasket] = useState(fakeBasket.LARGE);

  return (
    <BasketBodyStyled>
      {/* <EmptyOrder /> */}
      {basket.map(({ id, imageSource, title, price, quantity }) => (
        <Order
          key={id}
          imageSource={imageSource}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  /* height: 694.69px; */
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr; */
  grid-gap: 20px;
  /* overflow: scroll; */
`;
