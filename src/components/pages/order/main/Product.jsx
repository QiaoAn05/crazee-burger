import styled from "styled-components";
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
}) {
  return (
    <ProductStyled>
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
          <p>{formatPrice(price)}</p>
          <Button Label="Ajouter" version="primary" />
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  box-sizing: border-box;
  width: 240px;
  height: 330px;
  border-radius: 15px;
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
      p {
        color: orange;
        margin: 0;
      }
      button {
        width: fit-content;
        padding: 12px 26px;
      }
    }
  }
`;
