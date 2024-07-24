import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Product({title, imageSource, price}) {
    const roundedPrice = Number(price.toFixed(2));
    
  return (
    <ProductStyled>
        <img src={imageSource} alt="image de la card" />
        <div className="card-content">
            <p className="title">{title}</p>
            <div className="card-description">
                <p>{roundedPrice} €</p>
                <PrimaryButton Label="Ajouter"/>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 15px;
    display: grid;
    grid-template-rows: 65% 1fr;
    /* display: flex;
    flex-direction: column; */
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    padding-bottom: 10px;

    img {
        height: 145px;
        width: 100%;
        object-fit: contain;
        margin-top: 30px;
        /* margin: 50px 20px 0 20px; */
    }
    .card-content {
        width: 200px;
        height: 105px;
        /* margin: 20px 20px 10px 20px; */
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