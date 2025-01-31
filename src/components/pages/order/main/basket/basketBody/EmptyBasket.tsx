import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../../constants/product";

type EmptyBasketProps = {
  isLoading: boolean
}

export default function EmptyBasket({ isLoading }: EmptyBasketProps) {
  return (
    <EmptyBasketStyled>
      <span>{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.span`
  display: flex;
  height: calc(95vh - 10vh - 70px - 70px);
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 2;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.sizes.P4};
  color: ${theme.colors.greyBlue};
`;
