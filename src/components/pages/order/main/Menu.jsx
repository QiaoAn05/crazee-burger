import styled from "styled-components";
import Product from "./Product";
import { useContext, useState } from "react";
import { theme } from "../../../../theme";
import { FAKE_MENU } from "../../../../fakeData/fakeMenu";
// import PanelAdmin from "./PanelAdmin";
// import AdminContext from "../../../../context/AdminContext";

export default function Menu() {
  //state
  const [menu, setMenu] = useState(FAKE_MENU.LONG)
  // const { isAdmin, setIsAdmin } = useContext(AdminContext);

  //behavior
  //Render
  return (
    <MenuStyled>
      <div className="product">
        {menu.map(product => (
          <Product 
          key={product.id} 
          title={product.title}
          imageSource={product.imageSource}
          price={product.price}
          />
        ))}
      </div>
      {/* {isAdmin && <PanelAdmin/>} */}
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
background-color: ${theme.colors.background_white};
  .product {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px 30px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  }
`;