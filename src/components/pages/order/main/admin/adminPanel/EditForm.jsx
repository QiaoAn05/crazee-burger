import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";

export default function EditForm({ placeholder }) {
  const { inputComposantRef } = useContext(OrderContext);
  return (
    <div>
      <HintMessage />
      {/* <label htmlFor="input-composant">TextInput</label>
      <input
        ref={inputComposantRef}
        type="text"
        name="input-composant"
        placeholder={placeholder}
      /> */}
    </div>
  );
}
