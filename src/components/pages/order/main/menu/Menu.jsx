import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  //state
  const { menu, isAdminMode, handleDelete, resetMenu } =
    useContext(OrderContext);

  //behavior

  //Render

  if (menu.length === 0) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Product
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          price={price}
          hasDeleteButton={isAdminMode}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px 30px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
`;