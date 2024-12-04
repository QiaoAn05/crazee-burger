import React from "react";
import Button from "../../../../reusable-ui/Button";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";

export default function QuantityControl({
  onLeftClick,
  onRightClick,
  disabled,
  quantity,
  isSelected,
}) {
  return (
    <QuantityControlStyled $isSelected={isSelected}>
      <Button
        label="-"
        version="primary"
        onClick={onLeftClick}
        disabled={disabled}
        className="decrease"
      />
      <span className="quantity">{quantity}</span>
      <Button
        label="+"
        version="primary"
        onClick={onRightClick}
        disabled={disabled}
      />
    </QuantityControlStyled>
  );
}

const QuantityControlStyled = styled.div`
  display: flex;
  height: 100%;

  button {
    /* width: fit-content; */
    /* padding: 12px 26px; old values*/
    width: 30px;
    padding: 12px 16px;
    border-radius: ${theme.borderRadius.round} 0 0 ${theme.borderRadius.round};
    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }

  button:first-child {
    border-radius: ${theme.borderRadius.round} 0 0 ${theme.borderRadius.round};
  }
  button:last-child {
    border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0;
  }
  .quantity {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
  ${({ $isSelected }) => $isSelected && selectedStyle}
`;

const selectedStyle = css`
  button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: ${theme.colors.white};
      transition: all 200ms ease-out;
      margin: 0;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
  .quantity {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
`;
