import React from "react";
import styled from "styled-components";

export default function BasketFooter() {
  return (
    <BasketFooterStyled>
      <p className="footer-message">Codé avec ❤️ et React.JS</p>
    </BasketFooterStyled>
  );
}

const BasketFooterStyled = styled.div`
  box-sizing: border-box;
  background: #292729;
  display: flex;
  justify-content: center;
  align-items: center;
  width: Hug (350px) px;
  height: Hug (70px) px;
  top: 764.69px;
  /* padding: 22.5px 102.95px 22.5px 105.05px; */
  gap: 0px;
  border-radius: 0px 0px 0px 15px;
  opacity: 0px;

  .footer-message {
    font-family: Amatic SC;
    font-size: 20px;
    font-weight: 700;
    line-height: 25.22px;
    text-align: left;
    color: #ffffff;
    padding: 0;
  }
`;
