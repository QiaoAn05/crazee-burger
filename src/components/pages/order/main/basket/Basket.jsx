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
  background: #f5f5f7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 0px 15px;
  width: 350px;
`;