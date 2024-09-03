import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/product";
import { find, isEmpty } from "../../../../../utils/array";

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
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);

  //behavior

  const handleClick = async (idProductClicked) => {
    if (!isAdminMode) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = find(idProductClicked, menu);
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleProductDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDeleteBasketProduct(idProductToDelete);
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    // const productToAdd = find(idProductToAdd, menu);
    handleAddToBasket(idProductToAdd);
  };

  //Render

  if (isEmpty(menu)) {
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
          onAdd={(e) => handleAddButton(e, id)}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.section`
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
