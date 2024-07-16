import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    //state
  const error = useRouteError();
  console.error(error);
    //comportement

    //affichage
  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <Link to='/'>
        <button>Retourner à la page d'accueil</button>
      </Link>
    </div>
  );
}