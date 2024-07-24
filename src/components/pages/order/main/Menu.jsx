import styled from "styled-components";
import MenuCard from "./MenuCard";
import { useState } from "react";
import {fakeMenu1, fakeMenu2} from "../../../../fakeData/fakeMenu"

export default function Menu() {
  //state
  const [menu, setMenu] = useState(fakeMenu2)
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 40px 30px;
  padding: 50px 50px 50px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;