import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";

export default function EditForm({ placeholder }) {
  const { isBeingUpdate, setIsBeingUpdate } = useContext(OrderContext);

  const handleChange = (e) => {
    setIsBeingUpdate(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      {isBeingUpdate.length === 0 && <HintMessage />}
      {isBeingUpdate.map((product, id) => (
        <div key={id}>
          <input
            // ref={inputComposantRef}
            value={product.title}
            type="text"
            name="title"
            placeholder={placeholder}
            onChange={handleChange}
          />
          <input
            // ref={inputComposantRef}
            value={product.imageSource}
            type="text"
            name="imageSource"
            placeholder={placeholder}
          />
          <input
            // ref={inputComposantRef}
            value={product.price}
            type="text"
            name="price"
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );
}
