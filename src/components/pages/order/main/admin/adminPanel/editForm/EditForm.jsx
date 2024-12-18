import { useState } from "react";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useOrderContext } from "../../../../../../../context/OrderContext";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import Form from "../Form/Form";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import { useParams } from "react-router-dom";

export default function EditForm() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useOrderContext();

  const { username } = useParams();

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  // comportements
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Garder la valeur telle qu'elle est pendant la saisie pour une expérience utilisateur fluide
    const beingUpdateProduct = { ...productSelected, [name]: value };
    setProductSelected(beingUpdateProduct); // mettre à jour le formulaire sans conversion immédiate
  };

  const handleOnFocus = (e) => {
    setValueOnFocus(e.target.value);
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;

    // Appliquer la conversion seulement sur le champ prix au moment du blur
    if (name === "price") {
      const valueToUpdate = replaceFrenchCommaWithDot(value);
      const beingUpdateProduct = { ...productSelected, [name]: valueToUpdate };

      setProductSelected(beingUpdateProduct);
      handleEdit(beingUpdateProduct, username); // Mettre à jour avec le prix corrigé
    } else {
      handleEdit(productSelected, username); // Mettre à jour sans conversion pour les autres champs
    }

    if (valueOnFocus !== value) {
      displaySuccessMessage();
    }
  };

  // affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={(e) => handleOnFocus(e)}
      onBlur={(e) => handleOnBlur(e)}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
