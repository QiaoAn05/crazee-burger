import styled from "styled-components";
import Product from "../Product";
import { useContext } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";

export default function Menu() {
  //state
  const {
    username,
    menu,
    isAdminMode,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    // titleEditRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  //behavior
  const handleProductDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDeleteBasketProduct(idProductToDelete);
    handleDelete(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    // titleEditRef.current.focus();
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    handleAddToBasket(idProductToAdd);
  };

  //Render

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
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
          onClick={isAdminMode ? () => handleProductSelected(id) : null}
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
