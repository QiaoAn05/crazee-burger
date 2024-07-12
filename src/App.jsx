import { useState } from "react"

function App() {
  //States
 const [prenom, setPrenom] =  useState("Johan")
 const [count, setCount] = useState(1)
 
  //Comportements

  const handleClick = () => {
    setCount(count+1)
  }

  //Render
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  )
}

export default App
