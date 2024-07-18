import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";


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
    <div className="input">
      <BsPersonCircle />
      <input
        value={inputValue} 
        onChange={handleChange} 
        type="text" 
        placeholder="Entrez votre prénom" 
        required
      />
    </div>
      <button>Accéder à mon espace <HiOutlineChevronRight />
      </button>
    </LoginFormStyled>
  )
}

import styled from 'styled-components';
import { theme } from "../../../theme"

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${theme.fonts.P5};
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }

  hr {
    width: 400px;
    height: 3px;
    border: 1px solid #F56A2C;
    background-color: #F56A2C;
  }

  .input {
    display: flex;
    align-items: center;
    gap: 14px;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    width: 352px;
    padding: 18px 24px;
    color: ${theme.colors.greyDark};
    margin-bottom: 10px;
  }
  input {
    border: none;
    color: ${theme.colors.greyLight}
    
  }
  input:focus {
    border: none;
    outline: none;
    color: ${theme.colors.dark};
  }

  button {
    padding: 18px 24px;
    gap: 10px;
    width: 400px;
    border-radius: 5px;
    font-family: "Open Sans";
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`;
