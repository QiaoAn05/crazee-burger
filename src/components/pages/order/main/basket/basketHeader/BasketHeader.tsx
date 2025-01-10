import styled from "styled-components";
import { theme } from "../../../../../../theme";
import Header from "../../../../../reusable-ui/Header";
import { useOrderContext } from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import { calculateSumToPay } from "./helper";

export default function BasketHeader() {
  const { basket, menu } = useOrderContext();
  
  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <BasketHeaderStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
      </BasketHeaderStyled>
    </Header>
  );
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.sizes.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
