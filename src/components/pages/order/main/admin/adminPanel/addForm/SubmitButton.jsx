import React from "react";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../../../../reusable-ui/Button";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        label={"Ajouter un nouveau produit au menu"}
        className="submit-button"
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
