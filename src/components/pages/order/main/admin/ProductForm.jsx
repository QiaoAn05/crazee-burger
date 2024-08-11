import styled from "styled-components";
import Image from "./Image";
import Inputs from "./Inputs";
import SuccessButton from "../../../../reusable-ui/SuccessButton";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../theme";

export default function ProductForm() {
  //state
  const [newProductName, setNewProductName] = useState("");
  const [newProductUrl, setNewProductUrl] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const { menu, setMenu } = useContext(OrderContext)
  const [ isSuccessfull, setIsSuccessfull ] = useState(false)

  //behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    //copie du state
    const menuCopy = [...menu]
    //manipulation de la copie du state
    const id = new Date().getTime()
    const title = newProductName
    const imageSource = "/images/coming-soon.png"
    const price = newProductPrice
    const productToAdd = {id, title, imageSource, price}
    menuCopy.push(productToAdd)
    //modifier le state avec le setter
    setMenu(menuCopy)
    setNewProductName("")
    setIsSuccessfull(true)
    setTimeout(() => {
      setIsSuccessfull(false);
    }, 2000);
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
        {isSuccessfull &&
          <span className="success-message"><FiCheck className="check-icon"/>Ajouté avec succès !</span>
        }
    </ProductFormStyled>
  )
}

const ProductFormStyled = styled.form`
  background-color: purple;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3fr 1fr;
  padding-left: 71px;
  padding-top: 31px;
  width: 880px;
  column-gap: 20px;
  row-gap: 10px;

  &>:nth-child(3) {
    grid-column: 2/2;
    padding: 10px 20px;
  }

  .success-message {
    display: flex;
    align-items: center;
    gap: 10px;
    grid-column: span 2;
    color: ${theme.colors.success};
    .check-icon {
      border: 1px solid ${theme.colors.success};
      border-radius: 50%;
    }
  }
`;
