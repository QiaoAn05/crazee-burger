import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5";
import styled from 'styled-components';
import Input from "./Input";
import { BsPersonCircle } from "react-icons/bs";


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
    <Input 
      value={inputValue} 
      onChange={handleChange}
      placeholder="Entrez votre prénom"
      required
      Icon={<BsPersonCircle className="icon" />}
    />
   
      <button>
        <span>
          Accéder à mon espace
        </span>
        <IoChevronForward className="icon"/>
      </button>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 2.5rem 2rem;
border-radius: 5px;
font-family: "Amatic SC", cursive;

hr {
  border: 1.5px solid #f56a2c;
  margin-bottom: 40px;
}

h1 {
  color: white;
  font-size: 48px;
}

h2 {
  color: #8e8b8b;
  margin: 20px 10px 10px;
  font-size: 36px;
}



button {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  gap: 10px;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  &:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    cursor: pointer;
  }
}

`;
