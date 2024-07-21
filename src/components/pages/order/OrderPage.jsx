import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";
import Main from "./Main";

export default function OrderPage() {
    //state
    const { username } = useParams()
    //comportements
    //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username}/>
        <Main/>
      </div>   
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 95vh;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
