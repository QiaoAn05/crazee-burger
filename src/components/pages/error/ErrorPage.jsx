import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    //state
  const error = useRouteError();
  console.error(error);
    //comportement
    const handleClick = () => {
         window.location.href = "/"
    }

    //affichage
  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  );
}