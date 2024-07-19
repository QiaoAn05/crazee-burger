import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5";
import styled from 'styled-components';
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";


export default function LoginForm() {
    //States
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  //Comportements
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }
  //Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput 
        value={inputValue} 
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
      Label="Accéder à mon espace"
      Icon={<IoChevronForward className="btn-icon"/>}
      />
      
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 40px ${theme.spacing.lg};
border-radius: ${theme.borderRadius.round};
font-family: "Amatic SC", cursive;

hr {
  border: 1.5px solid ${theme.colors.loginLine};
  margin-bottom: ${theme.gridUnit *5}px;
}

h1 {
  color: ${theme.colors.white};
  font-size: ${theme.fonts.sizes.P5};
}

h2 {
  color: ${theme.colors.white};
  margin: 20px 10px 10px;
  font-size: ${theme.fonts.sizes.P4};
}
`;
