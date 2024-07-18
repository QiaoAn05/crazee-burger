import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <h2>Connectez-vous</h2>
      <input
        value={inputValue} 
        onChange={handleChange} 
        type="text" 
        placeholder="Entrez votre prénom" 
        required
      />
      <button>Accéder à mon espace</button>
    </form>
  )
}
