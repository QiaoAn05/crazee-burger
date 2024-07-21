import { Link } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import styled from "styled-components";

import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
        <Link to='/' className="link">
            <Logo />
        </Link>  
        <NavbarRightSide username={ username }/>    
    </NavbarStyled>  )
}

const NavbarStyled = styled.nav`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: ${theme.colors.background_white}; */
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

    .left-side {
        background-color: pink;
       .link {
            text-decoration: none;
        } 
    }

    
   
`;