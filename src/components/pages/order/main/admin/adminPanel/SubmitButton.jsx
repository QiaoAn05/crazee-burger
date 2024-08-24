import React from "react";
import Button from "../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        Label={"Ajouter un nouveau produit au menu"}
        className="submit-button"
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
