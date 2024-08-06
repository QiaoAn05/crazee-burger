import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Profile() {
  const { username } = useParams()

  return (
    <ProfileStyled>
        <div className="info">
            <p>Hey, <b>{username}</b></p>
            <Link to='/'>
            <div className="description">
                <small>Se déconnecter</small>
            </div>
            </Link>
        </div>
        <div className="picture">
            <BsPersonCircle className="picture" />
        </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-right: 50px;
  
  .info {
    text-align: right;
    margin-right: 10px;
    p {
        margin: 0;
        color: ${theme.colors.greyBlue};
        b {
            color: ${theme.colors.primary};
        }
    }
    a {
        text-decoration: none;
        .description {
            &:hover {
                text-decoration: underline;
                color: ${theme.colors.greyBlue};
            }
            small {
                font-size: ${theme.fonts.sizes.XXS};
                color: ${theme.colors.greyBlue};
                font-weight: ${theme.fonts.weights.medium};
                text-decoration: none;
                position: relative;
                bottom: 2px;
            }
        }
    }
  }

  .picture {
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.sizes.P4};
    color: ${theme.colors.greyBlue};
  }
`;