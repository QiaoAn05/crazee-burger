import React from "react";
import { formatPrice } from "../../../../../../utils/maths";
import styled from "styled-components";

export default function Order({ imageSource, title, price, quantity }) {
  return (
    <OrderStyled>
      <img src={imageSource} alt={title} />
      <div className="order-info">
        <div className="title-price">
          <p className="title">{title}</p>
          <p className="price">{formatPrice(price)}</p>
        </div>
        <div className="aside">x {quantity}</div>
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  background-color: green;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  height: 86px;
  /* position: sticky;
  top: 0; */

  img {
    background-color: lightblue;
    height: 70px;
    width: 85.8px;
    object-fit: contain;
  }
  .order-info {
    background-color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    padding-right: 20px;
    padding-left: 20px;

    .title-price {
      width: 119.14px;
      height: 100%;
      background-color: blue;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        margin: 0;
      }
    }

    .aside {
      background-color: lightblue;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
