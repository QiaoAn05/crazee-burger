import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      Cliquer sur un produit pour le modifier <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.span`
  font-family: Amatic SC;
  font-size: 24px;
  font-weight: 400;
  line-height: 30.26px;
  text-align: left;
  color: #747b91;
`;
