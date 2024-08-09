import styled from "styled-components";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export default function Inputs() {
  return (
    <InputsStyled>
        <TextInput 
        placeholder="Nom du produit (ex: Super Burger)" 
        value="" 
        onChange="handleChange" 
        Icon={<FaHamburger className="icon"/>}
        />
        <TextInput 
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
        value="" 
        onChange="handleChange" 
        Icon={<BsFillCameraFill className="icon"/>}
        />
        <TextInput 
        placeholder="Prix" 
        value="" 
        onChange="handleChange" 
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