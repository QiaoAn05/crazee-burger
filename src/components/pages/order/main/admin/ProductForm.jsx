import styled from "styled-components";
import Image from "./Image";
import Inputs from "./Inputs";
import SuccessButton from "../../../../reusable-ui/SuccessButton";

export default function ProductForm() {
  return (
    <ProductFormStyled action="submit">
        <Image/>
        <Inputs/>
        <SuccessButton Label="Ajouter un nouveau produit au menu"/>
    </ProductFormStyled>
  )
}

const ProductFormStyled = styled.form`
  background-color: purple;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3fr 1fr;
  padding-left: 71px;
  padding-top: 31px;
  width: 880px;
  column-gap: 20px;
  row-gap: 10px;

  &>:last-child {
    grid-column: 2/2;
    padding: 10px 20px;
  }
`;
