import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function OrderPage() {
    //state
    const { username } = useParams()
    //comportements
    //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <div>
            logo
          </div>
          <div>
            <h1>Bonjour {username}</h1>
            <Link to='/'>
                <button>Déconnexion</button>
            </Link>
          </div>
        </nav>
        <div className="main"></div>
      </div>   
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  padding: 24px 56px;
  /* height: calc(-48px +100vh); */
  .container {
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background_white};
    max-width: 1400px;
    height: 100vh;
    border-radius: ${theme.borderRadius.extraRound};
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      background-color: purple;
      padding: 20px;
      border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    }
    .main {
      background-color: #b564d7;
      width: 100%;
      flex-grow: 1;
      box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    }
  }
`;
