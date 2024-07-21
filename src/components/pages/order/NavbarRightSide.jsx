import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
        <div className="infos-user">
            <p>Hey, <span>{username}</span></p>
            <Link to='/'>
                <a>Se déconnecter</a>
            </Link>
        </div>
        <BsPersonCircle className="icon" />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    background-color: purple;
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
`;
