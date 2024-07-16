
export default function OrderPage() {
    //state
    //comportements
    const handleClick = () => {
         window.location.href = "/"
    }
    //affichage
  return (
    <div>
        <h1>Bonjour Bob</h1>
        <button onClick={handleClick}>Déconnexion</button>
    </div>
  )
}
