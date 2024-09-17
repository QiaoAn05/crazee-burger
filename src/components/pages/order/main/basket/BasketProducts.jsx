import React, { useContext, useState } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
import { find } from "../../../../../utils/array";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
  const {
    username,
    basket,
    isAdminMode,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled} // Replace BasketProductsStyled to remove useless div
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        const menuProduct = find(basketProduct.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"abricot"}
            key={basketProduct.id}
            timeout={{ enter: 500, exit: 500 }}
          >
            <div className="basket-card">
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : DEFAULT_IMAGE
                }
                quantity={basketProduct.quantity}
                isClickable={isAdminMode}
                onDelete={(e) => handleOnDelete(e, basketProduct.id)}
                onClick={
                  isAdminMode
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: initial;
  }

  .abricot-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .abricot-appear-active {
    transition: 0.5s;
    transform: translateX(0);
    opacity: 100%;
  }

  .abricot-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .abricot-enter-active {
    transition: 0.5s;
    transform: translateX(0);
    opacity: 100%;
  }

  .abricot-exit {
    transform: translateX(0);
    opacity: 100%;
  }
  .abricot-exit-active {
    transition: 0.5s;
    transform: translateX(-100px);
    opacity: 0%;
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;

    &:first-child {
      margin-top: 20px;
    }

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
