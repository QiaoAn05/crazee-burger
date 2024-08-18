import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function EditForm({ placeholder }) {
  const { inputComposantRef } = useContext(OrderContext);
  return (
    <div>
      {/* <span>Cliquer sur un produit du menu pour le modifier</span> */}
      <label htmlFor="input-composant">TextInput</label>
      <input
        ref={inputComposantRef}
        type="text"
        name="input-composant"
        placeholder={placeholder}
      />
    </div>
  );
}
