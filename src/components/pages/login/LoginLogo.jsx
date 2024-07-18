import styled from 'styled-components';
import { theme } from '../../../theme';

export default function LoginLogo() {
  return (
    <LoginLogoStyled>
        <p>CRAZEE</p>
        <img src="src\assets\images\F03 logo-orange.png" alt="" />
        <p>BURGER</p>
    </LoginLogoStyled>
  )
}


const LoginLogoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
        color: #FFA01B;
        font-size: 110px;
        font-family: "Amatic SC", sans-serif;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-align: center;
    }

    img {
        width: 200px;
        height: 150px;
    }
`;
