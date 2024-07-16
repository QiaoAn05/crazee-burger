import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginForm() {
    //States
  const [inputValue, setInputValue] = useState("")

  //Comportements
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
    window.location.href = "order"
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
        placeholder="Entrez votre prénom..." 
        required
      />
      <button>Accédez à votre espace</button>
      <Link to='order'>Aller vers order</Link>
    </form>
  )
}
