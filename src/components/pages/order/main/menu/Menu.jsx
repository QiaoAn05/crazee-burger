import styled from "styled-components";
import Product from "../Product";
import { useContext, useRef } from "react";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {
  DEFAULT_IMAGE,
  EMPTY_PRODUCT,
  IMAGE_NO_STOCK,
} from "../../../../../enums/product";
import { isEmpty } from "../../../../../utils/array";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../utils/string";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";

export default function Menu() {
  //state
  const nodeRef = useRef(null);
  const {
    username,
    menu,
    isAdminMode,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  //behavior
  const handleProductDelete = (e, idProductToDelete) => {
    e.stopPropagation();
    handleDeleteBasketProduct(idProductToDelete, username);
    handleDelete(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  let cardContainerClassName = isAdminMode
    ? "card-container is-hoverable"
    : "card-container";

  //Render

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isAdminMode) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }
  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          return (
            <CSSTransition
              nodeRef={nodeRef}
              classNames={"menu-animation"}
              key={id}
              timeout={300}
            >
              <div ref={nodeRef} className={cardContainerClassName}>
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
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
                  isOverlapImageSource={IMAGE_NO_STOCK}
                  isOverlapImageVisible={
                    convertStringToBoolean(isAvailable) === false
                  }
                />
              </div>
            </CSSTransition>
          );
        }
      )}
    </TransitionGroup>
  );
}

const MenuStyled = styled.section`
  background-color: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }
  .ribbon {
    z-index: 1;
  }

  ${ribbonAnimation}
`;
