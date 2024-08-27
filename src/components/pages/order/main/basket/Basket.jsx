import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketOrder from "./BasketOrder";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";

export default function Basket() {
  return (
    <BasketStyled>
      {/* <BasketHeader />
      <BasketOrder />
      <BasketFooter /> */}

      <Total amountToPay={formatPrice(0)} />

      <div className="body">Body</div>
      <Header>footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.aside`
  /* background: #f5f5f7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 15px;
  width: 350px; */
  /* correction Vi */
  background-color: pink;
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.basket};

  .body {
    flex: 1;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
