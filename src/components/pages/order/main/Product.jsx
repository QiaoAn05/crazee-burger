import styled, { css } from "styled-components";
import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";

export default function Product({
  title,
  imageSource,
  price,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
}) {
  return (
    <ProductStyled
      onClick={onClick}
      $isHoverable={isHoverable} //préfixer avec $ permet à styled-component de reconnaître le props utilisé pour le style
      $isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            onClick={onDelete}
            className="delete-button"
            aria-label="delete-button"
          >
            <TiDelete className="icon" />
          </button>
        )}

        <img src={imageSource} alt={title} />
        <div className="card-content">
          <p className="title">{title}</p>
          <div className="card-description">
            <p className="price">{formatPrice(price)}</p>
            <Button
              Label="Ajouter"
              version="primary"
              OnClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  /* ${({ isHoverable }) => isHoverable && hoverableStyle} */
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    display: grid;
    grid-template-rows: 65% 1fr;
    box-shadow: ${theme.shadows.medium};
    padding: 20px;
    position: relative; //permet d'ajouter une position absolute au bouton supprimer

    .delete-button {
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      /* z-index: 2; */
      padding: 0;
      border: none;
      background: none;

      .icon {
        height: 100%;
        width: 100%;
      }

      &:hover {
        color: ${theme.colors.red};
      }

      &:active {
        color: ${theme.colors.primary};
      }
    }

    img {
      height: 145px;
      width: 100%;
      object-fit: contain;
      margin-top: 30px;
    }
    .card-content {
      width: 200px;
      height: 105px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      .title {
        font-family: "Amatic SC", sans-serif;
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-description {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price {
          color: orange;
          margin: 0;
        }
        button {
          width: fit-content;
          padding: 12px 26px;
          &:active {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        }
      }
    }
    /* ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .delete-button {
    color: ${theme.colors.white};
    &:active {
      color: ${theme.colors.white};
    }
  }

  .card-content {
    .card-description {
      .price {
        color: ${theme.colors.white};
        color: white;
      }
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
    }
  }
  /* .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  } */
`;
