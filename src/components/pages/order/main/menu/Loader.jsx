import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function Loader() {
  return <LoaderStyled>Chargement...</LoaderStyled>;
}

const LoaderStyled = styled.span`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.round};
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.sizes.P4};
  font-weight: ${theme.fonts.weights.medium};
`;
