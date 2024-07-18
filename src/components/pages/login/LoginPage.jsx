import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //Affichage
  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm/>
    </LoginPageStyled>
  )
}


const LoginPageStyled = styled.div`
background-color: red;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  /* width: 100%;
  height: 100vh;
  background-image: url("src/assets/images/F03 burger-background.jpg");
  background-size: cover;


  .black-filter {
    background-color: rgba(0, 0, 0, 0.25);
    height: 100vh;
    width: 100%;

    h1, h2 {
      color: white;
    }

  } */
`;