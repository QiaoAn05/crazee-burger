import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SavingMessage() {
  return (
    <SavingMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span className="sentence">Modifications enregistrées !</span>
    </SavingMessageStyled>
  );
}

const SavingMessageStyled = styled.div`
  display: flex;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.sizes.SM};

  .icon {
    font-size: ${theme.fonts.sizes.SM};
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
`;
