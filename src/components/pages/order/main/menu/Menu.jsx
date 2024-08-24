import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  //state
  const {
    menu,
    isAdminMode,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);

  //behavior

  const handleClick = async (idProductClicked) => {
    if (!isAdminMode) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleProductDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

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
          onDelete={(e) => handleProductDelete(e, id)}
          onClick={() => handleClick(id)}
          isHoverable={isAdminMode}
          isSelected={checkIfProductIsClicked(id, productSelected.id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
