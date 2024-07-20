import { Link } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
        <Link to='/'>
            <Logo />
        </Link>
        <div className="right-nav">
            <div className="infos-user">
                <p>Hey, <span>{username}</span></p>
                <Link to='/'>
                    <a>Se déconnecter</a>
                </Link>
            </div>
            <BsPersonCircle className="icon" />
        </div>
    </NavbarStyled>  )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.background_white};
    padding: 20px;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

    .right-nav {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-right: 50px;
        .icon {
            transform: scale(2);
            color: ${theme.colors.greyDark};
            
        }

        .infos-user{
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                color: ${theme.colors.greyDark};
                line-height: 0;
            }
    
            span {
                color: ${theme.colors.primary};
            }
    
            a {
                color: ${theme.colors.greyDark};
                text-decoration: none;
                font-size: ${theme.fonts.sizes.XS};
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .logo {
        transform: scale(1);
    }
   
`;