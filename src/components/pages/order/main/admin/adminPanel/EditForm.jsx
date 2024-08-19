import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";

export default function EditForm({ placeholder }) {
  const { isBeingUpdate } = useContext(OrderContext);

  console.log("isBeingUpdate : ", isBeingUpdate);
  return (
    <div>
      {isBeingUpdate.length === 0 && <HintMessage />}
      {isBeingUpdate.map((product, id) => (
        <div key={id}>
          <input
            // ref={inputComposantRef}
            value={product.title}
            type="text"
            name="input-composant"
            placeholder={placeholder}
          />
          <input
            // ref={inputComposantRef}
            value={product.imageSource}
            type="text"
            name="input-composant"
            placeholder={placeholder}
          />
          <input
            // ref={inputComposantRef}
            value={product.price}
            type="text"
            name="input-composant"
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );
}
