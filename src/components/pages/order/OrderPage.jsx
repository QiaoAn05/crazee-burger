import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";
import AdminContext from "../../../context/AdminContext";
import { useState } from "react";

export default function OrderPage() {
    //state
    const { username } = useParams()
    const [isAdmin, setIsAdmin] = useState(false);
    const adminValue = {
      isAdmin,
      setIsAdmin,
    }
    //comportements
    //affichage
  return (
    <OrderPageStyled>
      <AdminContext.Provider value={adminValue}>  
        <div className="container">
          <Navbar username={username}/>
          <Main/>
        </div>   
      </AdminContext.Provider>
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
