import LoginForm from "./LoginForm"
import styled from 'styled-components';
import LoginLogo from "./LoginLogo";

export default function LoginPage() {
  //Affichage
  return (
    <LoginPageStyled>
      <div className="black-filter">
        <LoginLogo/>
        <LoginForm/>
      </div>
    </LoginPageStyled>
  )
}


const LoginPageStyled = styled.div`
  width: 100%;
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

  }
`;