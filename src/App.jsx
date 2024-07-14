import { useState } from "react"
import LoginPage from "./components/pages/LoginPage"

function App() {
  //States
  const [firstname, setFirstname] = useState("")

  //Comportements
  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Bonjour " + firstname)
    setFirstname("")
  }

  //Render
  return (
    <div>
      <LoginPage/>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={firstname} 
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

export default App
