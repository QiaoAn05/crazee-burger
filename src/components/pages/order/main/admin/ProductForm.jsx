import styled from "styled-components";
import Image from "./Image";
import Inputs from "./Inputs";
import SuccessButton from "../../../../reusable-ui/SuccessButton";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function ProductForm() {
  //state
  const [newProductName, setNewProductName] = useState("");
  const [newProductUrl, setNewProductUrl] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const { menu, setMenu } = useContext(OrderContext)

  //behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    //copie du state
    const menuCopy = [...menu]
    //manipulation de la copie du state
    const id = new Date().getTime()
    const title = newProductName
    const imageSource = "/public/images/coming-soon.png"
    const price = newProductPrice
    const productToAdd = {id, title, imageSource, price}
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
          newProductName={newProductName}
          setNewProductName={setNewProductName}
          newProductUrl={newProductUrl}
          setNewProductUrl={setNewProductUrl}
          newProductPrice={newProductPrice}
          setNewProductPrice={setNewProductPrice}
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
