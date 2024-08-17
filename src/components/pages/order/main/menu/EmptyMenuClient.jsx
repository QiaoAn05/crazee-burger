import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span className="title">Victime de notre succès !</span>
      <span className="description">
        De nouvelles recettes sont en cours de préparation.
      </span>
      <span className="description">À très vite !</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }

  .title {
    font-size: ${theme.fonts.sizes.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }

  .description {
    font-size: ${theme.fonts.sizes.P4};
    margin-top: 20px;
  }
`;
