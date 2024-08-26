import React from "react";
import styled from "styled-components";

export default function BasketOrder() {
  return <BasketOrderStyled>BasketOrder</BasketOrderStyled>;
}

const BasketOrderStyled = styled.div`
  background-color: green;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
