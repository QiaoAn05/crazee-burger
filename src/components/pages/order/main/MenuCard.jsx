import styled from "styled-components";

export default function MenuCard() {
  return (
    <MenuCardStyled className="card">
        <img src="" alt="image de la card" />
        <div className="card-infos">
            <h3>Name of the card</h3>
            <div className="card-description">
                <p>15,00 €</p>
                <button>Ajouter</button>
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
    .card-infos {
        background-color: green;
        width: 200px;
        height: 105px;
        margin: 20px 20px 10px 20px;
        display: grid;
        /* line-height: 0; */
        h3 {
            font-family: "Amatic SC", sans-serif;
            font-size: 36px;
            margin: 0;
        }
        .card-description {
            background-color: blue;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: repeat(2, 1fr);
            p {
                color: orange;
            }
            button {
            margin: 10px;
            }
        }
    }
`;