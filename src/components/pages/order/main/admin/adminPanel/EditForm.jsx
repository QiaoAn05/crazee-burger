import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import HintMessage from "./HintMessage";

export default function EditForm() {
  const { productSelected } = useContext(OrderContext);

  return (
    <div>
      <HintMessage />
      {productSelected && (
        <div>
          <input type="text" value={productSelected.title} />
          <input type="text" value={productSelected.imageSource} />
          <input type="text" value={productSelected.price} />
        </div>
      )}
    </div>
  );
}
