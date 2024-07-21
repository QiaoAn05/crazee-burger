import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import styled from "styled-components";

import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../utils/window";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
        <Logo className="logo-order-page" onClick={refreshPage} />
        <NavbarRightSide username={ username }/>    
    </NavbarStyled>  )
}

const NavbarStyled = styled.nav`

    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background_white};
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
   
   .logo-order-page {
    cursor: pointer;
   }
`;