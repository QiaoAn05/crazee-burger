import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import {formatPrice} from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";

export default function Product({productInfo, title, imageSource, price, onProductDelete}) {
    
  return (
    <ProductStyled>
        {/* <button className="btn-delete" onClick={()=>onProductDelete()}> */}
            <TiDelete onClick={()=>onProductDelete(productInfo.id)} className="icon"/>
        {/* </button> */}
        <img src={imageSource} alt={title} />
        <div className="card-content">
            <p className="title">{title}</p>
            <div className="card-description">
                <p>{formatPrice(price)}</p>
                <PrimaryButton Label="Ajouter"/>
            </div>
        </div>
    </ProductStyled>
  )
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
    position: relative; //permet d'ajouter une position absolute à l'icone pour supprimer

    .icon {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 15px;
        top:15px;
        width: 30px;
        height: 30px;
        color: ${theme.colors.primary};
        &:hover {
            cursor: pointer;
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