import styled, { css } from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import * as theme from "../../../../../../theme";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";
import { fadeInFromRight } from "../../../../../../theme/animations";

type BasketCardProps = {
  title: string,
  price: string,
  quantity: number,
  imageSource: string,
  className?: string,
  isClickable?: boolean,
  onDelete?: React.MouseEventHandler<HTMLDivElement>,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  isSelected?: boolean,
}

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  className,
  isClickable,
  onDelete,
  onClick,
  isSelected,
}: BasketCardProps) {
  return (
    <BasketCardStyled
      className={className}
      $isClickable={isClickable}
      onClick={onClick}
      $isSelected={isSelected}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <CasinoEffect count={`x ${quantity}`} />
        </div>
      </div>
    </BasketCardStyled>
  );
}

type BasketCardStyledProps = {
  $isClickable?: boolean,
  $isSelected?: boolean
}

const BasketCardStyled = styled.div<BasketCardStyledProps>`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.theme.borderRadius.round};
  background: ${theme.theme.colors.background_white};
  box-shadow: ${theme.theme.shadows.cardBasket};
  color: black;

  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.theme.fonts.sizes.P0};
    color: ${theme.theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;
      .title {
        display: flex;
        align-items: center;
        font-family: ${theme.theme.fonts.family.stylish};
        font-size: ${theme.theme.fonts.sizes.P3};
        line-height: 32px;
        font-weight: ${theme.theme.fonts.weights.bold};
        color: ${theme.theme.colors.dark};
        /* sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span : https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work#:~:text=If%20your%20text%2Doverflow%20is,Grid%20or%20on%20a%20Table. */
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${theme.theme.fonts.sizes.SM};
        font-weight: ${theme.theme.fonts.weights.medium};
        font-family: 'Open Sans';
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${theme.theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${theme.theme.fonts.sizes.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
    animation: ${fadeInFromRight} ${theme.theme.animations.speed.quick} ease-out;
  }

  /* hover de la card */
  &:hover {
    .delete-button {
      /* border: 1px solid red; */
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.theme.borderRadius.round};
      border-bottom-right-radius: ${theme.theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.theme.colors.red};
      color: ${theme.theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.theme.fonts.sizes.P3};
        height: ${theme.theme.fonts.sizes.P3};
      }

      /* behavior on delete-button hover */
      &:hover {
        .icon {
          color: ${theme.theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.theme.colors.white};
          }
        }
      }
    }
  }
  ${({ $isClickable, $isSelected }) =>
    $isClickable && $isSelected && basketProductSelectedStyle}
`;

const basketProductSelectedStyle = css`
  background: ${theme.theme.colors.primary};

  .price,
  .quantity {
    color: white;
  }
`;
