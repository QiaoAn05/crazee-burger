import { useState } from "react"

export default function LoginPage() {
  //States
  const [inputValue, setInputValue] = useState("")

  //Comportements
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Bonjour " + inputValue)
    setInputValue("")
  }

  //Render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue} 
          onChange={handleChange} 
          type="text" 
          placeholder="Entrez votre prénom" 
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  )
}