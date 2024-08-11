import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";

export default function Inputs({ newProductName, setNewProductName, newProductUrl, setNewProductUrl, newProductPrice, setNewProductPrice }) {
  //State
  // const [inputValueName, setInputValueName] = useState("")
  // const [inputValueUrl, setInputValueUrl] = useState("")
  // const [inputValuePrice, setInputValuePrice] = useState("")

  //Comportements
  const handleChangeName = (e) => {
    setNewProductName(e.target.value)
  }
  const handleChangeUrl = (e) => {
    setNewProductUrl(e.target.value)
  }
  const handleChangePrice = (e) => {
    setNewProductPrice(e.target.value)
  }

  //Affichage
  return (
    <InputsStyled>
        <TextInput 
        placeholder="Nom du produit (ex: Super Burger)" 
        value={newProductName} 
        onChange={handleChangeName}
        Icon={<FaHamburger className="icon"/>}
        />
        <TextInput 
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
        value={newProductUrl} 
        onChange={handleChangeUrl} 
        Icon={<BsFillCameraFill className="icon"/>}
        />
        <TextInput 
        placeholder="Prix" 
        value={newProductPrice} 
        onChange={handleChangePrice}
        Icon={<MdOutlineEuro className="icon"/>}
        />
    </InputsStyled>
  )
}

const InputsStyled = styled.div`
  background-color: #762828;
  display: grid;
  gap: 10px;
  grid-column: span 3;

  & > * {
    margin: 0;
    padding: 10px 20px;
  }
`;