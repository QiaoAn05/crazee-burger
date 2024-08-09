import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";

export default function Inputs() {
  //State
  const [inputValueName, setInputValueName] = useState("")
  const [inputValueUrl, setInputValueUrl] = useState("")
  const [inputValuePrice, setInputValuePrice] = useState("")

  //Comportements
  const handleChangeName = (e) => {
    setInputValueName(e.target.value)
  }
  const handleChangeUrl = (e) => {
    setInputValueUrl(e.target.value)
  }
  const handleChangePrice = (e) => {
    setInputValuePrice(e.target.value)
  }

  //Affichage
  return (
    <InputsStyled>
        <TextInput 
        placeholder="Nom du produit (ex: Super Burger)" 
        value={inputValueName} 
        onChange={handleChangeName}
        Icon={<FaHamburger className="icon"/>}
        />
        <TextInput 
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
        value={inputValueUrl} 
        onChange={handleChangeUrl} 
        Icon={<BsFillCameraFill className="icon"/>}
        />
        <TextInput 
        placeholder="Prix" 
        value={inputValuePrice} 
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

  & > * {
    margin: 0;
    padding: 10px 20px;
  }
`;