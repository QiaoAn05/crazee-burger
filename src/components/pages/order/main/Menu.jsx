import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";
import { theme } from "../../../../theme";
import { FAKE_MENU } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(FAKE_MENU.LONG)
  //behavior
  //Render
  return (
    <MenuStyled>
      {menu.map(product => (
        <Product 
        key={product.id} 
        title={product.title}
        imageSource={product.imageSource}
        price={product.price}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 30px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;