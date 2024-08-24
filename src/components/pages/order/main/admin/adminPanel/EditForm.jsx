import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target;
    const beingUpdateProduct = { ...productSelected, [name]: value };
    setProductSelected(beingUpdateProduct);
    handleEdit(beingUpdateProduct);
  };

  //affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
