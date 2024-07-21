import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";

export default function OrderPage() {
    //state
    const { username } = useParams()
    //comportements
    //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username}/>
        
        <div className="main"></div>
      </div>   
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  /* padding: 24px 56px; */
  /* height: calc(-48px +100vh); */
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background_white};
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
    
    .main {
      background-color: #b564d7;
      width: 100%;
      flex-grow: 1;
      box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    }
  }
`;
