import React, { useContext, useState } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
import { find } from "../../../../../utils/array";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketProducts() {
  const {
    basket,
    isAdminMode,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (e, id) => {
    e.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  const handleOnClick = async (id) => {
    if (!isAdminMode) return;
    const basketProductClickedOn = find(id, basket);
    await setBasketProductSelected(basketProductClickedOn);
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
