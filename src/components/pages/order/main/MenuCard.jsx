import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { IoChevronForward } from "react-icons/io5";

export default function MenuCard() {
  return (
    <MenuCardStyled className="card">
        <img src="" alt="image de la card" />
        <div className="card-content">
            <p className="title">Name of the card</p>
            <div className="card-description">
                <p>15,00 €</p>
                <PrimaryButton
                Label="Ajouter"
                />
            </div>
        </div>
    </MenuCardStyled>
  )
}

const MenuCardStyled = styled.div`
    background-color: pink;
    width: 240px;
    height: 330px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    img {
        background-color: yellow;
        height: 145px;
        width: 200px;
        margin: 50px 20px 0 20px;
    }
    .card-content {
        background-color: green;
        width: 200px;
        height: 105px;
        margin: 20px 20px 10px 20px;
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
            background-color: blue;
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