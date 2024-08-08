import styled from "styled-components";
import Image from "./Image";
import Inputs from "./Inputs";

export default function ProductForm() {
  return (
    <ProductFormStyled action="submit">
        <Image/>
        <Inputs/>
        {/* <PrimaryButton Label="Ajouter un nouveau produit au menu"/> */}
        <button className="SuccessButton">Ajouter un nouveau produit au menu</button>
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

  .SuccessButton {
    background-color: green;
    grid-column: 2/2;
  }
`;
