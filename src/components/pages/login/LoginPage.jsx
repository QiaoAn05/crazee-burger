import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //Affichage
  return (
    <LoginPageStyled>
      <Logo className={ "logo-login-page" }/>
      <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background: url("/assets/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  //tips intégrateur:
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("")
  .logo-login-page {
    transform: scale(2.5);
  }
`;