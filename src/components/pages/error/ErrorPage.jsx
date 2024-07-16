import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button>Retourner à la page d'accueil</button>
    </div>
  );
}