import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  //state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target;
    const beingUpdateProduct = { ...productSelected, [name]: value };
    setProductSelected(beingUpdateProduct); //cette ligne update le formulaire
    handleEdit(beingUpdateProduct, username); //cette ligne update le menu
  };

  const handleOnFocus = (e) => {
    setValueOnFocus(e.target.value);
  };

  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;

    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  //affichage
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
