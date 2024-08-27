import React from "react";
import styled from "styled-components";
import Header from "../../../../reusable-ui/Header";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </FooterStyled>
      ;
    </Header>
  );
}

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.sizes.P2};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;
