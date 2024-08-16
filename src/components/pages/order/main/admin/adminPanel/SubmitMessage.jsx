import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }

  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.sizes.P0};
    color: ${theme.colors.success};
  }
`;
