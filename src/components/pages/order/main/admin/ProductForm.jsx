import styled from "styled-components";
import Image from "./Image";
import Inputs from "./Inputs";
import SuccessButton from "../../../../reusable-ui/SuccessButton";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function ProductForm() {
  //state
  const [newProductName, setNewProductName] = useState("");
  const { menu, setMenu } = useContext(OrderContext)
 
  //behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    //copie du state
    const menuCopy = [...menu]
    //manipulation de la copie du state
    const id = new Date().getTime()
    const name = "newProductName"
    const url = "public\images\coming-soon.png"
    const price = 2
    const productToAdd = {id, name, url, price}
    menuCopy.push(productToAdd)
    //modifier le state avec le setter
    setMenu(menuCopy)
    setNewProductName("")
  }

  //render
  return (
    <ProductFormStyled action="submit" onSubmit={handleSubmit}>
        <Image/>
        <Inputs 
          
        />
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
