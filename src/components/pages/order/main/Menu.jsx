import styled from "styled-components";
import Product from "./Product";
import { useContext } from "react";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  //state
  const { menu } = useContext(OrderContext);

  //behavior
  // const handleDelete = (id) => {
  //   //copie du state
  //   const productCopy = [...menu];
  //   //manipulation de la copie du state
  //   const productCopyUpdated = productCopy.filter(
  //     (product) => product.id !== id
  //   );
  //   //modifier le state
  //   setMenu(productCopyUpdated);
  // };
  // const handleReset = () => {
  //   setMenu(fakeMenu.SMALL);
  // };

  //Render
  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => (
        <Product
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          price={price}
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
