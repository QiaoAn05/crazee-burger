import styled, { css } from "styled-components";
import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";
import { fadeInFromRight, fadeInFromTop } from "../../../../theme/animations";

export default function Product({
  title,
  imageSource,
  price,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  onSubstract,
  isOverlapImageSource,
  isOverlapImageVisible,
  quantity,
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

        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img
                className="overlap-image"
                src={isOverlapImageSource}
                alt="overlap image"
              />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>

        <div className="card-content">
          <p className="title">{title}</p>
          <div className="card-description">
            <p className="price">{formatPrice(price)}</p>
            <div className="button-container">
              <Button
                Label="-"
                version="primary"
                OnClick={onSubstract}
                disabled={isOverlapImageVisible}
                className="decrease"
              />
              <span className="quantity">{quantity}</span>
              <Button
                Label="+"
                version="primary"
                OnClick={onAdd}
                disabled={isOverlapImageVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle};
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
      z-index: 1;
      padding: 0;
      border: none;
      background: none;
      animation: ${fadeInFromRight} ${theme.animations.speed.slow} ease-out;

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

    .overlap {
      .overlap-image {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 80%;
        height: 100%;
        /* z-index: 1; */
        animation: ${fadeInFromTop} 500ms;
        border-radius: ${theme.borderRadius.extraRound};
        margin-top: -30px;
      }

      .transparent-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 70%;
        background-color: snow;
        /* z-index: 1; */
        border-radius: ${theme.borderRadius.extraRound};
      }
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
        .button-container {
          display: flex;
          height: 100%;

          button {
            /* width: fit-content; */
            /* padding: 12px 26px; old values*/
            width: 30px;
            padding: 12px 16px;
            border-radius: ${theme.borderRadius.round} 0 0
              ${theme.borderRadius.round};
            &:active {
              background-color: ${theme.colors.primary};
              color: ${theme.colors.white};
            }
          }

          button:first-child {
            border-radius: ${theme.borderRadius.round} 0 0
              ${theme.borderRadius.round};
          }
          button:last-child {
            border-radius: 0 ${theme.borderRadius.round}
              ${theme.borderRadius.round} 0;
          }
          .quantity {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
          }
        }
      }
    }
    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
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

      .button-container {
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
      }
    }
  }
`;
