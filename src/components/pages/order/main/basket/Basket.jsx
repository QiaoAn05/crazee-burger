import styled from "styled-components";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketOrder from "./BasketOrder";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketOrder />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.aside`
  background-color: red;
  display: flex;
  flex-direction: column;
`;
