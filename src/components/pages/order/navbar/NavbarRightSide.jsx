import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "../Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
        {/* <div className="admin-button">Admin Button</div> */}
        <Profile username={username}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
`;
