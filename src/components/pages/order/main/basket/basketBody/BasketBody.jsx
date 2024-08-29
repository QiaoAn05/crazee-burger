import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EmptyOrder from "./EmptyOrder";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <EmptyOrder />
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
`;
