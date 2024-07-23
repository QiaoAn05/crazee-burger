import styled from "styled-components";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <MenuStyled>
        <MenuCard/>
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
  background-color: cyan;
  
`;