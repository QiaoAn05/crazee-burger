import React from "react";
import styled from "styled-components";

export default function BasketFooter() {
  return <BasketFooterStyled>BasketFooter</BasketFooterStyled>;
}

const BasketFooterStyled = styled.div`
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;
