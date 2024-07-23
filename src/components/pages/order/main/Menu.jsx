import styled from "styled-components";
import MenuCard from "./MenuCard";
import { useState } from "react";
import {fakeMenu1, fakeMenu2} from "../../../../data/fakeMenu"

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu1)
  //behavior
  //Render
  return (
    <MenuStyled>
      {menu.map(item => (
        <MenuCard key={item.id} item={item}/>
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
  background-color: cyan;
  
`;