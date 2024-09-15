import React, { useContext, useState } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
import { find } from "../../../../../utils/array";
import OrderContext from "../../../../../context/OrderContext";
import { checkIfProductIsClicked } from "../menu/helper";

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
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = find(basketProduct.id, menu);
        return (
          <div className="basket-card" key={basketProduct.id}>
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
        );
      })}
    </BasketProductsStyled>
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
